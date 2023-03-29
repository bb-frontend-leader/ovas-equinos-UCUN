import { useContext, cloneElement, Children } from 'react'
import PropTypes from 'prop-types'

import { DragValidationContext } from './DragValidation'

export const DragValidationButton = ({ children, onClick }) => {
  // Obtenemos el método validate y la propiedad disabledButton del contexto.
  const {
    validate,
    activity: { button }
  } = useContext(DragValidationContext)

  /**
   * Función utilizada para lanzar la validación
   * del componente RenderingQuestions
   * @param {event} e - evento
   */
  const handleValidation = (e) => {
    if (onClick) {
      onClick(e)
    }
    validate()
  }

  /**
   * Agregamos el evento onClick y
   * la propiedad siabled al children del compontente.
   */
  return Children.map(children, (child) =>
    cloneElement(child, {
      ...children.props,
      onClick: handleValidation,
      disabled: button
    })
  )
}

DragValidationButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  onClick: PropTypes.func
}
