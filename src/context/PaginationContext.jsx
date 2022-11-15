import { createContext, useEffect, useState } from "react";
import { numberOfUnits, paths } from "../routes/paths";

/**
 * Date: 2022-02-11
 * UserName: Daniel Marcovich
 * Description: Crea contexto, hereda propiedades directamente
 */
export const PaginationContext = createContext();

/**
 * Date: 2022-02-11
 * UserName: Daniel Marcovich
 * Description: Variables que se heredan directamente
 */
export const PaginationProvider = ( { children } ) => {
    const [ routes, setRoutes ] = useState( [] );
    const [ currentUnit, setCurrentUnit ] = useState( null );
    // Recibe titulos de unidades
    const unitTitles = [ 'Title Unit' ];
    // Recibe titulos de las paginas
    const unitPageTitles = [
        ['Title page' ]
    ];

    /**
     * Date: 2022-02-11
     * UserName: Daniel Marcovich
     * Description: Filtra, valida y asigna unidades
     */
    useEffect( () => {
        const allPaths = paths;
        let routesPerUnits = [];

        for ( let i = 0; i <= numberOfUnits; i++ ) {
            const filter = allPaths.filter( path => path.component_route.includes( `unit-${i}` ) );

            if ( filter.length !== 0 ) {
                routesPerUnits.push( filter );
            };
        };

        setRoutes( routesPerUnits );
    }, [] );

    return (
        <PaginationContext.Provider
            value={
                {   routes, 
                    currentUnit, 
                    unitTitles, 
                    setCurrentUnit, 
                    unitPageTitles 
                }
            } >
            { children }
        </PaginationContext.Provider>
    );
};

