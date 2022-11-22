// import { memo, useState, useRef } from "react";
// import {
//   Row,
//   Col,
//   Button,
//   Image,
//   Modal,
//   ModalContent,
// } from "UI-Components-books";

// import { ViewContext } from "@components";

// const SvgMenu = memo((props) => {
//   const [open, setOpen] = useState({
//     result: false,
//     presentation: false,
//     activity: false,
//     navigation: false,
//   });

//   const handleModal = (option, state) => {
//     setOpen((prev) => ({ ...prev, [option]: state }));
//   };

//   const resultRef = useRef();

//   const presentationRef = useRef();

//   // const activityRef = useRef();

//   // const navigationRef = useRef();

//   return (
//     <>
//       <svg viewBox="0 0 343.5 558.4" {...props} id="SvgMenu">
//         <style>
//           {"#SvgMenu .c-button { background-color: transparent; padding: 0; }"}
//         </style>

//         <path
//           opacity={0.8}
//           fill="#562c15"
//           d="M343.5 0H0v24.7l10.8 9.2L0 42.1v41.1l21 4.4L0 93v70l10.8 9.2L0 180.4v41.1l21 4.4-21 5.4v72.4l10.8 9.2L0 321v41.2l21 4.3-21 5.4V442l10.8 9.2L0 459.3v41.2l21 4.3-21 5.4v48.2h343.5v-55.8l-13.3-2.7 13.3-12.1v-43.1l-9.2-6 9.2-8.3v-66.1l-13.3-2.7 13.3-12.1v-43.1l-9.2-6 9.2-8.3v-68.4l-13.3-2.7 13.3-12.1v-43.1l-9.2-6 9.2-8.3V85.4l-13.3-2.7 13.3-12.1V27.4l-9.2-5.9 9.2-8.3z"
//         />

//         <foreignObject x="25.255" y="10.21" width="293" height="112">
//           <Button
//             ref={resultRef}
//             addClass="c-button"
//             label="Resultado esperado de aprendizaje"
//             onClick={() => handleModal("result", true)}
//             hasAriaLabel
//           >
//             <Image url="assets/images/SvgMenu-1.png" alt="" noCaption />
//           </Button>
//         </foreignObject>

//         <foreignObject x="25.255" y="152.21" width="293" height="112">
//           <Button
//             ref={resultRef}
//             addClass="c-button"
//             label="Presentación"
//             onClick={() => handleModal("presentation", true)}
//             hasAriaLabel
//           >
//             <Image url="assets/images/SvgMenu-2.png" alt="" noCaption />
//           </Button>
//         </foreignObject>

//         <foreignObject x="25.255" y="294.21" width="293" height="112">
//           <Button
//             label="Actividades a desarrollar"
//             addClass="c-button"
//             hasAriaLabel
//           >
//             <Image url="assets/images/SvgMenu-3.png" alt="" noCaption />
//           </Button>
//         </foreignObject>

//         <foreignObject x="25.255" y="436.21" width="293" height="112">
//           <Button
//             label="¿Cómo navegar por este recurso?"
//             addClass="c-button"
//             hasAriaLabel
//           >
//             <Image url="assets/images/SvgMenu-4.png" alt="" noCaption />
//           </Button>
//         </foreignObject>
//       </svg>

//       <Modal
//         isOpen={open.result}
//         onClose={(state) => handleModal("result", state)}
//         finalFocusRef={resultRef}
//       >
//         <ModalContent>
//           <Row justify-content="center" align-items="center">
//             <Col xs="11" mm="10" md="9" lg="8" hd="7">
//               <p>
//                 Definir estrategias de manejo zootécnico para el control
//                 reproductivo, mediante la resolución de situaciones problémicas
//                 reales de una producción equina.
//               </p>
//             </Col>

//             <Col xs="11" mm="10" md="9" lg="5" hd="4">
//               <Image />
//             </Col>
//           </Row>
//         </ModalContent>
//       </Modal>

