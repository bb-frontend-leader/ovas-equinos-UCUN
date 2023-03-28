import { PropTypes } from 'prop-types'

import {
  Button,
  CheckBox,
  PopoverModal,
  PopoverModalButton,
  PopoverModalContent
} from 'UI-Components-books'

import { PopoverRadioGroupContext } from './PopoverRadioGroup'

import css from './PopoverRadio.module.css'
import { useContext } from 'react'

export const PopoverRadio = ({ children, label, distance, placement, id }) => {
  const {
    setChecked,
    checked,
    setState,
    state
  } = useContext(PopoverRadioGroupContext)

  const monstarSeleccion = ({ id }) => {
    setChecked(id.charAt(id.length - 1))

    if (checked) {
      setState(false)
    }
  }

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
          id={`idChecbox${id}`}
          type='radio'
          label=''
          addClass={`${css['c-popover-check__check']}`}
          onChange={monstarSeleccion}
          state={state || 'normal'}
        />
      </PopoverModalContent>
    </PopoverModal>
  )
}

PopoverRadio.defaultProps = {
  distance: 0
}

PopoverRadio.propTypes = {
  label: PropTypes.string,
  distance: PropTypes.number,
  placement: PropTypes.string,
  id: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node)
  ])
}
