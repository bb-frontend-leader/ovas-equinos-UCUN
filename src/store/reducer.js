import { TYPES } from '../types/types'

const UPDATE_STATE_BY_ACTION = {
  [TYPES.SAVE_ACTIVITY]: (state, payload) => {
    const { activity, stage } = payload

    return [
      ...state.map((item) =>
        item.stage === stage
          ? { ...item, activities: [...item.activities, { ...activity }] }
          : item
      )
    ]
  },
  [TYPES.COMPLETE_STAGE]: (state, payload) => {
    const { stage } = payload

    return [
      ...state.map((item) =>
        item.stage === stage ? { ...item, completed: true } : item
      )
    ]
  }
}

export const activityReducer = (state, { type, payload }) => {
  const updateState = UPDATE_STATE_BY_ACTION[type]
  return updateState ? updateState(state, payload) : state
}
