import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { activityReducer } from './reducer'

const LOCAL_STORAGE_NAME = 'unad-storage'

const initialState = [
  {
    stage: 'stage-1',
    activities: [],
    completed: false,
    totalActivities: 1
  },
  {
    stage: 'stage-2',
    activities: [],
    completed: false,
    totalActivities: 2
  },
  {
    stage: 'stage-3',
    activities: [],
    completed: false,
    totalActivities: 2
  },
  {
    stage: 'stage-4',
    activities: [],
    completed: false,
    totalActivities: 1
  },
  {
    stage: 'stage-5',
    activities: [],
    completed: false,
    totalActivities: 1
  }
]

export const useActivityStore = create(
  devtools(
    persist(
      (set) => (
        {
          activities: initialState,
          dispatch: (args) => {
            set((state) => ({ activities: [...activityReducer(state.activities, args)] }))
          }
        }
      ),
      {
        name: LOCAL_STORAGE_NAME,
        storage: createJSONStorage(() => window.localStorage)
      }
    )
  )
)
