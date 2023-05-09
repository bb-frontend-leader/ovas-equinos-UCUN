import { TYPES } from '../types/types'

const UPDATE_STATE_BY_ACTION = {
  // Actualizar el estado con una nueva actividad
  [TYPES.SAVE_ACTIVITY]: (state, payload) => {
    const { activity, stage } = payload

    // Se filtra la matriz state para encontrar el objeto con el 'stage' correspondiente
    const updatedState = state.map(item => {
      if (item.stage !== stage) {
        return item
      }

      // Se agrega una nueva actividad al objeto encontrado en el paso anterior
      const updatedActivities = [
        ...item.activities,
        { ...activity }
      ]

      // Se devuelve el objeto actualizado con la nueva actividad
      return {
        ...item,
        activities: updatedActivities
      }
    })

    // Se devuelve la matriz state actualizada
    return updatedState
  },
  // Actualizar el estado con un nuevo plan
  [TYPES.SAVE_PLAN]: (state, payload) => {
    const { plan, stage } = payload
    const newAnswer = plan.answers[0]

    // Se filtra la matriz state para encontrar el objeto con el 'stage' correspondiente
    const updatedState = state.map((item) => {
      if (item.stage !== stage) {
        return item
      }

      // Se actualiza el plan con la nueva respuesta
      const updatedPlan = {
        ...plan,
        answers: [
          ...item.plan.answers.filter(answer => answer.id !== newAnswer.id),
          newAnswer
        ]
      }

      // Se devuelve el objeto actualizado con el nuevo plan
      return {
        ...item,
        plan: updatedPlan
      }
    })

    // Se devuelve la matriz state actualizada
    return updatedState
  },
  // Marcar una etapa como completada
  [TYPES.COMPLETE_STAGE]: (state, payload) => {
    const { stage } = payload

    // Se filtra la matriz state para encontrar el objeto con el 'stage' correspondiente
    const updatedState = state.map(item => {
      if (item.stage === stage) {
        return {
          ...item,
          completed: true
        }
      }

      // Se devuelve el objeto sin cambios si no coincide con el 'stage' especificado
      return item
    })

    // Se devuelve la matriz state actualizada
    return updatedState
  },
  // Activar la navegación para una etapa específica
  [TYPES.ACTIVE_NAVIGATE]: (state, payload) => {
    // Se encuentra el índice de la etapa actual en la matriz state
    const currentStageIndex =
      state.findIndex((item) => item.stage === payload) + 1

    // Si el índice es válido, se activa la navegación para la etapa
    if (currentStageIndex < state.length && currentStageIndex >= 0) {
      return [
        ...state.slice(0, currentStageIndex),
        { ...state[currentStageIndex], navigate: true },
        ...state.slice(currentStageIndex + 1)
      ]
    }

    // Se devuelve la matriz state sin cambios si el índice no es válido
    return state
  }
}

export const activityReducer = (state, { type, payload }) => {
  const updateState = UPDATE_STATE_BY_ACTION[type]
  return updateState ? updateState(state, payload) : state
}
