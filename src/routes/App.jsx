import { cloneElement } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { Layout } from "@pages/Layout";
import NotFound from "@pages/NotFound";
import TemplateCover from "@pages/TemplateCover";

import paths from "./paths";

const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<TemplateCover />} />
          {
            /**
             * Date: 2022-02-16
             * UserName: Books&Books
             * Description: Itera rutas importadas y las reneriza, clona componente que renderiza pagina y asigna props a este
             */
            paths.map((route) => {
              const tempComponent = route.component;
              const Component = (props = {}) =>
                cloneElement(tempComponent, { ...props });

              return (
                <Route
                  path={route.path}
                  key={route.id}
                  element={<Component />}
                />
              );
            })
          }
          <Route component={NotFound} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
