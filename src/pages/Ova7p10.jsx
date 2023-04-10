import { Link } from 'react-router-dom'

import { Col, Row, Content, Image } from 'UI-Components-books'
import { ImageContainer } from '@components'

const Ova7p10 = () => {
  return (
    <Content>
      <Row
        justify-content='center'
        align-items='center'
        addClass='animate__animated animate__fadeInDown animate__faster'
      >
        <Col xs='11' md='10' lg='6' hd='5'>
          <ImageContainer
            background='assets/images/Slide5-image-3.png'
            addClass='u-fs-300 container'
            padding='33px'
          >
            <ImageContainer
              background='assets/images/Slide3-image-1.png'
              addClass='title-container'
              width='80%'
              height='55px'
            >
              <h2 className='u-special-font u-text-center u-fs-500'>
                Créditos
              </h2>
            </ImageContainer>

            <div className='u-flow u-text-center u-my-3'>
              <p>Jehison Torres Torres</p>
              <p>Tomando las riendas de la producción equina</p>
              <p>Oficina de Educación Virtual y a Distancia</p>
              <p>Universidad de Cundinamarca</p>
              <p>2022</p>
            </div>

            <Row addClass='positionContainerFinal' justify-content='center'>
              <Link to='/unit/1/page/1' className='u-button-reset u-stack'>
                <Image
                  src='assets/images/Button-style-large.png'
                  alt='Continuar al menú principal'
                  width='200'
                  noCaption
                />
                <span className='u-special-font u-fs-500 u-zindex-2'>
                  Menú principal
                </span>
              </Link>

              <Link to='/unit/1/page/9' className='u-button-reset u-stack'>
                <Image
                  src='assets/images/Button-style-large.png'
                  alt='Volver a la página anterior'
                  width='200'
                  noCaption
                />
                <span className='u-special-font u-fs-500 u-zindex-2'>
                  Volver
                </span>
              </Link>
            </Row>
          </ImageContainer>
        </Col>
      </Row>
    </Content>
  )
}

export default Ova7p10
