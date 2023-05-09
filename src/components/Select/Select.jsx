/* eslint-disable react/jsx-handler-names */
import { useRef } from 'react'
import { useSelectState } from 'react-stately'
import {
  HiddenSelect,
  useSelect,
  DismissButton,
  usePopover,
  useListBox,
  useOption,
  useButton,
  Overlay
} from 'react-aria'
import PropTypes from 'prop-types'

import { Icon } from 'UI-Components-books'
import css from './Select.module.css'

/**
 * date: 05/08/2023
 * author:  Books&Books
 * description:  Componente Select custom, creado con el paquete React Aria.
 */

export const Select = (props) => {
  const { label, name } = props

  // Create state based on the incoming props
  const state = useSelectState({ label, name, ...props })

  // Get props for child elements from useSelect
  const ref = useRef(null)
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    props,
    state,
    ref
  )

  return (
    <div className={`${css['c-select']}`}>
      <div {...labelProps} className='u-sr-only'>
        {label}
      </div>
      <HiddenSelect state={state} triggerRef={ref} label={label} name={name} />

      <Button buttonRef={ref} {...triggerProps}>
        <span className={css['c-select__text']} {...valueProps}>
          {state.selectedItem ? state.selectedItem.rendered : 'Seleccionar'}
        </span>

        <span aria-hidden='true'>
          <Icon addClass={css['c-select__icon']}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='48'
              width='48'
              viewBox='0 0 48 48'
            >
              <path id='arrow_drop_down' d='m24 30-10-9.95h20Z' />
            </svg>
          </Icon>
        </span>
      </Button>

      {state.isOpen && (
        <Popover state={state} triggerRef={ref} placement='bottom start'>
          <ListBox {...menuProps} state={state} />
        </Popover>
      )}
    </div>
  )
}

/**
 * @link https://react-spectrum.adobe.com/react-aria/useSelect.html#popover
 */
function Popover (props) {
  const ref = useRef(null)
  const { popoverRef = ref, state, children } = props

  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef
    },
    state
  )

  return (
    <Overlay>
      <div {...underlayProps} style={{ position: 'fixed', inset: 0 }} />
      <div
        ref={popoverRef}
        className={css['c-popover']}
        style={{
          ...popoverProps.style
        }}
        {...popoverProps}
      >
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  )
}

/**
 *  @link https://react-spectrum.adobe.com/react-aria/useSelect.html#listbox
 */

function ListBox (props) {
  const ref = useRef(null)
  const { listBoxRef = ref, state } = props
  const { listBoxProps } = useListBox(props, state, listBoxRef)

  return (
    <ul ref={listBoxRef} className={css['c-list-box']} {...listBoxProps}>
      {[...state.collection].map((item) => (
        <Option key={item.key} item={item} state={state} />
      ))}
    </ul>
  )
}

/**
 * @link https://react-spectrum.adobe.com/react-aria/useSelect.html#listbox
 */
function Option ({ item, state }) {
  const ref = useRef(null)
  const { optionProps, isFocused, isDisabled } = useOption(
    { key: item.key },
    state,
    ref
  )

  return (
    <li
      ref={ref}
      className={`${css['c-option']} ${
        isFocused ? css['c-option--focus'] : ''
      } ${isDisabled ? css['c-option--disabled'] : ''}`}
      {...optionProps}
    >
      {item.rendered}
    </li>
  )
}

/**
 * @link https://react-spectrum.adobe.com/react-aria/useSelect.html#button
 */
function Button (props) {
  const ref = props.buttonRef
  const { buttonProps } = useButton(props, ref)

  return (
    <button ref={ref} className={css['c-select__button']} {...buttonProps}>
      {props.children}
    </button>
  )
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool
}

Popover.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  state: PropTypes.object
}

Option.propTypes = {
  item: PropTypes.object,
  state: PropTypes.object
}
