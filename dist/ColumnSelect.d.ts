import { FC } from 'react';
import type { Theme, OptionsType, ActionMeta } from './types';
interface ColumnSelectProps {
    /**
     * The array of available select options.
     */
    options: OptionsType;
    /**
     * The function called on change.
     */
    onChange: (values: OptionsType, actionMeta: ActionMeta) => void;
    /**
     * Set the initial selected values.
     */
    defaultValue?: OptionsType;
    /**
     * Set the maximum number of options that can be selected.
     */
    max?: number;
    /**
     * The header text of the left column.
     * @default 'Options'
     */
    leftHeader?: string;
    /**
     * The header text of the right column.
     * @default 'Selected'
     */
    rightHeader?: string;
    /**
     * Enable to make the columns searchable.
     * @default false
     */
    isSearchable?: boolean;
    /**
     * The placeholder string for the search inputs.
     * @default 'Search ...'
     */
    searchPlaceholder?: string;
    /**
     * Disable the "Add All" and "Remove All" buttons.
     * @default false
     */
    disableAllButtons?: boolean;
    /**
     * Disable double clicking to add/remove a list option.
     * @default false
     */
    disableDoubleClick?: boolean;
    /**
     * Disable keyboard navigation on the list of options.
     * @default false
     */
    disableKeyboard?: boolean;
    /**
     * The react-column-select theme object.
     */
    theme?: Theme;
}
declare const ColumnSelect: FC<ColumnSelectProps>;
export default ColumnSelect;
