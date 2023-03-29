import { useState, useRef, useReducer } from 'react'
import { Link } from 'react-router-dom'
import {
  Panel,
  Section,
  Col,
  Row,
  Image,
  Modal,
  Button,
  NavSection,
  ButtonSection,
  ModalOverlay,
  ModalContent,
  Draggable,
  Droppable,
  DragAndDrop,
  GeneralDraggable
} from 'UI-Components-books'
import {
  SvgStageMenuTwo,
  ImageContainer,
  DragValidation,
  MultipleCheckbox,
  MultipleCheckboxOption,
  MultipleCheckBoxButton,
  ModalActivity
} from '@components'
import { useBackground } from '@hooks'

const Ova7p7 = () => {
  const questionOBJ = [
    {
      id: '1',
      questionTitle:
        'Teniendo en cuenta las enfermedades mencionadas en el recurso, mencione cuales enfermedades son de control en Colombia y que vacunas se deben incluir en el plan de manejo reproductivo según las directrices del Instituto Colombiano Agropecuario. Seleccione las vacunas que se deben incluir en el plan de manejo del sistema de producción equina según el ICA)',
      options: [
        { answer: 'Encefalitis equina venezolana – EEV.', state: 'right' },
        { answer: 'Influenza equina.', state: 'right' },
        { answer: 'Influeza venezolana.', state: 'wrong' },
        { answer: 'Encefalitis.', state: 'wrong' }
      ]
    }
  ]
  const { setBackground } = useBackground()
  const [isOpen, setIsOpen] = useState(false)
  const puntaje = null
  const onResult = (value) => {
    console.log(value)
  }

  const contextRef = useRef()

  // Custom hook que permite cambiar el background.
  // const { level, setUpdateLevelActive, setActivityLoad, setActivityComplete } =
  //   useLevelMap();

  // Usado para controlar la apertura del modal de la actividad radio y el contenido dentro de éste.
  const [validate, setValidate] = useState({ isOpen: false, isRight: false })
  const [defaultValidateId, setDefaultValidateId] = useState([])
  const [defaultState, setDefaultState] = useState({})
  const [updateState, setUpdateState] = useState({})

  // Usado para controlar todos los elementos de la actividad Drag.
  const [dragActivity, updatedDragActivity] = useReducer(
    (prev, next) => {
      return { ...prev, ...next }
    },
    { isOpenModal: false, isRight: false, isValidate: false, button: true }
  )

  /**
   * Función que se encarga de validar
   * el valor proporcionado por el componente Radio.
   *
   * @param {Array} result - Object
   */
  const onValidate = (result) => {
    const newObject = { isOpen: true }

    if (result) {
      newObject.isRight = true
    }
    setValidate({ ...newObject })
  }

  // Se utiliza para cerrar el modal de la actividad Radio.
  const onCloseModal = () => {
    setValidate({ ...validate, isOpen: false })
  }

  /**
   * Función que se encarga de validar
   * el valor proporcionado por el componente DragAndDrop.
   *
   * @param {Array} value - ID del drag
   */
  const onNewDrag = ({ validate: drags, active }) => {
    const newListDrags = [...drags]
    const TOTAL_DRAGS_TO_THROW_CORRECT_MODAL = 1

    if (active && dragActivity.button) {
      updatedDragActivity({ button: !dragActivity.button })
    }

    if (newListDrags.length === TOTAL_DRAGS_TO_THROW_CORRECT_MODAL) {
      updatedDragActivity({ isRight: !dragActivity.isRight })
    }
    // setUpdateLevelActive("/redg-4/level-1/activity-8");
  }

  // Referencia del botón que valida la actividad drag.
  const refButtonDragActivity = useRef()

  // Referencia del botón de la actividad Radio.
  const refButtonActivity = useRef()

  const onState = ({ state }) => {
    setUpdateState(state)
  }

  // useEffect(() => {
  //   // guarda las llaves de las actividades en cache
  //   setActivityLoad({
  //     activities: [{ key: "Lv1Act7-Ativity1" }, { key: "Lv1Act7-Ativity2" }],
  //   });
  // }, []);

  // useEffect(() => {
  //   if (dragActivity.isValidate && !dragActivity.load) {
  //     setActivityComplete({
  //       key: updateState.key,
  //       answer: updateState.validateId,
  //       answers: updateState.newObjectState,
  //     });
  //   }
  // }, [dragActivity]);

  // useEffect(() => {
  //   if (level) {
  //     const { activities } = level;
  //     const activity = activities?.find(
  //       (item) => item.key === "Lv1Act7-Ativity1"
  //     );
  //     if (activity?.complete) {
  //       setDefaultValidateId(activity.answer || []);
  //       setDefaultState(activity.answers || {});

  //       if (!activity.isValidate) updatedDragActivity({ isValidate: true });
  //     }
  //   }
  // }, [level]);

  return (
    <Panel>
      <NavSection />

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
                  Etapa 5.
                  <br />
                  <span>
                    Enfermedades que afectan la reproducción en equinos
                  </span>
                </h2>
              </ImageContainer>

              <Image
                src='assets/images/SvgRoulette-horse.png'
                alt='Imagen de la cabeza de un caballo'
                width='450'
                addClass='u-mt-5'
                noCaption
              />

              <SvgStageMenuTwo style={{ maxWidth: '700px' }}>
                {/* Buttons */}

                <foreignObject
                  x='47'
                  y='110'
                  width='350'
                  height='95'
                  className='hoverButton'
                >
                  <ButtonSection
                    section={2}
                    onClick={() =>
                      setBackground('url(/assets/images/Sixth-background.png)')}
                  >
                    <Button addClass='c-button'>
                      <Image
                        url='assets/images/SvgBottomBar-7.png'
                        alt='actividad'
                        noCaption
                      />
                    </Button>
                  </ButtonSection>
                </foreignObject>

                <foreignObject
                  x='412'
                  y='110'
                  width='350'
                  height='95'
                  className='hoverButton'
                >
                  <ButtonSection
                    section={3}
                    onClick={() =>
                      setBackground('url(/assets/images/Sixth-background.png)')}
                  >
                    <Button addClass='c-button'>
                      <Image
                        url='assets/images/SvgBottomBar-6.png'
                        alt='contexto'
                        noCaption
                      />
                    </Button>
                  </ButtonSection>
                </foreignObject>

                <foreignObject
                  x='790'
                  y='110'
                  width='350'
                  height='95'
                  className='hoverButton'
                >
                  <ButtonSection
                    section={4}
                    onClick={() =>
                      setBackground('url(/assets/images/Sixth-background.png)')}
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
              </SvgStageMenuTwo>
            </Row>
          </Col>
        </Row>
      </Section>

      <Section addClass='animate__animated animate__fadeInDown animate__faster u-section-overflow'>
        <Row justify-content='center' align-items='center' addClass='u-my-6'>
          <Col xs='11' mm='10' md='9' lg='7' hd='6'>
            <ImageContainer
              background='assets/images/Slide1-image-9.png'
              addClass='u-mt-2 u-fs-300 c-image-container-sign'
              padding='30px'
            >
              <ImageContainer
                background='assets/images/Slide3-image-1.png'
                addClass='title-container'
                width='500px'
                height='50px'
              >
                <h2 className='u-special-font u-text-center u-fs-600'>
                  Situación
                </h2>
              </ImageContainer>

              <p className='u-mt-5 u-mx-3'>
                Es muy importante reconocer las principales enfermedades
                reproductivas y su impacto en la eficiencia del sistema, de esta
                forma se presenta como una herramienta fundamental en la
                prevención y control, de nada servirá implementar diferentes
                tipos de biotecnologías en el manejo reproductivo, si el
                panorama sanitario de la producción es deficiente
              </p>

              <p className='u-my-2 u-mx-3'>
                En esta pesebrera algunos animales presentan fallas
                reproductivas que obedecen específicamente a patologías que
                afectan la reproducción, siendo el aborto la sintomatología más
                desfavorable. Muchas de estas patologías pueden ser ocasionadas
                por diferentes tipos de microorganismos, ya sean bacterianos,
                virales o fúngicos. De la misma forma, estos microorganismos
                ocasionalmente afectan el normal proceso reproductivo y evitan
                la concepción, lo cual afecta enormemente los parámetros
                reproductivos y productivos del sistema.
              </p>

              <Row justify-content='center' align-items='center'>
                <ButtonSection
                  section={1}
                  onClick={() =>
                    setBackground(
                      'url(/assets/images/Principal-background.png)'
                    )}
                >
                  <Button addClass='u-button-reset u-stack'>
                    <Image
                      src='assets/images/Button-style-large.png'
                      alt='Volver a la primera sección'
                      width='200'
                      noCaption
                    />
                    <span className='u-special-font u-fs-500 u-zindex-2'>
                      Volver
                    </span>
                  </Button>
                </ButtonSection>

                <ButtonSection section={3}>
                  <Button addClass='u-button-reset u-stack'>
                    <Image
                      src='assets/images/Button-style-large.png'
                      alt='Ir a la tercera sección'
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

          <Col xs='11' mm='10' md='9' lg='6' hd='4' />
        </Row>
      </Section>

      <Section addClass='animate__animated animate__fadeInDown animate__faster u-section-overflow'>
        <Row justify-content='center' align-items='center' addClass='u-my-6'>
          <Col xs='11' mm='10' md='9' lg='7' hd='6'>
            <ImageContainer
              background='assets/images/Slide1-image-9.png'
              addClass='u-mt-2 u-fs-300 c-image-container-sign'
              padding='30px'
            >
              <ImageContainer
                background='assets/images/Slide3-image-1.png'
                addClass='title-container'
                width='500px'
                height='50px'
              >
                <h2 className='u-special-font u-text-center u-fs-600'>
                  Contexto
                </h2>
              </ImageContainer>

              <p className='u-mt-5 u-mx-3'>
                Son muchas las causas patológicas que afectan la reproducción en
                equinos, sin embargo, conocer su sintomatología y lograr un
                correcto diagnóstico es el conducto regular y más adecuado para
                generar el control de sus efectos nocivos en la rentabilidad del
                sistema, para esto hay que apoyarse en pruebas de laboratorio
                que permitan identificar los microorganismos presentes en el
                cuadro patológico, y con base en esto iniciar las estrategias de
                control y prevención, ante la presentación de un cuadro de una
                yegua problema, en la cual se han realizado varias
                inseminaciones, no se ha logrado obtener preñez y se sospecha de
                situaciones sanitarias.
              </p>

              <Row justify-content='center' align-items='center'>
                <ButtonSection
                  section={1}
                  onClick={() =>
                    setBackground(
                      'url(/assets/images/Principal-background.png)'
                    )}
                >
                  <Button addClass='u-button-reset u-stack'>
                    <Image
                      src='assets/images/Button-style-large.png'
                      alt='Volver a la primera sección'
                      width='200'
                      noCaption
                    />
                    <span className='u-special-font u-fs-500 u-zindex-2'>
                      Volver
                    </span>
                  </Button>
                </ButtonSection>

                <ButtonSection section={4}>
                  <Button addClass='u-button-reset u-stack'>
                    <Image
                      src='assets/images/Button-style-large.png'
                      alt='Ir a la tercera sección'
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

          <Col xs='11' mm='10' md='9' lg='6' hd='4' />
        </Row>
      </Section>

      <Section addClass='animate__animated animate__fadeInDown animate__faster u-section-overflow'>
        <Row
          justify-content='space-evenly'
          align-items='center'
          addClass='u-py-6'
        >
          <DragAndDrop
            validate={dragActivity.isValidate}
            id='Lv1Act7-Ativity1'
            onState={onState}
            defaultValidate={defaultValidateId}
            defaultState={defaultState}
            onValidate={onNewDrag}
          >
            <Col xs='11' mm='10' md='10' lg='10' hd='10'>
              <ImageContainer
                background='assets/images/Slide1-image-9.png'
                addClass='u-py-4 u-fs-300 container-act-7'
                padding='30px'
              >
                <ImageContainer
                  background='assets/images/Slide3-image-1.png'
                  addClass='title-container'
                  width='500px'
                  height='50px'
                >
                  <h2 className='u-special-font u-text-center u-fs-600'>
                    Actividad 7
                  </h2>
                </ImageContainer>

                <p className='u-text-center'>
                  Para resolver el dilema del propietario, ¿qué estrategia
                  utilizaría para identificar el problema sanitario involucrado?
                </p>

                <p className='u-text-center'>
                  Para responder lea cada una de las opciones presentadas y
                  elija la que considere correcta, para ello ubique la yegua en
                  el círculo en blanco debajo de la opción elegida.
                </p>

                <p className='u-text-center'>
                  Cuando finalice haga clic en el botón “Validar” para conocer
                  la retroalimentación y el puntaje obtenido.
                </p>

                <p className='u-text-center'>
                  Esta actividad tiene un valor de 6 puntos y cuenta con un
                  intento para realizarla.
                </p>

                <GeneralDraggable addClass='c-drags-act-7'>
                  <Draggable
                    id='A1'
                    label='Draggable item'
                    dragging='c-drag--active'
                    addClass='c-drag--act7'
                  >
                    <p className='ocultar'>yegua drag</p>
                  </Draggable>
                </GeneralDraggable>
              </ImageContainer>
            </Col>

            <Col xs='11' mm='10' md='9' lg='6' hd='4'>
              <div className='drop-container__act-7'>
                <p className='u-ml-3 u-mr-3  u-mb-6 u-text-justify'>
                  El problema puede estar asociado a condiciones insalubres de
                  la Pesebrera. Una estrategia puede ser inspeccionar la
                  pesebrera donde se encuentra la yegua, revisar la cantidad de
                  líquido que se permite ingresar y realizar una evaluación
                  reproductiva por ecografía transvaginal revisando la presencia
                  de estructuras equinas, analizando la presencia de anestro.
                </p>
                <Droppable
                  id='A'
                  validate={['B1']}
                  label='droppable'
                  addClass='drop-act7'
                  over='drop-container__drop-item--active'
                />
              </div>
            </Col>

            <Col xs='11' mm='10' md='9' lg='6' hd='4'>
              <div className='drop-container__act-7'>
                <p className='u-ml-3 u-mr-3  u-mb-6 u-text-justify'>
                  El problema puede estar asociado a la presencia de
                  microorganismos patógenos a nivel uterino, los cuales
                  interfieren en el desarrollo embrionario. Una estrategia puede
                  ser obtener una muestra mediante hisopado uterino y en
                  laboratorio identificar el microorganismo y su nivel de
                  sensibilidad por antibiograma. Luego, realizar lavados
                  uterinos y terapias parenterales de soporte.
                </p>
                <Droppable
                  id='B'
                  validate={['A1']}
                  label='droppable'
                  addClass='drop-act7'
                  over='drop-container__drop-item--active'
                />
              </div>
            </Col>

            <Col xs='11' mm='10' md='9' lg='6' hd='4'>
              <div className='drop-container__act-7'>
                <p className='u-ml-3 u-mr-3  u-mb-6 u-text-justify'>
                  El problema puede estar asociado a la presencia de
                  microorganismos patógenos en la pesebrera. Podrá determinarse
                  realizando una evaluación reproductiva por ecografía
                  transrectal revisando la presencia de estructuras ováricas,
                  analizando la presencia de anestro. Luego, realizar lavados
                  uterinos de modo que aumenten las probabilidades de preñez.
                </p>
                <Droppable
                  id='C'
                  validate={['C1']}
                  label='droppable'
                  addClass='drop-act7'
                  over='drop-container__drop-item--active'
                />
              </div>
            </Col>
          </DragAndDrop>

          <Col xs='11' mm='11' md='11' lg='11' hd='11'>
            <div className='btn-sec-act7'>
              <Button
                addClass='u-button-reset u-stack hoverButton'
                ref={refButtonDragActivity}
                label='Comprobar'
                disabled={dragActivity.button}
                hasAriaLabel
                onClick={() => {
                  () => setIsOpen(true)
                  updatedDragActivity({
                    isValidate: !dragActivity.isValidate,
                    button: !dragActivity.button,
                    isOpenModal: !dragActivity.isOpenModal
                  })
                }}
              >
                <Image
                  src='assets/images/Button-style-large.png'
                  alt='Ir a la segunda sección'
                  width='200'
                  noCaption
                />
                <span className='u-special-font u-fs-500 u-zindex-2'>
                  Validar
                </span>
              </Button>

              <ButtonSection
                section={1}
                onClick={() =>
                  setBackground('url(/assets/images/Principal-background.png)')}
              >
                <Button addClass='u-button-reset u-stack hoverButton'>
                  <Image
                    src='assets/images/Button-style-large.png'
                    alt='Ir a la segunda sección'
                    width='200'
                    noCaption
                  />
                  <span className='u-special-font u-fs-500 u-zindex-2'>
                    Volver
                  </span>
                </Button>
              </ButtonSection>
            </div>
          </Col>
        </Row>

        <ModalActivity
          section={5}
          open={dragActivity.isOpenModal}
          onClose={() => updatedDragActivity({ isOpenModal: !dragActivity.isOpenModal })}
          focusRef={contextRef}
          feedback='La presencia de microorganismos patógenos a nivel uterino, los
            cuales interfieren en desarrollo embrionario son causas para
            abortos en las hembras equinas.'
          points={`${dragActivity.isRight ? 6 : 0} / 6`}
        />

        {/* <Modal
          isOpen={dragActivity.isOpenModal}
          finalFocusRef={contextRef}
          onClose={() =>
            updatedDragActivity({ isOpenModal: !dragActivity.isOpenModal })
          }
        >
          <ModalOverlay />
          <ModalContent addClass="c-modal-secondary u-fs-300">
            <Row justify-content="center" align-items="center">
              <Col xs="11">
                <p className="u-text-center">
                  La presencia de microorganismos patógenos a nivel uterino, los
                  cuales interfieren en desarrollo embrionario son causas para
                  abortos en las hembras equinas
                </p>
                <p className="u-text-center">
                  <b>
                    Puntaje obtenido: {dragActivity.isRight ? 6 : 0} / 6 puntos
                  </b>
                </p>
              </Col>
            </Row>
            <div className="container-btn">
              <ButtonSection
                section={5}
                onClick={() =>
                  updatedDragActivity({
                    isOpenModal: !dragActivity.isOpenModal,
                  })
                }
              >
                <Button addClass="u-button-reset u-stack">
                  <Image
                    src="assets/images/Button-style-large.png"
                    alt="Ir a la segunda sección"
                    width="200"
                    noCaption
                  />
                  <span className="u-special-font u-fs-500 u-zindex-2">
                    Continuar
                  </span>
                </Button>
              </ButtonSection>
            </div>
          </ModalContent>
        </Modal> */}
      </Section>

      <Section addClass='animate__animated animate__fadeInDown animate__faster u-section-overflow'>
        <Row justify-content='center' align-items='center'>
          <Col xs='12' mm='11' md='10' lg='9' hd='8'>
            <ImageContainer
              background='assets/images/Slide3-image-7.png'
              addClass='u-text-center u-my-2'
              padding='30px'
            >
              <h2 className='u-mb-3 u-fs-300'>
                <strong>Plan de manejo:</strong> Enfermedades que afectan la
                reproducción en equinos
              </h2>
              <MultipleCheckbox
                id='ucun-Activity7'
                addClass='fieldsetStyle'
                onResult={(value) => onResult(value)}
              >
                <MultipleCheckboxOption
                  mainOBJ={questionOBJ}
                  addClass='checkStyle'
                />
                <MultipleCheckBoxButton hasCustomButton>
                  <Button addClass='u-button-reset u-stack btnValidar'>
                    <Image
                      src='assets/images/Button-style-large.png'
                      alt='Volver a la tercera sección'
                      width='200'
                      noCaption
                    />
                    <span className='u-special-font u-fs-500 u-zindex-2'>
                      Validar
                    </span>
                  </Button>
                </MultipleCheckBoxButton>
              </MultipleCheckbox>

              <Row
                justify-content='center'
                align-items='center'
                addClass='u-mt-3'
              >
                <ButtonSection section={1}>
                  <Button addClass='u-button-reset u-stack'>
                    <Image
                      src='assets/images/Button-style-large.png'
                      alt='Volver a la tercera sección'
                      width='200'
                      noCaption
                    />
                    <span className='u-special-font u-fs-500 u-zindex-2'>
                      Volver
                    </span>
                  </Button>
                </ButtonSection>

                <Link to='/unit/1/page/8' className='u-button-reset u-stack'>
                  <Image
                    src='assets/images/Button-style-large.png'
                    alt='Lleva al menú principal'
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

export default Ova7p7
