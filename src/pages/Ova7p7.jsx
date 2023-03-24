import { useState, useRef } from "react";
import { Link } from "react-router-dom";
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
  List,
  ListItem,
  Draggable,
  Droppable,
  GeneralDraggable,
} from "UI-Components-books";
import {
  SvgStageMenuTwo,
  ImageContainer,
  PopoverCheckGroup,
  PopoverCheck,
  DragValidation,
  PlanGroup,
  PlanSelect,
  PlanCheck,
} from "@components";
import { useBackground } from "@hooks";

const Ova7p7 = () => {
  const { setBackground } = useBackground();

  const [isOpen, setIsOpen] = useState(false);

  // Se utiliza para abrir y cerrar los modales.
  // const onToggleModal = (modal) => {
  //   setIsOpen((prev) => ({ ...prev, [modal]: !prev[modal] }));
  // };

  const contextRef = useRef();

  return (
    <Panel>
      <NavSection />

      <Section addClass="animate__animated animate__fadeInDown animate__faster">
        <Row justify-content="center" align-items="center">
          <Col xs="11" mm="10" md="9" lg="8" hd="7">
            <Row
              justify-content="center"
              align-items="center"
              flex-direction="columns"
            >
              <ImageContainer
                background="assets/images/Slide3-image-1.png"
                addClass="title-container title-container--stage"
                width="500px"
                height="100px"
              >
                <h2 className="u-special-font u-text-center u-fs-500">
                  Etapa 5.
                  <br />
                  <span>
                    Enfermedades que afectan la reproducción en equinos
                  </span>
                </h2>
              </ImageContainer>

              <Image
                src="assets/images/SvgRoulette-horse.png"
                alt="Imagen de la cabeza de un caballo"
                width="450"
                addClass="u-mt-5"
                noCaption
              />

              <SvgStageMenuTwo style={{ maxWidth: "700px" }}>
                {/* Buttons */}

                <foreignObject
                  x="47"
                  y="110"
                  width="350"
                  height="95"
                  className="hoverButton"
                >
                  <ButtonSection
                    section={2}
                    onClick={() =>
                      setBackground("url(/assets/images/Sixth-background.png)")
                    }
                  >
                    <Button addClass="c-button">
                      <Image
                        url="assets/images/SvgBottomBar-7.png"
                        alt="actividad"
                        noCaption
                      />
                    </Button>
                  </ButtonSection>
                </foreignObject>

                <foreignObject
                  x="412"
                  y="110"
                  width="350"
                  height="95"
                  className="hoverButton"
                >
                  <ButtonSection
                    section={3}
                    onClick={() =>
                      setBackground("url(/assets/images/Sixth-background.png)")
                    }
                  >
                    <Button addClass="c-button">
                      <Image
                        url="assets/images/SvgBottomBar-6.png"
                        alt="contexto"
                        noCaption
                      />
                    </Button>
                  </ButtonSection>
                </foreignObject>

                <foreignObject
                  x="790"
                  y="110"
                  width="350"
                  height="95"
                  className="hoverButton"
                >
                  <ButtonSection
                    section={4}
                    onClick={() =>
                      setBackground("url(/assets/images/Sixth-background.png)")
                    }
                  >
                    <Button addClass="c-button">
                      <Image
                        url="assets/images/SvgBottomBar-8.png"
                        alt="actividad"
                        noCaption
                      />
                    </Button>
                  </ButtonSection>
                </foreignObject>
              </SvgStageMenuTwo>
            </Row>
          </Col>
        </Row>

        {/* <Modal
          isOpen={isOpen.context}
          finalFocusRef={contextRef}
          onClose={(value) =>
            setIsOpen((prev) => ({ ...prev, context: value }))
          }
        >
          <ModalOverlay />

          <ModalContent addClass="c-modal u-fs-300">
            <ImageContainer
              background="assets/images/Slide3-image-1.png"
              addClass="title-container title-container--stage"
              width="500px"
              height="50px"
            >
              <h2 className="u-special-font u-text-center u-fs-600">
                Contexto
              </h2>
            </ImageContainer>

            <Row justify-content="center" align-items="center">
              <Col xs="11" addClass="u-self-end u-mb-9">
                <ImageContainer
                  background="assets/images/Slide1-image-9.png"
                  addClass="u-mt-3"
                >
                  <Row justify-content="center" align-items="center">
                    <Col xs="11" mm="10" md="9" lg="7" hd="6">
                      <p>
                        Son muchas las causas patológicas que afectan la
                        reproducción en equinos, sin embargo, conocer su
                        sintomatología y lograr un correcto diagnóstico es el
                        conducto regular y más adecuado para generar el control
                        de sus efectos nocivos en la rentabilidad del sistema,
                        para esto hay que apoyarse en pruebas de laboratorio que
                        permitan identificar los microorganismos presentes en el
                        cuadro patológico, y con base en esto iniciar las
                        estrategias de control y prevención, ante la
                        presentación de un cuadro de una yegua problema, en la
                        cual se han realizado varias inseminaciones, no se ha
                        logrado obtener preñez y se sospecha de situaciones
                        sanitarias.
                      </p>
                    </Col>

                    <Col xs="11" mm="10" md="9" lg="6" hd="5">
                      <p className="u-text-center u-font-bold u-my-2">
                        Haga clic sobre la imagen para consultar el documento
                        sobre Anatomy, Physiology and Reproduction in the Mare.
                      </p>

                      <Image
                        src="/assets/images/Slide4-image-1.png"
                        alt="Gráfico circular donde aparece dos fases: la primera es al fase folicular donde se encuentra lo Estrógenos y la segunda es la fase luteal donde esta la Prostagaldina y la Progesterona."
                        noCaption
                      />
                    </Col>
                  </Row>
                </ImageContainer>
              </Col>
            </Row>
          </ModalContent>
        </Modal> */}
      </Section>

      <Section addClass="animate__animated animate__fadeInDown animate__faster u-section-overflow">
        <Row justify-content="center" align-items="center" addClass="u-my-6">
          <Col xs="11" mm="10" md="9" lg="7" hd="6">
            <ImageContainer
              background="assets/images/Slide1-image-9.png"
              addClass="u-mt-2 u-fs-300 c-image-container-sign"
              padding="30px"
            >
              <ImageContainer
                background="assets/images/Slide3-image-1.png"
                addClass="title-container"
                width="500px"
                height="50px"
              >
                <h2 className="u-special-font u-text-center u-fs-600">
                  Situación
                </h2>
              </ImageContainer>

              <p className="u-mt-5 u-mx-3">
                Es muy importante reconocer las principales enfermedades
                reproductivas y su impacto en la eficiencia del sistema, de esta
                forma se presenta como una herramienta fundamental en la
                prevención y control, de nada servirá implementar diferentes
                tipos de biotecnologías en el manejo reproductivo, si el
                panorama sanitario de la producción es deficiente
              </p>

              <p className="u-my-2 u-mx-3">
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

              <Row justify-content="center" align-items="center">
                <ButtonSection
                  section={1}
                  onClick={() =>
                    setBackground(
                      "url(/assets/images/Principal-background.png)"
                    )
                  }
                >
                  <Button addClass="u-button-reset u-stack">
                    <Image
                      src="assets/images/Button-style-large.png"
                      alt="Volver a la primera sección"
                      width="200"
                      noCaption
                    />
                    <span className="u-special-font u-fs-500 u-zindex-2">
                      Volver
                    </span>
                  </Button>
                </ButtonSection>

                <ButtonSection section={3}>
                  <Button addClass="u-button-reset u-stack">
                    <Image
                      src="assets/images/Button-style-large.png"
                      alt="Ir a la tercera sección"
                      width="200"
                      noCaption
                    />
                    <span className="u-special-font u-fs-500 u-zindex-2">
                      Continuar
                    </span>
                  </Button>
                </ButtonSection>
              </Row>
            </ImageContainer>
          </Col>

          <Col xs="11" mm="10" md="9" lg="6" hd="4" />
        </Row>
      </Section>
      <Section addClass="animate__animated animate__fadeInDown animate__faster u-section-overflow">
        <Row justify-content="center" align-items="center" addClass="u-my-6">
          <Col xs="11" mm="10" md="9" lg="7" hd="6">
            <ImageContainer
              background="assets/images/Slide1-image-9.png"
              addClass="u-mt-2 u-fs-300 c-image-container-sign"
              padding="30px"
            >
              <ImageContainer
                background="assets/images/Slide3-image-1.png"
                addClass="title-container"
                width="500px"
                height="50px"
              >
                <h2 className="u-special-font u-text-center u-fs-600">
                  Contexto
                </h2>
              </ImageContainer>

              <p className="u-mt-5 u-mx-3">
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

              <Row justify-content="center" align-items="center">
                <ButtonSection
                  section={1}
                  onClick={() =>
                    setBackground(
                      "url(/assets/images/Principal-background.png)"
                    )
                  }
                >
                  <Button addClass="u-button-reset u-stack">
                    <Image
                      src="assets/images/Button-style-large.png"
                      alt="Volver a la primera sección"
                      width="200"
                      noCaption
                    />
                    <span className="u-special-font u-fs-500 u-zindex-2">
                      Volver
                    </span>
                  </Button>
                </ButtonSection>

                <ButtonSection section={4}>
                  <Button addClass="u-button-reset u-stack">
                    <Image
                      src="assets/images/Button-style-large.png"
                      alt="Ir a la tercera sección"
                      width="200"
                      noCaption
                    />
                    <span className="u-special-font u-fs-500 u-zindex-2">
                      Continuar
                    </span>
                  </Button>
                </ButtonSection>
              </Row>
            </ImageContainer>
          </Col>

          <Col xs="11" mm="10" md="9" lg="6" hd="4" />
        </Row>
      </Section>

      <Section addClass="animate__animated animate__fadeInDown animate__faster u-section-overflow">
        <Row
          justify-content="space-evenly"
          align-items="center"
          addClass="u-py-6"
        >
          <DragValidation>
            <Col xs="11" mm="10" md="10" lg="10" hd="10">
              <ImageContainer
                background="assets/images/Slide1-image-9.png"
                addClass="u-py-4 u-fs-300 container-act-7"
                padding="30px"
              >
                <ImageContainer
                  background="assets/images/Slide3-image-1.png"
                  addClass="title-container"
                  width="500px"
                  height="50px"
                >
                  <h2 className="u-special-font u-text-center u-fs-600">
                    Actividad 7
                  </h2>
                </ImageContainer>

                <p className="u-text-center">
                  Para resolver el dilema del propietario, ¿qué estrategia
                  utilizaría para identificar el problema sanitario involucrado?
                </p>

                <p className="u-text-center">
                  Para responder lea cada una de las opciones presentadas y
                  elija la que considere correcta, para ello ubique la yegua en
                  el círculo en blanco debajo de la opción elegida.
                </p>

                <p className="u-text-center">
                  Cuando finalice haga clic en el botón “Validar” para conocer
                  la retroalimentación y el puntaje obtenido.
                </p>
                <p className="u-text-center">
                  Esta actividad tiene un valor de 6 puntos y cuenta con un
                  intento para realizarla.
                </p>
                <GeneralDraggable addClass="c-drags-act-7">
                  <Draggable
                    id="A1"
                    label="Draggable item"
                    dragging="c-drag--active"
                    addClass="c-drag--act7"
                  >
                    <p className="ocultar">yegua drag</p>
                  </Draggable>
                </GeneralDraggable>
              </ImageContainer>
            </Col>

            <Col xs="11" mm="10" md="9" lg="6" hd="4">
              <div className="drop-container__act-7">
                <p className="u-ml-3 u-mr-3  u-mb-6 u-text-justify">
                  El problema puede estar asociado a condiciones insalubres de
                  la Pesebrera. Una estrategia puede ser inspeccionar la
                  pesebrera donde se encuentra la yegua, revisar la cantidad de
                  líquido que se permite ingresar y realizar una evaluación
                  reproductiva por ecografía transvaginal revisando la presencia
                  de estructuras equinas, analizando la presencia de anestro.
                </p>
                <Droppable
                  id="A"
                  validate={["A1"]}
                  label="droppable"
                  addClass="drop-act7"
                  over="drop-container__drop-item--active"
                />
              </div>
            </Col>
            <Col xs="11" mm="10" md="9" lg="6" hd="4">
              <div className="drop-container__act-7">
                <p className="u-ml-3 u-mr-3  u-mb-6 u-text-justify">
                  El problema puede estar asociado a la presencia de
                  microorganismos patógenos a nivel uterino, los cuales
                  interfieren en el desarrollo embrionario. Una estrategia puede
                  ser obtener una muestra mediante hisopado uterino y en
                  laboratorio identificar el microorganismo y su nivel de
                  sensibilidad por antibiograma. Luego, realizar lavados
                  uterinos y terapias parenterales de soporte.
                </p>
                <Droppable
                  id="B"
                  validate={["B1"]}
                  label="droppable"
                  addClass="drop-act7"
                  over="drop-container__drop-item--active"
                />
              </div>
            </Col>
            <Col xs="11" mm="10" md="9" lg="6" hd="4">
              <div className="drop-container__act-7">
                <p className="u-ml-3 u-mr-3  u-mb-6 u-text-justify">
                  El problema puede estar asociado a la presencia de
                  microorganismos patógenos en la pesebrera. Podrá determinarse
                  realizando una evaluación reproductiva por ecografía
                  transrectal revisando la presencia de estructuras ováricas,
                  analizando la presencia de anestro. Luego, realizar lavados
                  uterinos de modo que aumenten las probabilidades de preñez.
                </p>
                <Droppable
                  id="C"
                  validate={["C1"]}
                  label="droppable"
                  addClass="drop-act7"
                  over="drop-container__drop-item--active"
                />
              </div>
            </Col>
          </DragValidation>
          <div className="btn-sec-act7">
            <ButtonSection
              section={2}
              onClick={() =>
                setBackground("url(/assets/images/Principal-background.png)")
              }
            >
              <Button addClass="u-button-reset u-stack hoverButton">
                <Image
                  src="assets/images/Button-style-large.png"
                  alt="Ir a la segunda sección"
                  width="200"
                  noCaption
                />
                <span className="u-special-font u-fs-500 u-zindex-2">
                  Validar
                </span>
              </Button>
            </ButtonSection>
            <ButtonSection section={6}>
              <Button addClass="u-button-reset u-stack hoverButton">
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
        </Row>
        <Modal
          isOpen={isOpen}
          finalFocusRef={contextRef}
          onClose={(value) =>
            setIsOpen((prev) => ({ ...prev, context: value }))
          }
        >
          <ModalOverlay />
          <ModalContent addClass="c-modal-secondary u-fs-300">
            <Row justify-content="center" align-items="center">
              <Col xs="11">
                <p>
                  La dinámica folicular de la hembra equina comprende las
                  etapas: proestro, diestro, estro y metaestro y estas están
                  asociadas a sus correspondientes fases de la siguiente manera:
                </p>
                <p className="u-my-3">
                  Fase folicular o de regresión lútea = Proestro. <br /> Fase
                  periovulatoria= Estro y metaestro. <br /> Fase luteal =
                  Diestro.
                </p>
                <p className="u-text-center u-mb-3">
                  <b>Puntaje obtenido:</b> x /6 puntos.
                </p>
              </Col>
              <ButtonSection section={6}>
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
            </Row>
          </ModalContent>
        </Modal>
      </Section>

      <Section addClass="animate__animated animate__fadeInDown animate__faster u-section-overflow">
        <Row justify-content="center" align-items="center">
          <Col xs="11">
            <ImageContainer
              background="assets/images/Slide1-image-9.png"
              addClass="u-py-2 u-fs-300 u-text-center"
              padding="30px"
            >
              <ImageContainer
                background="assets/images/Slide3-image-1.png"
                addClass="title-container"
                width="500px"
                height="50px"
              >
                <h2 className="u-special-font u-text-center u-fs-600">
                  Actividad 3
                </h2>
              </ImageContainer>

              <p>
                De acuerdo con la situación problémica presentada, seleccione
                dos estrategias de solución, de modo que la yegua retorne a la
                presentación periódica de síntomas de celo.
              </p>

              <p className="u-mx-2 u-my-3">
                Lea cada una de las opciones presentadas y seleccione las dos
                correctas, desplazándolas hacia las casillas en blanco para
                completar la estrategia de solución. Haga clic en el botón
                “Validar” para conocer la retroalimentación y el puntaje
                obtenido.
              </p>

              <p className="u-mx-2">
                Esta actividad tiene 2 y cada opción correcta vale 1 punto. Solo
                tiene un intento para realizarla.
              </p>

              <DragValidation>
                <Row
                  justify-content="space-evenly"
                  align-items="center"
                  addClass="u-my-3"
                >
                  <Col
                    xs="11"
                    mm="10"
                    md="9"
                    lg="8"
                    hd="7"
                    addClass="u-self-start"
                  >
                    <GeneralDraggable addClass="c-drags">
                      <Draggable
                        id="A1"
                        label="Draggable item"
                        element="button"
                        dragging="c-drag--active"
                        addClass="c-drag"
                      >
                        Combinar la estimulación con hormonas sintéticas
                        análogas, específicamente GnRH y estimulación lumínica
                        en potrero, lo cual induce un retorno a la ciclicidad
                        más rápida, o el estímulo lumínica artificial en la
                        pesebrera.
                      </Draggable>

                      <Draggable
                        id="B1"
                        label="Draggable item"
                        element="button"
                        dragging="c-drag--active"
                        addClass="c-drag"
                      >
                        Aislamiento permanente de la yegua por un ciclo de modo
                        que empiece a presente síntomas del celo.
                      </Draggable>

                      <Draggable
                        id="C1"
                        label="Draggable item"
                        element="button"
                        dragging="c-drag--active"
                        addClass="c-drag"
                      >
                        Alternar la presencia de la yegua entre la pesebrera en
                        horas de la noche y en la pradera en horas del día, ya
                        que se así normalizara el estímulo lumínico.
                      </Draggable>

                      <Draggable
                        id="D1"
                        label="Draggable item"
                        element="button"
                        dragging="c-drag--active"
                        addClass="c-drag"
                      >
                        Motivar la presencia de vesícula embrionaria, usando
                        exposición aislada cada semana permite que la hembra
                        retorne al celo.
                      </Draggable>
                    </GeneralDraggable>
                  </Col>

                  <Col xs="11" mm="10" md="9" lg="6" hd="4">
                    <div className="drop-container">
                      <ImageContainer
                        background="assets/images/Slide3-image-1.png"
                        addClass="title-container drop-container__title"
                        height="50px"
                      >
                        <p className="u-font-bold u-text-center u-fs-300 u-text-primary-300">
                          La estrategias de solución es
                        </p>
                      </ImageContainer>

                      <div className="drop-container__drop">
                        <Droppable
                          id="A"
                          validate={["C1"]}
                          label="droppable"
                          addClass="drop-container__drop-item"
                          over="drop-container__drop-item--active"
                        />

                        <img
                          src="assets/images/Slide1-image-7.png"
                          alt=""
                          tabIndex={-1}
                        />

                        <img
                          src="assets/images/Slide1-image-7.png"
                          alt=""
                          tabIndex={-1}
                        />

                        <img
                          src="assets/images/Slide1-image-7.png"
                          alt=""
                          tabIndex={-1}
                        />

                        <img
                          src="assets/images/Slide1-image-7.png"
                          alt=""
                          tabIndex={-1}
                        />
                      </div>

                      <ImageContainer
                        background="assets/images/Slide3-image-1.png"
                        addClass="title-container drop-container__title"
                        height="50px"
                      >
                        <p className="u-font-bold u-text-center u-fs-300 u-text-primary-300">
                          y
                        </p>
                      </ImageContainer>

                      <div className="drop-container__drop">
                        <Droppable
                          id="B"
                          validate={["A1"]}
                          label="droppable"
                          addClass="drop-container__drop-item"
                          over="drop-container__drop-item--active"
                        />

                        <img
                          src="assets/images/Slide1-image-7.png"
                          alt=""
                          tabIndex={-1}
                        />

                        <img
                          src="assets/images/Slide1-image-7.png"
                          alt=""
                          tabIndex={-1}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </DragValidation>
            </ImageContainer>
          </Col>
        </Row>
      </Section>

      <Section addClass="animate__animated animate__fadeInDown animate__faster u-section-overflow">
        <Row justify-content="center" align-items="center">
          <Col xs="12" mm="11" md="10" lg="9" hd="8">
            <ImageContainer
              background="assets/images/Slide3-image-7.png"
              addClass="u-text-center u-my-2"
              padding="30px"
            >
              <h2 className="u-mb-3 u-fs-300">
                <strong>Plan de manejo:</strong> Fisiología de la reproducción
                en equinos.
              </h2>

              <p className="u-mb-5 u-fs-300">
                Dentro del plan de manejo reproductivo se deben tener en cuenta
                tres eventos fisiológicos que determinan los resultados del plan
                de manejo reproductivo, seleccióne los correctos y asigne a cada
                uno su respectiva justificación.
              </p>

              <div className="c-plan-group-grid u-px-3">
                <PlanGroup>
                  <PlanCheck value="question_1" label="Dinámica folicular." />

                  <PlanSelect id="question_1">
                    <option value={1}>
                      En esta se describen las diferentes etapas por las que
                      pasa el folículo en su recorrido desde la reserva
                      folicular, hasta la ovulación, conocerla permite controlar
                      el ciclo estral, según las necesidades reproductivas del
                      sistema.
                    </option>

                    <option value={2}>
                      Conocer el momento más próximo posible a la ovulación,
                      determina el éxito de biotecnologías reparativas como la
                      inseminación artificial, ya que entre mas cercana se
                      realice a este evento, las probabilidades de preñez cada
                      vez serán más altas.
                    </option>

                    <option value={3}>
                      Conocer los diferentes grados de edema uterino,
                      complementa el seguimiento ovárico orientado a determinar
                      el momento de la ovulación, esta actividad representa un
                      proceso fundamental en el plan de manejo reproductivo en
                      equinos.
                    </option>

                    <option value={4}>
                      Al igual que seguimiento ovárico, conocer el
                      comportamiento reproductivo en las diferentes etapas del
                      ciclo estral, permite realizar acciones específicas
                      orientadas a la fertilización procura de porcentajes altos
                      de preñez, ya sea por monta natural biotecnologías
                      complementarias.
                    </option>
                  </PlanSelect>

                  <PlanCheck value="question_2" label="Ovulación." />

                  <PlanSelect id="question_2">
                    <option value={1}>
                      En esta se describen las diferentes etapas por las que
                      pasa el folículo en su recorrido desde la reserva
                      folicular, hasta la ovulación, conocerla permite controlar
                      el ciclo estral, según las necesidades reproductivas del
                      sistema.
                    </option>

                    <option value={2}>
                      Conocer el momento más próximo posible a la ovulación,
                      determina el éxito de biotecnologías reparativas como la
                      inseminación artificial, ya que entre mas cercana se
                      realice a este evento, las probabilidades de preñez cada
                      vez serán más altas.
                    </option>

                    <option value={3}>
                      Conocer los diferentes grados de edema uterino,
                      complementa el seguimiento ovárico orientado a determinar
                      el momento de la ovulación, esta actividad representa un
                      proceso fundamental en el plan de manejo reproductivo en
                      equinos.
                    </option>

                    <option value={4}>
                      Al igual que seguimiento ovárico, conocer el
                      comportamiento reproductivo en las diferentes etapas del
                      ciclo estral, permite realizar acciones específicas
                      orientadas a la fertilización procura de porcentajes altos
                      de preñez, ya sea por monta natural biotecnologías
                      complementarias.
                    </option>
                  </PlanSelect>

                  <PlanCheck value="question_3" label="Edema uterino." />

                  <PlanSelect id="question_3">
                    <option value={1}>
                      En esta se describen las diferentes etapas por las que
                      pasa el folículo en su recorrido desde la reserva
                      folicular, hasta la ovulación, conocerla permite controlar
                      el ciclo estral, según las necesidades reproductivas del
                      sistema.
                    </option>

                    <option value={2}>
                      Conocer el momento más próximo posible a la ovulación,
                      determina el éxito de biotecnologías reparativas como la
                      inseminación artificial, ya que entre mas cercana se
                      realice a este evento, las probabilidades de preñez cada
                      vez serán más altas.
                    </option>

                    <option value={3}>
                      Conocer los diferentes grados de edema uterino,
                      complementa el seguimiento ovárico orientado a determinar
                      el momento de la ovulación, esta actividad representa un
                      proceso fundamental en el plan de manejo reproductivo en
                      equinos.
                    </option>

                    <option value={4}>
                      Al igual que seguimiento ovárico, conocer el
                      comportamiento reproductivo en las diferentes etapas del
                      ciclo estral, permite realizar acciones específicas
                      orientadas a la fertilización procura de porcentajes altos
                      de preñez, ya sea por monta natural biotecnologías
                      complementarias.
                    </option>
                  </PlanSelect>

                  <PlanCheck
                    value="question_4"
                    label="Sintomatología de celo."
                  />

                  <PlanSelect id="question_4">
                    <option value={1}>
                      En esta se describen las diferentes etapas por las que
                      pasa el folículo en su recorrido desde la reserva
                      folicular, hasta la ovulación, conocerla permite controlar
                      el ciclo estral, según las necesidades reproductivas del
                      sistema.
                    </option>

                    <option value={2}>
                      Conocer el momento más próximo posible a la ovulación,
                      determina el éxito de biotecnologías reparativas como la
                      inseminación artificial, ya que entre mas cercana se
                      realice a este evento, las probabilidades de preñez cada
                      vez serán más altas.
                    </option>

                    <option value={3}>
                      Conocer los diferentes grados de edema uterino,
                      complementa el seguimiento ovárico orientado a determinar
                      el momento de la ovulación, esta actividad representa un
                      proceso fundamental en el plan de manejo reproductivo en
                      equinos.
                    </option>

                    <option value={4}>
                      Al igual que seguimiento ovárico, conocer el
                      comportamiento reproductivo en las diferentes etapas del
                      ciclo estral, permite realizar acciones específicas
                      orientadas a la fertilización procura de porcentajes altos
                      de preñez, ya sea por monta natural biotecnologías
                      complementarias.
                    </option>
                  </PlanSelect>

                  <PlanCheck value="question_5" label="Dinámica de celo." />

                  <PlanSelect id="question_5">
                    <option value={1}>
                      En esta se describen las diferentes etapas por las que
                      pasa el folículo en su recorrido desde la reserva
                      folicular, hasta la ovulación, conocerla permite controlar
                      el ciclo estral, según las necesidades reproductivas del
                      sistema.
                    </option>

                    <option value={2}>
                      Conocer el momento más próximo posible a la ovulación,
                      determina el éxito de biotecnologías reparativas como la
                      inseminación artificial, ya que entre mas cercana se
                      realice a este evento, las probabilidades de preñez cada
                      vez serán más altas.
                    </option>

                    <option value={3}>
                      Conocer los diferentes grados de edema uterino,
                      complementa el seguimiento ovárico orientado a determinar
                      el momento de la ovulación, esta actividad representa un
                      proceso fundamental en el plan de manejo reproductivo en
                      equinos.
                    </option>

                    <option value={4}>
                      Al igual que seguimiento ovárico, conocer el
                      comportamiento reproductivo en las diferentes etapas del
                      ciclo estral, permite realizar acciones específicas
                      orientadas a la fertilización procura de porcentajes altos
                      de preñez, ya sea por monta natural biotecnologías
                      complementarias.
                    </option>
                  </PlanSelect>
                </PlanGroup>
              </div>

              <Row
                justify-content="center"
                align-items="center"
                addClass="u-mt-3"
              >
                <ButtonSection section={3}>
                  <Button addClass="u-button-reset u-stack">
                    <Image
                      src="assets/images/Button-style-large.png"
                      alt="Volver a la tercera sección"
                      width="200"
                      noCaption
                    />
                    <span className="u-special-font u-fs-500 u-zindex-2">
                      Volver
                    </span>
                  </Button>
                </ButtonSection>

                <Link to="/unit/1/page/2" className="u-button-reset u-stack">
                  <Image
                    src="assets/images/Button-style-large.png"
                    alt="Lleva al menú principal"
                    width="200"
                    noCaption
                  />
                  <span className="u-special-font u-fs-500 u-zindex-2">
                    Continuar
                  </span>
                </Link>
              </Row>
            </ImageContainer>
          </Col>
        </Row>
      </Section>
    </Panel>
  );
};

export default Ova7p7;
