import { useContext, useEffect } from "react";
import PropTypes from "prop-types";

import { Select } from "UI-Components-books";
import { PlanGroupContext } from "@components";

import css from "./PlanActivity.module.css";

export const PlanSelect = ({ children, id, placeholder, label, addClass }) => {
  const { addNewSelectId, validation } = useContext(PlanGroupContext);

  const isEnable = validation(id);

  useEffect(() => {
    // Agregamos al Referencia a la función addNewRef si está existe
    id && addNewSelectId(id);

    return () => {
      // Limpiamos la referencia al desmontar el componente
      id = null;
    };
  }, [id]);

  return (
    <Select
      label={label}
      data-id={id}
      placeholder={placeholder}
      isDisabled={!isEnable}
      addClass={`${css["c-select"]} ${addClass ?? ""}`}
    >
      {children}
    </Select>
  );
};

PlanSelect.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  addClass: PropTypes.string,
};
