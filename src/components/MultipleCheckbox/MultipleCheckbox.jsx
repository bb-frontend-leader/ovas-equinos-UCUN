import { createContext, useCallback, useRef, useState, useEffect } from "react";
// import { useLevelMap } from "@hooks";
import PropTypes from "prop-types";

// import css from './MultipleCheckbox.module.css';

export const MultipleCheckboxContext = createContext();

export const MultipleCheckbox = ({ id, children, onResult, addClass }) => {
  const optRef = useRef([]);
  const [opciones, setOpciones] = useState({});
  const [optionCorrect, setOptionCorrect] = useState([]);
  const [disabledButton, setDisabledButton] = useState(false);
  const [validationState, setValidationState] = useState(false);
  const [saveState, setSaveState] = useState(false);
  const [answers, setAnswers] = useState([]);
  // const { level, setActivityComplete } = useLevelMap();

  const setOptRef = useCallback(
    (newRef) => {
      optRef.current = [...optRef.current, newRef];
    },
    [optRef]
  );

  const onChangeHandle = (select) => {
    const currentSelectOpt = optRef.current.filter(
      (item) => item.id === select.id
    );
    setOpciones({
      ...opciones,
      [currentSelectOpt[0].dataset.groupId]: [
        ...(opciones[currentSelectOpt[0].dataset.groupId].includes(
          currentSelectOpt[0]
        )
          ? opciones[currentSelectOpt[0].dataset.groupId].filter(
              (opt) => opt.id !== select.id
            )
          : [
              ...opciones[currentSelectOpt[0].dataset.groupId],
              currentSelectOpt[0],
            ]),
      ],
    });
  };

  const onClickHandle = () => {
    setDisabledButton(true);
    setValidationState(true);
    setSaveState(true);

    const opcionesCorrectas = Object.values(opciones)
      .flat()
      .filter((item) => item.dataset.check === "right").length;
    const allOptionCorrect = Object.values(opciones).flat().length;
    if (onResult) {
      onResult(
        opcionesCorrectas === optionCorrect &&
          allOptionCorrect === optionCorrect
      );
    }
  };

  // useEffect(() => {
  //   if (saveState) {
  //     let result = [];
  //     for (const key in opciones) {
  //       const elements = opciones[key];
  //       const itemsRes = elements?.map((element) => {
  //         return {
  //           id: element.id,
  //           idGroup: element.getAttribute("data-group-id"),
  //           dataCheck: element.getAttribute("data-check"),
  //         };
  //       });
  //       result = [...result, ...itemsRes];
  //     }
  //     setActivityComplete({ key: id, answer: true, answers: result });
  //   }
  // }, [saveState]);

  // useEffect(() => {
  //   if (level) {
  //     const { activities } = level;
  //     const currentActivity = activities?.find((item) => item.key === id) || {};

  //     if (currentActivity?.answers?.length > 0) {
  //       setAnswers(currentActivity?.answers);
  //       setDisabledButton(true);
  //       setValidationState(true);
  //     }
  //   }
  // }, [level]);

  return (
    <>
      <MultipleCheckboxContext.Provider
        value={{
          onChangeHandle,
          onClickHandle,
          setOptRef,
          setOpciones,
          setOptionCorrect,
          validationState,
          setValidationState,
          disabledButton,
          setDisabledButton,
          answers,
        }}
      >
        <div className={`${addClass}`}>{children}</div>
      </MultipleCheckboxContext.Provider>
    </>
  );
};

MultipleCheckbox.propTypes = {
  id: PropTypes.string,
  addClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.node,
  ]),
  onResult: PropTypes.func,
};
