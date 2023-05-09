import { useReducer, createContext, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useActivity } from '@hooks'

// Creación del contexto
export const PlanGroupContext = createContext()

/**
 * date: 05/08/2023
 * author:  Books&Books
 * description:  Componente utilizado para la actividad plan.
 * attributes:
 *  - id: Identificador de la actividad.
 *  - title: titulo de la actividad plan.
 *  - children: Hijos del componente.
 *  - onlyCheckbox: Propiedad usada para solo utilizar los checkbox en la actividad.
 */

export const PlanGroup = ({ id, title, children, onlyCheckbox }) => {
  const { setPlan, getPlan } = useActivity()
  const localStoragePlan = useMemo(() => getPlan(), [])

  const [plan, updatedPlan] = useReducer(
    (prev, next) => {
      return { ...prev, ...next }
    },
    {
      enable: [],
      select: {
        key: '',
        value: ''
      },
      load: []
    }
  )

  /**
   * Función usada para comprobrar
   * si un 'id' existe en el la propiedad 'enable'
   * del estado.
   * @param {string} id
   * @returns {Boolean}
   */
  const validation = (id) => plan.enable.includes(id)

  /**
   * Usado para obtener el valor
   * de los elementos 'select' seleccionados.
   * @param {object} param0
   */
  const handleSectionChange = ({ id: idSelect, key, value }) => {
    const newSection = { id: idSelect, key, value }

    updatedPlan(newSection)
    updatedLocalStorage(newSection)
  }

  /**
   * Usado para obtener el valor
   * del elemento 'checkbox'.
   * @param {object} value
   */
  const handleCheck = ({ value }) => {
    const { enable } = plan

    const updatedEnable = enable.includes(value)
      ? enable.filter(id => id !== value)
      : [...enable, value]

    updatedPlan({ enable: updatedEnable })

    if (onlyCheckbox) {
      updatedLocalStorage({ id: value })
    }
  }

  /**
   * Guarda el estado del componente
   * en el estado global y localStorage.
   * @param {object} value
   */
  const updatedLocalStorage = (value) => {
    // Obtiene la pregunta de la actividad.
    const getQuestion = document.querySelector(`label[for='${value.id}']`).innerText

    setPlan({
      plan: id,
      title,
      answers: [{ question: getQuestion, ...value }]
    })
  }

  /**
   * Efecto utilizado para cargar la actividad,
   * desde el localStorage solo si está existe.
   */
  useEffect(() => {
    if (Object.keys(localStoragePlan).length === 0) return

    const listKeyToLoad = localStoragePlan.answers.reduce(
      (list, item) => [...list, { id: item.id, key: item.key }],
      []
    )

    updatedPlan({
      load: listKeyToLoad
    })
  }, [localStoragePlan])

  return (
    <PlanGroupContext.Provider
      value={{ validation, handleCheck, handleSectionChange, load: plan.load }}
    >
      {children}
    </PlanGroupContext.Provider>
  )
}

PlanGroup.propTypes = {
  onlyCheckbox: false
}

PlanGroup.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  onlyCheckbox: PropTypes.bool
}
