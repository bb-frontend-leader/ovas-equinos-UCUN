import { useContext } from "react";
import PropTypes from "prop-types";

import { Button } from "UI-Components-books";
import { ViewContext } from "@components";

/**
 * date: 28/06/2022
 * author:  <alejandro-programador2>
 * description: Componente botón que permite navegar entre las pestañas del componente Tab
 * attributes:
 *  - index: número de la pestaña a la cual va redirigir
 */
export const ViewButton = ({ index, ...props }) => {
  const { changeView } = useContext(ViewContext);

  return <Button {...props} onClick={() => changeView(index)} />;
};

ViewButton.propTypes = {
  index: PropTypes.number.isRequired,
};
