import { TYPES } from '../types/types'

const UPDATE_STATE_BY_ACTION = {
  [TYPES.SAVE_ACTIVITY]: (state, payload) => {
    const { activity, stage } = payload

    const updatedState = state.map(item => {
      if (item.stage !== stage) {
        return item
      }

      const updatedActivities = [
        ...item.activities,
        { ...activity }
      ]

      return {
        ...item,
        activities: updatedActivities
      }
    })

    return updatedState
  },
  [TYPES.SAVE_PLAN]: (state, payload) => {
    const { plan, stage } = payload
    const newAnswer = plan.answers[0]

    const updatedState = state.map((item) => {
      if (item.stage !== stage) {
        return item
      }

      const updatedPlan = {
        ...plan,
        answers: [
          ...item.plan.answers.filter(answer => answer.id !== newAnswer.id),
          newAnswer
        ]
      }

      return {
        ...item,
        plan: updatedPlan
      }
    })

    return updatedState
  },
  [TYPES.COMPLETE_STAGE]: (state, payload) => {
    const { stage } = payload

    const updatedState = state.map(item => {
      if (item.stage === stage) {
        return {
          ...item,
          completed: true
        }
      }

      return item
    })

    return updatedState
  },
  [TYPES.ACTIVE_NAVIGATE]: (state, payload) => {
    const currentStageIndex =
      state.findIndex((item) => item.stage === payload) + 1

    if (currentStageIndex < state.length && currentStageIndex >= 0) {
      return [
        ...state.slice(0, currentStageIndex),
        { ...state[currentStageIndex], navigate: true },
        ...state.slice(currentStageIndex + 1)
      ]
    }

    return state
  }
}

export const activityReducer = (state, { type, payload }) => {
  const updateState = UPDATE_STATE_BY_ACTION[type]
  return updateState ? updateState(state, payload) : state
}