//       <Modal
//         isOpen={open.presentation}
//         onClose={(state) => handleModal("presentation", state)}
//         finalFocusRef={presentationRef}
//       >
//         <ModalContent>
//           <Row justify-content="center" align-items="center">
//             <Col xs="11" mm="10" md="9" addClass="u-text-justify">
//               <p className="u-my-4">
//                 Tomando las riendas de la producción equina es un recurso
//                 educativo digital, dirigido a estudiantes del programa de
//                 zootecnia. En este recurso asumirá el de criador equino y su
//                 función será visitar algunos planteles equinos para diagnosticar
//                 yeguas con síntomas de celo y formular un plan de manejo
//                 reproductivo. Para ello deberá desarrollar 7 actividades que
//                 implican el manejo de biotecnología de la reproducción.
//               </p>

//               <p>
//                 En las cinco etapas propuestas para el desarrollo del recurso
//                 pondrá a prueba sus habilidades en pro de solucionar situaciones
//                 problémicas presentadas en la cotidianidad de un sistema de
//                 producción equina.
//               </p>
//             </Col>
//           </Row>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// });

// export { SvgMenu };

import { memo, useContext } from "react";
import { Button, Image } from "UI-Components-books";

import { ViewContext } from "@components";

const SvgMenu = memo((props) => {
  const { changeView } = useContext(ViewContext);

  const handleClick = (index) => {
    changeView(index);
  };

  return (
    <svg viewBox="0 0 343.5 558.4" {...props} id="SvgMenu">
      <style>
        {"#SvgMenu .c-button { background-color: transparent; padding: 0; }"}
      </style>

      <path
        opacity={0.8}
        fill="#562c15"
        d="M343.5 0H0v24.7l10.8 9.2L0 42.1v41.1l21 4.4L0 93v70l10.8 9.2L0 180.4v41.1l21 4.4-21 5.4v72.4l10.8 9.2L0 321v41.2l21 4.3-21 5.4V442l10.8 9.2L0 459.3v41.2l21 4.3-21 5.4v48.2h343.5v-55.8l-13.3-2.7 13.3-12.1v-43.1l-9.2-6 9.2-8.3v-66.1l-13.3-2.7 13.3-12.1v-43.1l-9.2-6 9.2-8.3v-68.4l-13.3-2.7 13.3-12.1v-43.1l-9.2-6 9.2-8.3V85.4l-13.3-2.7 13.3-12.1V27.4l-9.2-5.9 9.2-8.3z"
      />

      <foreignObject x="25.255" y="10.21" width="293" height="112">
        <Button
          addClass="c-button"
          label="Resultado esperado de aprendizaje"
          hasAriaLabel
          onClick={() => {
            handleClick(1);
          }}
        >
          <Image url="assets/images/SvgMenu-1.png" alt="" noCaption />
        </Button>
      </foreignObject>

      <foreignObject x="25.255" y="152.21" width="293" height="112">
        <Button
          addClass="c-button"
          label="Presentación"
          hasAriaLabel
          onClick={() => {
            handleClick(2);
          }}
        >
          <Image url="assets/images/SvgMenu-2.png" alt="" noCaption />
        </Button>
      </foreignObject>

      <foreignObject x="25.255" y="294.21" width="293" height="112">
        <Button
          label="Actividades a desarrollar"
          addClass="c-button"
          hasAriaLabel
          onClick={() => {
            handleClick(3);
          }}
        >
          <Image url="assets/images/SvgMenu-3.png" alt="" noCaption />
        </Button>
      </foreignObject>

      <foreignObject x="25.255" y="436.21" width="293" height="112">
        <Button
          label="¿Cómo navegar por este recurso?"
          addClass="c-button"
          hasAriaLabel
        >
          <Image url="assets/images/SvgMenu-4.png" alt="" noCaption />
        </Button>
      </foreignObject>
    </svg>
  );
});

export { SvgMenu };
