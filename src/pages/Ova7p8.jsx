import { Link } from 'react-router-dom'

import { Col, Row, Content, Image } from 'UI-Components-books'
import { ImageContainer } from '@components'

const Ova7p8 = () => {
  return (
    <Content>
      <Row
        justify-content='center'
        align-items='center'
        addClass='animate__animated animate__fadeInDown animate__faster'
      >
        <Col xs='11' xm='10'>
          <Image
            src='assets/images/Cover-image-1.png'
            alt='Imagen, tomando las riendas de la producción equina'
            width='800'
            noCaption
          />
        </Col>

        <Col xs='11' md='10' lg='9' hd='4'>
          <ImageContainer
            background='assets/images/Slide1-image-1.png'
            addClass='u-fs-300 u-flow'
            padding='33px'
          >
            <p>
              Ha culminado las actividades de aprendizaje propuestas para este
              recurso, aquí podrá conocer el puntaje final obtenido.
            </p>

            <p>
              <strong>Interpretación</strong>
            </p>

            <p>
              Si su puntaje es inferior a 35 puntos, profundice los aspectos
              importantes dentro de la estrategias de manejo zootécnico para el
              control reproductivo. Cada situación presentada le ayudará a
              mejorar su comprensión y aplicación. Si su puntaje se encuentra
              entre 35 y 45 puntos, ha realizado un buen ejercicio, pero deberá
              profundizar en los aspectos en los que obtuvo un puntaje menor.
              Por último, si su puntaje es superior a 45 puntos, realizó un
              excelente trabajo.
            </p>

            <p>
              Segundo intento: Si el puntaje obtenido no supera los 35 puntos,
              tiene la posibilidad de retomar el recurso y realizar todas las
              actividades. Si su puntaje es igual o superior a 35 puntos y
              quiere mejorarlo, también puede retomar el recurso y el sistema
              tomará el puntaje más alto.
            </p>
          </ImageContainer>
        </Col>

        <Col xs='11' md='10' lg='9' hd='7'>
          <ImageContainer
            background='assets/images/Slide1-image-1.png'
            addClass='u-fs-300 container'
            padding='33px'
          >
            <table cellSpacing='10'>
              <tbody>
                <tr>
                  <td className='tableFinal-1'>
                    <p className='u-font-medium u-text-start'>
                      <strong>Etapa 1.</strong> Anatomía de la reproducción en
                      equinos.
                    </p>
                  </td>
                  <td className='tableFinal-1'>Actividad 1</td>
                  <td className='tableFinal-1'>
                    <span className='u-font-bold'>X puntos</span>
                  </td>
                </tr>

                <tr>
                  <td className='tableFinal-2'>
                    <p className='u-font-medium u-text-start'>
                      <strong>Etapa 2.</strong> Fisiología de la reproducción en
                      equinos.
                    </p>
                  </td>
                  <td className='tableFinal-2'>
                    Actividad 2 <br />
                    Actividad 3
                  </td>
                  <td className='tableFinal-2'>
                    <span className='u-font-bold'>X puntos</span> <br />
                    <span className='u-font-bold'>X puntos</span>
                  </td>
                </tr>

                <tr>
                  <td className='tableFinal-1'>
                    <p className='u-font-medium u-text-start'>
                      <strong>Etapa 3.</strong> Variables foliculares
                      relacionadas a los parámetros reproductivos en equinos.
                    </p>
                  </td>
                  <td className='tableFinal-1'>
                    Actividad 4 <br />
                    Actividad 5
                  </td>
                  <td className='tableFinal-1'>
                    <span className='u-font-bold'>X puntos</span> <br />
                    <span className='u-font-bold'>X puntos</span>
                  </td>
                </tr>

                <tr>
                  <td className='tableFinal-2'>
                    <p className='u-font-medium u-text-start'>
                      <strong>Etapa 4.</strong> Biotecnologías reproductivas en
                      equinos.
                    </p>
                  </td>
                  <td className='tableFinal-2'>Actividad 6</td>
                  <td className='tableFinal-2'>
                    <span className='u-font-bold'>X puntos</span>
                  </td>
                </tr>

                <tr>
                  <td className='tableFinal-1'>
                    <p className='u-font-medium u-text-start'>
                      <strong>Etapa 5.</strong> Enfermedades que afectan la
                      reproducción en equinos en equinos.
                    </p>
                  </td>
                  <td className='tableFinal-1'>Actividad 7</td>
                  <td className='tableFinal-1'>
                    <span className='u-font-bold'>X puntos</span>
                  </td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td className='tableFinal-3 u-text-start' colSpan='2'>
                    <strong className='u-ml-3'>Total puntaje obtenido</strong>
                  </td>
                  <td className='tableFinal-3'>
                    <span className='u-font-bold'>X puntos</span>
                  </td>
                </tr>
              </tfoot>
            </table>

            <Row justify-content='center' align-items='center'>
              <Link to='/unit/1/page/9' className='u-button-reset u-stack'>
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

              <Link to='/unit/1/page/stage-5' className='u-button-reset u-stack'>
                <Image
                  src='assets/images/Button-style-large.png'
                  alt='Volver al stage 5'
                  width='200'
                  noCaption
                />
                <span className='u-special-font u-fs-500 u-zindex-2'>
                  Volver
                </span>
              </Link>
            </Row>
          </ImageContainer>

          <div className='imgSogasFinal'>
            <img src='assets/images/Slide1-image-7.png' alt='' tabIndex={-1} />
            <img src='assets/images/Slide1-image-7.png' alt='' tabIndex={-1} />
            <img src='assets/images/Slide1-image-7.png' alt='' tabIndex={-1} />
            <img src='assets/images/Slide1-image-7.png' alt='' tabIndex={-1} />
          </div>

          <Row display='flex' justify-content='center' align-items='center'>
            <Col xs='11' xm='10' sm='8' md='6'>
              <ImageContainer
                background='assets/images/Slide3-image-1.png'
                addClass='u-fs-300 container'
                padding='26px'
              >
                <p className='u-text-primary-300 u-text-center u-font-bold'>
                  Descargue aquí las estrategias de manejo zootécnico para el
                  control reproductivo
                </p>

                <div className='positionImgFinal'>
                  <a href='/' download className='u-stack'>
                    <Image
                      url='assets/images/Slide1-image-8.png'
                      alt='Descargar las estrategias de manejo zootécnico para el control reproductivo'
                      width='145'
                      noCaption
                    />
                  </a>
                </div>
              </ImageContainer>
            </Col>

            <Col xs='11' xm='10' sm='8' md='6'>
              <ImageContainer
                background='assets/images/Slide3-image-1.png'
                addClass='u-fs-300 container'
                padding='26px'
              >
                <p className='u-text-primary-300 u-text-center u-font-bold'>
                  Descargue aquí la rúbrica de evaluación del plan de manejo
                </p>

                <div className='positionImgFinal'>
                  <a href='/' download className='u-stack'>
                    <Image
                      url='assets/images/Slide1-image-8.png'
                      alt='Descargar la rúbrica de evaluación del plan de manejo'
                      width='145'
                      noCaption
                    />
                  </a>
                </div>
              </ImageContainer>
            </Col>
          </Row>
        </Col>
      </Row>
    </Content>
  )
}

export default Ova7p8
