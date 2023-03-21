import {
  useContext,
  Children,
  cloneElement,
  isValidElement,
  useRef,
} from "react";
import PropTypes from "prop-types";

import { ViewContext } from "./View";

/**
 * date: 23/11/2022
 * author:  alejandro-programador2
 * description:  Componente pestaña.
 * attributes:
 *  - Children: Elementos hijos que recibe el componente.
 */
const Views = ({ children }) => {
  // Obtenemos el index del Context
  const { index } = useContext(ViewContext);

  // Almacena al referencia del elemento activo.
  const elementRef = useRef(null);

  let childIndex = 1;

  // Obtenemos los hijos del componente y a cada uno le agregamos un identificador.
  const viewItems = Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return null;
    }
    const value =
      child.props.id === undefined
        ? `${childIndex}-tab-comp`
        : `${child.props.value}-tab-comp`;

    childIndex++;

    return cloneElement(child, {
      ...child.props,
      index: value,
    });
  });

  return (
    <>
      {viewItems.map((item, i) =>
        cloneElement(item, {
          ...item.props,
          key: `${i}-tab-item`,
          tabIndex: -1,
          ref:
            index === parseInt(item.props.index.replace(/[^0-9.]/g, ""))
              ? elementRef
              : null,

          ...(index !== parseInt(item.props.index.replace(/[^0-9.]/g, "")) && {
            hidden: true,
            style: {
              height: "0px",
              overflow: "hidden",
            },
          }),
        })
      )}
    </>
  );
};

Views.propTypes = {
  children: PropTypes.any,
};

export { Views };
