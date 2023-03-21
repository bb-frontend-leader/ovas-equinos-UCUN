import { useContext } from "react";
import PropTypes from "prop-types";

import { CheckBox } from "UI-Components-books";
import { PlanGroupContext } from "@components";

import css from "./PlanActivity.module.css";

export const PlanCheck = ({ name, label, value, addClass }) => {
  const { onCheck } = useContext(PlanGroupContext);

  const onChage = (checkbox) => {
    if (!checkbox.value) {
      onCheck({ value });
      return;
    }

    onCheck(checkbox);
  };

  return (
    <CheckBox
      name={name}
      label={label}
      value={value}
      onChange={onChage}
      addClass={`${css["c-checkbox"]} ${addClass ?? ""}`}
    />
  );
};

PlanCheck.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  addClass: PropTypes.string,
  value: PropTypes.string.isRequired,
};
