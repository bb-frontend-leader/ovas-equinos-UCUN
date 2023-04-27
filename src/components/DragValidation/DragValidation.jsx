import { useReducer, useRef, createContext, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'

import { DragAndDrop } from 'UI-Components-books'
import { useActivity } from '@hooks'

export const DragValidationContext = createContext()

export const DragValidation = ({ id, children, points, onResult }) => {
  const { setActivity, getActivity } = useActivity()
  const level = useMemo(() => getActivity(id), [id])

  const [activity, updatedActivity] = useReducer(
    (prev, next) => {
      return { ...prev, ...next }
    },
    {
      validation: false,
      button: true,
      result: 0
    }
  )

  const dragsList = useRef([])
  const storageDndState = useRef({})

  const onNewDrag = ({ validate: drags, active }) => {
    dragsList.current = [...drags]

    if (active && activity.button) {
      updatedActivity({ button: !activity.button })
    }
  }

  /**
   * Se usa para la validación de toda la actividad,
   * está se encarga de comprobrar que el número de opciones
   * seleccionadas se igual al total de las correctas.
   */
  const validate = () => {
    updatedActivity({ validation: true, button: true })

    const newResult = dragsList.current.reduce((acc, _) => acc + points, 0)

    if (onResult) {
      onResult({ result: newResult })
    }

    updatedActivity({ result: newResult })

    setActivity({
      activity: id,
      points: newResult,
      state: { validation: true },
      answers: [{ ...storageDndState.current }]
    })
  }

  const onState = ({ state }) => {
    storageDndState.current = {
      ...state.newObjectState
    }
  }

  /**
   * Efecto utilizado para cargar la actividad,
   * desde el localStorage solo si está existe.
   */
  useEffect(() => {
    if (Object.keys(level).length === 0) return

    if (Object.keys(storageDndState.current).length === 0) {
      storageDndState.current = { ...level.answers[0] }
    }

    updatedActivity({
      validation: level.state.validation,
      result: level.points
    })
  }, [level])

  return (
    <DragValidationContext.Provider value={{ validate, activity }}>
      <DragAndDrop
        id={id}
        onState={onState}
        validate={activity.validation}
        onValidate={onNewDrag}
        defaultState={{ ...storageDndState.current }}
      >
        {children}
      </DragAndDrop>
    </DragValidationContext.Provider>
  )
}

DragValidation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  points: PropTypes.number.isRequired,
  onResult: PropTypes.func,
  id: PropTypes.string.isRequired
}
