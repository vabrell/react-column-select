import React, { FC } from 'react';
import type { ColumnType, OptionType, OptionsType, Theme, ButtonText } from '../../types';
interface ContainerProps {
    /**
     * The header text of the left column.
     */
    leftHeader?: string;
    /**
     * The header text of the right column.
     */
    rightHeader?: string;
    /**
     * The currently selected option.
     */
    current: OptionType;
    /**
     * The function to set the current option.
     */
    select: (option: OptionType) => void;
    /**
     * The function to select an option.
     */
    add: () => void;
    /**
     * The function to remove a selected option.
     */
    remove: () => void;
    /**
     * The function to select all options.
     */
    addAll: () => void;
    /**
     * The function to remove all selected options.
     */
    removeAll: () => void;
    /**
     * The function to move selected option up.
     */
    moveUp: () => void;
    /**
     * The function to move selected option down.
     */
    moveDown: () => void;
    /**
     * The available select options.
     */
    options: OptionsType;
    /**
     * The selected options.
     */
    selected: OptionsType;
    /**
     * Truthy if the selected options >= max allowed options.
     */
    isMax: boolean;
    /**
     * Disables the "add all" button if the available options > max allowed options.
     */
    disableAddAll: boolean;
    /**
     * Disables the "remove" button if the selected option is pinned.
     */
    disableRemove: boolean;
    /**
     * The function to go to next option.
     */
    onNext: (column: ColumnType) => void;
    /**
     * The function to go to previous option.
     */
    onPrevious: (column: ColumnType) => void;
    /**
     * Enable to make the columns searchable.
     */
    isSearchable?: boolean;
    /**
     * The placeholder string for the search inputs.
     */
    searchPlaceholder?: string;
    /**
     * Disable the "Add All" and "Remove All" buttons.
     * @default false
     */
    disableAllButtons?: boolean;
    /**
     * Disable double clicking to add/remove a list option.
     */
    disableDoubleClick?: boolean;
    /**
     * Disable keyboard navigation between list options.
     */
    disableKeyboard?: boolean;
    /**
     * The react-column-select theme object.
     */
    theme: Theme;
    /**
     * The react-column-select button text object.
     */
    buttonText: ButtonText;
    /**
     * The react-column-select pinned icon.
     */
    pinnedIcon: React.FC;
}
declare const Container: FC<ContainerProps>;
export default Container;
