import { useState, createContext } from "react";
import PropTypes from "prop-types";

// Creación del contexto
const ViewContext = createContext();

/**
 * date: 24/06/2022
 * author:  alejandro-programador2
 * description:  Componente que permite generar pestañas.
 * attributes:
 *  - Children: Elementos hijos que recibe el componente.
 *  - defaultIndex: Pestaña por defecto.
 */
const View = ({ children, defaultIndex }) => {
  // Estado para alamacenar el index de la pestaña actual.
  const [bindIndex, setBindIndex] = useState(defaultIndex);

  return (
    <ViewContext.Provider
      value={{ changeView: setBindIndex, index: bindIndex }}
    >
      {children}
    </ViewContext.Provider>
  );
};

View.defaultProps = {
  defaultIndex: 1,
};

View.propTypes = {
  children: PropTypes.any,
  defaultIndex: PropTypes.number,
};

export { View, ViewContext };
