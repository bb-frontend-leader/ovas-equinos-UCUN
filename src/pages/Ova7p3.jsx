import { useState, useRef } from "react";

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
  Button,
} from "UI-Components-books";
import {
  ImageContainer,
  SvgStageMenu,
  CheckBoxModal,
  CheckBoxGroup,
} from "@components";

import { useBackground } from "@hooks";

const Ova7p3 = () => {
  const [, setBackground] = useBackground("background-slide-3");

  const [isOpen, setIsOpen] = useState({
    context: false,
    situation: false,
  });

  const onContext = () => {
    setIsOpen((prev) => ({ ...prev, context: true }));
  };

  const onSituation = () => {
    setIsOpen((prev) => ({ ...prev, situation: true }));
  };

  const contextRef = useRef();

  const situationRef = useRef();

  return (
    <Panel>
      <NavSection />

      <Section addClass="animate__animated animate__fadeInDown animate__faster">
        <Row justify-content="center" align-items="center" addClass="u-my-7">
          <Col xs="11" md="10" lg="9" hd="7">
            <ImageContainer
              background="assets/images/Slide1-image-1.png"
              addClass="u-fs-300 container"
              padding="33px"
            >
              <ImageContainer
                background="assets/images/Slide3-image-1.png"
                addClass="title-container"
                width="500px"
                height="100px"
              >
                <p className="u-special-font u-text-center u-fs-500">
                  Etapa 1.
                  <br />
                  <span>Anatomía de la reproducción en equinos</span>
                </p>
              </ImageContainer>

              <p className="u-mt-6">
                Introducción Resultado esperado Contenido Antes de visitar las
                pesebreras se recomienda repasar algunos conceptos. En esta
                etapa se abordarán algunos elementos relacionados con la
                anatomía de la hembra equina.
              </p>

              <p className="u-my-3">
                Haga clic en los botones para ver la vista anterior, lateral y
                posterior del aparato reproductor hembra equina. En cada una de
                ellas encontrará el detalle de las estructuras anatómicas.
              </p>

              <Tabs addClass="c-tabs u-my-1">
                <TabList
                  addClass="c-tab-list"
                  orientation="vertial"
                  label="Anatomía de la reproducción en equinos"
                >
                  <Tab addClass="c-tab u-fs-400" selected="is-tab--selected">
                    <p className="u-special-font">
                      Vista anterior del aparato reproductor hembra equina
                    </p>
                  </Tab>

                  <Tab addClass="c-tab u-fs-400" selected="is-tab--selected">
                    <p className="u-special-font">
                      Vista lateral del aparato reproductor hembra equina
                    </p>
                  </Tab>

                  <Tab addClass="c-tab u-fs-400" selected="is-tab--selected">
                    <p className="u-special-font">
                      Vista posterior aparato reproductor hembra equina
                    </p>
                  </Tab>
                </TabList>

                <TabPanels addClass="c-tab-panel">
                  <TabPanel>
                    <Image
                      src="assets/images/Slide3-image-2.png"
                      alt="Vista anterior del aparato reproductor hembra equina"
                      addClass="c-tab-panel__image"
                      width="550"
                      noCaption
                    />
                  </TabPanel>

                  <TabPanel>
                    <Image
                      src="assets/images/Slide3-image-3.png"
                      alt="Vista anterior del aparato reproductor hembra equina"
                      addClass="c-tab-panel__image"
                      width="550"
                      noCaption
                    />
                  </TabPanel>

                  <TabPanel>
                    <Image
                      src="assets/images/Slide3-image-4.png"
                      alt="Vista anterior del aparato reproductor hembra equina"
                      addClass="c-tab-panel__image"
                      width="330"
                      noCaption
                    />
                  </TabPanel>
                </TabPanels>
              </Tabs>

              <Row justify-content="center" align-items="center">
                <ButtonSection section={2}>
                  <Button
                    label="Ir a la segunda sección"
                    addClass="u-button-reset u-stack"
                    hasAriaLabel
                  >
                    <Image
                      src="assets/images/Button-style-large.png"
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
                <p className="u-special-font u-text-center u-fs-500">
                  Etapa 1.
                  <br />
                  <span>Anatomía de la reproducción en equinos</span>
                </p>
              </ImageContainer>

              <Image
                src="assets/images/SvgRoulette-horse.png"
                alt="Imagen de la cabeza de un caballo"
                width="450"
                addClass="u-mt-5"
                noCaption
              />

              <SvgStageMenu style={{ maxWidth: "700px" }}>
                {/* Buttons */}

                <foreignObject x="47" y="110" width="350" height="95">
                  <Button
                    ref={contextRef}
                    label="contexto"
                    addClass="c-button"
                    onClick={onContext}
                    hasAriaLabel
                  >
                    <Image
                      url="assets/images/SvgBottomBar-6.png"
                      alt=""
                      noCaption
                    />
                  </Button>
                </foreignObject>

                <foreignObject x="412" y="110" width="350" height="95">
                  <Button
                    ref={situationRef}
                    label="situación"
                    addClass="c-button"
                    onClick={onSituation}
                    hasAriaLabel
                  >
                    <Image
                      url="assets/images/SvgBottomBar-7.png"
                      alt=""
                      noCaption
                    />
                  </Button>
                </foreignObject>

                <foreignObject x="790" y="110" width="350" height="95">
                  <ButtonSection
                    section={3}
                    onClick={() =>
                      setBackground(
                        "url(/assets/images/Secondary-background.png)"
                      )
                    }
                  >
                    <Button label="actividad" addClass="c-button" hasAriaLabel>
                      <Image
                        url="assets/images/SvgBottomBar-8.png"
                        alt=""
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
              <p className="u-special-font u-text-center u-fs-600">Contexto</p>
            </ImageContainer>

            <Row justify-content="center" align-items="center">
              <Col xs="11" mm="10" md="9" lg="6" addClass="u-self-end u-mb-9">
                <ImageContainer
                  background="assets/images/Slide1-image-9.png"
                  addClass="c-image-container-sign"
                  padding="30px"
                >
                  <p className="u-mb-3">
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

              <Col xs="11" mm="10" md="9" lg="6" hd="5">
                <Image
                  src="assets/images/horse-base.png"
                  width="580"
                  noCaption
                />
              </Col>
            </Row>
          </ModalContent>
        </Modal>

        <Modal
          isOpen={isOpen.situation}
          finalFocusRef={situationRef}
          onClose={(value) =>
            setIsOpen((prev) => ({ ...prev, situation: value }))
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
              <p className="u-special-font u-text-center u-fs-600">Situación</p>
            </ImageContainer>

            <Row justify-content="center" align-items="center">
              <Col
                xs="11"
                mm="10"
                md="8"
                lg="6"
                hd="5"
                addClass="u-self-end u-mb-9"
              >
                <ImageContainer
                  background="assets/images/Slide1-image-9.png"
                  addClass="c-image-container-sign"
                  padding="30px"
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

              <Col xs="11" mm="10" md="8" lg="6" hd="5">
                <Image
                  src="assets/images/horse-base.png"
                  width="816"
                  noCaption
                />
              </Col>
            </Row>
          </ModalContent>
        </Modal>
      </Section>

      <Section addClass="animate__animated animate__fadeInDown animate__faster">
        <Row justify-content="center" align-items="center">
          <Col xs="11" mm="10" md="9" lg="8" hd="7">
            <ImageContainer
              background="assets/images/Slide1-image-9.png"
              addClass="u-mt-2"
              padding="30px"
            >
              <ImageContainer
                background="assets/images/Slide3-image-1.png"
                addClass="title-container"
                width="500px"
                height="50px"
              >
                <p className="u-special-font u-text-center u-fs-600">
                  Actividad 1
                </p>
              </ImageContainer>

              <Row
                justify-content="center"
                align-items="center"
                addClass="u-pt-2"
              >
                <Col xs="11" mm="10" md="9" lg="6" hd="5">
                  <Image
                    src="assets/images/Slide3-image-6.png"
                    alt="Vista anterior del aparato reproductor hembra equina"
                    addClass="c-actvity__image"
                    width="360"
                    noCaption
                  />
                </Col>

                <Col xs="11" mm="10" md="9" lg="7" hd="6" addClass="u-fs-300">
                  <p className="u-mb-2 u-mt-5">
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

                  <div className="c-checkbox-modal-grid u-my-4">
                    <CheckBoxGroup>
                      <CheckBoxModal
                        id="ui-checkbox-1"
                        value="option_1"
                        label="Opción 1"
                        state="right"
                      >
                        <Row
                          justify-content="center"
                          flex-direction="column"
                          addClass="u-fs-300"
                        >
                          <p className="u-my-2 u-font-bold">Opción 1</p>
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
                        id="ui-checkbox-2"
                        value="option_2"
                        label="Opción 2"
                        state="rigth"
                      >
                        <Row
                          justify-content="center"
                          flex-direction="column"
                          addClass="u-fs-300"
                        >
                          <p className="u-my-2 u-font-bold">Opción 2</p>
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
                        id="ui-checkbox-3"
                        value="option_3"
                        label="Opción 3"
                        state="wrong"
                      >
                        <Row
                          justify-content="center"
                          flex-direction="column"
                          addClass="u-fs-300"
                        >
                          <p className="u-my-2 u-font-bold">Opción 3</p>
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
                        id="ui-checkbox-4"
                        value="option_4"
                        label="Opción 4"
                        state="wrong"
                      >
                        <Row
                          justify-content="center"
                          flex-direction="column"
                          addClass="u-fs-300"
                        >
                          <p className="u-my-2 u-font-bold">Opción 4</p>
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
                    </CheckBoxGroup>
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
                      <Button
                        label="Volver a la segunda sección"
                        addClass="u-button-reset u-stack"
                        hasAriaLabel
                      >
                        <Image
                          src="assets/images/Button-style-large.png"
                          width="200"
                          noCaption
                        />
                        <span className="u-special-font u-fs-500 u-zindex-2">
                          Volver
                        </span>
                      </Button>
                    </ButtonSection>
                  </Row>
                </Col>
              </Row>
            </ImageContainer>
          </Col>

          <Col xs="11" mm="10" md="9" lg="6" hd="4" />
        </Row>
      </Section>

      <Section addClass="animate__animated animate__fadeInDown animate__faster">
        <Row justify-content="center" align-items="center">
          <Col xs="11" mm="10" md="9" lg="8" hd="7">
            Plan de manejo: Anatomía de la reproducción en equinos.
          </Col>
        </Row>
      </Section>
    </Panel>
  );
};

export default Ova7p3;
