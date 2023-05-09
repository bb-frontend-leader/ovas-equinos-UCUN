import { useRef } from 'react'
import { useActivityStore } from '@store/store'
import { TYPES } from '@/types/types'

const STAGE_REGEX = /stage-\d+/i

export const useActivity = () => {
  // Utiliza una referencia para almacenar el valor actual de la URL de la página web
  const currentStage = useRef(
    (window.location.href.match(STAGE_REGEX) || [''])[0]
  )

  // Obtiene el estado del almacenamiento de actividad y su función 'dispatch'
  const dispatch = useActivityStore.getState().dispatch

  // Obtiene el objeto de la etapa actual utilizando la función 'find()'
  const getCurrentStageObject = (stage) => {
    const activities = useActivityStore.getState().activities
    return activities.find((object) => object.stage === stage)
  }

  // Asigna una actividad a una etapa especificada
  const setActivity = async (activity) => {
    // Almacena la actividad actual en el almacenamiento utilizando la acción 'SAVE_ACTIVITY'
    await dispatch({
      type: TYPES.SAVE_ACTIVITY,
      payload: {
        stage: currentStage.current,
        activity
      }
    })

    // Verifica si se han completado todas las actividades de la etapa actual y actualiza su estado si es así
    setCompleteStage()
  }

  // Asigna un plan a una etapa especificada
  const setPlan = (plan) => {
    // Almacena el plan actual en el almacenamiento utilizando la acción 'SAVE_PLAN'
    dispatch({
      type: TYPES.SAVE_PLAN,
      payload: {
        stage: currentStage.current,
        plan
      }
    })
  }

  // Verifica si se han completado todas las actividades de la etapa actual y actualiza su estado si es así
  const setCompleteStage = () => {
    const { activities, totalActivities } = getCurrentStageObject(
      currentStage.current
    )

    if (activities.length !== totalActivities) return

    // Actualiza el estado de la etapa actual a 'completo' utilizando la acción 'COMPLETE_STAGE'
    dispatch({
      type: TYPES.COMPLETE_STAGE,
      payload: { stage: currentStage.current }
    })

    // Navega a la siguiente etapa
    setNavigate(currentStage.current)
  }

  // Navega a una etapa especificada
  const setNavigate = (stage) => {
    // Actualiza el estado de navegación utilizando la acción 'ACTIVE_NAVIGATE'
    dispatch({
      type: TYPES.ACTIVE_NAVIGATE,
      payload: stage
    })
  }

  // Obtiene un objeto con el estado de completitud de todas las etapas
  const getStagesComplete = () => {
    const activities = useActivityStore.getState().activities

    // Reduce el objeto de actividades a un objeto con el estado de completitud de cada etapa
    return activities.reduce((object, { stage, completed }) => {
      const stageWithoutDash = stage.replace('-', '')
      return { ...object, [stageWithoutDash]: { completed } }
    }, {})
  }

  // Obtiene el plan actual de la etapa actual
  const getPlan = () => {
    const { plan = {} } = getCurrentStageObject(currentStage.current)
    return plan
  }

  // Obtiene una actividad específica utilizando su identificador
  const getActivity = (id) => {
    const { activities } = getCurrentStageObject(currentStage.current)
    const activity = activities.find((item) => item.activity === id) ?? {}

    return { ...activity }
  }

  // Obtiene un objeto con todos los puntos de actividad para todas las actividades
  const getAllActivityPoints = () => {
    const activities = useActivityStore.getState().activities

    // se utiliza la función reduce para obtener un objeto que contenga los puntos acumulados por actividad
    const mergedActivities = activities.reduce((merged, { activities }) => {
      const newActivities = activities.reduce((acc, { activity, points }) => {
        // se elimina el caracter '_' de cada nombre de actividad para poder utilizarlo como propiedad en el objeto.
        const newActivity = activity.replace('_', '')
        return { ...acc, [newActivity]: points }
      }, {})

      return { ...merged, ...newActivities }
    }, {})

    return mergedActivities
  }

  // Obtiene una lista con todos los planes.
  const getAllPlan = () => {
    const activities = useActivityStore.getState().activities

    // se utiliza la función map para obtener un array de objetos con los planes de cada actividad.
    const mergedPlans = activities.map(({ plan }) => {
      const answers = plan.answers.map(({ question, value }) => ({
        id: window.crypto.randomUUID(), // se genera un identificador únic
        question,
        answer: value ?? question // si el valor de la respuesta es null o undefined, se utiliza la pregunta como valor de la respuesta
      }))
      return { title: plan.title, answers }
    })

    return mergedPlans
  }

  return {
    setPlan,
    getPlan,
    setActivity,
    getActivity,
    getStagesComplete,
    getAllActivityPoints,
    getAllPlan,
    getCurrentStageObject
  }
}
