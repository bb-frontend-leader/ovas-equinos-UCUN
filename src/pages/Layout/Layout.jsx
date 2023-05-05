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

  useEffect(() => {
    if (!STAGE_REGEX.test(pathname)) {
      return
    }

    const stageNavigate = getCurrentStageObject(
      pathname.match(STAGE_REGEX)[0]
    )?.navigate

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
