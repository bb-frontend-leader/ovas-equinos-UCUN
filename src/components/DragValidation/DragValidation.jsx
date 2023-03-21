import PropTypes from "prop-types";
import { DragAndDrop } from "UI-Components-books";

export const DragValidation = ({ children }) => {
  return <DragAndDrop>{children}</DragAndDrop>;
};

DragValidation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
