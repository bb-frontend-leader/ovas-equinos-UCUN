import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import { Header } from "@components";
import { PaginationProvider } from "@context/PaginationContext";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <PaginationProvider>
      {location.pathname !== "/" && <Header />}
      <main>{children}</main>
    </PaginationProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export { Layout };
