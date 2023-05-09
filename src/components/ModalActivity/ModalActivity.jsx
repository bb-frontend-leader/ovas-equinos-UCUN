import PropTypes from 'prop-types'
import { Modal, ModalOverlay, ModalContent } from 'UI-Components-books'
import { ImageContainer } from '@components'
import { useNavigation } from '@hooks'

import css from './ModalActivity.module.css'

/**
 * date: 05/08/2023
 * author:  Books&Books
 * description:  Componente Modal usado para mostrar el resultado de las actividades.
 * attributes:
 *  - Children: Elementos hijos que recibe el componente.
 *  - open: Propiedad para abrir el Modal.
 *  - onClose: Función que se lanza cuando se cierra el modal.
 *  - focusRef: Referencia del botón que abrio el modal.
 *  - points: Puntaje.
 *  - Section: Sección a la que se reedirige cuando el modal se cierra.
 */
export const ModalActivity = ({
  children,
  open,
  onClose,
  focusRef,
  feedback,
  points,
  section
}) => {
  const { onNavigate } = useNavigation()

  // Define una función que se ejecutará cuando se cierre el modal
  const handleCloseModal = () => {
    // Si hay una función onClose definida, ejecútala
    if (onClose) {
      onClose()
    }
    // Navega a la sección indicada
    onNavigate(section)
  }

  return (
    <Modal isOpen={open} onClose={handleCloseModal} finalFocusRef={focusRef}>
      <ModalOverlay />
      <ModalContent addClass={css['c-modal']}>
        <ImageContainer
          background='assets/images/Modal-background-wood-1.png'
          padding='40px'
          addClass='u-flow u-fs-300'
        >
          <p>{feedback}</p>

          {children}

          <p className='u-text-center'>
            <strong>Puntaje obtenido</strong>: {`${points}`} puntos.
          </p>
        </ImageContainer>
      </ModalContent>
    </Modal>
  )
}

ModalActivity.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node)
  ]),
  open: PropTypes.bool,
  onClose: PropTypes.func,
  focusRef: PropTypes.object,
  feedback: PropTypes.string,
  points: PropTypes.string,
  section: PropTypes.number
}
