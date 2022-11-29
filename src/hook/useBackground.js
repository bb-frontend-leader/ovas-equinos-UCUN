import { useEffect, useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";

import { useLocalStorage } from "UI-Components-books";

const useBackground = (key) => {
  const [background, setBackground] = useState();

  const [image, setImage] = useLocalStorage(key, "");

  /**
   * Dado que la API del localStorage no está disponible
   * en server side rendering comprobamos la existencia de está.
   */
  if (typeof window === "undefined") {
    return key;
  }

  useLayoutEffect(() => {
    setImage(
      window
        .getComputedStyle(document.body)
        .getPropertyValue("background-image")
    );
    return () => {
      window.localStorage.removeItem(key);
    };
  }, []);

  useEffect(() => {
    if (!background) return;

    const body = document.body;

    body.style.backgroundImage = background;

    return () => {
      body.style.backgroundImage = image;
    };
  }, [background]);

  return [background, setBackground];
};

useBackground.propTypes = {
  key: PropTypes.string.isRequired,
};

export { useBackground };
