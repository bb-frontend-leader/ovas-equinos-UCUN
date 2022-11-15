import { Suspense, useContext } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { paths } from './paths';
import { Layout } from '@shared';
import NotFound from '../pages/NotFound';
import Ova05cover from '../pages/Ova05cover';
import { TourWindow } from 'ui-components-sua';
import { DataContext } from 'ui-components-sua/src/context/DataContext';

const App = () => {
    const { viewTour, setViewTour } = useContext(DataContext);

    return (
        <>
            <TourWindow viewTour={viewTour} setViewTour={() => setViewTour(!viewTour)}></TourWindow>
            <HashRouter>
                <Suspense fallback={<span>Add spinner</span>}>
                    <Layout paths={paths}>
                        <Routes>
                            <Route path='/' element={<Ova05cover />} />
                            {
                                /**
                                 * Date: 2022-02-16
                                 * UserName: Daniel Marcovich
                                 * Description: Itera rutas importadas y las reneriza, clona componente que renderiza pagina y asigna props a este 
                                 */
                                paths.map((route) => {
                                    const tempComponent = route.component;
                                    const Component = (props = {}) => React.cloneElement(tempComponent, { ...props })

                                    return (
                                        <Route path={route.path} key={route.id} element={
                                            <Component />
                                        } />
                                    );
                                })
                            }
                            <Route component={NotFound} />
                        </Routes>
                    </Layout>
                </Suspense>
            </HashRouter>
        </>
    )
}

export default App;
