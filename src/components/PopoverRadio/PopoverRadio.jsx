import { useContext, useState, useEffect } from 'react'
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

/**
 * date: 05/08/2023
 * author:  Books&Books
 * description:  Componente radio custom con un popover.
 * attributes:
 *  - id: Identificador del radio.
 *  - label: Propiedad label del radio.
 *  - children: Elementos hijos que recibe el componente.
 *  - distance: Distance entre el popover y el botón que lo abre.
 *  - placement: Ubicación del popover.
 *  - points: Puntos que genera la actividad si es correcta.
 *  - state: Estado del radio define si es 'right' o 'wrong'.
 */

export const PopoverRadio = ({
  children,
  label,
  distance,
  placement,
  id,
  points,
  state
}) => {
// Estado utilizado para controlar si el input está checked.
  const [checked, setChecked] = useState(false)

  // Obtenemos las diferentes propiedades del contexto superior.
  const {
    radioValues,
    activity: { validation, options, load }
  } = useContext(PopoverRadioGroupContext)

  const onChangeRadio = (value) => {
    setChecked(!checked)
    radioValues({ ...value, points })
  }

  useEffect(() => {
    if (!load) return

    setChecked((prev) => {
      return options.some(option => option.id === id) || prev
    })
  }, [options])

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
          type='radio'
          addClass={`${css['c-popover-check__check']}`}
          state={validation ? state : 'normal'}
          label={label}
          isDisabled={validation}
          onChange={onChangeRadio}
          inherit
          checked={checked}
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
