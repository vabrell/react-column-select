import React, { FC, useState, KeyboardEvent, ChangeEvent, useMemo } from 'react'
import {
  Grid,
  GridItemHeaderLeft,
  GridItemHeaderRight,
  GridItemCenter,
  GridItemColumnLeft,
  GridItemColumnRight,
  Input,
  Text,
} from './container.style'
import type {
  ColumnType,
  OptionType,
  OptionsType,
  Theme,
  ButtonText,
} from '../../types'
import Column from '../column/column'
import Option from '../option/option'
import Button from '../button/button'
import { UpIcon, DownIcon } from '../icons'

interface ContainerProps {
  /**
   * The header text of the left column.
   */
  leftHeader?: string
  /**
   * The header text of the right column.
   */
  rightHeader?: string
  /**
   * The currently selected option.
   */
  current: OptionType
  /**
   * The function to set the current option.
   */
  select: (option: OptionType) => void
  /**
   * The function to select an option.
   */
  add: () => void
  /**
   * The function to remove a selected option.
   */
  remove: () => void
  /**
   * The function to select all options.
   */
  addAll: () => void
  /**
   * The function to remove all selected options.
   */
  removeAll: () => void
  /**
   * The function to move selected option up.
   */
  moveUp: () => void
  /**
   * The function to move selected option down.
   */
  moveDown: () => void
  /**
   * The available select options.
   */
  options: OptionsType
  /**
   * The selected options.
   */
  selected: OptionsType
  /**
   * Truthy if the selected options >= max allowed options.
   */
  isMax: boolean
  /**
   * Disables the "add all" button if the available options > max allowed options.
   */
  disableAddAll: boolean
  /**
   * Disables the "remove" button if the selected option is pinned.
   */
  disableRemove: boolean
  /**
   * The function to go to next option.
   */
  onNext: (column: ColumnType) => void
  /**
   * The function to go to previous option.
   */
  onPrevious: (column: ColumnType) => void
  /**
   * Enable to make the columns searchable.
   */
  isSearchable?: boolean
  /**
   * The placeholder string for the search inputs.
   */
  searchPlaceholder?: string
  /**
   * Disable the "Add All" and "Remove All" buttons.
   * @default false
   */
  disableAllButtons?: boolean
  /**
   * Disable double clicking to add/remove a list option.
   */
  disableDoubleClick?: boolean
  /**
   * Disable keyboard navigation between list options.
   */
  disableKeyboard?: boolean
  /**
   * The react-column-select theme object.
   */
  theme: Theme
  /**
   * The react-column-select button text object.
   */
  buttonText: ButtonText
  /**
   * The react-column-select pinned icon.
   */
  pinnedIcon: React.FC
}

