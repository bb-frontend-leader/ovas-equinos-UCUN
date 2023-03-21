import { PropTypes } from "prop-types";

import {
  Button,
  CheckBox,
  PopoverModal,
  PopoverModalButton,
  PopoverModalContent,
} from "UI-Components-books";

import css from "./PopoverCheck.module.css";

export const PopoverCheck = ({ children, label, distance, placement }) => {
  return (
    <PopoverModal>
      <PopoverModalButton>
        <Button label={label} addClass={css["c-popover-check__button"]} />
      </PopoverModalButton>

      <PopoverModalContent
        distance={distance}
        placement={placement || "right"}
        addClass={css["c-popover-check__content"]}
      >
        {children}
        <CheckBox label="" addClass={css["c-popover-check__check"]} />
      </PopoverModalContent>
    </PopoverModal>
  );
};

PopoverCheck.defaultProps = {
  distance: 0,
};

PopoverCheck.propTypes = {
  label: PropTypes.string,
  distance: PropTypes.number,
  placement: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
