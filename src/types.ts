export type OptionType = {
  value: string | number
  label: string
  pinned: boolean
}

export type OptionsType = Array<OptionType>

export type Theme = {
  headerBgColor?: string
  columnBorderColor?: string
  textColor?: string
  columnBgColor?: string
  buttonBgColor?: string
  buttonHoverBgColor?: string
  buttonDisabledBgColor?: string
  searchFocusBorderColor?: string
  optionHoverBgColor?: string
  optionSelectedBgColor?: string
}

export type ColumnType = 'options' | 'selected'

export type ActionTypes =
  | 'add'
  | 'add-all'
  | 'remove'
  | 'remove-all'
  | 'move-up'
  | 'move-down'

export type ActionMeta = {
  action: ActionTypes
}

export type ButtonText = {
  add: string
  addAll: string
  remove: string
  removeAll: string
}
