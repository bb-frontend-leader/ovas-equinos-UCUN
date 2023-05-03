import { useContext, Children, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { PlanGroupContext, Select } from '@components'

export const PlanSelect = ({ id, children, placeholder, label }) => {
  const [selected, setSeleted] = useState(null)
  const { validation, handleSectionChange, load } = useContext(PlanGroupContext)

  const isEnable = validation(id)

  const onSelectionChange = (key) => {
    const selectedChild = Children.toArray(children).find(
      (child) => child.props['data-key'] === key
    )
    const selectedText = selectedChild?.props?.children

    handleSectionChange({ id, key, value: selectedText })
    setSeleted(key)
  }

  useEffect(() => {
    if (load.length === 0) return

    setSeleted((prev) => {
      return load.find(value => value.id === id)?.key || prev
    })
  }, [load])

  return (
    <Select
      id={id}
      label={label}
      data-id={id}
      placeholder={placeholder}
      isDisabled={!isEnable}
      selectedKey={selected}
      onSelectionChange={onSelectionChange}
    >
      {children}
    </Select>
  )
}

PlanSelect.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  addClass: PropTypes.string
}
