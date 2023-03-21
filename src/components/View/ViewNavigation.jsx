import { useContext } from "react";
import PropTypes from "prop-types";

import { Button } from "UI-Components-books";
import { ViewContext } from "@components";

/**
 * date: 23/11/2022
 * author:  Books&Books
 * description: Componente botón que permite navegar entre las pestañas del componente Tab
 * attributes:
 *  - index: número de la pestaña a la cual va redirigir
 */
export const ViewNavigation = ({ index, ...props }) => {
  const { changeView } = useContext(ViewContext);

  return <Button {...props} onClick={() => changeView(index)} />;
};

ViewNavigation.propTypes = {
  index: PropTypes.number.isRequired,
};
