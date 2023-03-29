import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'

import { activitiesReducer } from './reducer'

// const mockActivity = [
//   {
//     stage: "Etapa 1",
//     activities: [
//       {
//         activity: "Actividad 1",
//         points: 2,
//         completed: true,
//         answer: [{}],
//       },
//     ],
//     completed: true,
//   },
// ];

// const paths = [
//   {
//     id: 1,
//     path: 'unit/1/page/1',

//     component_route: 'unit-1/u1p1'
//   },
//   {
//     id: 2,
//     path: 'unit/1/page/2',

//     component_route: 'unit-1/u1p2'
//   },
//   {
//     id: 3,
//     path: 'unit/1/page/stage-1',

//     component_route: 'unit-1/u1p3'
//   },
//   {
//     id: 4,
//     path: 'unit/1/page/stage-2',

//     component_route: 'unit-1/u1p4'
//   },
//   {
//     id: 5,
//     path: 'unit/1/page/stage-3',

//     component_route: 'unit-1/u1p5'
//   },
//   {
//     id: 6,
//     path: 'unit/1/page/stage-4',

//     component_route: 'unit-1/u1p6'
//   },
//   {
//     id: 7,
//     path: 'unit/1/page/stage-5',

//     component_route: 'unit-1/u1p7'
//   },
//   {
//     id: 8,
//     path: 'unit/1/page/8',

//     component_route: 'unit-1/u1p8'
//   },
//   {
//     id: 9,
//     path: 'unit/1/page/9',

//     component_route: 'unit-1/u1p9'
//   },
//   {
//     id: 10,
//     path: 'unit/1/page/10',

//     component_route: 'unit-1/u1p10'
//   }
// ]

// const test = async () => {
//   const paths = await import('../routes/paths')
//   return paths.default()
// }

export const useActivityStore = create(
  devtools(
    persist(
      (set, get) => ({
        activities: async () => {
          const response = await import('../routes/paths')
          console.log(response)
          set(response.default)
        },
        dispatch: (args) => set((state) => activitiesReducer(state, args)),
        getStorage: () => get().activities
      }),
      {
        name: 'unad-storage',
        // eslint-disable-next-line no-undef
        storage: createJSONStorage(() => localStorage)
      }
    )
  )
)

// export const dispatch = useActivityStore((state) => state.dispatch);

// export const getStorage = useActivityStore((state) => state.getStorage);
