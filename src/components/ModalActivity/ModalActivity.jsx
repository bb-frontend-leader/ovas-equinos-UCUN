import PropTypes from 'prop-types'
import { Modal, ModalOverlay, ModalContent } from 'UI-Components-books'
import { ImageContainer } from '@components'
import { useNavigation } from '@hooks'

import css from './ModalActivity.module.css'

export const ModalActivity = ({ open, onClose, focusRef, feedback, points, section }) => {
  const { onNavigate } = useNavigation()

  const handleCloseModal = () => {
    if (onClose) {
      onClose()
    }

    onNavigate(section)
  }

  return (
    <Modal
      isOpen={open}
      onClose={handleCloseModal}
      finalFocusRef={focusRef}
    >
      <ModalOverlay />
      <ModalContent addClass={css['c-modal']}>
        <ImageContainer
          background='assets/images/Modal-background-wood-1.png'
          padding='40px'
          addClass='u-flow u-fs-300'
        >
          <p>
            {feedback}
          </p>

          <p className='u-text-center'>
            <strong>Puntaje obtenido</strong>: {`${points}`} puntos.
          </p>
        </ImageContainer>
      </ModalContent>
    </Modal>
  )
}

ModalActivity.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  focusRef: PropTypes.func,
  feedback: PropTypes.string,
  points: PropTypes.string,
  section: PropTypes.number
}
