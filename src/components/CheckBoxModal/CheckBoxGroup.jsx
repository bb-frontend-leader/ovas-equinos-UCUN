import { createContext, useReducer, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useActivity } from '@hooks'

export const CheckBoxGroupContext = createContext()

const CORRECT_STATE = 'right'

export const CheckBoxGroup = ({ id, children, onResult, minSelected }) => {
  const { setActivity, getActivity } = useActivity()
  const level = useMemo(() => getActivity(id), [id])

  const [activity, updatedActivity] = useReducer(
    (prev, next) => {
      return { ...prev, ...next }
    },
    {
      validation: false,
      button: true,
      result: {
        validate: false,
        points: 0
      },
      options: [],
      load: false
    }
  )

  /**
   * Creada para almacenar los checkbox seleccionados,
   * se crea un nuevo objecto con el id de la pregunta y el valor del checkbox.
   *
   * @param {String} id - id de la pregunta.
   * @param {Object} value - valor del checkbox seleccionado.
   */
  const checkboxValues = ({ id, value, points }) => {
    updatedActivity({
      options: [
        ...activity.options.filter((option) => option.id !== id),
        { id, value, points }
      ]
    })
  }

  /**
   * Función utilizada para calcular
   * la suma de puntos de la actividad.
   * @param {object[]} options
   * @returns {number}
   */
  const calculateSumPoints = (options) => {
    // Usa la función reduce para sumar los puntos de las opciones
    const sumPoints = options.reduce((acc, option) => {
      const { points } = option
      return acc + points
    }, 0)
    // Devuelve la suma de puntos, asegurándote de que no sea negativa
    return sumPoints < 0 ? 0 : sumPoints
  }

  /**
   * Función usada para calcular el resultado
   * de la actividad.
   * @param {object} activity
   * @returns {object}
   */
  const calculateNewResult = (activity) => {
    // Usa la función filter para obtener las opciones correctas
    const correctOptions = activity.options.filter(
      (option) => option.value === CORRECT_STATE
    )

    // Usa la función calculateSumPoints para calcular la suma de puntos
    const sumPoints = calculateSumPoints(activity.options)

    // Crea un objeto nuevo sin modificar el objeto original
    const newResult = {
      ...activity.result,
      points: correctOptions.length > 0 ? sumPoints : 0,
      validate: correctOptions.length === activity.options.length
    }
    return newResult
  }

  /**
   * Se usa para la validación de toda la actividad,
   * está se encarga de comprobrar que el número de opciones
   * seleccionadas se igual al total de las correctas.
   */
  const validate = () => {
    updatedActivity({ validation: true, button: true })

    // Calcula el nuevo resultado
    const newResult = calculateNewResult(activity)

    // Enviamos el resultado a la propiedad onResult si está existe.
    if (onResult) {
      onResult({ result: newResult })
    }

    // Actualiza la actividad con el nuevo resultado
    updatedActivity({ result: newResult })

    setActivity({
      activity: id,
      points: newResult.points,
      state: { validation: true, load: true },
      answers: [...activity.options]
    })
  }

  /**
   * Usado para observar los cambios en la propiedad options del estado Activity.
   * esto con el fin del que si el total de opciones seleccionadas es igual al total de preguntas,
   * entonces active el botón que inicia la comprobación.
   */
  useEffect(() => {
    if (!activity.options.length) return

    if (minSelected === activity.options.length && !activity.validation) {
      updatedActivity({ button: false })
    }
  }, [activity.options])

  /**
   * Efecto utilizado para cargar la actividad,
   * desde el localStorage solo si está existe.
   */
  useEffect(() => {
    if (Object.keys(level).length === 0) return

    updatedActivity({
      validation: level.state.validation,
      button: true,
      result: {
        validate: false,
        points: level.points
      },
      options: [...level.answers],
      load: level.state.load
    })
  }, [level])

  return (
    <CheckBoxGroupContext.Provider
      value={{ validate, checkboxValues, activity, updatedActivity }}
    >
      {children}
    </CheckBoxGroupContext.Provider>
  )
}

CheckBoxGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  onResult: PropTypes.func,
  minSelected: PropTypes.number,
  id: PropTypes.string
}
