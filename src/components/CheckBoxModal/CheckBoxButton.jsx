import { useContext, cloneElement } from 'react'
import PropTypes from 'prop-types'

import { CheckBoxGroupContext } from './CheckBoxGroup'

/**
 * date: 05/08/2023
 * author:  Books&Books
 * description:  Componente que permite validar la actividad con checkbox.
 * attributes:
 *  - Children: Elementos hijos que recibe el componente.
 *  - onClick: Evento que se ejecuta en el onclick del botón.
 */
export const CheckBoxButton = ({ children, onClick }) => {
  // Obtenemos el método validate y la propiedad disabledButton del contexto.
  const {
    validate,
    activity: { button }
  } = useContext(CheckBoxGroupContext)

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
  return cloneElement(children, {
    ...children.props,
    onClick: handleValidation,
    disabled: button
  })
}

CheckBoxButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  onClick: PropTypes.func
}
