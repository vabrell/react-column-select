import React, { FC, useState } from 'react'
import ColumnSelect from '../src'
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
}

export const options = [
  { value: 'pawn', label: 'Pawn' },
  { value: 'bishop', label: 'Bishop' },
  { value: 'knight', label: 'Knight' },
  { value: 'rook', label: 'Rook' },
  { value: 'queen', label: 'Queen' },
  { value: 'king', label: 'King' },
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
