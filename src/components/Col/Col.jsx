import { forwardRef } from "react";
import PropTypes from "prop-types";

import css from "./Col.module.css";

// eslint-disable-next-line react/display-name
const Col = forwardRef(({ addClass, ...props }, ref) => {
  return (
    <div ref={ref} className={`${css.col} ${addClass ?? ""}`} {...props} />
  );
});

Col.propTypes = {
  addClass: PropTypes.string,
};

export { Col };
