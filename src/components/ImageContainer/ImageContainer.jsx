import { createElement } from "react";
import PropTypes from "prop-types";

import css from "./ImageContainer.module.css";

export const ImageContainer = ({
  children,
  addClass,
  height,
  width,
  padding,
  background,
  element,
  ...props
}) => {
  // Utilizado para crear un elemento diferente a un 'div'
  const component = element || "div";

  // Encargada de realizar la validación de las customProperties
  const valitationProperties = () => {
    const customProperties = {};

    if (height) customProperties["--height"] = height;
    if (width) customProperties["--width"] = width;
    if (padding) customProperties["--border-size"] = padding;
    if (background) customProperties["--img-background"] = `url(${background})`;

    return customProperties;
  };

  return createElement(
    component,
    {
      className: `${css["c-image-container"]} ${addClass ?? ""}`,
      ...(!!valitationProperties() && {
        style: { ...valitationProperties() },
      }),
      ...props,
    },
    [children]
  );
};

ImageContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  addClass: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  background: PropTypes.string,
  element: PropTypes.string,
  padding: PropTypes.string,
};
