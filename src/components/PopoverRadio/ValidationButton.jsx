import { useContext, cloneElement } from 'react'
import PropTypes from 'prop-types'

import { PopoverRadioGroupContext } from './PopoverRadioGroup'

export const ValidationButton = ({ children, onClick }) => {
  // Obtenemos el método validate y la propiedad disabledButton del contexto.
  const {
    validation,
    onCheck
  } = useContext(PopoverRadioGroupContext)

  /**
   * Función utilizada para lanzar la validación
   * del componente RenderingQuestions
   * @param {event} e - evento
   */
  const handleValidation = (e) => {
    console.log(e)
    if (onClick) {
      onClick(e)
    }
    onCheck()
  }

  /**
   * Agregamos el evento onClick y
   * la propiedad siabled al children del compontente.
   */
  return cloneElement(children, {
    ...children.props,
    onClick: handleValidation
  })
}

ValidationButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  onClick: PropTypes.func
}
