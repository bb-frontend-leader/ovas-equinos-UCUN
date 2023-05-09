import { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { CheckBox } from 'UI-Components-books'
import { PlanGroupContext } from '@components'

import css from './PlanActivity.module.css'

/**
 * date: 05/08/2023
 * author:  Books&Books
 * description:  Componente checkbox custom utilizado para la actividad plan.
 * attributes:
 *  - name: Propiedad name del checkbox.
 *  - label: Propiedad label del checkbox.
 *  - value: Valor del checkbox.
 *  - addClass: Permite agregar una clase.
 */
export const PlanCheck = ({ name, label, value, addClass }) => {
// Estado utilizado para controlar si el input está checked.
  const [checked, setChecked] = useState(false)

  // Obtenemos las diferentes propiedades del contexto superior.
  const { handleCheck, load } = useContext(PlanGroupContext)

  // Define una función que se ejecutará cuando se cambie el valor de un checkbox
  const onChage = (checkbox) => {
  // Invierte el valor de "checked"
    setChecked(!checked)

    // Si el checkbox no tiene un valor definido
    if (!checkbox.value) {
      // Ejecuta la función "handleCheck" con el valor actual del checkbox
      handleCheck({ value })
      return
    }

    // Si el checkbox tiene un valor definido, ejecuta la función "handleCheck" con el objeto checkbox completo
    handleCheck(checkbox)
  }

  useEffect(() => {
    if (load.length === 0) return
    // Actualiza el estado de "checked" utilizando el valor anterior y comprobando si algún elemento en "load" tiene un id igual al valor actual
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
