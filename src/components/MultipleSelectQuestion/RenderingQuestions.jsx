import { useContext, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { CheckBox } from '@UI-components/';
import { ParentContainerContext } from './ParentContainer';

import css from './RenderingQuestions.module.css';

export const RenderingQuestions = ({
  mainOBJ,
  num,
  addClass,
  addTitleClass,
  addQuestionsClass,
  addInputClass
}) => {
  const {
    selectValues,
    activity: { validation, options: cacheOptions },
    addNewRef
  } = useContext(ParentContainerContext);

  /**
   * Necesitamos obtener la referencia del input
   * para luego pasarla en la función addNewRef proveniente
   * del context.
   */
  const refInput = useRef();

  useEffect(() => {
    // Agregamos al Referencia a la función addNewRef si está existe
    refInput.current && addNewRef(refInput.current);

    return () => {
      // Limpiamos la referencia al desmontar el componente
      refInput.current = null;
    };
  }, [refInput]);

  const getValorInput = (check, value) => {
    const option = cacheOptions?.find(({ id }) => id === check);
    return validation && option?.text === value;
  };

  return mainOBJ.map(({ id, questionTitle, options }) => {
    return (
      <fieldset className={`${css.fieldset} ${addClass ?? ''}`} key={id}>
        <legend className={`${css['question-title']} ${addTitleClass ?? ''}`}>
          {questionTitle}
        </legend>

        <ol
          key={id}
          role="list"
          id={`question-${id}`}
          data-instance="js-render-radio-question"
          style={num && { '--counter-list': 'decimal' }}
          className={`${css['c-questions']} ${addQuestionsClass ?? ''}`}>
          {options.map(({ answer, state }, index) => {
            return (
              <li className={css['c-input']} key={`num-${index}`}>
                <span aria-hidden="true" className={css['c-number']}></span>
                <CheckBox
                  ref={refInput}
                  key={`option-${index}`}
                  id={`opt.${id}.${index + 1}`}
                  type="radio"
                  name={`question-${id}`}
                  addClass={addInputClass ?? ''}
                  label={answer}
                  value={state}
                  defaultChecked={getValorInput(`question-${id}`, answer)}
                  state={validation ? state : 'normal'}
                  onChange={(value) => selectValues(`question-${id}`, { ...value, text: answer })}
                  isDisabled={validation}
                />
              </li>
            );
          })}
        </ol>
      </fieldset>
    );
  });
};

RenderingQuestions.propTypes = {
  mainOBJ: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      questionTitle: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          answer: PropTypes.string,
          state: PropTypes.oneOf(['right', 'wrong'])
        })
      )
    }).isRequired
  ).isRequired,
  num: PropTypes.bool,
  addClass: PropTypes.string,
  addTitleClass: PropTypes.string,
  addQuestionsClass: PropTypes.string
};
