import { memo } from "react";

const SvgStaticRoulette = memo((props) => {
  return (
    <svg viewBox="0 0 800 800" {...props}>
      <image
        width={808}
        height={724}
        xlinkHref="/assets/images/SvgStaticRoulette-5.png"
        transform="matrix(.48 0 0 .48 33.697 5.523)"
        overflow="visible"
      />
      <image
        width={629}
        height={943}
        xlinkHref="/assets/images/SvgStaticRoulette-4.png"
        transform="matrix(.48 0 0 .48 5.873 265.918)"
        overflow="visible"
      />
      <image
        width={990}
        height={523}
        xlinkHref="/assets/images/SvgStaticRoulette-3.png"
        transform="matrix(.48 0 0 .48 161.494 539.725)"
        overflow="visible"
      />
      <image
        width={612}
        height={944}
        xlinkHref="/assets/images/SvgStaticRoulette-2.png"
        transform="matrix(.48 0 0 .48 495.77 266.241)"
        overflow="visible"
      />
      <image
        width={819}
        height={740}
        xlinkHref="/assets/images/SvgStaticRoulette-1.png"
        transform="matrix(.48 0 0 .48 379.394 3.683)"
        overflow="visible"
      />
      <circle cx={403.7} cy={402.7} r={211} fill="#727272" opacity={0.75} />
      <circle cx={399.7} cy={397.7} r={211} fill="#fff" />
      <image
        width={890}
        height={893}
        xlinkHref="/assets/images/SvgStaticRoulette-6.png"
        transform="matrix(.48 0 0 .48 186.4 185.68)"
        overflow="visible"
      />
    </svg>
  );
});

export { SvgStaticRoulette };
