import { createContext, useReducer, useRef, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useActivity } from '@hooks'

export const SelectGroupContext = createContext()

export const SelectGroup = ({ id, children, onResult, minSelected }) => {
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

  const optionsRef = useRef([])

  const addNewRef = (ref) => {
    optionsRef.current = [...optionsRef.current, ref]
  }

  /**
   * Creada para almacenar el radio seleccionado,
   * se crea un nuevo objecto con el id de la pregunta y el valor del checkbox.
   *
   * @param {String} id - id de la pregunta.
   * @param {Object} value - valor del radio seleccionado.
   */
  const selectValues = ({ id, value, option, points }) => {
    updatedActivity({
      options: [
        ...activity.options.filter((option) => option.id !== id),
        { id, value, option, points }
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
      (option) => option.value === true
    )

    const sumPoints = correctOptions.reduce(
      (acc, { points }) => acc + points,
      0
    )

    const newResult = {
      ...activity.result,
      points: sumPoints,
      validate: correctOptions.length === activity.options.length
    }

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
      result: {
        validate: false,
        points: level.points
      },
      options: [...level.answers],
      load: level.state.load
    })
  }, [level])

  return (
    <SelectGroupContext.Provider
      value={{ validate, selectValues, activity, updatedActivity, addNewRef }}
    >
      {children}
    </SelectGroupContext.Provider>
  )
}

SelectGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node)
  ]),
  onResult: PropTypes.func,
  minSelected: PropTypes.number.isRequired,
  id: PropTypes.string
}
