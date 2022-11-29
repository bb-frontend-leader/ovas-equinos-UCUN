import { useRef, useLayoutEffect } from "react";
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
  const elementRef = useRef();

  const Component = element || "div";

  useLayoutEffect(() => {
    if (!elementRef.current) return;

    height && elementRef.current.style.setProperty("--height", height);
    width && elementRef.current.style.setProperty("--width", width);
    padding && elementRef.current.style.setProperty("--border-size", padding);
    background &&
      elementRef.current.style.setProperty(
        "--img-background",
        `url(${background})`
      );

    return () => {
      elementRef.current = "";
    };
  }, [elementRef, height, width, padding, background]);

  return (
    <Component
      ref={elementRef}
      className={`${css["c-image-container"]} ${addClass ?? ""}`}
      {...props}
    >
      {children}
    </Component>
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
