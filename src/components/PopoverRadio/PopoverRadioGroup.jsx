import { useState, createContext, useEffect } from 'react'
import PropTypes from 'prop-types'

export const PopoverRadioGroupContext = createContext()

export const PopoverRadioGroup = ({
  children, options, onResult
}) => {
  const [state, setState] = useState(false)

  const [checked, setChecked] = useState('')

  const [validation, setValidation] = useState()

  useEffect(() => {
    setValidation(options)
  }, [])

  const onCheck = () => {
    const valorFinal = validation.filter(valor => valor.id === parseInt(checked))

    if (onResult) {
      onResult(valorFinal[0])
    }

    if (valorFinal) {
      console.log(valorFinal)
      setState(valorFinal[0].answer)
    }
  }

  return (
    <PopoverRadioGroupContext.Provider value={{ onCheck, validation, setChecked, checked, state, setState }}>
      {children}
    </PopoverRadioGroupContext.Provider>
  )
}

PopoverRadioGroupContext.propTypes = {
  options: PropTypes.array,
  onResult: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node)
  ])
}
