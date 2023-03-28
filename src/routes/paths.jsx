import Ova7p1 from '@pages/Ova7p1'
import Ova7p2 from '@pages/Ova7p2'
import Ova7p3 from '@pages/Ova7p3'
import Ova7p4 from '@pages/Ova7p4'
import Ova7p5 from '@pages/Ova7p5'
import Ova7p6 from '@pages/Ova7p6'
import Ova7p7 from '@pages/Ova7p7'
import Ova7p8 from '@pages/Ova7p8'
import Ova7p9 from '@pages/Ova7p9'
import Ova7p10 from '@pages/Ova7p10'

/**
 * Date: 2022-02-11
 * UserName: Books&Books
 * Description: Recibe cantidad de unidades del OVA | numberOfUnits |
 * Recibe en cada posicion del array el numero de paginas que contiene cada unidad | numberOfPages |
 * Exporta objetos a Navigation y PaginationContest
 */
export const numberOfUnits = 1
export const numberOfPages = [1]

export const paths = [
  {
    id: 1,
    path: 'unit/1/page/1',
    component: <Ova7p1 />,
    component_route: 'unit-1/u1p1'
  },
  {
    id: 2,
    path: 'unit/1/page/2',
    component: <Ova7p2 />,
    component_route: 'unit-1/u1p2'
  },
  {
    id: 3,
    path: 'unit/1/page/stage-1',
    component: <Ova7p3 />,
    component_route: 'unit-1/u1p3'
  },
  {
    id: 4,
    path: 'unit/1/page/stage-2',
    component: <Ova7p4 />,
    component_route: 'unit-1/u1p4'
  },
  {
    id: 5,
    path: 'unit/1/page/stage-3',
    component: <Ova7p5 />,
    component_route: 'unit-1/u1p5'
  },
  {
    id: 6,
    path: 'unit/1/page/stage-4',
    component: <Ova7p6 />,
    component_route: 'unit-1/u1p6'
  },
  {
    id: 7,
    path: 'unit/1/page/stage-5',
    component: <Ova7p7 />,
    component_route: 'unit-1/u1p7'
  },
  {
    id: 8,
    path: 'unit/1/page/8',
    component: <Ova7p8 />,
    component_route: 'unit-1/u1p8'
  },
  {
    id: 9,
    path: 'unit/1/page/9',
    component: <Ova7p9 />,
    component_route: 'unit-1/u1p9'
  },
  {
    id: 10,
    path: 'unit/1/page/10',
    component: <Ova7p10 />,
    component_route: 'unit-1/u1p10'
  }
]
