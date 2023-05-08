import { useContext, useEffect, useRef } from 'react'
import { PropTypes } from 'prop-types'

import { Select } from 'UI-Components-books'
import { SelectGroupContext } from './SelectGroup'

export const SelectElement = ({
  id,
  children,
  placeholder,
  points,
  correct,
  addClass
}) => {
  const refSelect = useRef()

  // Obtenemos las diferentes propiedades del contexto superior.
  const {
    selectValues,
    activity: { validation, options, load }
  } = useContext(SelectGroupContext)

  const handleChange = ({ id, value }) => {
    selectValues({
      id,
      value: value.toLowerCase().trim() === correct.toLowerCase().trim(),
      option: value,
      points
    })
  }

  /**
   * Actualiza los valores seleccionados
   * en el select según las opciones que se hayan pasado.
   */
  useEffect(() => {
    if (!load && refSelect.current) return

    // se obtienen los elementos <option> del select.
    const optionsElement = [
      ...refSelect.current.getElementsByTagName('option')
    ]
    /**
     * se itera sobre cada elemento option y se busca en
     * la lista de opciones (options) la que tenga
     * el mismo id que el valor option del elemento. Si se encuentra,
     * se establece la propiedad selected del elemento en true.
     */
    optionsElement.forEach((element) => {
      const option = options.find((option) => option.id === id)?.option
      element.selected = element.value === option
    })
  }, [options, refSelect])

  return (
    <Select
      id={id}
      ref={refSelect}
      placeholder={placeholder}
      onChoise={handleChange}
      isDisabled={validation}
      {...(addClass && { addClass })}
    >
      {children}
    </Select>
  )
}

SelectElement.defaultProps = {
  placeholder: 'Seleccionar'
}

SelectElement.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node)
  ]),
  placeholder: PropTypes.string,
  points: PropTypes.number,
  correct: PropTypes.string.isRequired,
  addClass: PropTypes.string,
  id: PropTypes.string.isRequired
}
