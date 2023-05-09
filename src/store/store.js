import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { activityReducer } from './reducer'

// Nombre del objeto en el localStorage.
const LOCAL_STORAGE_NAME = 'unad-storage'

/**
 * Estado inicial global.
 * Este contiene un objeto por cada 'stage' con las siguiente
 * propiedades:
 *
 * {
 *  stage: 'stage-1' // Nombre del Stage.
 *  activities: [] // Matríz de actividades.
 *  completed: false // Boolean que informa si todas las activades del stage se realizaron.
 *  totalActivities: 1 // Número de activades que tiene el stage.
 *  navigate: true // Boolean para habilitar la navegación hacia el stage.
 *  plan: { answers: [] } // Objeto utilizado para almacenar las respuesta de la activada 'plan' de cada stage.
 * }
 *
 */
const initialState = [
  {
    stage: 'stage-1',
    activities: [],
    completed: false,
    totalActivities: 1,
    navigate: true,
    plan: { answers: [] }
  },
  {
    stage: 'stage-2',
    activities: [],
    completed: false,
    totalActivities: 2,
    navigate: false,
    plan: { answers: [] }
  },
  {
    stage: 'stage-3',
    activities: [],
    completed: false,
    totalActivities: 2,
    navigate: false,
    plan: { answers: [] }
  },
  {
    stage: 'stage-4',
    activities: [],
    completed: false,
    totalActivities: 1,
    navigate: false,
    plan: { answers: [] }
  },
  {
    stage: 'stage-5',
    activities: [],
    completed: false,
    totalActivities: 1,
    navigate: false,
    plan: { answers: [] }
  }
]

/**
 * Storage creado con zustand.
 * Este contiene un objeto con la propiedad actividades,
 * donde se almacena una matriz de objetos que representa
 * cada 'stage' y sus actividades.
 *
 * @link https://docs.pmnd.rs/zustand/getting-started/introduction#first-create-a-store
 */
export const useActivityStore = create(
  devtools(
    persist(
      (set) => ({
        activities: initialState,
        dispatch: (args) => {
          set((state) => ({
            activities: [...activityReducer(state.activities, args)]
          }))
        }
      }),
      {
        name: LOCAL_STORAGE_NAME,
        storage: createJSONStorage(() => window.localStorage)
      }
    )
  )
)
