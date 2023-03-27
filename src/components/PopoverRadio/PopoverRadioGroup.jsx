import { useState, createContext } from "react";
import PropTypes from "prop-types";

export const PopoverRadioGroupContext = createContext();

export const PopoverRadioGroup = ({ children }) => {
  const [checked, setChecked] = useState([]);

  const [validation, setValidation] = useState(false);

  const onCheck = (value) => {
    console.log(value)
    const validate = checked.filter((option) => option.id === value.id);

    if (validate.length) {
      setChecked([...checked.filter((option) => option.id !== value.id)]);
    } else {
      setChecked([...checked, { ...value }]);
    }

    console.log(checked)
  };

  return (
    <PopoverRadioGroupContext.Provider value={{ onCheck, validation }}>
      {children}
    </PopoverRadioGroupContext.Provider>
  );
};

PopoverRadioGroupContext.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
