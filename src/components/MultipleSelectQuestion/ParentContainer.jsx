import { createContext, useEffect, useReducer, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useLevelMap } from '@CORE-hooks';

export const ParentContainerContext = createContext();

const CORRECT_STATE = 'right';

export const ParentContainer = ({ keyActivity, children, onResult }) => {
  const { pathname } = useLocation();
  const { level, setActivityComplete } = useLevelMap(pathname);
  const [verified, setVerified] = useState(false);
  const [activity, updatedActivity] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    {
      validation: false,
      button: true,
      result: false,
      options: []
    }
  );

  const optionsRef = useRef([]);

  const addNewRef = (ref) => {
    optionsRef.current = [...optionsRef.current, ref];
  };

  /**
   * Creada para almacenar los radio seleccionados,
   * se crea un nuevo objecto con el id de la pregunta y el valor del radio.
   *
   * @param {String} id - id de la pregunta.
   * @param {Object} value - valor del radio seleccionado.
   */
  const selectValues = (id, { value, text }) => {
    updatedActivity({
      options: [...activity.options.filter((option) => option.id !== id), { id, value, text }]
    });
  };

  /**
   * Se usa para la validación de toda la actividad,
   * está se encarga de comprobrar que el número de opciones
   * seleccionadas se igual al total de las correctas.
   */
  const validate = () => {
    updatedActivity({ validation: true, button: true });

    let newResult;

    const rightOptions = activity.options.filter((option) => option.value === CORRECT_STATE);

    rightOptions.length === activity.options.length
      ? (newResult = true)
      : (newResult = activity.result);

    // Enviamos el resultado a la propiedad onResult si está existe.
    if (onResult) {
      onResult({ result: newResult });
    }

    updatedActivity({ result: newResult });
    setActivityComplete({ key: keyActivity, answer: newResult, answers: activity.options });
  };

  useEffect(() => {
    if (level) {
      const { activities } = level;
      const currentActivity = activities?.find((item) => item.key === keyActivity) || {};
      if (currentActivity?.answers?.length) {
        setVerified(true);
        updatedActivity({
          button: true,
          validation: true,
          result: currentActivity.answer,
          options: currentActivity.answers
        });
      }
    }
  }, [level]);

  /**
   * Usado para observar los cambios en la propiedad options del estado Activity.
   * esto con el fin del que si el total de opciones seleccionadas es igual al total de preguntas,
   * entonces active el botón que inicia la comprobación.
   */
  useEffect(() => {
    if (!activity.options.length) return;

    if (optionsRef.current.length === activity.options.length) {
      updatedActivity({ button: verified });
    }
  }, [activity.options]);

  return (
    <ParentContainerContext.Provider
      value={{ validate, selectValues, activity, updatedActivity, addNewRef }}>
      {children}
    </ParentContainerContext.Provider>
  );
};

ParentContainer.propTypes = {
  keyActivity: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.node
  ]),
  onResult: PropTypes.func
};
