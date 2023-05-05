import { memo } from 'react'
import { Image } from 'UI-Components-books'

import { ViewButton } from '@components'

const SvgMenu = memo(({ onClickTutorial, ...props }) => {
  return (
    <svg
      id='SvgMenu'
      viewBox='0 0 343.5 558.4'
      data-tour='menu_aside'
      {...props}
    >
      <style>
        {
          '#SvgMenu .c-button { background-color: transparent; padding: 0; border-radius: 10px; --outline-color: var(--clr-common-white-100); --outline-size: 4px; --outline-offset: -5px; transition: filter 0.5s ease-in  } #SvgMenu .c-button:disabled {   pointer-events:none; filter: grayscale(1);}'
        }
      </style>

      <path
        opacity={0.8}
        fill='#562c15'
        d='M343.5 0H0v24.7l10.8 9.2L0 42.1v41.1l21 4.4L0 93v70l10.8 9.2L0 180.4v41.1l21 4.4-21 5.4v72.4l10.8 9.2L0 321v41.2l21 4.3-21 5.4V442l10.8 9.2L0 459.3v41.2l21 4.3-21 5.4v48.2h343.5v-55.8l-13.3-2.7 13.3-12.1v-43.1l-9.2-6 9.2-8.3v-66.1l-13.3-2.7 13.3-12.1v-43.1l-9.2-6 9.2-8.3v-68.4l-13.3-2.7 13.3-12.1v-43.1l-9.2-6 9.2-8.3V85.4l-13.3-2.7 13.3-12.1V27.4l-9.2-5.9 9.2-8.3z'
      />

      <foreignObject x='25.255' y='10.21' width='293' height='130'>
        <ViewButton
          addClass='c-button'
          label='Resultado esperado de aprendizaje'
          hasAriaLabel
          index={1}
          data-view='disable'
        >
          <Image url='assets/images/SvgMenu-1.png' alt='' noCaption />
        </ViewButton>
      </foreignObject>

      <foreignObject x='25.255' y='152.21' width='293' height='130'>
        <ViewButton
          addClass='c-button'
          label='Presentación'
          hasAriaLabel
          index={2}
          data-view='disable'
        >
          <Image url='assets/images/SvgMenu-2.png' alt='' noCaption />
        </ViewButton>
      </foreignObject>

      <foreignObject x='25.255' y='294.21' width='293' height='130'>
        <ViewButton
          label='Actividades a desarrollar'
          addClass='c-button'
          hasAriaLabel
          index={3}
          data-view='disable'
        >
          <Image url='assets/images/SvgMenu-3.png' alt='' noCaption />
        </ViewButton>
      </foreignObject>

      <foreignObject x='25.255' y='430.21' width='293' height='130'>
        <ViewButton
          label='¿Cómo navegar por este recurso?'
          addClass='c-button'
          hasAriaLabel
          index={4}
          onClick={() => onClickTutorial()}
        >
          <Image url='assets/images/SvgMenu-4.png' alt='' noCaption />
        </ViewButton>
      </foreignObject>
    </svg>
  )
})

export { SvgMenu }
