export declare type OptionType = {
    value: string | number;
    label: string;
};
export declare type OptionsType = Array<OptionType>;
export declare type Theme = {
    headerBgColor?: string;
    columnBorderColor?: string;
    textColor?: string;
    columnBgColor?: string;
    buttonBgColor?: string;
    buttonHoverBgColor?: string;
    buttonDisabledBgColor?: string;
    searchFocusBorderColor?: string;
    optionHoverBgColor?: string;
    optionSelectedBgColor?: string;
};
export declare type ColumnType = 'options' | 'selected';
export declare type ActionTypes = 'add' | 'add-all' | 'remove' | 'remove-all';
export declare type ActionMeta = {
    action: ActionTypes;
};
