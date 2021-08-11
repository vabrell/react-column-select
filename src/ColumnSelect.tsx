import React, { FC, useEffect, useMemo, useState } from 'react'
import Container from './components/container/container'
import type {
  OptionType,
  Theme,
  ColumnType,
  OptionsType,
  ActionMeta,
  ActionTypes,
  ButtonText,
} from './types'
import { LockedIcon } from './components/icons'

interface ColumnSelectProps {
  /**
   * The array of available select options.
   */
  options: OptionsType
  /**
   * The function called on change.
   */
  onChange: (values: OptionsType, actionMeta: ActionMeta) => void
  /**
   * Set the initial selected values.
   */
  defaultValue?: OptionsType
  /**
   * Set the maximum number of options that can be selected.
   */
  max?: number
  /**
   * The header text of the left column.
   * @default 'Options'
   */
  leftHeader?: string
  /**
   * The header text of the right column.
   * @default 'Selected'
   */
  rightHeader?: string
  /**
   * Enable to make the columns searchable.
   * @default false
   */
  isSearchable?: boolean
  /**
   * The placeholder string for the search inputs.
   * @default 'Search ...'
   */
  searchPlaceholder?: string
  /**
   * Disable the "Add All" and "Remove All" buttons.
   * @default false
   */
  disableAllButtons?: boolean
  /**
   * Disable double clicking to add/remove a list option.
   * @default false
   */
  disableDoubleClick?: boolean
  /**
   * Disable keyboard navigation on the list of options.
   * @default false
   */
  disableKeyboard?: boolean
  /**
   * The react-column-select theme object.
   */
  theme?: Theme
  /**
   * The react-column-select button text.
   */
  buttonText?: ButtonText
  /**
   * The react-column-select pinned icon.
   */
  pinnedIcon?: React.FC
}

