import { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { CheckBox } from 'UI-Components-books'
import { PlanGroupContext } from '@components'

import css from './PlanActivity.module.css'

export const PlanCheck = ({ name, label, value, addClass }) => {
// Estado utilizado para controlar si el input está checked.
  const [checked, setChecked] = useState(false)

  // Obtenemos las diferentes propiedades del contexto superior.
  const { handleCheck, load } = useContext(PlanGroupContext)

  const onChage = (checkbox) => {
    setChecked(!checked)

    if (!checkbox.value) {
      handleCheck({ value })
      return
    }

    handleCheck(checkbox)
  }

  useEffect(() => {
    if (load.length === 0) return

    setChecked((prev) => {
      return load.some(option => option.id === value) || prev
    })
  }, [load])

  return (
    <CheckBox
      id={value}
      addClass={`${css['c-checkbox']} ${addClass ?? ''}`}
      name={name}
      label={label}
      value={value}
      onChange={onChage}
      isDisabled={Object.keys(load).length > 0}
      inherit
      checked={checked}
    />
  )
}

PlanCheck.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  addClass: PropTypes.string,
  value: PropTypes.string.isRequired
}
