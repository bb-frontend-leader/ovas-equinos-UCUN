import { memo, useRef } from 'react'
import { Link } from 'react-router-dom'

import { Image } from 'UI-Components-books'
import { useActivity } from '@hooks'

/**
 * Se crea un objeto que no se puede cambiar para
 * almacenar el keyCode de las teclas up, down, end y home.
 */
const KEYCODE = Object.freeze({
  ENTER: 13,
  SPACE: 32
})

const SvgRoulette = memo((props) => {
  const { getStagesComplete } = useActivity()
  const { stage1, stage2, stage3, stage4, stage5 } = getStagesComplete()

  const svgRef = useRef()

  const changeStyle = (active) => {
    Array.from(
      svgRef.current.querySelectorAll(`[data-id="${active}"]`),
      (element) => {
        if (!element.classList.contains('hidden')) {
          element.classList.replace('animate__fadeIn', 'animate__fadeOut')

          setTimeout(() => {
            element.classList.toggle('hidden')
            element.classList.replace('animate__fadeOut', 'animate__fadeIn')
          }, 500)

          return element
        }

        element.classList.toggle('hidden')

        return element
      }
    )
  }

  const onActiveStage = (e) => {
    changeStyle(e.target.dataset.stage || e.target.dataset.id)
  }

  const onKeyDown = (e) => {
    if (
      (e.keyCode || e.which) === KEYCODE.ENTER ||
      (e.keyCode || e.which) === KEYCODE.SPACE
    ) {
      changeStyle(e.target.firstElementChild.dataset.stage)
    }
  }

  return (
    <svg ref={svgRef} viewBox='0 0 1848.2 839.9' id='SvgRoulette' {...props}>
      <style>
        {
          '#SvgRoulette .disabled { cursor: not-allowed } #SvgRoulette .st_button { cursor:pointer } #SvgRoulette .st_button:focus-visible{ outline: 7px solid var(--clr-common-white-100); border-radius: 8px; } #SvgRoulette .hidden { display: none } #SvgRoulette .image-horse { pointer-events: none } #SvgRoulette .sign-message { pointer-events: none }'
        }
      </style>

      {/* Etapa 1 */}

      <g
        role='button'
        tabIndex={0}
        className='st_button'
        onClick={onActiveStage}
        onKeyDown={onKeyDown}
      >
        <image
          width={740}
          height={652}
          data-stage='stage-1'
          xlinkHref={`assets/images/${
            stage1.completed ? 'SvgRoulette-1-complete' : 'SvgRoulette-1-normal'
          }.png`}
          transform='matrix(.481 0 0 .481 863.716 13.94)'
          overflow='visible'
        />
      </g>

      {/* Etapa  2 */}

      <g
        role='button'
        tabIndex={0}
        className='st_button'
        onClick={onActiveStage}
        onKeyDown={onKeyDown}
      >
        <image
          width={540}
          height={870}
          data-stage='stage-2'
          xlinkHref={`assets/images/${
            stage2.completed ? 'SvgRoulette-2-complete' : 'SvgRoulette-2-normal'
          }.png`}
          transform='matrix(.48 0 0 .48 977.836 271.173)'
          overflow='visible'
        />
      </g>

      {/* Etapa 3 */}

      <g
        role='button'
        tabIndex={0}
        className='st_button'
        onClick={onActiveStage}
        onKeyDown={onKeyDown}
      >
        <image
          width={914}
          height={450}
          data-stage='stage-3'
          xlinkHref={`assets/images/${
            stage3.completed ? 'SvgRoulette-3-complete' : 'SvgRoulette-3-normal'
          }.png`}
          transform='matrix(.48 0 0 .48 644.671 543.934)'
          overflow='visible'
        />
      </g>

      {/* Etapa 4 */}

      <g
        role='button'
        tabIndex={0}
        className='st_button'
        onClick={onActiveStage}
        onKeyDown={onKeyDown}
      >
        <image
          width={539}
          height={870}
          data-stage='stage-4'
          xlinkHref={`assets/images/${
            stage4.completed ? 'SvgRoulette-4-complete' : 'SvgRoulette-4-normal'
          }.png`}
          transform='matrix(.48 0 0 .48 491.296 272.028)'
          overflow='visible'
        />
      </g>

      {/* Etapa 5 */}

      <g
        role='button'
        tabIndex={0}
        className='st_button'
        onClick={onActiveStage}
        onKeyDown={onKeyDown}
      >
        <image
          width={740}
          height={652}
          data-stage='stage-5'
          xlinkHref={`assets/images/${
            stage5.completed ? 'SvgRoulette-5-complete' : 'SvgRoulette-5-normal'
          }.png`}
          transform='matrix(.48 0 0 .48 509.66 15.256)'
          overflow='visible'
        />
      </g>

      {/* Estado Activos */}

      {/* Etapa 5 */}
      <g role='button' className='st_button' onClick={onActiveStage}>
        <image
          width={808}
          height={724}
          xlinkHref='assets/images/SvgRoulette-5-active.png'
          transform='matrix(.48 0 0 .48 497.09 -5.024)'
          overflow='visible'
          className='hidden animate__animated animate__fadeIn animate__fast'
          data-id='stage-5'
        />
      </g>

      {/* Etapa 4 */}

      <g role='button' className='st_button' onClick={onActiveStage}>
        <image
          width={629}
          height={943}
          xlinkHref='assets/images/SvgRoulette-4-active.png'
          transform='matrix(.48 0 0 .48 469.267 255.37)'
          overflow='visible'
          className='hidden animate__animated animate__fadeIn animate__fast'
          data-id='stage-4'
        />
      </g>

      <image
        width={1297}
        height={490}
        xlinkHref='assets/images/SvgRoulette-4-letrero.png'
        transform='matrix(.48 0 0 .48 22.111 392.153)'
        overflow='visible'
        className='hidden sign-message animate__animated animate__fadeIn animate__fast'
        data-id='stage-4'
      />

      <foreignObject x='165' y='569' width='230' height='80'>
        <Link
          {...(stage3.completed && { to: '/unit/1/page/stage-4' })}
          aria-label='LLeva a la página donde inicia la cuarta etapa'
          className={`u-button-reset u-stack animate__animated animate__fadeIn animate__fast hidden ${
            !stage3.completed && 'disabled'
          }`}
          data-id='stage-4'
        >
          <Image
            url='assets/images/SvgRoulette-button.png'
            alt='Tabla de madera que contiene la palabra seleccionar'
            width='212'
            noCaption
          />
        </Link>
      </foreignObject>

      {/* Letrero etapa 5 */}

      <image
        width={1634}
        height={495}
        xlinkHref='assets/images/SvgRoulette-5-letrero.png'
        transform='matrix(.48 0 0 .48 6.286 71.335)'
        overflow='visible'
        className='hidden sign-message animate__animated animate__fadeIn animate__fast'
        data-id='stage-5'
      />

      <foreignObject x='190' y='247' width='230' height='80'>
        <Link
          {...(stage4.completed && { to: '/unit/1/page/stage-5' })}
          aria-label='LLeva a la página donde inicia la quinta etapa'
          className={`u-button-reset u-stack animate__animated animate__fadeIn animate__fast hidden ${
            !stage4.completed && 'disabled'
          }`}
          data-id='stage-5'
        >
          <Image
            url='assets/images/SvgRoulette-button.png'
            alt='Tabla de madera que contiene la palabra seleccionar'
            width='212'
            noCaption
          />
        </Link>
      </foreignObject>

      {/* Etapa 3 */}

      <g role='button' className='st_button' onClick={onActiveStage}>
        <image
          width={990}
          height={523}
          xlinkHref='assets/images/SvgRoulette-3-active.png'
          transform='matrix(.48 0 0 .48 624.887 529.178)'
          overflow='visible'
          className='hidden animate__animated animate__fadeIn animate__fast'
          data-id='stage-3'
        />
      </g>

      {/* Etapa 2 */}

      <g role='button' className='st_button' onClick={onActiveStage}>
        <image
          width={612}
          height={944}
          xlinkHref='assets/images/SvgRoulette-2-active.png'
          transform='matrix(.48 0 0 .48 959.163 255.694)'
          overflow='visible'
          className='hidden animate__animated animate__fadeIn animate__fast'
          data-id='stage-2'
        />
      </g>

      <image
        width={1497}
        height={396}
        xlinkHref='assets/images/SvgRoulette-2-letrero.png'
        transform='matrix(.48 0 0 .48 1124.057 401.967)'
        overflow='visible'
        className='hidden sign-message animate__animated animate__fadeIn animate__fast'
        data-id='stage-2'
      />

      <foreignObject x='1410' y='532' width='230' height='80'>
        <Link
          {...(stage1.completed && { to: '/unit/1/page/stage-2' })}
          aria-label='LLeva a la página donde inicia la segunda etapa'
          className={`u-button-reset u-stack animate__animated animate__fadeIn animate__fast hidden ${
            !stage1.completed && 'disabled'
          }`}
          data-id='stage-2'
        >
          <Image
            url='assets/images/SvgRoulette-button.png'
            alt='Tabla de madera que contiene la palabra seleccionar'
            width='212'
            noCaption
          />
        </Link>
      </foreignObject>

      {/* Letreto etapa 3 */}

      <image
        width={1495}
        height={492}
        xlinkHref='assets/images/SvgRoulette-3-letrero.png'
        transform='matrix(.48 0 0 .48 847.722 603.773)'
        overflow='visible'
        className='hidden sign-message animate__animated animate__fadeIn animate__fast'
        data-id='stage-3'
      />

      <foreignObject x='1132' y='783' width='230' height='80'>
        <Link
          {...(stage2.completed && { to: '/unit/1/page/stage-3' })}
          aria-label='LLeva a la página donde inicia la tercera etapa'
          className={`u-button-reset u-stack animate__animated animate__fadeIn animate__fast hidden ${
            !stage2.completed && 'disabled'
          }`}
          data-id='stage-3'
        >
          <Image
            url='assets/images/SvgRoulette-button.png'
            alt='Tabla de madera que contiene la palabra seleccionar'
            width='212'
            noCaption
          />
        </Link>
      </foreignObject>

      {/* Etapa 1 */}

      <g role='button' className='st_button' onClick={onActiveStage}>
        <image
          width={819}
          height={740}
          xlinkHref='assets/images/SvgRoulette-1-active.png'
          transform='matrix(.48 0 0 .48 842.788 -6.864)'
          overflow='visible'
          className='hidden animate__animated animate__fadeIn animate__fast'
          data-id='stage-1'
        />
      </g>

      <image
        width={1495}
        height={395}
        xlinkHref='assets/images/SvgRoulette-1-letrero.png'
        transform='matrix(.48 0 0 .48 1041.686 75.947)'
        overflow='visible'
        className='hidden sign-message animate__animated animate__fadeIn animate__fast'
        data-id='stage-1'
      />

      <foreignObject x='1325' y='203' width='230' height='80'>
        <Link
          to='/unit/1/page/stage-1'
          aria-label='LLeva a la página donde inicia la primera etapa'
          className='u-button-reset u-stack animate__animated animate__fadeIn animate__fast hidden'
          data-id='stage-1'
        >
          <Image
            url='assets/images/SvgRoulette-button.png'
            alt='Tabla de madera que contiene la palabra seleccionar'
            width='212'
            noCaption
          />
        </Link>
      </foreignObject>

      {/* Horse */}
      <circle cx={867.1} cy={392.2} r={211} fill='#727272' opacity={0.75} />
      <circle cx={863.1} cy={387.2} r={211} fill='#fff' />

      <image
        width={890}
        height={893}
        xlinkHref='assets/images/SvgRoulette-horse.png'
        transform='matrix(.48 0 0 .48 649.793 175.133)'
        overflow='visible'
        className='image-horse'
      />
    </svg>
  )
})

export { SvgRoulette }
