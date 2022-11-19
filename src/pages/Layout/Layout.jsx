import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import { Col } from "UI-components";

import { Header } from "@components";
import { PaginationProvider } from "@context/PaginationContext";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <PaginationProvider>
      {location.pathname !== "/" && <Header />}
      <main tabIndex="-1">
        {children} <Col />
      </main>
    </PaginationProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export { Layout };
