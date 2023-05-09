import { useContext, useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'

import { CheckBox as CheckBoxDefault } from 'UI-Components-books'
import { CheckBoxGroupContext } from '@components'

import css from './CheckBox.module.css'

/**
 * date: 05/08/2023
 * author:  Books&Books
 * description:  Componente que genera un Custom checkbox.
 * attributes:
 *  - label: Label del checkbox.
 *  - id: Identificador del checkbox.
 *  - points: Puntos que genera el checkbox si es correcto.
 *  - addClss: Permite agregar una clase.
 *  - state: Estado del checkbox define si es 'right' o 'wrong'.
 */

export const CheckBox = ({ label, id, points, addClass, state }) => {
  // Estado utilizado para controlar si el input está checked.
  const [checked, setChecked] = useState(false)

  // Obtenemos las diferentes propiedades del contexto superior.
  const {
    checkboxValues,
    activity: { validation, options, load }
  } = useContext(CheckBoxGroupContext)

  const onChangeCheckbox = (value) => {
    setChecked(!checked)
    checkboxValues({ ...value, points })
  }

  useEffect(() => {
    if (!load) return

    setChecked((prev) => {
      return options.some(option => option.id === id) || prev
    })
  }, [options])

  return (
    <CheckBoxDefault
      id={id}
      addClass={`${css['c-checkbox']} ${addClass ?? ''}`}
      state={validation ? state : 'normal'}
      value={state}
      label={label}
      isDisabled={validation}
      onChange={onChangeCheckbox}
      inherit
      checked={checked}
    />
  )
}

CheckBox.propTypes = {
  label: PropTypes.string,
  points: PropTypes.number,
  state: PropTypes.string,
  addClass: PropTypes.string,
  id: function (props, propName, componentName) {
    if (typeof props[propName] !== 'string') {
      return new Error(
        `Es necesario la propiedad \`${propName}\` en el componente \`${componentName}\`.`
      )
    }
  }
}
