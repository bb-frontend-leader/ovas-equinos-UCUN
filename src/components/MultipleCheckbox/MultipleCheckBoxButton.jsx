import { useContext, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { MultipleCheckboxContext } from './MultipleCheckbox';

export const MultipleCheckBoxButton = ({ children, onClick, addClass, hasCustomButton }) => {
  const { onClickHandle, disabledButton, setDisabledButton } = useContext(MultipleCheckboxContext);

  const handleValidation = (e) => {
    setDisabledButton(true);
    if (onClick) {
      onClick(e);
    }
    onClickHandle();
  };

  return hasCustomButton ? (
    cloneElement(children, {
      ...children.props,
      onClick: handleValidation,
      disabled: disabledButton
    })
  ) : (
    <div className={addClass}>
      <button
        style={{
          background: 'none',
          border: 'none'
        }}
        onClick={handleValidation}
        disabled={disabledButton}>
        {children}
      </button>
    </div>
  );
};

MultipleCheckBoxButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.element)
  ]),
  addClass: PropTypes.func,
  onClick: PropTypes.func,
  hasCustomButton: PropTypes.bool
};
