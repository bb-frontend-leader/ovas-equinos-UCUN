import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Item } from 'react-stately'

import {
  Col,
  Row,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Panel,
  Section,
  NavSection,
  ButtonSection,
  Modal,
  ModalContent,
  ModalOverlay,
  Image,
  Button
} from 'UI-Components-books'
import {
  ImageContainer,
  SvgStageMenu,
  CheckBoxModal,
  CheckBoxGroup,
  PlanGroup,
  PlanSelect,
  PlanCheck,
  CheckBoxButton,
  ModalActivity
} from '@components'
import { useBackground } from '@hooks'

const Ova7p3 = () => {
  // Usado para almacenar el puntaje de la actividad y
  // poder mostrarlo en el ModalActivity.
  const [points, setPoints] = useState(0)

  // Estado utilizado para controlar la apertura y cierre de modales.
  const [isOpen, setIsOpen] = useState({
    context: false,
    situation: false,
    activity: false
  })

  // Hook utilizado para actualizar el background-image.
  const { setBackground } = useBackground()

  // Se utiliza para abrir y cerrar los modales.
  const onToggleModal = (modal) => {
    setIsOpen((prev) => ({ ...prev, [modal]: !prev[modal] }))
  }

  // Funcion utilizada en el onResult de la actividad.
  const handleActivity = ({ result }) => {
    setPoints(result.points)
    onToggleModal('activity')
  }

  // Referencia del botón contexto.
  const contextRef = useRef()

  // Referencia del botón situación.
  const situationRef = useRef()

  // Referencia del botón para validar la actividad.
  const validateRef = useRef()

  return (
    <Panel defaultIndex={4}>
      <NavSection />

      <Section addClass='animate__animated animate__fadeInDown animate__faster'>
        <Row justify-content='center' align-items='center' addClass='u-my-7'>
          <Col xs='11' md='10' lg='9' hd='7'>
            <ImageContainer
              background='assets/images/Slide1-image-1.png'
              addClass='u-fs-300 container'
              padding='33px'
            >
              <ImageContainer
                background='assets/images/Slide3-image-1.png'
                addClass='title-container'
                width='500px'
                height='100px'
              >
                <h2 className='u-special-font u-text-center u-fs-500'>
                  Etapa 1.
                  <br />
                  <span>Anatomía de la reproducción en equinos</span>
                </h2>
              </ImageContainer>

              <p className='u-mt-6'>
                Introducción Resultado esperado Contenido Antes de visitar las
                pesebreras se recomienda repasar algunos conceptos. En esta
                etapa se abordarán algunos elementos relacionados con la
                anatomía de la hembra equina.
              </p>

              <p className='u-my-3'>
                Haga clic en los botones para ver la vista anterior, lateral y
                posterior del aparato reproductor hembra equina. En cada una de
                ellas encontrará el detalle de las estructuras anatómicas.
              </p>

              <Tabs addClass='c-tabs u-my-1'>
                <TabList
                  addClass='c-tab-list'
                  orientation='vertial'
                  label='Anatomía de la reproducción en equinos'
                >
                  <Tab addClass='c-tab u-fs-400' selected='is-tab--selected'>
                    <p className='u-special-font'>
                      Vista anterior del aparato reproductor hembra equina
                    </p>
                  </Tab>

                  <Tab addClass='c-tab u-fs-400' selected='is-tab--selected'>
                    <p className='u-special-font'>
                      Vista lateral del aparato reproductor hembra equina
                    </p>
                  </Tab>

                  <Tab addClass='c-tab u-fs-400' selected='is-tab--selected'>
                    <p className='u-special-font'>
                      Vista posterior aparato reproductor hembra equina
                    </p>
                  </Tab>
                </TabList>

                <TabPanels addClass='c-tab-panel'>
                  <TabPanel>
                    <Image
                      src='assets/images/Slide3-image-2.png'
                      alt='Vista anterior del aparato reproductor hembra equina'
                      addClass='c-tab-panel__image'
                      width='550'
                      noCaption
                    />
                  </TabPanel>

                  <TabPanel>
                    <Image
                      src='assets/images/Slide3-image-3.png'
                      alt='Vista lateral del aparato reproductor hembra equina'
                      addClass='c-tab-panel__image'
                      width='550'
                      noCaption
                    />
                  </TabPanel>

                  <TabPanel>
                    <Image
                      src='assets/images/Slide3-image-4.png'
                      alt='Vista posterior del aparato reproductor hembra equina'
                      addClass='c-tab-panel__image'
                      width='330'
                      noCaption
                    />
                  </TabPanel>
                </TabPanels>
              </Tabs>

              <Row justify-content='center' align-items='center'>
                <ButtonSection section={2}>
                  <Button addClass='u-button-reset u-stack'>
                    <Image
                      src='assets/images/Button-style-large.png'
                      alt='Continuar a la siguiente sección'
                      width='200'
                      noCaption
                    />
                    <span className='u-special-font u-fs-500 u-zindex-2'>
                      Continuar
                    </span>
                  </Button>
                </ButtonSection>
              </Row>
            </ImageContainer>
          </Col>
        </Row>
      </Section>

      <Section addClass='animate__animated animate__fadeInDown animate__faster'>
        <Row justify-content='center' align-items='center'>
          <Col xs='11' mm='10' md='9' lg='8' hd='7'>
            <Row
              justify-content='center'
              align-items='center'
              flex-direction='columns'
            >
              <ImageContainer
                background='assets/images/Slide3-image-1.png'
                addClass='title-container title-container--stage'
                width='500px'
                height='100px'
              >
                <h2 className='u-special-font u-text-center u-fs-500'>
                  Etapa 1.
                  <br />
                  <span>Anatomía de la reproducción en equinos</span>
                </h2>
              </ImageContainer>

              <Image
                src='assets/images/SvgRoulette-horse.png'
                alt='Imagen de la cabeza de un caballo'
                width='450'
                addClass='u-mt-5'
                noCaption
              />

              <SvgStageMenu style={{ maxWidth: '700px' }}>
                {/* Buttons */}

                <foreignObject x='47' y='110' width='350' height='95'>
                  <Button
                    ref={contextRef}
                    addClass='c-button'
                    onClick={() => onToggleModal('context')}
                  >
                    <Image
                      url='assets/images/SvgBottomBar-6.png'
                      alt='contexto'
                      noCaption
                    />
                  </Button>
                </foreignObject>

                <foreignObject x='412' y='110' width='350' height='95'>
                  <Button
                    ref={situationRef}
                    addClass='c-button'
                    onClick={() => onToggleModal('situation')}
                  >
                    <Image
                      url='assets/images/SvgBottomBar-7.png'
                      alt='situación'
                      noCaption
                    />
                  </Button>
                </foreignObject>

                <foreignObject x='790' y='110' width='350' height='95'>
                  <ButtonSection
                    section={3}
                    onClick={() =>
                      setBackground(
                        'url(/assets/images/Secondary-background.png)'
                      )}
                  >
                    <Button addClass='c-button'>
                      <Image
                        url='assets/images/SvgBottomBar-8.png'
                        alt='actividad'
                        noCaption
                      />
                    </Button>
                  </ButtonSection>
                </foreignObject>
              </SvgStageMenu>
            </Row>
          </Col>
        </Row>

        <Modal
          isOpen={isOpen.context}
          finalFocusRef={contextRef}
          onClose={() => onToggleModal('context')}
        >
          <ModalOverlay />

          <ModalContent addClass='c-modal u-fs-300'>
            <ImageContainer
              background='assets/images/Slide3-image-1.png'
              addClass='title-container title-container--stage'
              width='500px'
              height='50px'
            >
              <h2 className='u-special-font u-text-center u-fs-600'>
                Contexto
              </h2>
            </ImageContainer>

            <Row justify-content='center' align-items='center'>
              <Col xs='11' mm='10' md='9' lg='6' addClass='u-self-end u-mb-9'>
                <ImageContainer
                  background='assets/images/Slide1-image-9.png'
                  addClass='c-image-container-sign'
                  padding='30px'
                >
                  <p className='u-mb-3'>
                    En la fina La Pradera la yegua “Vencedora” presentó síntomas
                    de celo. Fue servida utilizando inseminación artificial hace
                    25 días, los operarios del establecimiento estuvieron muy
                    atentos en el periodo comprendido entre 15 a 24 días luego
                    del servicio con el objetivo de detectar sintomatología de
                    celo en la hembra en mención, sin embargo, esta no presentó
                    ninguna sintomatología relacionada. Se requiere conocer el
                    estado reproductivo en el cual se encuentra la yegua.
                  </p>

                  <p>
                    Para revisar el estado reproductivo se recomienda realizar
                    una evaluación reproductiva por ultrasonografía, en la cual
                    se establezca la causa del no retorno al celo luego del
                    servicio.
                  </p>
                </ImageContainer>
              </Col>

              <Col xs='11' mm='10' md='9' lg='6' hd='5'>
                <Image
                  src='assets/images/horse-base.png'
                  alt='Animación de un caballo parado'
                  width='580'
                  noCaption
                />
              </Col>
            </Row>
          </ModalContent>
        </Modal>

        <Modal
          isOpen={isOpen.situation}
          finalFocusRef={situationRef}
          onClose={() => onToggleModal('situation')}
        >
          <ModalOverlay />

          <ModalContent addClass='c-modal u-fs-300'>
            <ImageContainer
              background='assets/images/Slide3-image-1.png'
              addClass='title-container title-container--stage'
              width='500px'
              height='50px'
            >
              <h2 className='u-special-font u-text-center u-fs-600'>
                Situación
              </h2>
            </ImageContainer>

            <Row justify-content='center' align-items='center'>
              <Col
                xs='11'
                mm='10'
                md='8'
                lg='6'
                hd='5'
                addClass='u-self-end u-mb-9'
              >
                <ImageContainer
                  background='assets/images/Slide1-image-9.png'
                  addClass='c-image-container-sign'
                  padding='30px'
                >
                  <p>
                    La evaluación reproductiva por ultrasonografía es una
                    práctica fundamental y cotidiana en el manejo reproductivo
                    de una producción equina. De acuerdo con la situación vista,
                    aplique sus conocimientos de la anatomía del tracto
                    reproductivo de la yegua.
                  </p>
                </ImageContainer>
              </Col>

              <Col xs='11' mm='10' md='8' lg='6' hd='5'>
                <Image
                  src='assets/images/horse-base.png'
                  alt='Animación de un caballo parado'
                  width='816'
                  noCaption
                />
              </Col>
            </Row>
          </ModalContent>
        </Modal>
      </Section>

      <Section addClass='animate__animated animate__fadeInDown animate__faster u-section-overflow'>
        <Row justify-content='center' align-items='center'>
          <Col xs='11' mm='10' md='9' lg='8' hd='7'>
            <ImageContainer
              background='assets/images/Slide1-image-9.png'
              addClass='u-mt-2'
              padding='30px'
            >
              <ImageContainer
                background='assets/images/Slide3-image-1.png'
                addClass='title-container'
                width='500px'
                height='50px'
              >
                <h2 className='u-special-font u-text-center u-fs-600'>
                  Actividad 1
                </h2>
              </ImageContainer>

              <Row
                justify-content='center'
                align-items='center'
                addClass='u-pt-2'
              >
                <Col xs='11' mm='10' md='9' lg='6' hd='5'>
                  <Image
                    src='assets/images/Slide3-image-6.png'
                    alt='Vista anterior del aparato reproductor hembra equina'
                    addClass='c-actvity__image'
                    width='360'
                    noCaption
                  />
                </Col>

                <Col xs='11' mm='10' md='9' lg='7' hd='6' addClass='u-fs-300'>
                  <p className='u-mb-2 u-mt-5'>
                    Luego de la ultrasonografía, las estructuras que podrían
                    estar presentes en el tracto uterino e impedirían el retorno
                    al celo de la hembra en mención serian.
                  </p>

                  <p>
                    Desplace el cursor por cada opción de la ultrasonografía y
                    seleccione dos que considere correctas. Por cada opción
                    correcta obtiene 2.5 puntos, para un total de 5, y cuenta
                    con un intento para realizarla. Haga clic en el botón
                    validar para finalizar la actividad y conocer el puntaje
                    obtenido.
                  </p>

                  <CheckBoxGroup id='activity_1' minSelected={2} onResult={handleActivity}>
                    <div className='c-checkbox-modal-grid u-my-4'>
                      <CheckBoxModal
                        id='ui-checkbox-1'
                        value='Item_1'
                        label='Opción 1'
                        state='right'
                        points={2.5}
                      >
                        <Row
                          justify-content='center'
                          flex-direction='column'
                          addClass='u-fs-300'
                        >
                          <p className='u-my-2 u-font-bold'>Opción 1</p>
                          <p>
                            La presencia de un cuerpo lúteo en alguno de los
                            ovarios acompañado de una vesícula embrionaria y un
                            embrión en el útero, la hembra estaría gestante y
                            esa sería la explicación de por qué no retornó al
                            celo luego de la inseminación.
                          </p>
                        </Row>
                      </CheckBoxModal>

                      <CheckBoxModal
                        id='ui-checkbox-2'
                        value='Item_2'
                        label='Opción 2'
                        state='wrong'
                        points={-2.5}
                      >
                        <Row
                          justify-content='center'
                          flex-direction='column'
                          addClass='u-fs-300'
                        >
                          <p className='u-my-2 u-font-bold'>Opción 2</p>
                          <p>
                            La presencia de un cuerpo extraño en alguno de los
                            úteros acompañado de una vesícula seminal y un
                            embrión único vivo en el testículo. La hembra
                            estaría gestante y sería la explicación de por qué
                            no retornó al celo luego de la diseminación.
                          </p>
                        </Row>
                      </CheckBoxModal>

                      <CheckBoxModal
                        id='ui-checkbox-3'
                        value='Item_3'
                        label='Opción 3'
                        state='right'
                        points={2.5}
                      >
                        <Row
                          justify-content='center'
                          flex-direction='column'
                          addClass='u-fs-300'
                        >
                          <p className='u-my-2 u-font-bold'>Opción 3</p>
                          <p>
                            Se podría encontrar un cuerpo lúteo en alguno de los
                            ovarios, pero no la presencia de vesícula
                            embrionaria y embrión en el útero, de este modo, la
                            presencia del cuerpo lúteo y la progesterona que
                            este libera no permiten que la hembra retorne al
                            celo.
                          </p>
                        </Row>
                      </CheckBoxModal>

                      <CheckBoxModal
                        id='ui-checkbox-4'
                        value='Item_4'
                        label='Opción 4'
                        state='wrong'
                        points={-2.5}
                      >
                        <Row
                          justify-content='center'
                          flex-direction='column'
                          addClass='u-fs-300'
                        >
                          <p className='u-my-2 u-font-bold'>Opción 4</p>
                          <p>
                            Se podría encontrar un cuerpo lúteo en alguno de los
                            ovarios, pero no la presencia de vesícula
                            embrionaria y embrión en el útero, de este modo, la
                            presencia del cuerpo lúteo y la progesterona que
                            este libera no permiten que la hembra retorne al
                            celo.
                          </p>
                        </Row>
                      </CheckBoxModal>
                    </div>

                    <Row justify-content='center' align-items='center'>
                      <CheckBoxButton>
                        <Button
                          ref={validateRef}
                          addClass='u-button-reset u-stack'
                        >
                          <Image
                            src='assets/images/Button-style-large.png'
                            alt='Validar la actividad'
                            width='200'
                            noCaption
                          />
                          <span className='u-special-font u-fs-500 u-zindex-2'>
                            Validar
                          </span>
                        </Button>
                      </CheckBoxButton>

                      <ButtonSection
                        section={2}
                        onClick={() =>
                          setBackground(
                            'url(/assets/images/Principal-background.png)'
                          )}
                      >
                        <Button addClass='u-button-reset u-stack'>
                          <Image
                            src='assets/images/Button-style-large.png'
                            alt='Volver a la sección anterior'
                            width='200'
                            noCaption
                          />
                          <span className='u-special-font u-fs-500 u-zindex-2'>
                            Volver
                          </span>
                        </Button>
                      </ButtonSection>
                    </Row>
                  </CheckBoxGroup>
                </Col>
              </Row>
            </ImageContainer>
          </Col>

          <Col xs='11' mm='10' md='9' lg='6' hd='4' />

          <ModalActivity
            section={4}
            open={isOpen.activity}
            onClose={() => onToggleModal('activity')}
            focusRef={validateRef}
            feedback='Se debe contar con el conocimiento anatómico de la hembra
            equina de modo que pueda determinar las causas de no retorno
            al celo a partir d elas evaluaciones realizadas y de la
            situación asociada.'
            points={`${points} / 5`}
          />
        </Row>
      </Section>

      <Section addClass='animate__animated animate__fadeInDown animate__faster'>
        <Row justify-content='center' align-items='flex-start'>
          <Col xs='12' mm='11' md='10' lg='9' hd='8'>
            <ImageContainer
              background='assets/images/Slide3-image-7.png'
              addClass='u-text-center u-my-2'
              padding='30px'
            >
              <h2 className='u-mb-3 u-fs-300 u-font-normal'>
                <strong>Plan de manejo:</strong> Anatomía de la reproducción en
                equinos.
              </h2>

              <p className='u-mb-5 u-fs-300'>
                Con base en la información manejada en esta parte del recurso,
                seleccione las partes que conforman el tracto reproductivo de la
                hembra equina y del menú desplegable elija la función respectiva
                dentro del sistema reproductivo.
              </p>

              <div className='c-plan-group-grid u-px-3'>
                <PlanGroup>
                  <PlanCheck value='question_1' label='Vulva.' />

                  <PlanSelect id='question_1' label='Seleccionar'>
                    <Item key='1'>
                      Órgano que fundamenta en la expresión de sintomatología de
                      celo.
                    </Item>

                    <Item key='2'>
                      En esta región se produce la eyaculación, siendo el inicio
                      del proceso de fertilización.
                    </Item>

                    <Item key='3'>
                      A través del este se realiza el pasaje de instrumentos con
                      los cuales se realizan diferentes biotecnologías, ya sea
                      inseminación artificial o, colecta y transferencia de
                      embriones.
                    </Item>

                    <Item key='4'>
                      Es el sitio en el cual se realiza la deposición del semen
                      en la inseminación artificial.
                    </Item>

                    <Item key='5'>
                      En su interior se produce el recorrido que realiza el
                      embrión para procurar el reconocimiento materno de preñez
                      y lograr la gestación, junto con el cuerpo uterino,
                      reflejan la presentación de edema uterino, el cual es
                      fundamental en el seguimiento que se realiza para
                      determinar el momento de la ovulación.
                    </Item>
                  </PlanSelect>

                  <PlanCheck value='question_2' label='Vagina.' />

                  <PlanSelect id='question_2' label='Seleccionar'>
                    <Item key='1'>
                      Órgano que fundamenta en la expresión de sintomatología de
                      celo.
                    </Item>

                    <Item key='2'>
                      En esta región se produce la eyaculación, siendo el inicio
                      del proceso de fertilización.
                    </Item>

                    <Item key='3'>
                      A través del este se realiza el pasaje de instrumentos con
                      los cuales se realizan diferentes biotecnologías, ya sea
                      inseminación artificial o, colecta y transferencia de
                      embriones.
                    </Item>

                    <Item key='4'>
                      Es el sitio en el cual se realiza la deposición del semen
                      en la inseminación artificial.
                    </Item>

                    <Item key='5'>
                      En su interior se produce el recorrido que realiza el
                      embrión para procurar el reconocimiento materno de preñez
                      y lograr la gestación, junto con el cuerpo uterino,
                      reflejan la presentación de edema uterino, el cual es
                      fundamental en el seguimiento que se realiza para
                      determinar el momento de la ovulación.
                    </Item>
                  </PlanSelect>

                  <PlanCheck value='question_3' label='Cérvix.' />

                  <PlanSelect id='question_3' label='Seleccionar'>
                    <Item key='1'>
                      Órgano que fundamenta en la expresión de sintomatología de
                      celo.
                    </Item>

                    <Item key='2'>
                      En esta región se produce la eyaculación, siendo el inicio
                      del proceso de fertilización.
                    </Item>

                    <Item key='3'>
                      A través del este se realiza el pasaje de instrumentos con
                      los cuales se realizan diferentes biotecnologías, ya sea
                      inseminación artificial o, colecta y transferencia de
                      embriones.
                    </Item>

                    <Item key='4'>
                      Es el sitio en el cual se realiza la deposición del semen
                      en la inseminación artificial.
                    </Item>

                    <Item key='5'>
                      En su interior se produce el recorrido que realiza el
                      embrión para procurar el reconocimiento materno de preñez
                      y lograr la gestación, junto con el cuerpo uterino,
                      reflejan la presentación de edema uterino, el cual es
                      fundamental en el seguimiento que se realiza para
                      determinar el momento de la ovulación.
                    </Item>
                  </PlanSelect>

                  <PlanCheck value='question_4' label='Cuerpo del útero.' />

                  <PlanSelect id='question_4' label='Seleccionar'>
                    <Item key='1'>
                      Órgano que fundamenta en la expresión de sintomatología de
                      celo.
                    </Item>

                    <Item key='2'>
                      En esta región se produce la eyaculación, siendo el inicio
                      del proceso de fertilización.
                    </Item>

                    <Item key='3'>
                      A través del este se realiza el pasaje de instrumentos con
                      los cuales se realizan diferentes biotecnologías, ya sea
                      inseminación artificial o, colecta y transferencia de
                      embriones.
                    </Item>

                    <Item key='4'>
                      Es el sitio en el cual se realiza la deposición del semen
                      en la inseminación artificial.
                    </Item>

                    <Item key='5'>
                      En su interior se produce el recorrido que realiza el
                      embrión para procurar el reconocimiento materno de preñez
                      y lograr la gestación, junto con el cuerpo uterino,
                      reflejan la presentación de edema uterino, el cual es
                      fundamental en el seguimiento que se realiza para
                      determinar el momento de la ovulación.
                    </Item>
                  </PlanSelect>

                  <PlanCheck value='question_5' label='Cuerno uterinos.' />

                  <PlanSelect id='question_5' label='Seleccionar'>
                    <Item key='1'>
                      Órgano que fundamenta en la expresión de sintomatología de
                      celo.
                    </Item>

                    <Item key='2'>
                      En esta región se produce la eyaculación, siendo el inicio
                      del proceso de fertilización.
                    </Item>

                    <Item key='3'>
                      A través del este se realiza el pasaje de instrumentos con
                      los cuales se realizan diferentes biotecnologías, ya sea
                      inseminación artificial o, colecta y transferencia de
                      embriones.
                    </Item>

                    <Item key='4'>
                      Es el sitio en el cual se realiza la deposición del semen
                      en la inseminación artificial.
                    </Item>

                    <Item key='5'>
                      En su interior se produce el recorrido que realiza el
                      embrión para procurar el reconocimiento materno de preñez
                      y lograr la gestación, junto con el cuerpo uterino,
                      reflejan la presentación de edema uterino, el cual es
                      fundamental en el seguimiento que se realiza para
                      determinar el momento de la ovulación.
                    </Item>
                  </PlanSelect>

                  <PlanCheck value='question_6' label='Oviducto.' />

                  <PlanSelect id='question_6' label='Seleccionar'>
                    <Item key='1'>
                      Órgano que fundamenta en la expresión de sintomatología de
                      celo.
                    </Item>

                    <Item key='2'>
                      En esta región se produce la eyaculación, siendo el inicio
                      del proceso de fertilización.
                    </Item>

                    <Item key='3'>
                      A través del este se realiza el pasaje de instrumentos con
                      los cuales se realizan diferentes biotecnologías, ya sea
                      inseminación artificial o, colecta y transferencia de
                      embriones.
                    </Item>

                    <Item key='4'>
                      Es el sitio en el cual se realiza la deposición del semen
                      en la inseminación artificial.
                    </Item>

                    <Item key='5'>
                      En su interior se produce el recorrido que realiza el
                      embrión para procurar el reconocimiento materno de preñez
                      y lograr la gestación, junto con el cuerpo uterino,
                      reflejan la presentación de edema uterino, el cual es
                      fundamental en el seguimiento que se realiza para
                      determinar el momento de la ovulación.
                    </Item>
                  </PlanSelect>

                  <PlanCheck value='question_7' label='Ovarios.' />

                  <PlanSelect id='question_7' label='Seleccionar'>
                    <Item key='1'>
                      Órgano que fundamenta en la expresión de sintomatología de
                      celo.
                    </Item>

                    <Item key='2'>
                      En esta región se produce la eyaculación, siendo el inicio
                      del proceso de fertilización.
                    </Item>

                    <Item key='3'>
                      A través del este se realiza el pasaje de instrumentos con
                      los cuales se realizan diferentes biotecnologías, ya sea
                      inseminación artificial o, colecta y transferencia de
                      embriones.
                    </Item>

                    <Item key='4'>
                      Es el sitio en el cual se realiza la deposición del semen
                      en la inseminación artificial.
                    </Item>

                    <Item key='5'>
                      En su interior se produce el recorrido que realiza el
                      embrión para procurar el reconocimiento materno de preñez
                      y lograr la gestación, junto con el cuerpo uterino,
                      reflejan la presentación de edema uterino, el cual es
                      fundamental en el seguimiento que se realiza para
                      determinar el momento de la ovulación.
                    </Item>
                  </PlanSelect>
                </PlanGroup>
              </div>

              <Row
                justify-content='center'
                align-items='center'
                addClass='u-mt-3'
              >
                <ButtonSection section={3}>
                  <Button addClass='u-button-reset u-stack'>
                    <Image
                      src='assets/images/Button-style-large.png'
                      alt='Volver a la sección anterior'
                      width='200'
                      noCaption
                    />
                    <span className='u-special-font u-fs-500 u-zindex-2'>
                      Volver
                    </span>
                  </Button>
                </ButtonSection>

                <Link to='/unit/1/page/2' className='u-button-reset u-stack'>
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
      </Section>
    </Panel>
  )
}

export default Ova7p3
