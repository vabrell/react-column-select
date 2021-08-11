import React, { FC, useState } from 'react'
import ColumnSelect from '../src'
import { LockedIcon } from '../src/components/icons'
import type { OptionsType, Theme, ButtonText } from '../src/types'
import './column_select.css'

export interface ColumnSelectProps {
  theme?: Theme
  defaultValue?: OptionsType
  isSearchable?: boolean
  disableAllButtons?: boolean
  disableDoubleClick?: boolean
  disableKeyboard?: boolean
  max?: number
  buttonText?: ButtonText
  pinnedIcon?: React.FC
}

export const options = [
  { value: 'pawn', label: 'Pawn', pinned: false },
  { value: 'bishop', label: 'Bishop', pinned: false },
  { value: 'knight', label: 'Knight', pinned: false },
  { value: 'rook', label: 'Rook', pinned: false },
  { value: 'queen', label: 'Queen', pinned: false },
  { value: 'king', label: 'King', pinned: true },
]

const ColumnSelectExample: FC<ColumnSelectProps> = ({
  theme,
  defaultValue,
  max,
  isSearchable,
  disableAllButtons,
  disableDoubleClick,
  disableKeyboard,
  buttonText,
}) => {
  const [selected, setSelected] = useState<OptionsType>([])

  return (
    <article>
      <section>
        <h2>Column Select</h2>
        <ColumnSelect
          options={options}
          defaultValue={defaultValue}
          onChange={(values) => setSelected(values)}
          leftHeader='Available Pieces'
          rightHeader='Selected Pieces'
          theme={theme}
          max={max}
          isSearchable={isSearchable}
          disableAllButtons={disableAllButtons}
          disableDoubleClick={disableDoubleClick}
          disableKeyboard={disableKeyboard}
          buttonText={buttonText}
        />
      </section>
    </article>
  )
}

export default ColumnSelectExample
