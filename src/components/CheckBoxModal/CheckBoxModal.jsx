import { useState, useContext, useRef } from 'react'
import PropTypes from 'prop-types'

import { Modal, ModalOverlay, ModalContent } from 'UI-Components-books'
import { CheckBoxGroupContext, ImageContainer } from '@components'

import css from './CheckBoxModal.module.css'

export const CheckBoxModal = ({
  children,
  id,
  name,
  state,
  label,
  value,
  points,
  addClass
}) => {
  // Estado utilizado para controlar si el input está checked.
  const [checked, setChecked] = useState(false)

  // Estado utilizado para controlar si el modal está abierto.
  const [isOpen, setIsOpen] = useState(false)

  // Obtenemos las diferentes propiedades del contexto superior.
  const {
    checkboxValues,
    activity: { validation }
  } = useContext(CheckBoxGroupContext)

  // Referencia del elemento checkbox.
  const checkboxRef = useRef()

  // Almacenamos el ID del setTimeout.
  const timeoutID = useRef()

  /**
   * Detecta cuando el input tiene un cambio y actualiza
   * tanto el estado como el valor pasado
   * a través de la propiedad onChange cuando
   * el input cambia.
   *
   * @param {HTMLInputElement} target - HTMLInputElement.
   */
  const onChangeCheckbox = ({ target }) => {
    setChecked(target.checked)

    if (target.checked) {
      checkboxValues({ id: target.id, value: target.value, points })
      return
    }

    checkboxValues({ id: target.id, value: '', points: 0 })
  }

  /**
   * Abre el modal con un delay de 700ms luego
   * de que se posionar el cursor encima del
   * elemento span.
   */
  const onMouseOver = () => {
    timeoutID.current = setTimeout(() => {
      setIsOpen(!isOpen)
    }, 700)
  }

  /**
   * Elimina el setTimeOut si el cursor
   * ha dejado el elemento span.
   */
  const onMouseLeave = () => {
    window.clearTimeout(timeoutID.current)
  }

  // Cierra el modal actualizando el estado isOpen.
  const onCloseModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <label
        htmlFor={id}
        className={`${css['c-input']} u-flex u-my-2 ${addClass ?? ''}`}
        data-state={validation ? state : 'normal'}
      >
        <div className={css['c-input__box']}>
          <input
            id={id}
            ref={checkboxRef}
            type='checkbox'
            name={name}
            value={state}
            checked={checked}
            className={css['c-input__check']}
            onChange={onChangeCheckbox}
            {...(validation && { disabled: validation })}
          />
          <div className={css['c-input__icon']} />
        </div>
        <span
          className={css['c-input__label']}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          {label}
        </span>
      </label>

      <Modal isOpen={isOpen} onClose={onCloseModal} finalFocusRef={checkboxRef}>
        <ModalOverlay />
        <ModalContent addClass={css['c-modal']}>
          <ImageContainer
            background='assets/images/Modal-background-wood-1.png'
            padding='40px'
          >
            {children}
          </ImageContainer>
        </ModalContent>
      </Modal>
    </>
  )
}

CheckBoxModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  state: PropTypes.string,
  value: PropTypes.string,
  points: PropTypes.number,
  addClass: PropTypes.string
}
