import { useContext, useEffect } from "react";
import { MultipleCheckboxContext } from "./MultipleCheckbox";
import { CheckBox } from "UI-Components-books";
import css from "./MultipleCheckbox.module.css";

export function MultipleCheckboxOption({
  mainOBJ,
  num,
  addClass,
  addTitleClass,
  addClassContainer,
  addQuestionsClass,
}) {
  const {
    setOptRef,
    onChangeHandle,
    setOpciones,
    setOptionCorrect,
    disabledButton,
    validationState,
    answers,
  } = useContext(MultipleCheckboxContext);

  useEffect(() => {
    if (mainOBJ) {
      setOpciones(
        mainOBJ.reduce(
          (list, option) => ({ ...list, [`group-${option.id}`]: [] }),
          {}
        )
      );

      setOptionCorrect(
        mainOBJ.reduce(
          (total, question) =>
            question.options.filter((option) => option.state === "right")
              .length + total,
          0
        )
      );
    }
  }, [mainOBJ]);

  return mainOBJ.map(({ id, questionTitle, options }, index) => (
    <fieldset
      className={`${css[" fieldset "]} ${addClassContainer ?? ""}`}
      key={index}
    >
      <legend
        className={` u-font-bold u-text-primary-800 u-text-center u-mx-auto ${
          css["question-title"]
        } ${addTitleClass ?? ""}`}
      >
        {questionTitle}
      </legend>
      <ol
        style={num && { "--counter-list": "decimal" }}
        id={`question-${id}`}
        key={id}
        className={`${css["c-questions"]} ${css["c-ol-container"]} ${
          addQuestionsClass ?? ""
        }`}
        role="list"
      >
        {options.map(({ answer, state }, index) => (
          <li className={css["c-input"]} key={`num-${index}`}>
            <span aria-hidden="true" className={css["c-number"]}></span>
            <CheckBox
              addClass={addClass}
              type="checkbox"
              data-group-id={`group-${id}`}
              name={`question-${id}`}
              key={`option-${index}`}
              id={`opt.${id}.${index + 1}`}
              ref={setOptRef}
              label={answer}
              data-check={state}
              state={validationState ? state : "normal"}
              onChange={onChangeHandle}
              isDisabled={disabledButton}
              defaultChecked={
                answers.filter(
                  (item) =>
                    item.idGroup === `group-${id}` &&
                    item.id === `opt.${id}.${index + 1}`
                ).length > 0
              }
              inherit
            />
            {/* {console.log(
              answers.find(
                (item) => item.idGroup === `group-${id}` && item.id === `opt.${id}.${index + 1}`
              )
            )} */}
          </li>
        ))}
      </ol>
    </fieldset>
  ));
}
