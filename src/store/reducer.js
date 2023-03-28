import { TYPES } from '../types/types'

export const activitiesReducer = (state, { type, payload }) => {
  switch (type) {
    case TYPES.SAVE_ACTIVITY:
      return [...state.filter(activity => activity.name !== payload.name), ...payload]
    default:
      return state
  }
}
