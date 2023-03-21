import { useState, useEffect } from "react";

const useBackground = () => {
  const [background, setBackground] = useState("");

  useEffect(() => {
    if (!background) return;

    const body = document.body;
    body.style.setProperty("--bg-image", background);

    return () => {
      body.style.removeProperty("--bg-image");
    };
  }, [background]);

  return { background, setBackground };
};

export { useBackground };
