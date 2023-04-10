import { useContext } from 'react'
import { PropTypes } from 'prop-types'

import { CheckBox as CheckBoxDefault } from 'UI-Components-books'
import { CheckBoxGroupContext } from '@components'

import css from './CheckBox.module.css'

export const CheckBox = ({ label, id, points, addClass, state }) => {
  // Obtenemos las diferentes propiedades del contexto superior.
  const {
    checkboxValues,
    activity: { validation }
  } = useContext(CheckBoxGroupContext)

  return (
    <CheckBoxDefault
      id={id}
      addClass={`${css['c-checkbox']} ${addClass ?? ''}`}
      state={validation ? state : 'normal'}
      value={state}
      isDisabled={validation}
      onChange={(value) => checkboxValues({ ...value, points })}
      label={label}
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
