import { useState, useRef } from 'react'
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
  List,
  ListItem,
  Draggable,
  Droppable,
  GeneralDraggable
} from 'UI-Components-books'
import {
  SvgStageMenu,
  ImageContainer,
  PopoverCheckGroup,
  PopoverCheck,
  PopoverCheckButton,
  PlanGroup,
  PlanSelect,
  PlanCheck,
  ModalActivity,
  DragValidation,
  DragValidationButton
} from '@components'
import { useBackground } from '@hooks'

const Ova7p4 = () => {
  // Usado para almacenar el puntaje de las actividades y
  // poder mostrarlo en el ModalActivity.
  const [points, setPoints] = useState({
    checkbox: 0,
    drag: 0
  })

  // Estado utilizado para controlar la apertura y cierre de modales.
  const [isOpen, setIsOpen] = useState({
    context: false,
    checkbox: false,
    drag: false
  })

  // Hook que permite el cambio del fondo de pantalla.
  const { setBackground } = useBackground()

  // Se utiliza para abrir y cerrar los modales.
  const onToggleModal = (modal) => {
    setIsOpen((prev) => ({ ...prev, [modal]: !prev[modal] }))
  }

  // Funcion utilizada en el onResult de la actividad checkbox.
  const handleActivityCheckbox = ({ result }) => {
    setPoints((prev) => ({ ...prev, checkbox: result.points }))
    onToggleModal('checkbox')
  }

  // Funcion utilizada en el onResult de la actividad drag and drop.
  const handleActivityDrag = ({ result }) => {
    setPoints((prev) => ({ ...prev, drag: result }))
    onToggleModal('drag')
  }

  // Referencia del botón contexto.
  const contextRef = useRef()

  // Referencia del botón para validar la actividad.
  const validateRef = useRef()

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
                  Etapa 2.
                  <br />
                  <span>Fisiología de la reproducción en equinos</span>
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
                  <ButtonSection
                    section={2}
                    onClick={() =>
                      setBackground(
                        'url(/assets/images/Teriary-background.png)'
                      )}
                  >
                    <Button addClass='c-button'>
                      <Image
                        url='assets/images/SvgBottomBar-7.png'
                        alt='situación'
                        noCaption
                      />
                    </Button>
                  </ButtonSection>
                </foreignObject>

                <foreignObject x='790' y='110' width='350' height='95'>
                  <ButtonSection
                    section={3}
                    onClick={() =>
                      setBackground(
                        'url(/assets/images/Teriary-background.png)'
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
              <Col xs='11' addClass='u-self-end u-mb-9'>
                <ImageContainer
                  background='assets/images/Slide1-image-9.png'
                  addClass='u-mt-3'
                >
                  <Row justify-content='center' align-items='center'>
                    <Col xs='11' mm='10' md='9' lg='7' hd='6'>
                      <p>
                        En esta etapa se aborda la fisiología de la reproducción
                        que, junto a la anatomía, se considera uno de los
                        pilares en el fomento del manejo reproductivo en la
                        especie equina. A partir de estos saberes se comprenden
                        los diferentes momentos del ciclo estral.
                      </p>

                      <p className='u-my-3'>
                        En la siguiente imagen encontrará una vista detallada de
                        la fisiología de la reproducción en la que se explica la
                        función de las hormonas en la fisiología reproductiva de
                        la hembra equina.
                      </p>

                      <p>
                        El manejo de individuos, ya sea en pradera o pesebrera,
                        es una de las decisiones más comunes en un
                        establecimiento de producción equina, sin embargo, cada
                        uno tiene sus ventajas y desventajas, las cuales tienen
                        una relación fisiológica específica con el
                        comportamiento reproductivo, el cual determina la
                        aplicación de biotecnologías.
                      </p>
                    </Col>

                    <Col xs='11' mm='10' md='9' lg='6' hd='5'>
                      <p className='u-text-center u-font-bold u-my-2'>
                        Haga clic sobre la imagen para consultar el documento
                        sobre Anatomy, Physiology and Reproduction in the Mare.
                      </p>

                      <Image
                        src='/assets/images/Slide4-image-1.png'
                        alt='Gráfico circular donde aparece dos fases: la primera es al fase folicular donde se encuentra lo Estrógenos y la segunda es la fase luteal donde esta la Prostagaldina y la Progesterona.'
                        noCaption
                      />
                    </Col>
                  </Row>
                </ImageContainer>
              </Col>
            </Row>
          </ModalContent>
        </Modal>
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
                El operario de la productora equina “La ganadora” manifiesta que
                una de las yeguas, la cual representa un potencial genético
                importante en este establecimiento, no presenta sintomatologías
                de celo desde hace aproximadamente tres meses, por tal razón no
                ha podido ser inseminada, ni colectados embriones.
              </p>

              <p className='u-my-2 u-mx-3'>
                Como anamnesis del animal se sabe que hace un par de meses, se
                encontraba pastoreando en la pradera y tuvo un accidente menor
                relacionado a una cortadura en el miembro anterior izquierdo, el
                cual no comprometió su desplazamiento ni sus actividades
                diarias, sin embargo, el dueño decidió ponerla en pesebrera como
                estrategia de recuperación y prevención de accidente, ya que es
                una de las hembras más representativas del criadero y desde esos
                días no reporta sintomatología de celo.
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
                      alt='Volver a la sección anterior'
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

          <Col xs='11' mm='10' md='9' lg='6' hd='4' />
        </Row>
      </Section>

      <Section addClass='animate__animated animate__fadeInDown animate__faster u-section-overflow'>
        <Row
          justify-content='space-evenly'
          align-items='center'
          addClass='u-py-6'
        >
          <Col xs='11' mm='10' md='9' lg='5' hd='4'>
            <ImageContainer
              background='assets/images/Slide1-image-9.png'
              addClass='u-py-4 u-fs-300 c-image-container-sign'
              padding='30px'
            >
              <ImageContainer
                background='assets/images/Slide3-image-1.png'
                addClass='title-container'
                width='500px'
                height='50px'
              >
                <h2 className='u-special-font u-text-center u-fs-600'>
                  Actividad 2
                </h2>
              </ImageContainer>

              <p className='u-font-bold'>
                ¿Cuál es el diagnóstico que indica la razón por la cual la yegua
                no ha mostrado sintomatología de celo?
              </p>

              <p className='u-mx-2 u-my-3'>
                Desplace el cursor por cada uno de los puntos numerados y escoja
                dos de las seis opciones de respuesta. Para ello haga clic
                dentro del círculo en blanco para fijar la respuesta.
              </p>

              <p className='u-mx-2'>
                Finalice seleccionando el botón “Validar” para conocer su
                retroalimentación y puntaje, cada opción correcta vale 1 punto
                para un total de 2 puntos. Cuenta con un intento para realizar
                esta actividad.
              </p>
            </ImageContainer>
          </Col>

          <Col xs='11' mm='10' md='9' lg='7' hd='6'>
            <PopoverCheckGroup id='activity_2' onResult={handleActivityCheckbox} minSelected={2}>
              <List addClass='c-toggle-check-grid'>
                <ListItem>
                  <PopoverCheck
                    id='popover-checkbox-1'
                    points={-1}
                    state='wrong'
                    label='1'
                  >
                    <p>
                      Evaluación reproductiva por ecografía transvaginal
                      revisando la presencia de estructuras equinas, analizando
                      la presencia de anestro
                    </p>
                  </PopoverCheck>
                </ListItem>

                <ListItem>
                  <PopoverCheck
                    id='popover-checkbox-2'
                    points={1}
                    state='right'
                    label='2'
                  >
                    <p>
                      Realizar una evaluación reproductiva por ecografía
                      transrectal revisando la presencia de estructuras
                      ováricas, analizando la presencia de anestro.
                    </p>
                  </PopoverCheck>
                </ListItem>

                <ListItem>
                  <PopoverCheck
                    id='popover-checkbox-3'
                    points={-1}
                    state='wrong'
                    label='3'
                  >
                    <p>Cantidad de líquido que se le permite ingresar.</p>
                  </PopoverCheck>
                </ListItem>

                <ListItem>
                  <PopoverCheck
                    id='popover-checkbox-4'
                    points={-1}
                    state='wrong'
                    label='4'
                  >
                    <p>
                      Realizar una evaluación reproductiva por colonoscopía
                      transrectal revisando la presencia de estructuras
                      ováricas, analizando la presencia de anestro.
                    </p>
                  </PopoverCheck>
                </ListItem>

                <ListItem>
                  <PopoverCheck
                    id='popover-checkbox-5'
                    points={1}
                    state='right'
                    label='5'
                  >
                    <p>
                      La cantidad de iluminación que se permite ingresar a la
                      pesebrera.
                    </p>
                  </PopoverCheck>
                </ListItem>

                <ListItem>
                  <PopoverCheck
                    id='popover-checkbox-6'
                    points={-1}
                    state='wrong'
                    label='6'
                  >
                    <p>
                      Inspeccionar la pesebrera donde se encuentra la yegua,
                      revisando la cantidad de oxígeno que ingresa.
                    </p>
                  </PopoverCheck>
                </ListItem>
              </List>

              <Row justify-content='center' align-items='center'>
                <PopoverCheckButton>
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
                </PopoverCheckButton>
              </Row>
            </PopoverCheckGroup>
          </Col>

          <ModalActivity
            section={4}
            open={isOpen.checkbox}
            onClose={() => onToggleModal('checkbox')}
            focusRef={validateRef}
            feedback='El ciclo estral en la yegua se presenta durante la época de mayor
            cantidad de horas luz/día (fotoperiodo positivo) lo que equivale
            a menor periodo de secreción de la hormona melatonina.'
            points={`${points.checkbox} / 2`}
          />
        </Row>
      </Section>

      <Section addClass='animate__animated animate__fadeInDown animate__faster u-section-overflow'>
        <Row justify-content='center' align-items='center'>
          <Col xs='11'>
            <ImageContainer
              background='assets/images/Slide1-image-9.png'
              addClass='u-py-2 u-fs-300 u-text-center'
              padding='30px'
            >
              <ImageContainer
                background='assets/images/Slide3-image-1.png'
                addClass='title-container'
                width='500px'
                height='50px'
              >
                <h2 className='u-special-font u-text-center u-fs-600'>
                  Actividad 3
                </h2>
              </ImageContainer>

              <p>
                De acuerdo con la situación problémica presentada, seleccione
                dos estrategias de solución, de modo que la yegua retorne a la
                presentación periódica de síntomas de celo.
              </p>

              <p className='u-mx-2 u-my-3'>
                Lea cada una de las opciones presentadas y seleccione las dos
                correctas, desplazándolas hacia las casillas en blanco para
                completar la estrategia de solución. Haga clic en el botón
                “Validar” para conocer la retroalimentación y el puntaje
                obtenido.
              </p>

              <p className='u-mx-2'>
                Esta actividad tiene 2 y cada opción correcta vale 1 punto. Solo
                tiene un intento para realizarla.
              </p>

              <DragValidation onResult={handleActivityDrag} points={1} id='activity_3'>
                <Row
                  justify-content='space-evenly'
                  align-items='center'
                  addClass='u-my-3'
                >
                  <Col
                    xs='11'
                    mm='10'
                    md='9'
                    lg='8'
                    hd='7'
                    addClass='u-self-start'
                  >
                    <GeneralDraggable addClass='c-drags'>
                      <Draggable
                        id='A1'
                        label='Draggable item'
                        element='button'
                        dragging='c-drag--active'
                        addClass='c-drag'
                      >
                        Combinar la estimulación con hormonas sintéticas
                        análogas, específicamente GnRH y estimulación lumínica
                        en potrero, lo cual induce un retorno a la ciclicidad
                        más rápida, o el estímulo lumínica artificial en la
                        pesebrera.
                      </Draggable>

                      <Draggable
                        id='B1'
                        label='Draggable item'
                        element='button'
                        dragging='c-drag--active'
                        addClass='c-drag'
                      >
                        Aislamiento permanente de la yegua por un ciclo de modo
                        que empiece a presente síntomas del celo.
                      </Draggable>

                      <Draggable
                        id='C1'
                        label='Draggable item'
                        element='button'
                        dragging='c-drag--active'
                        addClass='c-drag'
                      >
                        Alternar la presencia de la yegua entre la pesebrera en
                        horas de la noche y en la pradera en horas del día, ya
                        que se así normalizara el estímulo lumínico.
                      </Draggable>

                      <Draggable
                        id='D1'
                        label='Draggable item'
                        element='button'
                        dragging='c-drag--active'
                        addClass='c-drag'
                      >
                        Motivar la presencia de vesícula embrionaria, usando
                        exposición aislada cada semana permite que la hembra
                        retorne al celo.
                      </Draggable>
                    </GeneralDraggable>

                    <Row justify-content='center' align-items='center'>
                      <DragValidationButton>
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
                      </DragValidationButton>
                    </Row>
                  </Col>

                  <Col xs='11' mm='10' md='9' lg='6' hd='4'>
                    <div className='drop-container'>
                      <ImageContainer
                        background='assets/images/Slide3-image-1.png'
                        addClass='title-container drop-container__title'
                        height='50px'
                      >
                        <p className='u-font-bold u-text-center u-fs-300 u-text-primary-300'>
                          La estrategias de solución es
                        </p>
                      </ImageContainer>

                      <div className='drop-container__drop'>
                        <Droppable
                          id='A'
                          validate={['C1']}
                          label='droppable'
                          addClass='drop-container__drop-item'
                          over='drop-container__drop-item--active'
                        />

                        <img
                          src='assets/images/Slide1-image-7.png'
                          alt=''
                          tabIndex={-1}
                        />

                        <img
                          src='assets/images/Slide1-image-7.png'
                          alt=''
                          tabIndex={-1}
                        />

                        <img
                          src='assets/images/Slide1-image-7.png'
                          alt=''
                          tabIndex={-1}
                        />

                        <img
                          src='assets/images/Slide1-image-7.png'
                          alt=''
                          tabIndex={-1}
                        />
                      </div>

                      <ImageContainer
                        background='assets/images/Slide3-image-1.png'
                        addClass='title-container drop-container__title'
                        height='50px'
                      >
                        <p className='u-font-bold u-text-center u-fs-300 u-text-primary-300'>
                          y
                        </p>
                      </ImageContainer>

                      <div className='drop-container__drop'>
                        <Droppable
                          id='B'
                          validate={['A1']}
                          label='droppable'
                          addClass='drop-container__drop-item'
                          over='drop-container__drop-item--active'
                        />

                        <img
                          src='assets/images/Slide1-image-7.png'
                          alt=''
                          tabIndex={-1}
                        />

                        <img
                          src='assets/images/Slide1-image-7.png'
                          alt=''
                          tabIndex={-1}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </DragValidation>
            </ImageContainer>
          </Col>

          <ModalActivity
            section={5}
            open={isOpen.drag}
            onClose={() => onToggleModal('drag')}
            focusRef={validateRef}
            feedback='El fotoperiodo negativo, inducido por la falta de estimulación continua
            de por lo menos 12 horas de luz del sol, permite la liberación de
            hormona melatonina, la cual bloquea en el hipotálamo la liberación
            de la hormona liberadora de las gonadotrofinas (GnRH), lo cual evita
            el desarrollo del folículo dominante y por lo tanto la hembra no
            presentará síntomas de celo.'
            points={`${points.drag} / 2`}
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
                <strong>Plan de manejo:</strong> Fisiología de la reproducción
                en equinos.
              </h2>

              <p className='u-mb-5 u-fs-300'>
                Dentro del plan de manejo reproductivo se deben tener en cuenta
                tres eventos fisiológicos que determinan los resultados del plan
                de manejo reproductivo, seleccióne los correctos y asigne a cada
                uno su respectiva justificación.
              </p>

              <div className='c-plan-group-grid u-px-3'>
                <PlanGroup>
                  <PlanCheck value='question_1' label='Dinámica folicular.' />

                  <PlanSelect id='question_1'>
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

                  <PlanCheck value='question_2' label='Ovulación.' />

                  <PlanSelect id='question_2'>
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

                  <PlanCheck value='question_3' label='Edema uterino.' />

                  <PlanSelect id='question_3'>
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
                    value='question_4'
                    label='Sintomatología de celo.'
                  />

                  <PlanSelect id='question_4'>
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

                  <PlanCheck value='question_5' label='Dinámica de celo.' />

                  <PlanSelect id='question_5'>
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

export default Ova7p4
