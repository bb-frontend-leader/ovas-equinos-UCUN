import { useState, useRef, createContext } from 'react'
import PropTypes from 'prop-types'

export const PlanGroupContext = createContext()

export const PlanGroup = ({ children }) => {
  const [enable, setEnable] = useState([])

  const AllSelectId = useRef([])

  const addNewSelectId = (ref) =>
    (AllSelectId.current = [...AllSelectId.current, ref])

  const validation = (id) => enable.includes(id)

  const onCheck = ({ value }) => {
    if (enable.includes(value)) {
      setEnable([...enable.filter((id) => id !== value)])
      return
    }

    setEnable([...enable, value])
  }

  return (
    <PlanGroupContext.Provider value={{ addNewSelectId, validation, onCheck }}>
      {children}
    </PlanGroupContext.Provider>
  )
}

PlanGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}
