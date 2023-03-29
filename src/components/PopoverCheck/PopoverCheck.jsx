import { useContext } from 'react'
import { PropTypes } from 'prop-types'

import {
  Button,
  CheckBox,
  PopoverModal,
  PopoverModalButton,
  PopoverModalContent
} from 'UI-Components-books'
import { PopoverCheckGroupContext } from './PopoverCheckGroup'

import css from './PopoverCheck.module.css'

export const PopoverCheck = ({
  children,
  label,
  distance,
  placement,
  id,
  points,
  state
}) => {
  // Obtenemos las diferentes propiedades del contexto superior.
  const {
    checkboxValues,
    activity: { validation }
  } = useContext(PopoverCheckGroupContext)

  return (
    <PopoverModal>
      <PopoverModalButton>
        <Button label={label} addClass={css['c-popover-check__button']} />
      </PopoverModalButton>

      <PopoverModalContent
        distance={distance}
        placement={placement || 'right'}
        addClass={css['c-popover-check__content']}
      >
        {children}
        <CheckBox
          id={id}
          addClass={css['c-popover-check__check']}
          state={validation ? state : 'normal'}
          isDisabled={validation}
          onChange={(value) => checkboxValues({ ...value, points })}
          label=''
        />
      </PopoverModalContent>
    </PopoverModal>
  )
}

PopoverCheck.defaultProps = {
  distance: 0
}

PopoverCheck.propTypes = {
  label: PropTypes.string,
  distance: PropTypes.number,
  placement: PropTypes.string,
  points: PropTypes.number,
  state: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node)
  ]),
  id: function (props, propName, componentName) {
    if (typeof props[propName] !== 'string') {
      return new Error(
        `Es necesario la propiedad \`${propName}\` en el componente \`${componentName}\`.`
      )
    }
  }
}
