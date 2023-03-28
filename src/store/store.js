import { create } from 'zustand'
import { activitiesReducer } from './reducer'

const mockActivity = [
  {
    stage: 'Etapa 1',
    activities: [{
      activity: 'Actividad 1',
      points: 2,
      completed: true,
      answer: [{}]
    }],
    completed: true
  }
]

const useActivityStore = create((set) => ({
  activities: mockActivity,
  dispatch: (args) => set((state) => activitiesReducer(state, args))
}))

export const dispatch = useActivityStore((state) => state.dispatch)
