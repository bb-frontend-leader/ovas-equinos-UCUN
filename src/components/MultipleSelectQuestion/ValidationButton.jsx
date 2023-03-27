import { useContext, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { ParentContainerContext } from './ParentContainer';

export const ValidationButton = ({ children, onClick }) => {
  // Obtenemos el método validate y la propiedad disabledButton del contexto.
  const {
    validate,
    activity: { button }
  } = useContext(ParentContainerContext);

  /**
   * Función utilizada para lanzar la validación
   * del componente RenderingQuestions
   * @param {event} e - evento
   */
  const handleValidation = (e) => {
    if (onClick) {
      onClick(e);
    }
    validate();
  };

  /**
   * Agregamos el evento onClick y
   * la propiedad siabled al children del compontente.
   */
  return cloneElement(children, {
    ...children.props,
    onClick: handleValidation,
    disabled: button
  });
};

ValidationButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  onClick: PropTypes.func
};
