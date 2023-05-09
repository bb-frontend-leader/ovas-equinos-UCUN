import { useContext, Children, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { PlanGroupContext, Select } from '@components'

/**
 * date: 05/08/2023
 * author:  Books&Books
 * description:  Componente select custom utilizado para la actividad plan.
 * attributes:
 *  - id: Identificad del select.
 *  - children: Elementos hijos del componente.
 *  - placeholder: Propiedad placeholder del select.
 *  - label: Propiedad label del select.
 */
export const PlanSelect = ({ id, children, placeholder, label }) => {
  const [selected, setSeleted] = useState(null)
  const { validation, handleSectionChange, load } =
    useContext(PlanGroupContext)

  const isEnable = validation(id)

  const onSelectionChange = (key) => {
    // Se busca el elemento seleccionado por su clave 'key' en el arreglo de children
    const selectedChild = Children.toArray(children).find(
      (child) => child.props['data-key'] === key
    )

    // Se obtiene el texto del elemento seleccionado
    const selectedText = selectedChild?.props?.children

    // Se llama la función handleSectionChange con los valores correspondientes
    handleSectionChange({ id, key, value: selectedText })

    // Se actualiza el estado de la opción seleccionada
    setSeleted(key)
  }

  useEffect(() => {
    // Si no hay ningún elemento en la carga inicial, salimos de la función
    if (load.length === 0) return

    // Buscamos en la carga inicial el elemento con el mismo id del componente actual
    setSeleted((prev) => {
      return load.find((value) => value.id === id)?.key || prev
    })
  }, [load])

  return (
    <Select
      id={id}
      label={label}
      data-id={id}
      placeholder={placeholder}
      isDisabled={!isEnable}
      selectedKey={selected}
      onSelectionChange={onSelectionChange}
    >
      {children}
    </Select>
  )
}

PlanSelect.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  addClass: PropTypes.string
}
