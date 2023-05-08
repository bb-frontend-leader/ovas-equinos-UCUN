import { createElement } from 'react'
import PropTypes from 'prop-types'

import css from './ImageContainer.module.css'

/**
 * date: 05/08/2023
 * author:  Books&Books
 * description:  Componente utilizado para colocar una imagen como fondo de un contenedor.
 * attributes:
 *  - Children: Elementos hijos que recibe el componente.
 *  - addClass: Permite agregar una clase.
 *  - height: Altura del contenedor.
 *  - width: Ancho del contenedor.
 *  - padding: Padding del contenedor.
 *  - background: url de la imagen.
 *  - element:  Tipo de elemento del DOM.
 */
export const ImageContainer = ({
  children,
  addClass,
  height,
  width,
  padding,
  background,
  element,
  ...props
}) => {
  // Utilizado para crear un elemento diferente a un 'div'
  const component = element || 'div'

  // Encargada de realizar la validación de las customProperties
  const valitationProperties = () => {
    // Define un objeto vacío llamado `customProperties`
    const customProperties = {}

    // Verifica si la variable `height` existe
    if (height) {
    // Si `height` existe, asigna una nueva propiedad al objeto `customProperties` con un nombre de propiedad CSS personalizado y el valor de `height`
      customProperties['--height'] = height
    }

    // Verifica si la variable `width` existe
    if (width) {
    // Si `width` existe, asigna una nueva propiedad al objeto `customProperties` con un nombre de propiedad CSS personalizado y el valor de `width`
      customProperties['--width'] = width
    }

    // Verifica si la variable `padding` existe
    if (padding) {
    // Si `padding` existe, asigna una nueva propiedad al objeto `customProperties` con un nombre de propiedad CSS personalizado y el valor de `padding`
      customProperties['--border-size'] = padding
    }

    // Verifica si la variable `background` existe
    if (background) {
    // Si `background` existe, asigna una nueva propiedad al objeto `customProperties` con un nombre de propiedad CSS personalizado y el valor de `background` como una cadena de texto que incluye la URL de fondo
      customProperties['--img-background'] = `url(${background})`
    }

    // Devuelve el objeto `customProperties` actualizado
    return customProperties
  }

  return createElement(
    component,
    {
      className: `${css['c-image-container']} ${addClass ?? ''}`,
      ...(!!valitationProperties() && {
        style: { ...valitationProperties() }
      }),
      ...props
    },
    [children]
  )
}

ImageContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  addClass: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  background: PropTypes.string,
  element: PropTypes.string,
  padding: PropTypes.string
}