const Container: FC<ContainerProps> = ({
  leftHeader,
  rightHeader,
  current,
  select,
  add,
  addAll,
  remove,
  removeAll,
  moveUp,
  moveDown,
  options,
  selected,
  isMax,
  disableAddAll,
  disableRemove,
  onNext,
  onPrevious,
  isSearchable = false,
  searchPlaceholder,
  disableAllButtons,
  disableDoubleClick,
  disableKeyboard,
  theme,
  buttonText,
  pinnedIcon,
}) => {
  const [search, setSearch] = useState({ left: '', right: '' })

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch({ ...search, [e.target.name]: e.target.value })
  }

  const handleKeyPress = (
    e: KeyboardEvent<HTMLDivElement>,
    column: ColumnType
  ) => {
    const currentActive = document.activeElement

    if (e.key === 'ArrowDown') {
      onNext(column)
      ;(currentActive?.nextElementSibling as HTMLElement)?.focus()
    }
    if (e.key === 'ArrowUp') {
      onPrevious(column)
      ;(currentActive?.previousElementSibling as HTMLElement)?.focus()
    }
  }

  const filteredOptions = useMemo(
    () =>
      isSearchable
        ? options.filter((o: OptionType) =>
            o.label
              .toLocaleLowerCase()
              .includes(search.left.toLocaleLowerCase())
          )
        : options,
    [options, search.left]
  )

  const filteredSelected = useMemo(
    () =>
      isSearchable
        ? selected.filter((s: OptionType) =>
            s.label
              .toLocaleLowerCase()
              .includes(search.right.toLocaleLowerCase())
          )
        : selected,
    [selected, search.right]
  )

  const sortOptions = (a: OptionType, b: OptionType) => {
    if (a.label > b.label) return 1
    if (a.label < b.label) return 0
    return -1
  }

  return (
    <Grid>
      <GridItemColumnLeft
        theme={theme}
        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
          disableKeyboard ? null : handleKeyPress(e, 'options')
        }
      >
        <GridItemHeaderLeft theme={theme}>
          <Text>{leftHeader || 'Options'}</Text>
        </GridItemHeaderLeft>
        {isSearchable && (
          <Input
            id='left-search'
            name='left'
            placeholder={searchPlaceholder ?? 'Search ...'}
            value={search.left}
            onChange={handleOnChange}
            type='search'
            theme={theme}
          />
        )}
        <Column id='left-column' isSearchable={isSearchable}>
          {filteredOptions.sort(sortOptions).map((option) => (
            <Option
              key={`l-${option.value}`}
              theme={theme}
              label={option.label}
              isSelected={option.value === current?.value}
              onClick={() => select(option)}
              onDoubleClick={() => (disableDoubleClick ? null : add())}
              PinnedIcon={pinnedIcon}
            />
          ))}
        </Column>
      </GridItemColumnLeft>
      <GridItemCenter>
        <Button
          type='button'
          onClick={add}
          label={buttonText.add}
          isDisabled={!options.length || isMax}
          theme={theme}
        />
        {!disableAllButtons && (
          <Button
            type='button'
            label={buttonText.addAll}
            onClick={addAll}
            marginTop='0.5rem'
            isDisabled={!options.length || disableAddAll}
            theme={theme}
          />
        )}
        <Button
          type='button'
          centerIcon={<UpIcon />}
          onClick={moveUp}
          marginTop='1.5rem'
          theme={theme}
          label='Move Up'
        />
        <Button
          type='button'
          centerIcon={<DownIcon />}
          onClick={moveDown}
          marginTop='0.5rem'
          theme={theme}
          label='Move Down'
        />
        <Button
          type='button'
          label={buttonText.remove}
          onClick={remove}
          marginTop='1.5rem'
          isDisabled={disableRemove || !selected.length}
          theme={theme}
        />
        {!disableAllButtons && (
          <Button
            type='button'
            label={buttonText.removeAll}
            onClick={removeAll}
            marginTop='0.5rem'
            isDisabled={!selected.length}
            theme={theme}
          />
        )}
      </GridItemCenter>
      <GridItemColumnRight
        theme={theme}
        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
          disableKeyboard ? null : handleKeyPress(e, 'selected')
        }
      >
        <GridItemHeaderRight theme={theme}>
          <Text>{rightHeader || 'Selected'}</Text>
        </GridItemHeaderRight>
        {isSearchable && (
          <Input
            id='right-search'
            name='right'
            placeholder={searchPlaceholder ?? 'Search ...'}
            value={search.right}
            onChange={handleOnChange}
            type='search'
            theme={theme}
          />
        )}
        <Column id='right-column' isSearchable={isSearchable}>
          {filteredSelected.map((option) => (
            <Option
              key={`r-${option.value}`}
              theme={theme}
              label={option.label}
              isSelected={option.value === current?.value}
              onClick={() => select(option)}
              onDoubleClick={() => (disableDoubleClick ? null : remove())}
              isPinned={option.pinned}
              PinnedIcon={pinnedIcon}
            />
          ))}
        </Column>
      </GridItemColumnRight>
    </Grid>
  )
}

export default Container
