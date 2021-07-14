import { FC } from 'react';
import { OptionType, Theme } from '../../types';
interface OptionProps {
    /**
     * The label of the option.
     */
    label: OptionType['label'];
    /**
     * Whether or not the option is currently selected.
     * @type boolean
     */
    isSelected: boolean;
    /**
     * The function fired by the onClick event.
     */
    onClick: () => void;
    /**
     * The function fired by the onDoubleClick event.
     */
    onDoubleClick: () => void;
    /**
     * The react-column-select theme object.
     */
    theme: Theme;
}
declare const Option: FC<OptionProps>;
export default Option;
