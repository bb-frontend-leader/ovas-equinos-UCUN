import { useState, useEffect } from 'react'

/**
 * Custom hook que utiliza el hook useState para
 * mantener el estado del fondo de una página web y
 * el hook useEffect para actualizar el valor del fondo y
 * limpiarlo cuando el componente que lo utiliza se desmonta.
 *
 * @returns {object} background y setBackground.
 */
const useBackground = () => {
  const [background, setBackground] = useState('')

  useEffect(() => {
    if (!background) return

    /**
     *  Si background tiene un valor, se selecciona
     *  el elemento body del documento HTML y
     *  se establece una propiedad CSS personalizada
     *  llamada --bg-image en el elemento body con el valor de background.
     */
    const body = document.body
    body.style.setProperty('--bg-image', background)

    return () => {
      /**
       * Esta función de limpieza elimina
       * la propiedad CSS personalizada --bg-image
       * del elemento body.
       */
      body.style.removeProperty('--bg-image')
    }
  }, [background])

  return { background, setBackground }
}

export { useBackground }
