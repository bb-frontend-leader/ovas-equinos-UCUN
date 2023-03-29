import { useContext } from 'react'
import { PropTypes } from 'prop-types'

import { Select } from 'UI-Components-books'
import { SelectGroupContext } from './SelectGroup'

export const SelectElement = ({
  children,
  placeholder,
  points,
  correct,
  addClass
}) => {
  // Obtenemos las diferentes propiedades del contexto superior.
  const {
    selectValues,
    activity: { validation }
  } = useContext(SelectGroupContext)

  const handleChange = ({ id, value }) => {
    selectValues({ id, value: value.toLowerCase().trim() === correct.toLowerCase().trim(), points })
  }

  return (
    <Select
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
  addClass: PropTypes.string
}
