import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Header } from '@components'
import { useActivity } from '@hooks'

const STAGE_REGEX = /stage-\d+/i

export const Layout = ({ children }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { getCurrentStageObject } = useActivity()

  /**
   * este useEffect se asegura de que el usuario no
   * pueda acceder a una etapa que no debe estar viendo,
   * y si intenta hacerlo, se lo redirige a la etapa correcta.
   */
  useEffect(() => {
    // verifica si el pathname cumple con un patrón específico que se espera.
    if (!STAGE_REGEX.test(pathname)) {
      return
    }

    // Obtenemos un objeto que representa la etapa actual.
    const stageNavigate = getCurrentStageObject(
      pathname.match(STAGE_REGEX)[0]
    )?.navigate

    //  Si esta propiedad no existe, significa que el usuario no
    // debería estar en esta ruta y se redirige a la página de inicio del OVA.
    if (!stageNavigate) {
      navigate('/unit/1/page/1')
    }
  }, [pathname])

  return (
    <>
      {pathname !== '/' && <Header />}
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ])
}
