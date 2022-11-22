import { useEffect, useState } from "react";

const useBackground = (image) => {
  const [background, setBackground] = useState(
    () => image || document.body.styles.backgroundImage
  );

  useEffect(() => {
    if (!background && !image) return;

    const body = document.body;

    body.style.backgroundImage = `url(/assets/images/${image})`;
  }, [background]);

  return setBackground;
};

export { useBackground };
