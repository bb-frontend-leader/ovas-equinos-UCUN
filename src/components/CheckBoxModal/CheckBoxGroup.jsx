import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CheckBoxGroupContext = createContext();

export const CheckBoxGroup = ({ children }) => {
  const [checked, setChecked] = useState([]);

  const [validation, setValidation] = useState(false);

  const onCheck = (value) => {
    const validate = checked.filter((option) => option.id === value.id);

    if (validate.length) {
      setChecked([...checked.filter((option) => option.id !== value.id)]);
    } else {
      setChecked([...checked, { ...value }]);
    }
  };

  return (
    <CheckBoxGroupContext.Provider value={{ onCheck, validation }}>
      {children}
    </CheckBoxGroupContext.Provider>
  );
};

CheckBoxGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
