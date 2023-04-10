import { createContext, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'

export const CheckBoxGroupContext = createContext()

const CORRECT_STATE = 'right'

export const CheckBoxGroup = ({ children, onResult, minSelected }) => {
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
      options: []
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
   * Se usa para la validación de toda la actividad,
   * está se encarga de comprobrar que el número de opciones
   * seleccionadas se igual al total de las correctas.
   */
  const validate = () => {
    updatedActivity({ validation: true, button: true })

    const correctOptions = activity.options.filter(
      (option) => option.value === CORRECT_STATE
    )
    const sumPoints = activity.options.reduce(
      (acc, { points }) => points === 0 && acc > 0 ? points - acc : acc + points,
      0
    )

    console.log(sumPoints, correctOptions.length)

    const newResult = { ...activity.result, points: correctOptions.length > 0 ? sumPoints : 0 }

    correctOptions.length === activity.options.length &&
      (newResult.validate = true)

    // Enviamos el resultado a la propiedad onResult si está existe.
    if (onResult) {
      onResult({ result: newResult })
    }

    updatedActivity({ result: newResult })
  }

  /**
   * Usado para observar los cambios en la propiedad options del estado Activity.
   * esto con el fin del que si el total de opciones seleccionadas es igual al total de preguntas,
   * entonces active el botón que inicia la comprobación.
   */
  useEffect(() => {
    if (!activity.options.length) return

    if (
      minSelected === activity.options.length &&
      !activity.validation
    ) {
      updatedActivity({ button: false })
    }
  }, [activity.options])

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
  minSelected: PropTypes.number.isRequired
}
