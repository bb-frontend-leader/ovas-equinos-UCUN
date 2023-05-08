import { Row, Col, Content, Image, Audio } from 'UI-Components-books'
import {
  SvgMenu,
  SvgStaticRoulette,
  View,
  Views,
  ViewNavigation,
  Tutorial
} from '@components'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Ova7p1 = () => {
  const [activeTutorial, setActiveTutorial] = useState(false)

  const toggleActiveTutorial = (value) => {
    setActiveTutorial(value ?? !activeTutorial)
  }

  return (
    <Content>
      <Tutorial isOpen={activeTutorial} onFinish={toggleActiveTutorial} />
      <Row justify-content='center' align-items='center'>
        <View defaultIndex={4}>
          <Col xs='11' mm='10' md='8' lg='3'>
            <Row justify-content='center' align-items='center'>
              <SvgMenu
                style={{ maxWidth: '320px' }}
                onClickTutorial={toggleActiveTutorial}
                className='u-my-2'
              />
            </Row>
          </Col>

          <Col xs='11' mm='10' md='9'>
            <Views>
              {/* Resultado esperado de aprendizaje */}

              <div className='animate__animated animate__zoomIn animate__fast'>
                <Row justify-content='center' align-items='center'>
                  <Col xs='11' md='10'>
                    <svg viewBox='0 0 1355.8 535.3' className='u-fs-svg'>
                      {/* Down container */}

                      <image
                        width={2735}
                        height={973}
                        xlinkHref='assets/images/Slide1-image-1.png'
                        transform='matrix(.48 0 0 .48 7.113 65.883)'
                        overflow='visible'
                      />

                      <image
                        width={1044}
                        height={728}
                        xlinkHref='assets/images/Slide1-image-4.png'
                        transform='matrix(.48 0 0 .48 732.711 138.53)'
                        overflow='visible'
                      />

                      {/* Upper container */}

                      <image
                        width={1331}
                        height={206}
                        xlinkHref='assets/images/Slide1-image-2.png'
                        transform='matrix(.48 0 0 .48 344.073 1.747)'
                        overflow='visible'
                      />

                      <foreignObject x='1265' y='30' width='80' height='80'>
                        <ViewNavigation addClass='u-button-reset' index={4}>
                          <Image
                            url='assets/images/Slide1-image-3.png'
                            alt='Resultado esperado de aprendizaje'
                            width='80'
                            noCaption
                          />
                        </ViewNavigation>
                      </foreignObject>

                      {/* Title */}

                      <foreignObject x='388' y='10' width='560' height='96'>
                        <p className='u-special-font u-fs-svg-title'>
                          Resultado esperado de aprendizaje
                        </p>
                      </foreignObject>

                      {/* Text */}

                      <foreignObject x='100' y='200' width='510' height='173'>
                        <Audio
                          addClass='audio_button u-mx-auto u-my-2'
                          src='assets/audios/Ova7p1_audio_01.mp3'
                          format='audio/mp3'
                          type='Button'
                        />
                        <p>
                          Definir estrategias de manejo zootécnico para el
                          control reproductivo, mediante la resolución de
                          situaciones problémicas reales de una producción
                          equina.
                        </p>
                      </foreignObject>
                    </svg>
                  </Col>
                </Row>
              </div>

              {/* Presentación */}
              <div className='animate__animated animate__zoomIn animate__fast'>
                <Row justify-content='center' align-items='center'>
                  <Col xs='11' md='10'>
                    <svg viewBox='0 0 1355.8 535.3' className='u-fs-svg'>
                      {/* Down container */}

                      <image
                        width={2735}
                        height={973}
                        xlinkHref='assets/images/Slide1-image-1.png'
                        transform='matrix(.48 0 0 .48 7.113 65.883)'
                        overflow='visible'
                      />

                      {/* Upper container */}

                      <image
                        width={1331}
                        height={206}
                        xlinkHref='assets/images/Slide1-image-2.png'
                        transform='matrix(.48 0 0 .48 344.073 1.747)'
                        overflow='visible'
                      />

                      <foreignObject x='1265' y='30' width='80' height='80'>
                        <ViewNavigation addClass='u-button-reset' index={4}>
                          <Image
                            url='assets/images/Slide1-image-3.png'
                            alt='Resultado esperado de aprendizaje'
                            width='80'
                            noCaption
                          />
                        </ViewNavigation>
                      </foreignObject>

                      {/* Title */}

                      <foreignObject x='563' y='10' width='210' height='96'>
                        <p className='u-special-font u-fs-svg-title'>
                          Presentación
                        </p>
                      </foreignObject>

                      {/* Text */}

                      <foreignObject x='100' y='120' width='1100' height='300'>
                        <Audio
                          addClass='audio_button u-mx-auto u-my-2'
                          src='assets/audios/Ova7p1_audio_02.mp3'
                          format='audio/mp3'
                          type='Button'
                        />

                        <p
                          style={{ fontSize: '1.4rem' }}
                          className='u-mb-4 u-text-justify'
                        >
                          Tomando las riendas de la producción equina es un
                          recurso educativo digital, dirigido a estudiantes del
                          programa de zootecnia. En este recurso asumirá el de
                          criador equino y su función será visitar algunos
                          planteles equinos para diagnosticar yeguas con
                          síntomas de celo y formular un plan de manejo
                          reproductivo. Para ello deberá desarrollar 7
                          actividades que implican el manejo de biotecnología de
                          la reproducción.
                        </p>

                        <p
                          style={{ fontSize: '1.4rem' }}
                          className='u-mb-4 u-text-justify'
                        >
                          En las cinco etapas propuestas para el desarrollo del
                          recurso pondrá a prueba sus habilidades en pro de
                          solucionar situaciones problémicas presentadas en la
                          cotidianidad de un sistema de producción equina.
                        </p>
                      </foreignObject>
                    </svg>
                  </Col>
                </Row>
              </div>

              {/* Actividades a desarrollar */}
              <div className='animate__animated animate__zoomIn animate__fast'>
                <Row justify-content='center' align-items='center'>
                  <Col xs='11' md='10'>
                    <Audio
                      addClass='audio_button u-mx-auto u-my-2'
                      src='assets/audios/Ova7p1_audio_03.mp3'
                      format='audio/mp3'
                      type='Button'
                    />
                    <svg viewBox='0 0 1361.4 911.6' className='u-fs-svg'>
                      {/* Upper container */}

                      <image
                        width={2727}
                        height={522}
                        xlinkHref='assets/images/Slide1-image-6.png'
                        transform='matrix(.48 0 0 .48 5.926 87.566)'
                        overflow='visible'
                      />

                      <image
                        width={1331}
                        height={206}
                        xlinkHref='assets/images/Slide1-image-2.png'
                        transform='matrix(.48 0 0 .48 344.486 7.02)'
                        overflow='visible'
                      />

                      <foreignObject x='1265' y='50' width='80' height='80'>
                        <ViewNavigation addClass='u-button-reset' index={4}>
                          <Image
                            url='assets/images/Slide1-image-3.png'
                            alt='Resultado esperado de aprendizaje'
                            width='80'
                            noCaption
                          />
                        </ViewNavigation>
                      </foreignObject>

                      {/*  Down container */}

                      <image
                        width={2767}
                        height={1192}
                        xlinkHref='assets/images/Slide1-image-9.png'
                        transform='translate(3.216 344) scale(.4773)'
                        overflow='visible'
                      />

                      <image
                        width={39}
                        height={139}
                        xlinkHref='assets/images/Slide1-image-7.png'
                        transform='matrix(.48 0 0 .48 1258.16 314.519)'
                        overflow='visible'
                      />

                      <image
                        width={39}
                        height={139}
                        xlinkHref='assets/images/Slide1-image-7.png'
                        transform='matrix(.48 0 0 .48 48.597 317.728)'
                        overflow='visible'
                      />

                      {/* Title */}

                      <foreignObject x='463' y='14' width='400' height='96'>
                        <p className='u-special-font u-fs-svg-title'>
                          Actividades a desarrollar
                        </p>
                      </foreignObject>

                      {/* Text */}

                      <foreignObject x='100' y='121' width='1100' height='213'>
                        <p
                          style={{ fontSize: '1.3rem' }}
                          className='u-mb-2 u-text-justify'
                        >
                          Este recurso se compone de cinco etapas en las cuales
                          se desarrollarán siete actividades y la elaboración de
                          un plan de manejo.
                        </p>

                        <p
                          style={{ fontSize: '1.3rem' }}
                          className='u-text-justify'
                        >
                          El puntaje total para el recurso es de 50. Las
                          actividades valen 35 puntos y el plan de manejo 15
                          puntos. Al finalizar cada actividad podrá conocer el
                          puntaje obtenido y la respectiva retroalimentación. El
                          plan de manejo se podrá descargar al finalizar el
                          recurso y será evaluado por su profesor con base en la
                          rúbrica de evaluación que podrá descargar
                          seleccionando el ícono de documento pdf ubicado en la
                          parte inferior de la tabla.
                        </p>
                      </foreignObject>

                      {/* Table */}

                      <foreignObject x='120' y='361' width='1070' height='430'>
                        <figure>
                          <table className='table'>
                            <tbody>
                              <tr>
                                <td>
                                  <p>
                                    <strong>Etapa 1.</strong> Anatomía de la
                                    reproducción en equinos.
                                  </p>
                                </td>

                                <td>
                                  <p>Actividad 1</p>
                                </td>

                                <td>
                                  <p>
                                    <strong>5 puntos</strong>
                                  </p>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <p>
                                    <strong>Etapa 2.</strong> Fisiología de la
                                    reproducción en equinos.
                                  </p>
                                </td>

                                <td>
                                  <p>Actividad 2</p>
                                  <p>Actividad 3</p>
                                </td>

                                <td>
                                  <p>
                                    <strong>2 puntos</strong>
                                  </p>
                                  <p>
                                    <strong>2 puntos</strong>
                                  </p>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <p>
                                    <strong>Etapa 3.</strong> Variables
                                    foliculares relacionadas a los parámetros
                                    reproductivos en equinos.
                                  </p>
                                </td>

                                <td>
                                  <p>Actividad 4</p>
                                  <p>Actividad 5</p>
                                </td>

                                <td>
                                  <p>
                                    <strong>6 puntos</strong>
                                  </p>
                                  <p>
                                    <strong>4 puntos</strong>
                                  </p>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <p>
                                    <strong>Etapa 4.</strong> Biotecnologías
                                    reproductivas en equinos.
                                  </p>
                                </td>

                                <td>
                                  <p>Actividad 6</p>
                                </td>

                                <td>
                                  <p>
                                    <strong>10 puntos</strong>
                                  </p>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <p>
                                    <strong>Etapa 5.</strong> Enfermedades que
                                    afectan la reproducción en equinos en
                                    equinos.
                                  </p>
                                </td>

                                <td>
                                  <p>Actividad 7</p>
                                </td>

                                <td>
                                  <p>
                                    <strong>6 puntos</strong>
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </figure>
                      </foreignObject>

                      {/* Text */}

                      <foreignObject x='90' y='784' width='1150' height='30'>
                        <p>
                          El recurso se aprueba con un puntaje igual o superior
                          a <strong>35 puntos</strong> y tendrá un intento para
                          realizar cada actividad.
                        </p>
                      </foreignObject>

                      {/* Buttons */}

                      <foreignObject x='440' y='811' width='166' height='85'>
                        <a href='/' download className='u-stack'>
                          <Image
                            url='assets/images/Slide1-image-8.png'
                            alt='Botón para descargar un svg'
                            width='164'
                            noCaption
                          />
                        </a>
                      </foreignObject>

                      <foreignObject x='668' y='820' width='230' height='80'>
                        <Link
                          to='/unit/1/page/2'
                          className='u-button-reset u-stack'
                        >
                          <Image
                            url='assets/images/Cover-image-2.png'
                            alt='LLeva a la página donde puede dirigirse a las diferentes etapas'
                            width='212'
                            noCaption
                          />
                        </Link>
                      </foreignObject>
                    </svg>
                  </Col>
                </Row>
              </div>

              {/* Default */}
              <div className='animate__animated animate__zoomIn animate__fast'>
                <Row
                  justify-content='center'
                  align-items='center'
                  flex-direction='column'
                >
                  <SvgStaticRoulette
                    style={{ maxWidth: '600px' }}
                    className='u-mb-2'
                    data-tour='menu_roulette'
                  />

                  <svg
                    viewBox='0 0 1158.3 215.6'
                    data-tour='options_roulette'
                    style={{ maxWidth: '670px' }}
                  >
                    <image
                      width={2414}
                      height={425}
                      xlinkHref='/assets/images/SvgBottomBar-1.png'
                      transform='matrix(.48 0 0 .48 -.23 10.073)'
                      overflow='visible'
                    />
                    <image
                      width={205}
                      height={192}
                      xlinkHref='/assets/images/SvgBottomBar-5.png'
                      transform='matrix(.48 0 0 .48 48.13 34.4)'
                      overflow='visible'
                    />
                    <image
                      width={679}
                      height={408}
                      xlinkHref='/assets/images/SvgBottomBar-2.png'
                      transform='matrix(.48 0 0 .48 795.322 1.483)'
                      overflow='visible'
                    />
                    <image
                      width={678}
                      height={408}
                      xlinkHref='/assets/images/SvgBottomBar-3.png'
                      transform='matrix(.48 0 0 .48 419.072 4.502)'
                      overflow='visible'
                    />
                    <image
                      width={678}
                      height={408}
                      xlinkHref='/assets/images/SvgBottomBar-4.png'
                      transform='matrix(.48 0 0 .48 57.239 4.502)'
                      overflow='visible'
                    />

                    {/* Buttons */}

                    <foreignObject x='47' y='110' width='350' height='95'>
                      <Image
                        url='assets/images/SvgBottomBar-6.png'
                        alt=''
                        noCaption
                      />
                    </foreignObject>

                    <foreignObject x='412' y='110' width='350' height='95'>
                      <Image
                        url='assets/images/SvgBottomBar-7.png'
                        alt=''
                        noCaption
                      />
                    </foreignObject>

                    <foreignObject x='790' y='110' width='350' height='95'>
                      <Image
                        url='assets/images/SvgBottomBar-8.png'
                        alt=''
                        noCaption
                      />
                    </foreignObject>
                  </svg>
                </Row>
              </div>
            </Views>
          </Col>
        </View>
      </Row>
    </Content>
  )
}

export default Ova7p1
