import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Item } from 'react-stately'

import {
  Col,
  Row,
  Panel,
  Section,
  ButtonSection,
  Image,
  Button,
  Audio
} from 'UI-Components-books'
import {
  ImageContainer,
  SvgStageMenuTwo,
  PlanCheck,
  PlanGroup,
  PlanSelect,
  ModalActivity,
  CheckBoxGroup,
  CheckBoxButton,
  CheckBox
} from '@components'
import { useBackground } from '@hooks'

const Ova7p6 = () => {
  // Usado para almacenar el puntaje de la actividad y
  // poder mostrarlo en el ModalActivity.
  const [points, setPoints] = useState(0)

  // Estado utilizado para controlar la apertura y cierre de modales.
  const [isOpen, setIsOpen] = useState({
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

  // Referencia del botón para validar la actividad.
  const validateRef = useRef()

  return (
    <Panel>
      {/* <NavSection /> */}

      <Section addClass='animate__animated animate__fadeInDown animate__faster u-section-overflow'>
        <Row justify-content='center' align-items='center'>
          <Col xs='11' md='10' lg='9' hd='5'>
            <Image
              src='assets/images/SvgRoulette-horse.png'
              alt='Imagen de la cabeza de un caballo'
              width='450'
              addClass='u-mt-5'
              noCaption
            />
          </Col>

          <Col xs='11' md='10' lg='9' hd='6'>
            <ImageContainer
              background='assets/images/Slide1-image-1.png'
              addClass='u-fs-300 container'
              padding='33px'
            >
              <ImageContainer
                background='assets/images/Slide3-image-1.png'
                addClass='title-container'
                width='60%'
                height='100px'
              >
                <h2 className='u-special-font u-text-center u-fs-500'>
                  Etapa 4.
                  <br />
                  <span>Biotecnologías reproductivas en equinos</span>
                </h2>
              </ImageContainer>

              <p className='u-mt-3'>
                Las biotecnologías reproductivas en equinos se presentan como
                herramientas que permiten maximizar la fisiología reproductiva
                de los ejemplares. En la presente etapa reconocerá algunas de
                las principales biotecnologías de mayor impacto en la producción
                equina, para acercarse a algunos datos sobre estas.
              </p>

              <p className='u-my-3'>
                Haga clic en el ícono ubicado a continuación para reproducir el
                audio.
              </p>

              <Row addClass='positionContainerFinal' justify-content='center'>
                <Audio
                  defaultStyle
                  type='Button'
                  className='styleAudioButton'
                />

                <ButtonSection section={2}>
                  <Button addClass='u-button-reset u-stack u-self-start'>
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

      <Section addClass='animate__animated animate__fadeInDown animate__faster u-section-overflow'>
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
                height='100px'
                width='50%'
              >
                <h2 className='u-special-font u-text-center u-fs-500'>
                  Etapa 4.
                  <br />
                  <span>Biotecnologías reproductivas en equinos</span>
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

                <foreignObject x='47' y='110' width='350' height='95'>
                  <ButtonSection
                    section={3}
                    onClick={() =>
                      setBackground('url(/assets/images/Fourth-background.png)')}
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

                <foreignObject x='412' y='110' width='350' height='95'>
                  <ButtonSection
                    section={4}
                    onClick={() =>
                      setBackground('url(/assets/images/Fourth-background.png)')}
                  >
                    <Button addClass='c-button'>
                      <Image
                        url='assets/images/SvgBottomBar-6.png'
                        alt='actividad'
                        noCaption
                      />
                    </Button>
                  </ButtonSection>
                </foreignObject>

                <foreignObject x='790' y='110' width='350' height='95'>
                  <ButtonSection
                    section={5}
                    onClick={() =>
                      setBackground('url(/assets/images/Fifth-background.png)')}
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
        <Row justify-content='center' align-items='center'>
          <Col xs='11' md='10' lg='9' hd='6' addClass='u-mt-3'>
            <ImageContainer
              background='assets/images/Slide1-image-9.png'
              addClass='u-fs-300 c-image-container-sign'
              padding='33px'
            >
              <ImageContainer
                background='assets/images/Slide3-image-1.png'
                addClass='title-container'
                height='55px'
                width='60%'
              >
                <h2 className='u-special-font u-text-center u-fs-600'>
                  Sitauación
                </h2>
              </ImageContainer>

              <p className='u-mt-3'>
                En la finca “La Rotonda”, el propietario presenta la siguiente
                situación problémica:
              </p>

              <p className='u-my-3'>
                Este es un sistema de producción equina especializado en la base
                genética criolla colombiana, mis ejemplares, en alguna etapa de
                su vida, se encuentran en competencias o exhibiciones continuas,
                con el objetivo de conseguir puntajes que me permitan ranquear
                en la asociación nacional. Me retribuye beneficios económicos
                para el criadero, pero esta etapa de competencia, por lo
                general, coincide con la etapa reproductiva más productiva, en
                la que puedo conseguir mejores resultados y obtener en el nivel
                reproductivo específicamente. Me dicen que no es aconsejable
                exponer a competencia a hembras en avanzado grado de preñez, por
                lo tanto, prefiero no preñar las hembras en esta etapa
                productiva y esta situación induce afectación de los parámetros
                reproductivos individuales y globales de mi criadero.
              </p>

              <p className='u-my-3'>
                Las biotecnologías reproductivas aplicables en hembras equinas
                permiten la obtención de más de una cría al año, utilizando
                material genético de una hembra en competencia sin que esta deba
                ser preñada.
              </p>

              <Row justify-content='center' align-items='center'>
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

                <ButtonSection section={4}>
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

          <Col xs='11' md='10' lg='9' hd='6'>
            <Image
              src='assets/images/SvgRoulette-genética-criolla.png'
              alt='Imagen de una persona con un caballo.'
              width='930'
              addClass='u-mt-5'
              noCaption
            />
          </Col>
        </Row>
      </Section>

      <Section addClass='animate__animated animate__fadeInDown animate__faster u-section-overflow'>
        <Row justify-content='space-evenly' align-items='center'>
          <Col xs='11' md='10' lg='6' hd='5' addClass='u-mt-3'>
            <ImageContainer
              background='assets/images/Slide1-image-9.png'
              addClass='u-fs-300 c-image-container-sign'
              padding='33px'
            >
              <ImageContainer
                background='assets/images/Slide3-image-1.png'
                addClass='title-container'
                height='55px'
                width='60%'
              >
                <h2 className='u-special-font u-text-center u-fs-600'>
                  Contexto
                </h2>
              </ImageContainer>

              <p className='u-my-3'>
                Al estar tanto hembras como machos en etapa de competencia, su
                desempeño reproductivo se ve afectado, por lo tanto, gran
                porcentaje de las hembras no logran ser preñadas y los machos
                disminuyen su capacidad de montas naturales o servicios. Las
                biotecnologías reproductivas son herramientas alternativas que
                permiten obtener un mayor provecho reproductivo en animales,
                tanto en competencia como con alteraciones físicas que permitan
                su reproducción de manera normal, ya que muchas de ellas usan el
                material genético de los animales en competencia en ambientes
                artificiales o individuos adoptivos (sustitutos) que realizarán,
                en las etapas de la reproducción como la gestación, el parto y
                el amamantamiento, o servicio en los machos, actividades que un
                animal en competencia no puede hacer
              </p>

              <Row justify-content='center' align-items='center'>
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

                <ButtonSection section={5}>
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
          <Col xs='11' md='10' lg='9' hd='6'>
            <Image
              src='assets/images/SvgRoulette-genética-criolla.png'
              alt='Imagen de una persona con un caballo.'
              width='930'
              addClass='u-mt-5'
              noCaption
            />
          </Col>
        </Row>
      </Section>

      <Section addClass='animate__animated animate__fadeInDown animate__faster u-section-overflow'>
        <Row
          justify-content='space-evenly'
          align-items='flex-end'
          addClass='u-my-4'
        >
          <Col xs='11' md='10' lg='6' hd='5'>
            <Image
              src='assets/images/SvgRoulette-genética-criolla.png'
              alt='Imagen de una persona con un caballo.'
              width='930'
              addClass='u-mt-5 positionImg-Etapa4'
              noCaption
            />
            <Col xs='11'>
              <ImageContainer
                background='assets/images/Slide1-image-1.png'
                addClass='u-fs-300 container'
                padding='33px'
              >
                <ImageContainer
                  background='assets/images/Slide3-image-1.png'
                  addClass='title-container'
                  width='80%'
                  height='55px'
                >
                  <h2 className='u-special-font u-text-center u-fs-600'>
                    Actividad 6
                  </h2>
                </ImageContainer>

                <p className='u-mt-3'>
                  Lea cada una de las opciones presentadas y seleccione dos
                  correctas haciendo clic en el recuadro derecho de la opción
                  elegida. Para terminar haga clic en el botón “Validar” para
                  conocer su r etroalimentación y puntaje.
                </p>

                <p className='u-my-3'>
                  Esta actividad tiene un valor de 10 puntos. Cada respuesta
                  correcta vale cinco puntos. Cuenta con un intento para
                  realizarla.
                </p>

                <p className='u-my-3'>
                  Debe desarrollar la actividad para avanzar.
                </p>
              </ImageContainer>
            </Col>
          </Col>

          <Col xs='11' md='10' lg='6' hd='5'>
            <ImageContainer
              background='assets/images/Slide1-image-9.png'
              addClass='u-fs-300'
              padding='40px'
            >
              <CheckBoxGroup
                id='activity_6'
                minSelected={2}
                onResult={handleActivity}
              >
                <div className='c-popover-check__content u-mb-3'>
                  <p className='u-fs-300'>
                    Colecta y transferencia de embriones. Colectar embriones de
                    una hembra en competencia para ser transferidos a una hembra
                    receptora la cual continuará con el proceso de gestación y
                    parto.
                  </p>
                  <CheckBox
                    id='checkbox-id-1'
                    addClass='c-popover-check__check'
                    points={5}
                    state='right'
                    label=''
                  />
                </div>

                <div className='c-popover-check__content u-mb-3'>
                  <p className='u-fs-300'>
                    Evaluación reproductiva de presencia de estructuras
                    ováricas, analizando la presencia de anestro el cual es
                    trasplantado a una hembra receptora la cual continuará con
                    el proceso de gestación.
                  </p>
                  <CheckBox
                    id='checkbox-id-2'
                    addClass='c-popover-check__check'
                    points={5}
                    state='right'
                    label=''
                  />
                </div>

                <div className='c-popover-check__content u-mb-3'>
                  <p className='u-fs-300'>
                    Combinar la estimulación con hormonas sintéticas análogas,
                    específicamente GnRH y estimulación lumínica en potrero, lo
                    cual induce un retorno a la ciclicidad más rápida, o el
                    estímulo lumínica artificial en la pesebrera.
                  </p>
                  <CheckBox
                    id='checkbox-id-3'
                    addClass='c-popover-check__check'
                    points={-5}
                    state='wrong'
                    label=''
                  />
                </div>

                <div className='c-popover-check__content u-mb-3'>
                  <p className='u-fs-300'>
                    Combinar y motivar la presencia de vesícula embrionaria,
                    usando exposición aislada cada semana permitiendo que la
                    hembra en competencia retorne al celo y se logre el proceso
                    de gestación y parto.
                  </p>
                  <CheckBox
                    id='checkbox-id-4'
                    addClass='c-popover-check__check'
                    points={-5}
                    state='wrong'
                    label=''
                  />
                </div>

                <Row justify-content='center' align-items='center'>
                  <CheckBoxButton>
                    <Button ref={validateRef} addClass='u-button-reset u-stack'>
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
                    section={6}
                    onClick={() =>
                      setBackground(
                        'url(/assets/images/Principal-background.png)'
                      )}
                  >
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
              </CheckBoxGroup>
            </ImageContainer>
          </Col>

          <ModalActivity
            section={6}
            open={isOpen.activity}
            onClose={() => onToggleModal('activity')}
            focusRef={validateRef}
            feedback='La colecta y transferencia de embriones, así como combinar la
            estimulación con hormonas sintéticas análogas, específicamente
            GnRH y estimulación lumínica en potrero, son biotecnologías
            reproductivas aplicables a este caso.'
            points={`${points} / 10`}
          />
        </Row>
      </Section>

      <Section addClass='animate__animated animate__fadeInDown animate__faster u-section-overflow'>
        <Row justify-content='center' align-items='center'>
          <Col xs='12' mm='11' md='10' lg='9' hd='8'>
            <ImageContainer
              background='assets/images/Slide3-image-7.png'
              addClass='u-text-center u-my-2'
              padding='30px'
            >
              <h2 className='u-mb-3 u-fs-300 u-font-normal'>
                <strong>Plan de manejo:</strong> Biotecnologías reproductivas en
                equinos.
              </h2>

              <p className='u-mb-5 u-fs-300'>
                Las biotecnologías reproductivas son herramientas
                biotecnológicas que permiten obtener el mayor provecho
                reproductivo posible a un individuo en sus diferentes etapas
                productivas, además de facilitar la realización de diferentes
                procesos en los cuales se ven involucrados los sistemas de
                producción equina, como ferias, exhibiciones y cabalgatas. Con
                base a la información incluida en el recurso, seleccione tres
                biotecnologías reproductivas que representan el mayor impacto en
                un plan de manejo reproductivo y asigne su respectiva
                justificación.
              </p>

              <div className='c-plan-group-grid u-px-3'>
                <PlanGroup
                  id='plan_4'
                  title='Biotecnologías reproductivas en equinos.'
                >
                  <PlanCheck
                    value='question_1'
                    label='Ultrasonografía reproductiva.'
                  />

                  <PlanSelect id='question_1' label='Seleccionar'>
                    <Item data-key='1' key='1'>
                      Sin lugar a dudas es la biotecnología que mayor impacto
                      logra en el plan de manejo reproductivo en un plantel
                      equino, ya que mediante esta se logra hacer un seguimiento
                      adecuado y eficiente de variables ováricas y uterinas
                      indispensable en la aplicación de diferentes
                      biotecnologías reproductivas.
                    </Item>

                    <Item data-key='2' key='2'>
                      A través de esta biotecnología se lograr seleccionar el
                      semental especifico con el cual se quiere servir la yegua,
                      además de lograr un buen control de la transmisión de
                      enfermades por contacto sexual, sin embargo, se debe
                      contar con el semental en el mismo criadero o cercano a
                      este.
                    </Item>

                    <Item data-key='3' key='3'>
                      Esta biotecnología es la de mayor impacto, después de la
                      ultrasonografía, ya que permite maximizar el potencial
                      genético aportado por el macho, puesto que se pude contar
                      con germoplasma de machos genéticamente elites ubicados en
                      ligares muy apartados del sistema de producción, demás
                      resulta más económico y rentable que adquirir y mantener
                      un macho reproductor en el sistema.
                    </Item>

                    <Item data-key='4' key='4'>
                      Esta biotecnología permite mejorar de una manera muy
                      eficiente los dos componentes, tanto el materno como el
                      paterno, ya que se logra la formación de un embrión a
                      partir del ovulo de una hembra con gran genética y
                      germoplasma de un macho genéticamente elite, con la
                      ventaja que la hembra donante de la genética, no mantiene
                      esta gestación, la gestación la lleva a cabo una hembra
                      receptora, por lo tanto, el potencial de producción de
                      gestaciones y crías de una hembra especifica aumenta
                      durante un periodo de tiempo específico, algo que no se
                      lograría si la hembra donante estuviera en gestación.
                    </Item>
                  </PlanSelect>

                  <PlanCheck
                    value='question_2'
                    label='Monta natural dirigida.'
                  />

                  <PlanSelect id='question_2' label='Seleccionar'>
                    <Item data-key='1' key='1'>
                      Sin lugar a dudas es la biotecnología que mayor impacto
                      logra en el plan de manejo reproductivo en un plantel
                      equino, ya que mediante esta se logra hacer un seguimiento
                      adecuado y eficiente de variables ováricas y uterinas
                      indispensable en la aplicación de diferentes
                      biotecnologías reproductivas.
                    </Item>

                    <Item data-key='2' key='2'>
                      A través de esta biotecnología se lograr seleccionar el
                      semental especifico con el cual se quiere servir la yegua,
                      además de lograr un buen control de la transmisión de
                      enfermades por contacto sexual, sin embargo, se debe
                      contar con el semental en el mismo criadero o cercano a
                      este.
                    </Item>

                    <Item data-key='3' key='3'>
                      Esta biotecnología es la de mayor impacto, después de la
                      ultrasonografía, ya que permite maximizar el potencial
                      genético aportado por el macho, puesto que se pude contar
                      con germoplasma de machos genéticamente elites ubicados en
                      ligares muy apartados del sistema de producción, demás
                      resulta más económico y rentable que adquirir y mantener
                      un macho reproductor en el sistema.
                    </Item>

                    <Item data-key='4' key='4'>
                      Esta biotecnología permite mejorar de una manera muy
                      eficiente los dos componentes, tanto el materno como el
                      paterno, ya que se logra la formación de un embrión a
                      partir del ovulo de una hembra con gran genética y
                      germoplasma de un macho genéticamente elite, con la
                      ventaja que la hembra donante de la genética, no mantiene
                      esta gestación, la gestación la lleva a cabo una hembra
                      receptora, por lo tanto, el potencial de producción de
                      gestaciones y crías de una hembra especifica aumenta
                      durante un periodo de tiempo específico, algo que no se
                      lograría si la hembra donante estuviera en gestación.
                    </Item>
                  </PlanSelect>

                  <PlanCheck
                    value='question_3'
                    label='Inseminación artificial.'
                  />

                  <PlanSelect id='question_3' label='Seleccionar'>
                    <Item data-key='1' key='1'>
                      Sin lugar a dudas es la biotecnología que mayor impacto
                      logra en el plan de manejo reproductivo en un plantel
                      equino, ya que mediante esta se logra hacer un seguimiento
                      adecuado y eficiente de variables ováricas y uterinas
                      indispensable en la aplicación de diferentes
                      biotecnologías reproductivas.
                    </Item>

                    <Item data-key='2' key='2'>
                      A través de esta biotecnología se lograr seleccionar el
                      semental especifico con el cual se quiere servir la yegua,
                      además de lograr un buen control de la transmisión de
                      enfermades por contacto sexual, sin embargo, se debe
                      contar con el semental en el mismo criadero o cercano a
                      este.
                    </Item>

                    <Item data-key='3' key='3'>
                      Esta biotecnología es la de mayor impacto, después de la
                      ultrasonografía, ya que permite maximizar el potencial
                      genético aportado por el macho, puesto que se pude contar
                      con germoplasma de machos genéticamente elites ubicados en
                      ligares muy apartados del sistema de producción, demás
                      resulta más económico y rentable que adquirir y mantener
                      un macho reproductor en el sistema.
                    </Item>

                    <Item data-key='4' key='4'>
                      Esta biotecnología permite mejorar de una manera muy
                      eficiente los dos componentes, tanto el materno como el
                      paterno, ya que se logra la formación de un embrión a
                      partir del ovulo de una hembra con gran genética y
                      germoplasma de un macho genéticamente elite, con la
                      ventaja que la hembra donante de la genética, no mantiene
                      esta gestación, la gestación la lleva a cabo una hembra
                      receptora, por lo tanto, el potencial de producción de
                      gestaciones y crías de una hembra especifica aumenta
                      durante un periodo de tiempo específico, algo que no se
                      lograría si la hembra donante estuviera en gestación.
                    </Item>
                  </PlanSelect>

                  <PlanCheck
                    value='question_4'
                    label='Colecta y transferencia de embriones.'
                  />

                  <PlanSelect id='question_4' label='Seleccionar'>
                    <Item data-key='1' key='1'>
                      Sin lugar a dudas es la biotecnología que mayor impacto
                      logra en el plan de manejo reproductivo en un plantel
                      equino, ya que mediante esta se logra hacer un seguimiento
                      adecuado y eficiente de variables ováricas y uterinas
                      indispensable en la aplicación de diferentes
                      biotecnologías reproductivas.
                    </Item>

                    <Item data-key='2' key='2'>
                      A través de esta biotecnología se lograr seleccionar el
                      semental especifico con el cual se quiere servir la yegua,
                      además de lograr un buen control de la transmisión de
                      enfermades por contacto sexual, sin embargo, se debe
                      contar con el semental en el mismo criadero o cercano a
                      este.
                    </Item>

                    <Item data-key='3' key='3'>
                      Esta biotecnología es la de mayor impacto, después de la
                      ultrasonografía, ya que permite maximizar el potencial
                      genético aportado por el macho, puesto que se pude contar
                      con germoplasma de machos genéticamente elites ubicados en
                      ligares muy apartados del sistema de producción, demás
                      resulta más económico y rentable que adquirir y mantener
                      un macho reproductor en el sistema.
                    </Item>

                    <Item data-key='4' key='4'>
                      Esta biotecnología permite mejorar de una manera muy
                      eficiente los dos componentes, tanto el materno como el
                      paterno, ya que se logra la formación de un embrión a
                      partir del ovulo de una hembra con gran genética y
                      germoplasma de un macho genéticamente elite, con la
                      ventaja que la hembra donante de la genética, no mantiene
                      esta gestación, la gestación la lleva a cabo una hembra
                      receptora, por lo tanto, el potencial de producción de
                      gestaciones y crías de una hembra especifica aumenta
                      durante un periodo de tiempo específico, algo que no se
                      lograría si la hembra donante estuviera en gestación.
                    </Item>
                  </PlanSelect>

                  <PlanCheck
                    value='question_5'
                    label='Colecta artificial dirigida.'
                  />

                  <PlanSelect id='question_5' label='Seleccionar'>
                    <Item data-key='1' key='1'>
                      Sin lugar a dudas es la biotecnología que mayor impacto
                      logra en el plan de manejo reproductivo en un plantel
                      equino, ya que mediante esta se logra hacer un seguimiento
                      adecuado y eficiente de variables ováricas y uterinas
                      indispensable en la aplicación de diferentes
                      biotecnologías reproductivas.
                    </Item>

                    <Item data-key='2' key='2'>
                      A través de esta biotecnología se lograr seleccionar el
                      semental especifico con el cual se quiere servir la yegua,
                      además de lograr un buen control de la transmisión de
                      enfermades por contacto sexual, sin embargo, se debe
                      contar con el semental en el mismo criadero o cercano a
                      este.
                    </Item>

                    <Item data-key='3' key='3'>
                      Esta biotecnología es la de mayor impacto, después de la
                      ultrasonografía, ya que permite maximizar el potencial
                      genético aportado por el macho, puesto que se pude contar
                      con germoplasma de machos genéticamente elites ubicados en
                      ligares muy apartados del sistema de producción, demás
                      resulta más económico y rentable que adquirir y mantener
                      un macho reproductor en el sistema.
                    </Item>

                    <Item data-key='4' key='4'>
                      Esta biotecnología permite mejorar de una manera muy
                      eficiente los dos componentes, tanto el materno como el
                      paterno, ya que se logra la formación de un embrión a
                      partir del ovulo de una hembra con gran genética y
                      germoplasma de un macho genéticamente elite, con la
                      ventaja que la hembra donante de la genética, no mantiene
                      esta gestación, la gestación la lleva a cabo una hembra
                      receptora, por lo tanto, el potencial de producción de
                      gestaciones y crías de una hembra especifica aumenta
                      durante un periodo de tiempo específico, algo que no se
                      lograría si la hembra donante estuviera en gestación.
                    </Item>
                  </PlanSelect>
                </PlanGroup>
              </div>

              <Row
                justify-content='center'
                align-items='center'
                addClass='u-mt-3'
              >
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

export default Ova7p6
