import { memo } from "react";
import PropTypes from "prop-types";
// import { Button, Image, ButtonSection } from "UI-Components-books";

const SvgStageMenu = memo(({ children, ...props }) => {
  return (
    <svg viewBox="0 0 1158.3 215.6" id="SvgStageMenu" {...props}>
      <style>
        {
          "#SvgStageMenu .c-button { background-color: transparent; padding: 0; border-radius: 10px; --outline-color: var(--clr-common-white-100); --outline-size: 4px; --outline-offset: -10px;  }"
        }
      </style>

      <image
        width={2414}
        height={425}
        xlinkHref="/assets/images/SvgBottomBar-1.png"
        transform="matrix(.48 0 0 .48 -.23 10.073)"
        overflow="visible"
      />
      <image
        width={205}
        height={192}
        xlinkHref="/assets/images/SvgBottomBar-5.png"
        transform="matrix(.48 0 0 .48 48.13 34.4)"
        overflow="visible"
      />
      <image
        width={679}
        height={408}
        xlinkHref="/assets/images/SvgBottomBar-2.png"
        transform="matrix(.48 0 0 .48 795.322 1.483)"
        overflow="visible"
      />
      <image
        width={678}
        height={408}
        xlinkHref="/assets/images/SvgBottomBar-3.png"
        transform="matrix(.48 0 0 .48 419.072 4.502)"
        overflow="visible"
      />
      <image
        width={678}
        height={408}
        xlinkHref="/assets/images/SvgBottomBar-4.png"
        transform="matrix(.48 0 0 .48 57.239 4.502)"
        overflow="visible"
      />

      {children}
    </svg>
  );
});

SvgStageMenu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

// SvgStageMenu.propTypes = {
//   context: PropTypes.exact({
//     onContext: PropTypes.func,
//     contextRef: PropTypes.any,
//   }),
//   situation: PropTypes.exact({
//     onSituation: PropTypes.func,
//     situationRef: PropTypes.any,
//   }),
//   activity: PropTypes.exact({
//     onActivity: PropTypes.func,
//     activityRef: PropTypes.any,
//   }),
// };

export { SvgStageMenu };
