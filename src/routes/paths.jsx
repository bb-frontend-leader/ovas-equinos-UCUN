import Ova7p1 from "@pages/Ova7p1";

/**
 * Date: 2022-02-11
 * UserName: Books&Books
 * Description: Recibe cantidad de unidades del OVA | numberOfUnits |
 * Recibe en cada posicion del array el numero de paginas que contiene cada unidad | numberOfPages |
 * Exporta objetos a Navigation y PaginationContest
 */
export const numberOfUnits = 1;
export const numberOfPages = [1];

export const paths = [
  {
    id: 1,
    path: `unit/1/page/1`,
    component: <Ova7p1 />,
    component_route: `unit-1/u1p1`,
  },
];
