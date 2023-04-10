import { memo } from 'react'
import PropTypes from 'prop-types'

const SvgStageMenuTwo = memo(({ children, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 1158.26 215.59'
      style={{
        enableBackground: 'new 0 0 1158.26 215.59'
      }}
      xmlSpace='preserve'
      id='SvgStageMenuTwo'
      {...props}
    >
      <style>
        {
          '#SvgStageMenuTwo .c-button { background-color: transparent; padding: 0; border-radius: 10px; --outline-color: var(--clr-common-white-100); --outline-size: 4px; --outline-offset: -10px;  }'
        }
      </style>
      <image
        style={{
          overflow: 'visible'
        }}
        width={2414}
        height={425}
        xlinkHref='assets/images/SvgBottomBar-1.png'
        transform='matrix(.48 0 0 .48 -.23 5.797)'
      />
      <image
        style={{
          overflow: 'visible'
        }}
        width={205}
        height={192}
        xlinkHref='assets/images/SvgBottomBar-5.png'
        transform='matrix(.48 0 0 .48 37.093 31.58)'
      />
      <image
        style={{
          overflow: 'visible'
        }}
        width={468}
        height={252}
        xlinkHref='assets/images/SvgBottomBar-9.png'
        transform='matrix(.48 0 0 .48 162.663 3.086)'
      />
      <image
        style={{
          overflow: 'visible'
        }}
        width={480}
        height={250}
        xlinkHref='assets/images/SvgBottomBar-10.png'
        transform='matrix(.48 0 0 .48 473.032 3.566)'
      />
      <image
        style={{
          overflow: 'visible'
        }}
        width={428}
        height={255}
        xlinkHref='assets/images/SvgBottomBar-11.png'
        transform='matrix(.48 0 0 .48 852.604 2.366)'
      />

      {children}
    </svg>
  )
})

SvgStageMenuTwo.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

export { SvgStageMenuTwo }
