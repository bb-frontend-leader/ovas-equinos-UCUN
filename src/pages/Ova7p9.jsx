import { Link } from 'react-router-dom'

import { Col, Row, Content, Image } from 'UI-Components-books'
import { ImageContainer } from '@components'

const Ova7p9 = () => {
  return (
    <Content>
      <Row
        justify-content='center'
        align-items='center'
        addClass='animate__animated animate__fadeInDown animate__faster'
      >
        <Col xs='11' md='10' lg='9' hd='8'>
          <ImageContainer
            background='assets/images/Slide5-image-3.png'
            addClass='u-fs-300 container'
            padding='33px'
          >
            <ImageContainer
              background='assets/images/Slide3-image-1.png'
              addClass='title-container'
              height='60px'
              width='45%'
            >
              <h2 className='u-special-font u-text-center u-fs-600'>
                Referencias bibliográficas
              </h2>
            </ImageContainer>

            <p className='u-mt-6'>
              Ángel, D., Bran, J. A. (2010). Reproducción asistida en equinos:
              Nuevos aportes desde la teoría. Rev Ces Med Vet Zootec. 5(1):
              56-69. Recuperado a partir de{' '}
              <a
                href='https://revistas.ces.edu.co/index.php/mvz/article/view/984'
                target='_blank'
                rel='noreferrer'
                className='styleLink'
              >
                https://revistas.ces.edu.co/index.php/mvz/article/view/984.
              </a>
            </p>

            <p className='u-my-3'>
              Canelón, J.L., Mosquera, O. & Zambrano, R. (2011). Parámetros
              reproductivos en Yeguas Criollas Venezolanas. Revista del
              colegio de médicos veterinarios del estado Lara. Año 1, Número
              1. Julio 2011.
            </p>

            <p className='u-my-3'>
              Cortés-Vidauri, Z., Aréchiga-Flores, C., Rincón-Delgado, M.,
              Rochín-Berumen, F., López-Carlos, M. & F lores-Flores, G.
              (2018). Revisión: El Ciclo Reproductivo de la Yegua. Abanico
              veterinario ISSN 2448-6132. 8(3):14-41.
            </p>

            <p className='u-my-3'>
              Ramírez, G., Gutiérrez, C. & Ramos, M. (2010). Dinámica
              folicular en yeguas paso fino colombiano medido por
              ultrasonografía en la Sabana de Bogotá. Revista de Medicina
              Veterinaria N.º 19.
            </p>

            <p className='u-my-3'>
              Tscherig, B. (2019). Gestación y causas de aborto en equinos.
              Informe final para obtener el título de grado de Médico
              Veterinario. Universidad Nacional de Río Negro. Argentina.{' '}
              <a
                href='https://rid.unrn.edu.ar/bitstream/20.500.12049/2601/1/Tscherig%2C%20Betiana.pdf'
                target='_blank'
                rel='noreferrer'
                className='styleLink'
              >
                https://rid.unrn.edu.ar/bitstream/20.500.12049/2601/1/Tscherig%2C%20Betiana.pdf.
              </a>
            </p>

            <Row addClass='positionContainerFinal' justify-content='center'>
              <Link to='/unit/1/page/8' className='u-button-reset u-stack'>
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

              <Link to='/unit/1/page/10' className='u-button-reset u-stack'>
                <Image
                  src='assets/images/Button-style-large.png'
                  alt='Continuar al menú principal'
                  width='200'
                  noCaption
                />
                <span className='u-special-font u-fs-500 u-zindex-2'>
                  Continuar
                </span>
              </Link>
            </Row>
          </ImageContainer>
        </Col>
      </Row>
    </Content>
  )
}

export default Ova7p9
