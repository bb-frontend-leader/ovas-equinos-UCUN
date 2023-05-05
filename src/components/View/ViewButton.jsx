import { useContext, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Button } from 'UI-Components-books'
import { ViewContext } from '@components'

/**
 * date: 23/11/2022
 * author:  Books&Books
 * description: Componente botón que permite navegar entre las pestañas del componente Tab
 * attributes:
 *  - index: número de la pestaña a la cual va redirigir
 */
export const ViewButton = ({ index, onClick, ...props }) => {
  /**
   * Necesitamos obtener la referencia del botón
   * para luego pasarla en la función addNewRef proveniente
   * de las propiedades.
   */
  const refButton = useRef()

  /**
   * Obtenemos las propiedad changeView, addNewRef, onNavigation
   * y validation del contexto proveniente del componente View.
   */
  const { changeView, addNewRef, onNavigation, validation } =
    useContext(ViewContext)

  const handleClick = () => {
    if (onClick) {
      onClick()
    }

    changeView(index)
  }

  /**
   * variable que almacena el resultado de validation.
   * Devuelve "true" o "false" apartir de evaluar
   * el id con el estado.
   *
   * @returns {(Boolean)}
   */
  const isSelected = validation(index)

  useEffect(() => {
    // Agregamos al Referencia a la función addNewRef si está existe
    refButton.current && addNewRef(refButton.current)

    return () => {
      // Limpiamos la referencia al desmontar el componente
      refButton.current = null
    }
  }, [refButton])

  return (
    <Button
      id={`view-${index}`}
      role='tab'
      ref={refButton}
      tabIndex={`${isSelected ? 0 : -1}`}
      aria-selected={isSelected}
      onKeyDown={onNavigation}
      onClick={handleClick}
      {...props}
    />
  )
}

ViewButton.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func
}
