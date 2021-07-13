import { FC, ReactElement } from 'react';
import type { Theme } from '../../types';
interface ButtonProps {
    /**
     * If added, the button will show an icon before the button's label.
     * @type ReactElement
     */
    leftIcon?: ReactElement;
    /**
     * If added, the button will show an icon after the button's label.
     * @type ReactElement
     */
    rightIcon?: ReactElement;
    /**
     * If added, the button will show an icon instead of the button's label.
     * @type ReactElement
     */
    centerIcon?: ReactElement;
    /**
     * The text show in the button.
     */
    label: string;
    /**
     * The top margin spacing of the button.
     */
    marginTop?: string;
    /**
     * The html button type to use.
     * @default 'button'
     */
    type?: 'button' | 'reset' | 'submit';
    /**
     * Is the button disabled?.
     * @default false
     */
    isDisabled?: boolean;
    /**
     * The react-column-select theme object.
     */
    theme: Theme;
    /**
     * The function to be fired by the button onClick event.
     */
    onClick: () => void;
}
declare const Button: FC<ButtonProps>;
export default Button;
