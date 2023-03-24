import { Link } from "react-router-dom";

import {
  Col,
  Row,
  Panel,
  Section,
  NavSection,
  ButtonSection,
  Image,
  Button,
} from "UI-Components-books";
import { ImageContainer } from "@components";
import { useBackground } from "@hooks";

const Ova7p8 = () => {
  const { setBackground } = useBackground();

  return (
    <Panel>
      <NavSection />

      <Section>
        <Row justify-content="center" align-items="center" addClass="u-my-7">
          <Col xs="11" xm="10">
            <Image
              src="assets/images/Cover-image-1.png"
              alt="Imagen, tomando las riendas de la producción equina"
              width="800"
              addClass="u-mt-5"
              noCaption
            />
          </Col>
          <Col xs="11" md="10" lg="9" hd="4">
            <ImageContainer
              background="assets/images/Slide1-image-1.png"
              addClass="u-fs-300 container"
              padding="33px"
            >
              <p className="u-mt-6">
                Ha culminado las actividades de aprendizaje propuestas para este
                recurso, aquí podrá conocer el puntaje final obtenido.
              </p>

              <p className="u-my-3">
                <b>Interpretación</b>
              </p>

              <p className="u-my-3">
                Si su puntaje es inferior a 35 puntos, profundice los aspectos
                importantes dentro de la estrategias de manejo zootécnico para
                el control reproductivo. Cada situación presentada le ayudará a
                mejorar su comprensión y aplicación. Si su puntaje se encuentra
                entre 35 y 45 puntos, ha realizado un buen ejercicio, pero
                deberá profundizar en los aspectos en los que obtuvo un puntaje
                menor. Por último, si su puntaje es superior a 45 puntos,
                realizó un excelente trabajo.
              </p>

              <p className="u-my-3">
                Segundo intento: Si el puntaje obtenido no supera los 35 puntos,
                tiene la posibilidad de retomar el recurso y realizar todas las
                actividades. Si su puntaje es igual o superior a 35 puntos y
                quiere mejorarlo, también puede retomar el recurso y el sistema
                tomará el puntaje más alto.
              </p>
            </ImageContainer>
          </Col>
          <Col xs="11" md="10" lg="9" hd="7">
            <ImageContainer
              background="assets/images/Slide1-image-1.png"
              addClass="u-fs-300 container"
              padding="33px"
            >
              <table cellSpacing="10">
                <tr>
                  <th className="tableFinal-1">
                    <p className="u-font-medium u-text-start">
                      <b>Etapa 1.</b> Anatomía de la reproducción en equinos.
                    </p>
                  </th>
                  <th className="tableFinal-1">Actividad 1</th>
                  <th className="tableFinal-1">
                    <b>X puntos</b>
                  </th>
                </tr>
                <tr>
                  <th className="tableFinal-2">
                    <p className="u-font-medium u-text-start">
                      <b>Etapa 2.</b> Fisiología de la reproducción en equinos.
                    </p>
                  </th>
                  <th className="tableFinal-2">
                    Actividad 2 <br />
                    Actividad 3
                  </th>
                  <th className="tableFinal-2">
                    <b>X puntos</b> <br />
                    <b>X puntos</b>
                  </th>
                </tr>
                <tr>
                  <th className="tableFinal-1">
                    <p className="u-font-medium u-text-start">
                      <b>Etapa 3.</b> Variables foliculares relacionadas a los
                      parámetros reproductivos en equinos.
                    </p>
                  </th>
                  <th className="tableFinal-1">
                    Actividad 4 <br />
                    Actividad 5
                  </th>
                  <th className="tableFinal-1">
                    <b>X puntos</b> <br />
                    <b>X puntos</b>
                  </th>
                </tr>
                <tr>
                  <th className="tableFinal-2">
                    <p className="u-font-medium u-text-start">
                      <b>Etapa 4.</b> Biotecnologías reproductivas en equinos.
                    </p>
                  </th>
                  <th className="tableFinal-2">Actividad 6</th>
                  <th className="tableFinal-2">
                    <b>X puntos</b>
                  </th>
                </tr>
                <tr>
                  <th className="tableFinal-1">
                    <p className="u-font-medium u-text-start">
                      <b>Etapa 5.</b> Enfermedades que afectan la reproducción
                      en equinos en equinos.
                    </p>
                  </th>
                  <th className="tableFinal-1">Actividad 7</th>
                  <th className="tableFinal-1">
                    <b>X puntos</b>
                  </th>
                </tr>
                <tr>
                  <th className="tableFinal-3 u-text-start" colSpan="2">
                    <b className="u-ml-3">Total puntaje obtenido</b>
                  </th>
                  <th className="tableFinal-3">X puntos</th>
                </tr>
              </table>

              <Row justify-content="center" align-items="center">
                <Link to="/unit/1/page/2" className="u-button-reset u-stack">
                  <Image
                    src="assets/images/Button-style-large.png"
                    alt="Lleva al menú principal"
                    width="200"
                    noCaption
                  />
                  <span className="u-special-font u-fs-500 u-zindex-2">
                    Volver
                  </span>
                </Link>
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
            <div className="imgSogasFinal">
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
            <Row display="flex" justify-content="center" align-items="center">
              <Col xs="11" xm="10" sm="8" md="6">
                <ImageContainer
                  background="assets/images/Slide3-image-1.png"
                  addClass="u-fs-300 container"
                  padding="26px"
                >
                  <p className="u-text-primary-300 u-text-center">
                    <b>
                      Descargue aquí las estrategias de manejo zootécnico para
                      el control reproductivo
                    </b>
                  </p>
                  <div className="positionImgFinal">
                    <Button addClass="u-button-reset u-stack">
                      <Image
                        url="assets/images/Slide1-image-8.png"
                        alt="Botón para descargar un svg"
                        width="164"
                        noCaption
                      />
                    </Button>
                  </div>
                </ImageContainer>
              </Col>
              <Col xs="11" xm="10" sm="8" md="6">
                <ImageContainer
                  background="assets/images/Slide3-image-1.png"
                  addClass="u-fs-300 container"
                  padding="26px"
                >
                  <p className="u-text-primary-300 u-text-center">
                    <b>
                      Descargue aquí la rúbrica de evaluación del plan de manejo
                    </b>
                  </p>
                  <div className="positionImgFinal">
                    <Button addClass="u-button-reset u-stack">
                      <Image
                        url="assets/images/Slide1-image-8.png"
                        alt="Botón para descargar un svg"
                        width="164"
                        noCaption
                      />
                    </Button>
                  </div>
                </ImageContainer>
              </Col>
            </Row>
          </Col>
        </Row>
      </Section>

      <Section>
        <Row justify-content="center" align-items="center" addClass="u-my-4">
          <Col xs="11" md="10" lg="9" hd="8">
            <ImageContainer
              background="assets/images/Slide5-image-3.png"
              addClass="u-fs-300 container"
              padding="33px"
            >
              <ImageContainer
                background="assets/images/Slide3-image-1.png"
                addClass="title-container"
                width="80%"
                height="60px"
              >
                <h2 className="u-special-font u-text-center u-fs-500">
                  Referencias bibliográficas
                </h2>
              </ImageContainer>

              <p className="u-mt-6">
                Ángel, D., Bran, J. A. (2010). Reproducción asistida en equinos:
                Nuevos aportes desde la teoría. Rev Ces Med Vet Zootec. 5(1):
                56-69. Recuperado a partir de{" "}
                <a
                  href="https://revistas.ces.edu.co/index.php/mvz/article/view/984"
                  target={"_blank"}
                  rel="noreferrer"
                  className="styleLink"
                >
                  https://revistas.ces.edu.co/index.php/mvz/article/view/984.
                </a>
              </p>

              <p className="u-my-3">
                Canelón, J.L., Mosquera, O. & Zambrano, R. (2011). Parámetros
                reproductivos en Yeguas Criollas Venezolanas. Revista del
                colegio de médicos veterinarios del estado Lara. Año 1, Número
                1. Julio 2011.
              </p>

              <p className="u-my-3">
                Cortés-Vidauri, Z., Aréchiga-Flores, C., Rincón-Delgado, M.,
                Rochín-Berumen, F., López-Carlos, M. & F lores-Flores, G.
                (2018). Revisión: El Ciclo Reproductivo de la Yegua. Abanico
                veterinario ISSN 2448-6132. 8(3):14-41.
              </p>

              <p className="u-my-3">
                Ramírez, G., Gutiérrez, C. & Ramos, M. (2010). Dinámica
                folicular en yeguas paso fino colombiano medido por
                ultrasonografía en la Sabana de Bogotá. Revista de Medicina
                Veterinaria N.º 19.
              </p>

              <p className="u-my-3">
                Tscherig, B. (2019). Gestación y causas de aborto en equinos.
                Informe final para obtener el título de grado de Médico
                Veterinario. Universidad Nacional de Río Negro. Argentina.{" "}
                <a
                  href="https://rid.unrn.edu.ar/bitstream/20.500.12049/2601/1/Tscherig%2C%20Betiana.pdf"
                  target={"_blank"}
                  rel="noreferrer"
                  className="styleLink"
                >
                  https://rid.unrn.edu.ar/bitstream/20.500.12049/2601/1/Tscherig%2C%20Betiana.pdf.
                </a>
              </p>

              <Row
                className="positionContainerFinal"
                justify-content="center"
                align-items="center"
              >
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
                <ButtonSection section={3}>
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
        <Row justify-content="center" align-items="center" addClass="u-my-4">
          <Col xs="11" md="10" lg="9" hd="6">
            <ImageContainer
              background="assets/images/Slide5-image-3.png"
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
                  Créditos
                </h2>
              </ImageContainer>

              <p className="u-my-3 u-mb-3 u-text-center">
                Jehison Torres Torres
              </p>
              <p className="u-my-3 u-mb-3 u-text-center">
                Tomando las riendas de la producción equina
              </p>
              <p className="u-my-3 u-mb-3 u-text-center">
                Oficina de Educación Virtual y a Distancia
              </p>
              <p className="u-my-3 u-mb-3 u-text-center">
                Universidad de Cundinamarca
              </p>
              <p className="u-my-3 u-mb-3 u-text-center">2022</p>

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
        </Row>
      </Section>
    </Panel>
  );
};

export default Ova7p8;
