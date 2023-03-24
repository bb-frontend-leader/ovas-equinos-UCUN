import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import {
  Col,
  Row,
  Panel,
  Section,
  NavSection,
  ButtonSection,
  Modal,
  ModalContent,
  ModalOverlay,
  Image,
  Button,
  Select,
  List,
  ListItem,
  Audio
} from "UI-Components-books";
import {
  ImageContainer,
  SvgStageMenuTwo,
  PopoverRadioGroup,
  PopoverRadio,
  PlanCheck,
  PlanGroup,
  PlanSelect,
} from "@components";
import { useBackground } from "@hooks";

const Ova7p5 = () => {
  const { setBackground } = useBackground();

  const [isOpen, setIsOpen] = useState({
    modalAct7: true,
    modalAct8: false,
  });

  // Se utiliza para abrir y cerrar los modales.
  // const onToggleModal = (modal) => {
  //   setIsOpen((prev) => ({ ...prev, [modal]: !prev[modal] }));
  // };

  const contextRef = useRef();

  return (
    <Panel>
      <NavSection />

      <Section>
        <Row justify-content="center" align-items="center" addClass="u-my-7">
          <Col xs="11" md="10" lg="9" hd="5">
            <Image
              src="assets/images/SvgRoulette-horse.png"
              alt="Imagen de la cabeza de un caballo"
              width="450"
              addClass="u-mt-5"
              noCaption
            />
          </Col>
          <Col xs="11" md="10" lg="9" hd="6">
            <ImageContainer
              background="assets/images/Slide1-image-1.png"
              addClass="u-fs-300 container"
              padding="33px"
            >
              <ImageContainer
                background="assets/images/Slide3-image-1.png"
                addClass="title-container"
                width="109%"
                height="100px"
              >
                <h2 className="u-special-font u-text-center u-fs-500">
                  Etapa 3.
                  <br />
                  <span>
                    Variables foliculares relacionadas con los parámetros
                    reproductivos en equinos
                  </span>
                </h2>
              </ImageContainer>

              <p className="u-mt-6">
                En la hembra equina es determinante conocer la relación estrecha
                que existe entre la actividad ovárica y el estado uterino, ya
                que de su sincronía y funcionamiento depende aplicar
                biotecnologías reproductivas como la inseminación artificial o
                la transferencia de embriones, por lo tanto, en esta tercera
                etapa del recurso podrá conocer los diferentes estados del útero
                y su relación con la función ovárica.
              </p>

              <p className="u-my-3">
                Un ejemplo asociado a algunos datos de dinámica folicular en la
                yegua de Paso Fino Colombiano, puede ser consultado en el
                estudio realizado por Ramírez, G., Gutiérrez, C., & Ramos, M.
                (2010) denominado Dinámica folicular en yeguas paso fino
                colombiano medido por ultrasonografía en la Sabana de Bogotá.
                Aquí puede conocer algunos datos relacionados con este
                contenido.
              </p>

              <p className="u-my-3">
                Haga clic en el ícono ubicado a continuación para reproducir el
                audio.
              </p>

              <Row className='positionContainerFinal' justify-content="center" align-items="center">
                <Audio defaultStyle type='Button' className='styleAudioButton'/>
                <ButtonSection section={2}>
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
            </ImageContainer>
          </Col>
        </Row>
      </Section>

      <Section>
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
                width="95%"
                height="100px"
              >
                <h2 className="u-special-font u-text-center u-fs-500">
                  Etapa 3.
                  <br />
                  <span>
                    Variables foliculares relacionadas con los parámetros
                    reproductivos en equinos
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

                <foreignObject x="47" y="110" width="350" height="95">
                  <ButtonSection
                    section={3}
                    onClick={() =>
                      setBackground("url(/assets/images/Third-background.png)")
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

                <foreignObject x="412" y="110" width="350" height="95">
                  <ButtonSection
                    section={4}
                    onClick={() =>
                      setBackground("url(/assets/images/Third-background.png)")
                    }
                  >
                    <Button addClass="c-button">
                      <Image
                        url="assets/images/SvgBottomBar-6.png"
                        alt="actividad"
                        noCaption
                      />
                    </Button>
                  </ButtonSection>
                </foreignObject>

                <foreignObject x="790" y="110" width="350" height="95">
                  <ButtonSection
                    section={4}
                    onClick={() =>
                      setBackground("url(/assets/images/Third-background.png)")
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
      </Section>

      <Section>
        <Row justify-content="center" align-items="center" addClass="u-my-4">
          <Col xs="11" md="10" lg="9" hd="5">
            <ImageContainer
              background="assets/images/Slide5-image-1.png"
              addClass="u-fs-300 container"
              padding="33px"
            >
              <ImageContainer
                background="assets/images/Slide3-image-1.png"
                addClass="title-container"
                width="80%"
                height="55px"
              >
                <h2 className="u-special-font u-text-center u-fs-500">
                  Sitauación
                </h2>
              </ImageContainer>

              <p className="u-mt-6">
                La inseminación artificial desde hace muchos años es una de las
                prácticas de servicio con mayor impacto en la industria equina,
                ya que permite obtener el máximo rendimiento reproductivo y
                genético de un semental específico.
              </p>

              <p className="u-my-3">
                En la producción a la cual usted asiste, usa esta biotecnología
                como una de las cotidianas, y en la cual con su implementación
                continua se ha logrado determinar que los individuos deben ser
                individualizados, teniendo en cuenta los parámetros
                reproductivos que manifiesta, en otras palabras, no en todas la
                yeguas el folículo dominante crece al mismo ritmo o logran la
                ovulación al mismo diámetro folicular, por lo tanto, en el
                criadero en mención se ha logrado determinar que el promedio de
                crecimiento diario folicular, una vez sobrepasa la divergencia
                es de 2,5 mm, conjuntamente el diámetro promedio a la ovulación
                es de 41 mm.
              </p>

              <Row justify-content="center" align-items="center">
                <ButtonSection
                  section={2}
                  onClick={() =>
                    setBackground(
                      "url(/assets/images/Principal-background.png)"
                    )
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
                      Volver
                    </span>
                  </Button>
                </ButtonSection>
                <ButtonSection section={4}>
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
            </ImageContainer>
          </Col>
          <Col xs="11" md="10" lg="9" hd="7">
            <Image
              src="assets/images/SvgRoulette-inseminación-artificial.png"
              alt="Imagen de veterinario haciendo inseminación artificial a una yegua"
              width="930"
              addClass="u-mt-5"
              noCaption
            />
          </Col>
        </Row>
      </Section>

      <Section>
        <Row justify-content="center" align-items="center" addClass="u-my-4">
          <Col xs="11" md="10" lg="9" hd="5">
            <ImageContainer
              background="assets/images/Slide5-image-1.png"
              addClass="u-fs-300 container"
              padding="33px"
            >
              <ImageContainer
                background="assets/images/Slide3-image-1.png"
                addClass="title-container"
                width="80%"
                height="55px"
              >
                <h2 className="u-special-font u-text-center u-fs-500">
                  Contexto
                </h2>
              </ImageContainer>

              <p className="u-my-3">
                La inseminación artificial es una las prácticas reproductivas
                más comunes usadas en el control reproductivo de sistemas de
                producción equina, sin embargo, para lograr buenos resultados en
                cuanto a porcentajes de preñez, es necesario conocer los
                parámetros reproductivos, fisiológicos y anatómicos, y
                relacionarlos con el momento óptimo de aplicar la inseminación
                artificial, ya que esto determina las probabilidades de lograr
                la preñez.
              </p>

              <Row justify-content="center" align-items="center">
                <ButtonSection
                  section={2}
                  onClick={() =>
                    setBackground(
                      "url(/assets/images/Principal-background.png)"
                    )
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
                      Volver
                    </span>
                  </Button>
                </ButtonSection>
                <ButtonSection section={5}>
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
            </ImageContainer>
          </Col>
          <Col xs="11" md="10" lg="9" hd="7">
            <Image
              src="assets/images/SvgRoulette-inseminación-artificial.png"
              alt="Imagen de veterinario haciendo inseminación artificial a una yegua"
              width="930"
              addClass="u-mt-5"
              noCaption
            />
          </Col>
        </Row>
      </Section>

      <Section>
        <Row justify-content="center" align-items="center" addClass="u-my-4">
          <Col xs="11" md="10" lg="9" hd="7">
            <Image
              src="assets/images/SvgRoulette-inseminación-artificial.png"
              alt="Imagen de veterinario haciendo inseminación artificial a una yegua"
              width="930"
              addClass="u-mt-5"
              noCaption
            />
          </Col>
          <Col xs="11" md="10" lg="9" hd="5">
            <ImageContainer
              background="assets/images/Slide5-image-2.png"
              addClass="u-fs-300 container"
              padding="33px"
            >
              <ImageContainer
                background="assets/images/Slide3-image-1.png"
                addClass="title-container"
                width="80%"
                height="55px"
              >
                <h2 className="u-special-font u-text-center u-fs-500">
                  Actividad 4
                </h2>
              </ImageContainer>

              <p className="u-my-3">
                A partir de la situación presentada, seleccionae del menú
                desplegable las etapas en las que se divide la dinámica
                folicular de la yegua, acorde con la fase indicada en la columna
                de la izquierda.
              </p>

              <p className="u-my-3">
                Esta actividad tiene 6 puntos y cada opción correcta vale 2
                puntos. Solo tiene un intento para realizarla.
              </p>

              <p className="u-my-3">
                Al terminar, haga clic en el botón “Validar” para conocer su
                retroalimentación y puntaje.
              </p>
            </ImageContainer>
            <div className="imgSogas">
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
            <Row justify-content="center" align-items="center">
              <ImageContainer
                width="90%"
                background="assets/images/Slide5-image-2.png"
                addClass="u-fs-300 container"
                padding="33px"
              >
                <table>
                  <tr>
                    <th className="styleTitle">Fase</th>
                    <th className="styleTitle">Etapa</th>
                  </tr>
                  <tr>
                    <th className="styleContent1">
                      Fase folicular o de regresión lútea.
                    </th>
                    <th className="styleContent1">
                      <Select
                        addClass="styleSelectEtapa3-1"
                        placeholder="Seleccionar"
                      >
                        <option value={1}>Proestro.</option>
                        <option value={2}>Estro y maestro.</option>
                        <option value={3}>Diestro.</option>
                        <option value={4}>Anestro.</option>
                      </Select>
                    </th>
                  </tr>
                  <tr>
                    <th className="styleContent2">Fase periovulatoria.</th>
                    <th className="styleContent2">
                      <Select
                        addClass="styleSelectEtapa3-1"
                        placeholder="Seleccionar"
                      >
                        <option value={1}>Proestro.</option>
                        <option value={2}>Estro y maestro.</option>
                        <option value={3}>Diestro.</option>
                        <option value={4}>Anestro.</option>
                      </Select>
                    </th>
                  </tr>
                  <tr>
                    <th className="styleContent1">Fase luteal.</th>
                    <th className="styleContent1">
                      <Select
                        addClass="styleSelectEtapa3-1"
                        placeholder="Seleccionar"
                      >
                        <option value={1}>Proestro.</option>
                        <option value={2}>Estro y maestro.</option>
                        <option value={3}>Diestro.</option>
                        <option value={4}>Anestro.</option>
                      </Select>
                    </th>
                  </tr>
                </table>

                <Row justify-content="center" align-items="center">
                  <ButtonSection
                    section={2}
                    onClick={() =>
                      setBackground(
                        "url(/assets/images/Principal-background.png)"
                      )
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
                        Validar
                      </span>
                    </Button>
                  </ButtonSection>
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
              </ImageContainer>
            </Row>
          </Col>
        </Row>
        <Modal
          isOpen={isOpen.modalAct2}
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

      <Section>
        <Row
          justify-content="space-evenly"
          align-items="center"
          addClass="u-py-6"
        >
          <Col xs="11" mm="10" md="9" lg="7">
            <Image
              src="assets/images/SvgRoulette-inseminación-artificial-2.png"
              alt="Ir a la segunda sección"
              width="900"
              noCaption
            />
            <PopoverRadioGroup>
              <List addClass="c-toggle-check-grid-etapa3">
                <ListItem>
                  <PopoverRadio label="1" placement="top">
                    <p>
                      Se evidencia con la presencia del fotoperiodo positivo. Al
                      realizar una evaluación reproductiva por colonoscopía
                      transrectal revisando la presencia de estructuras
                      ováricas, analizando la presencia de anestro.
                    </p>
                  </PopoverRadio>
                </ListItem>

                <ListItem>
                  <PopoverRadio label="2" placement="bottom">
                    <p>
                      Se evidencia con la presencia del cuerpo hemorrágico, el
                      cual empieza su formación una vez se rompen las paredes
                      del folículo ovulatorio, iniciando una remodelación en la
                      cual el tejido luteal juega un papel fundamental.
                    </p>
                  </PopoverRadio>
                </ListItem>
              </List>
            </PopoverRadioGroup>
          </Col>
          <Col xs="11" mm="10" md="9" lg="5" hd="4">
            <ImageContainer
              background="assets/images/Slide1-image-9.png"
              addClass="u-py-4 u-fs-300 c-image-container-sign"
              padding="30px"
            >
              <ImageContainer
                background="assets/images/Slide3-image-1.png"
                addClass="title-container"
                width="500px"
                height="50px"
              >
                <h2 className="u-special-font u-text-center u-fs-600">
                  Actividad 5
                </h2>
              </ImageContainer>

              <p>
                Para evaluar el proceso de fertilidad de la hembra equina, se
                pueden realizar diferentes estudios tales como la
                ultrasonografía transrectal. ¿Cómo se evidencia a través de este
                estudio que la yegua logró la ovulación y el fin de la etapa de
                estro?
              </p>

              <p className="u-mx-2 u-my-3">
                Para responder a la pregunta, pase el cursor sobre cada número
                en el monitor del escáner y seleccione una de las dos opciones
                de respuesta haciendo clic en el círculo en blanco de la opción
                elegida.
              </p>

              <p className="u-mx-2">
                Esta actividad tiene 4 puntos. Solo tiene un intento para
                realizarla. <br />
                Al terminar haga clic en el botón “Validar” para conocer su
                retroalimentación y puntaje.
              </p>
              <Row justify-content="center" align-items="center">
                <ButtonSection
                  section={2}
                  onClick={() =>
                    setBackground(
                      "url(/assets/images/Principal-background.png)"
                    )
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
                      Validar
                    </span>
                  </Button>
                </ButtonSection>
                <ButtonSection
                  section={7}
                  onClick={() =>
                    setBackground(
                      "url(/assets/images/Principal-background.png)"
                    )
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
              </Row>
            </ImageContainer>
          </Col>
        </Row>
        <Modal
          isOpen={isOpen.modalAct3}
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
                  La estructura ovárica que evidencia el logro de la ovulación,
                  es la presencia del cuerpo hemorrágico, el cual empieza su
                  formación una vez se rompen las paredes del folículo
                  ovulatorio, este se puede evidenciar por ultrasonografía
                  transrectal, enfocando el análisis al ovario en el cual se
                  produjo la ovulación.
                </p>

                <p className="u-text-center u-mb-3">
                  <b>Puntaje obtenido:</b> x /4 puntos.
                </p>
              </Col>
              <ButtonSection section={7}>
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

      <Section>
        <Row justify-content="center" align-items="center">
          <Col xs="11" mm="10" md="9" lg="8" hd="7">
            <ImageContainer
              background="assets/images/Slide1-image-1.png"
              addClass="u-fs-300 container"
              padding="33px"
            >
              <p className="u-mt-6">
                <b>Plan de manejo:</b> Variables foliculares relacionadas a los
                parámetros reproductivos en equinos.
              </p>

              <p className="u-my-3 u-text-center">
                Resulta fundamental en un plan de manejo reproductivo en equinos
                conocer algunos parámetros relacionados a las variables
                ováricas, ya que a partir de estos datos se planea y determina
                los tiempos de aplicación de diferentes actividades orientadas a
                la fertilización y procurar la gestación. Seleccione tres
                variables y parámetros foliculares y asigne su respectiva
                justificación. Los datos mencionados se relacionan a variables
                foliculares específicamente en hembras equinas de raza criolla
                colombiana.
              </p>

              <div className="c-plan-group-grid u-px-3">
                <PlanGroup>
                  <PlanCheck
                    value="question_1"
                    label="Duración del ciclo estral."
                  />

                  <PlanSelect
                    id="question_1"
                    placeholder="Seleccionar"
                    addClass="planSelectStyle"
                  >
                    <option value={1}>20 – 21 días promedio.</option>

                    <option value={2}>2.5 mm diarios, en promedio.</option>

                    <option value={3}>40 - 46 mm, promedio.</option>

                    <option value={4}>1 - 4 mm, promedio.</option>

                    <option value={5}>90 días promedio.</option>
                  </PlanSelect>

                  <PlanCheck
                    value="question_2"
                    label="Crecimiento diario folicular."
                  />

                  <PlanSelect
                    id="question_2"
                    placeholder="Seleccionar"
                    addClass="planSelectStyle"
                  >
                    <option value={1}>20 – 21 días promedio.</option>

                    <option value={2}>2.5 mm diarios, en promedio.</option>

                    <option value={3}>40 - 46 mm, promedio.</option>

                    <option value={4}>1 - 4 mm, promedio.</option>

                    <option value={5}>90 días promedio.</option>
                  </PlanSelect>

                  <PlanCheck
                    value="question_3"
                    label="Diámetro folicular a la ovulación."
                  />

                  <PlanSelect
                    id="question_3"
                    placeholder="Seleccionar"
                    addClass="planSelectStyle"
                  >
                    <option value={1}>20 – 21 días promedio.</option>

                    <option value={2}>2.5 mm diarios, en promedio.</option>

                    <option value={3}>40 - 46 mm, promedio.</option>

                    <option value={4}>1 - 4 mm, promedio.</option>

                    <option value={5}>90 días promedio.</option>
                  </PlanSelect>

                  <PlanCheck value="question_4" label="Duración folicular." />

                  <PlanSelect
                    id="question_4"
                    placeholder="Seleccionar"
                    addClass="planSelectStyle"
                  >
                    <option value={1}>20 – 21 días promedio.</option>

                    <option value={2}>2.5 mm diarios, en promedio.</option>

                    <option value={3}>40 - 46 mm, promedio.</option>

                    <option value={4}>1 - 4 mm, promedio.</option>

                    <option value={5}>90 días promedio.</option>
                  </PlanSelect>
                </PlanGroup>
              </div>

              <Row justify-content="center" align-items="center">
                <ButtonSection
                  section={2}
                  onClick={() =>
                    setBackground(
                      "url(/assets/images/Principal-background.png)"
                    )
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

export default Ova7p5;