const ColumnSelect: FC<ColumnSelectProps> = ({
  options,
  onChange,
  defaultValue = [],
  max,
  leftHeader,
  rightHeader,
  isSearchable,
  searchPlaceholder,
  disableAllButtons,
  disableDoubleClick,
  disableKeyboard,
  theme,
  buttonText,
  pinnedIcon,
}) => {
  const [selectOptions, setSelectOptions] = useState<OptionsType>(
    options.filter((o) => !defaultValue.find((d) => d.value === o.value))
  )
  const [current, setCurrent] = useState<OptionType>(options[0])
  const [selectedOptions, setSelectedOptions] =
    useState<OptionsType>(defaultValue)
  const [currentAction, setCurrentAction] = useState<ActionTypes>()
  const [disableRemove, setDisableRemove] = useState<boolean>(false)

  const isMax = useMemo(
    () => (max ? selectedOptions.length >= max : false),
    [selectedOptions]
  )

  const disableAddAll = useMemo(
    () => (max ? selectOptions.length > max : false),
    [max]
  )

  const pinnedOptions = options.filter((option) => option.pinned)
  pinnedOptions.forEach((option) => {
    if (!selectedOptions.find((o) => o.value === option.value)) {
      setSelectOptions(selectOptions.filter((o) => o.value !== option.value))
      setSelectedOptions([...selectedOptions, option])
    }
  })

  useEffect(() => {
    if (currentAction) {
      onChange(selectedOptions, { action: currentAction })
    }
  }, [selectedOptions])

  const updateCurrent = (currentSelected: OptionType) => {
    if (currentSelected.pinned) {
      setDisableRemove(true)
    } else {
      setDisableRemove(false)
    }

    setCurrent(currentSelected)
  }

  const add = () => {
    if (selectedOptions.find((c) => c.value === current.value) || isMax) return
    setSelectOptions(selectOptions.filter((o) => o.value !== current.value))
    setSelectedOptions([...selectedOptions, current])

    setCurrentAction('add')
  }

  const addAll = () => {
    if (!selectOptions.length) return
    setSelectedOptions([...selectedOptions, ...selectOptions])
    setCurrent(selectOptions[0])
    setSelectOptions([])

    setCurrentAction('add-all')
  }

  const remove = () => {
    if (current.pinned) return
    if (selectOptions.find((c) => c.value === current.value)) return
    setSelectedOptions(selectedOptions.filter((o) => o.value !== current.value))
    setSelectOptions([...selectOptions, current])

    setCurrentAction('remove')
  }

  const removeAll = () => {
    if (!selectedOptions.length) return
    setSelectOptions([
      ...selectOptions,
      ...selectedOptions.filter((option) => !option.pinned),
    ])
    setCurrent(selectedOptions[0])
    setSelectedOptions(pinnedOptions)

    setCurrentAction('remove-all')
  }

  const moveUp = () => {
    if (!selectOptions.includes(current)) {
      const options = [...selectedOptions]
      const oldIndex = options.findIndex((opt) => opt.value === current.value)
      if (oldIndex === 0) return

      const prevOption = options[oldIndex - 1]
      options[oldIndex - 1] = current
      options[oldIndex] = prevOption

      setSelectedOptions(options)

      setCurrentAction('move-up')
    }
  }

  const moveDown = () => {
    if (!selectOptions.includes(current)) {
      const options = [...selectedOptions]
      const oldIndex = options.findIndex((opt) => opt.value === current.value)
      if (oldIndex === selectedOptions.length - 1) return

      const prevOption = options[oldIndex + 1]
      options[oldIndex + 1] = current
      options[oldIndex] = prevOption

      setSelectedOptions(options)

      setCurrentAction('move-down')
    }
  }

  const handleNext = (column: ColumnType) => {
    const isOptionsCol = column === 'options'
    const options = isOptionsCol ? selectOptions : selectedOptions

    const currentIndex = options.findIndex((o) => o.value === current.value)

    if (currentIndex !== options.length - 1) {
      setCurrent(options[currentIndex + 1])
    }
  }

  const handlePrevious = (column: ColumnType) => {
    const isOptionsCol = column === 'options'
    const options = isOptionsCol ? selectOptions : selectedOptions

    const currentIndex = options.findIndex((o) => o.value === current.value)
    if (currentIndex !== 0) {
      setCurrent(options[currentIndex - 1])
    }
  }

  const customTheme = Object.assign(
    {
      headerBgColor: '#FFFFFF',
      columnBorderColor: '#CFA4FF',
      textColor: '#000000',
      columnBgColor: '#CBD5E0',
      buttonBgColor: '#CBD5E0',
      buttonHoverBgColor: '#CBD5E098',
      searchFocusBorderColor: '#805Ad5',
      optionHoverBgColor: '#F2F2F2',
      optionSelectedBgColor: '#DDDCDC',
    },
    theme
  )

  const customButtonText = Object.assign(
    {
      add: 'Add',
      addAll: 'Add all',
      remove: 'Remove',
      removeAll: 'Remove all',
    },
    buttonText
  )

  const customPinnedIcon = pinnedIcon ?? LockedIcon

  return (
    <Container
      leftHeader={leftHeader}
      rightHeader={rightHeader}
      current={current}
      select={(option: OptionType) => updateCurrent(option)}
      add={add}
      addAll={addAll}
      remove={remove}
      removeAll={removeAll}
      moveUp={moveUp}
      moveDown={moveDown}
      options={selectOptions}
      selected={selectedOptions}
      isMax={isMax}
      disableAddAll={disableAddAll}
      disableRemove={disableRemove}
      onNext={handleNext}
      onPrevious={handlePrevious}
      isSearchable={isSearchable}
      searchPlaceholder={searchPlaceholder}
      disableAllButtons={disableAllButtons}
      disableDoubleClick={disableDoubleClick}
      disableKeyboard={disableKeyboard}
      theme={customTheme}
      buttonText={customButtonText}
      pinnedIcon={customPinnedIcon}
    />
  )
}

export default ColumnSelect
