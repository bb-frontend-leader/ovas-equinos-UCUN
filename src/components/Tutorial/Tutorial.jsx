import { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Portal } from 'UI-Components-books'
import { usePopper } from 'react-popper'

import css from './Tutorial.module.css'

const ITEM_LIST = [
  { id: 1, time: 1, target: 'link_menu' },
  { id: 2, time: 6, target: 'menu_roulette' },
  { id: 3, time: 17, target: 'stage_1_roulette' },
  { id: 4, time: 21, target: 'stage_2_roulette' },
  { id: 5, time: 26, target: 'stage_3_roulette' },
  { id: 6, time: 32, target: 'stage_4_roulette' },
  { id: 7, time: 37, target: 'stage_5_roulette' },
  { id: 8, time: 42, target: 'menu_roulette' },
  { id: 9, time: 47, target: 'options_roulette' }
]

export const Tutorial = ({ isOpen, onFinish }) => {
  const [activeItem, setactiveItem] = useState({})
  const beforeIsOpen = useRef(false)
  const refAudio = useRef()

  const disableMenuButtons = (state) => {
    const menuButtons = document.querySelectorAll('button[data-view="disable"]')
    menuButtons.forEach((button) => {
      button.disabled = state
    })
  }

  const onAudioTimeUpdate = (_) => {
    const currentItem = ITEM_LIST.find(
      ({ time }) => time === parseInt(refAudio.current?.currentTime ?? 0)
    )
    if (currentItem) setactiveItem(currentItem)
  }

  const onAudioPlay = () => {
    disableMenuButtons(true)
    refAudio.current.play()
  }

  const onAudioEnded = () => {
    if (onFinish) {
      onFinish(!isOpen)
    }
    beforeIsOpen.current = false
    disableMenuButtons(false)
  }

  /**
   * Efecto encargado de mostrar el componente
   * cuando la propiedad isOpen es true.
   */
  useEffect(() => {
    const activateNextItem = () => {
      setactiveItem((prev) => {
        if (Object.keys(prev).length === 0) {
          return ITEM_LIST[0]
        }

        const itemIndex = ITEM_LIST.findIndex(({ id }) => id === prev.id)
        return ITEM_LIST[itemIndex + 1] ?? prev
      })

      onAudioPlay()
    }

    if (isOpen) {
      beforeIsOpen.current = true
      activateNextItem()
    }

    if (!isOpen && beforeIsOpen.current) {
      disableMenuButtons(false)
    }

    return () => {
      setactiveItem({})
    }
  }, [isOpen])

  return isOpen
    ? (
      <Portal id='js-tutorial-component'>
        <audio
          ref={refAudio}
          preload='metadata'
          className='u-sr-only'
          onEnded={onAudioEnded}
          onTimeUpdate={onAudioTimeUpdate}
        >
          <source src='assets/audios/ova_tutorial.mp3' type='audio/mp3' />
        </audio>

        <TutorialHelpLayer isOpen={isOpen} target={activeItem?.target} />
        <TutorialHand isOpen={isOpen} target={activeItem?.target} />
      </Portal>
      )
    : null
}

const TutorialHand = ({ isOpen, target }) => {
  // Obtenemos la referencia del contenedor.
  const refContainer = useRef()

  // Hook para controlar el posicionamiento del TourElement con respecto a su elemento padre.
  const { styles, attributes } = usePopper(
    document.querySelector(`[data-tour="${target}"]`),
    refContainer.current,
    {
      placement: 'bottom',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 5]
          }
        },
        {
          name: 'computeStyles',
          options: {
            adaptive: false
          }
        },
        { name: 'eventListeners', enabled: isOpen }
      ]
    }
  )

  return (
    <div
      ref={refContainer}
      style={styles.popper}
      className={css.hand}
      {...attributes.popper}
    >
      <img
        src='assets/images/image_hand.png'
        alt='Imagen de una mano señalando a un elemento'
      />
    </div>
  )
}

const TutorialHelpLayer = ({ isOpen, target }) => {
  // Estado que almacena la posición del componente en el DOM.
  const [position, setPosition] = useState({})

  /**
   * Función que obtiene la posición del elemento en el DOM,
   * crea un objecto con eso valores y
   * actualiza el estado position.
   */
  const getPosition = () => {
    const {
      x: positionX,
      y: positionY,
      width: widthElement,
      height: heightElement
    } = document
      .querySelector(`[data-tour="${target}"]`)
      .getBoundingClientRect()

    setPosition({
      width: `${widthElement}px`,
      height: `${heightElement}px`,
      top: `${positionY}px`,
      left: `${positionX}px`
    })
  }

  /**
   * Efecto que se lanza cuando existe un elemento
   * al cual se le pueda obtener la posición en el DOM.
   */
  useEffect(() => {
    function setPositionToEmpty () {
      setPosition({})
    }

    if (target) {
      getPosition()
    }

    return setPositionToEmpty
  }, [target])

  /**
   * Efecto utilizado para agregar el evento
   * resize en el objeto global window.
   */
  useEffect(() => {
    if (!isOpen || !target) return

    const handleResize = (_) => {
      getPosition()
    }

    // Si isOpen está en true, agregamos el evento "resize".
    if (isOpen) window.addEventListener('resize', handleResize)

    return () => {
      // Eliminamos el evento "resize" del window al desmontar el componente.
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpen, target])

  return (
    <div
      className={`${css.helplayer} animate__animated animate__bounceIn animate__faster animate__delay-2s`}
      style={position}
    />
  )
}

Tutorial.propTypes = {
  isOpen: PropTypes.bool,
  onFinish: PropTypes.func.isRequired
}

TutorialHand.propTypes = {
  isOpen: PropTypes.bool,
  target: PropTypes.string
}

TutorialHelpLayer.propTypes = {
  isOpen: PropTypes.bool,
  target: PropTypes.string
}
