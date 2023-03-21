import { useState, createContext, useRef } from "react";
import PropTypes from "prop-types";

// Creación del contexto
const ViewContext = createContext();

/**
 * date: 23/11/2022
 * author:  Books&Books
 * description:  Componente que permite generar pestañas.
 * attributes:
 *  - Children: Elementos hijos que recibe el componente.
 *  - defaultIndex: Pestaña por defecto.
 */
const View = ({ children, defaultIndex }) => {
  // Estado para alamacenar el index de la pestaña actual.
  const [bindIndex, setBindIndex] = useState(defaultIndex);

  /**
   * Usado para almacenar las referencias
   * de todos los botones usados como Tab.
   */
  const refTabs = useRef([]);

  /**
   * Función para utilizada para agregar una nueva referencia
   * al arreglo de referencias refTabs.
   *
   * @param {ReactNode[]} ref - Referencia del botón usado en el Tab.
   * @returns {ReactNode[]} refTabs - Arreglo de referencias.
   */
  const addNewRef = (ref) => (refTabs.current = [...refTabs.current, ref]);

  /**
   * Devuelve "true" o "false" apartir de evaluar
   * el id con el estado.
   *
   * @returns {(Boolean)}
   */
  const validation = (index) => bindIndex === index;

  /**
   * Se crea un objeto que no se puede cambiar para
   * almacenar el keyCode de las teclas up, down, end y home.
   */
  const KEYCODE = Object.freeze({
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  });

  /**
   * Función utilizada en el evento KeyDown del botón,
   * permite decidir el focus del siguiente elemento
   * utilizando las teclas ArrowLeft o ArrowRight.
   *
   * @param {Event} event - Evento disparado por KeyDown
   */
  const onNavigation = (e) => {
    // Obtenemos la primera Tab
    const FIRST_TAB = refTabs.current[0];
    // Obtenemos la última Tab
    const LAST_TAB = refTabs.current[refTabs.current.length - 1];

    // Si la tecla pulsada ArrowLeft
    if (
      (e.keyCode || e.which) === KEYCODE.LEFT ||
      (e.keyCode || e.which) === KEYCODE.UP
    ) {
      if (e.target === FIRST_TAB) {
        LAST_TAB.focus();
      } else {
        const prevFocusButton = refTabs.current.indexOf(e.target) - 1;
        // Agregamos el focus al botón anterior
        refTabs.current[prevFocusButton].focus();
      }
    } else if (
      (e.keyCode || e.which) === KEYCODE.RIGHT ||
      (e.keyCode || e.which) === KEYCODE.DOWN
    ) {
      // Si la tecla pulsada es ArrowRight
      if (e.target === LAST_TAB) {
        FIRST_TAB.focus();
      } else {
        const nextFocusButton = refTabs.current.indexOf(e.target) + 1;
        // Agregamos el focus al siguiente botón
        refTabs.current[nextFocusButton].focus();
      }
    }
  };

  return (
    <ViewContext.Provider
      value={{
        index: bindIndex,
        changeView: setBindIndex,
        addNewRef,
        onNavigation,
        validation,
      }}
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
