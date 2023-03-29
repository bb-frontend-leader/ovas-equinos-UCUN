import { useReducer, useRef, createContext } from 'react'
import PropTypes from 'prop-types'

import { DragAndDrop } from 'UI-Components-books'

export const DragValidationContext = createContext()

export const DragValidation = ({ children, points, onResult }) => {
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
  }

  return (
    <DragValidationContext.Provider value={{ validate, activity }}>
      <DragAndDrop validate={activity.validation} onValidate={onNewDrag}>
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
  onResult: PropTypes.func
}
