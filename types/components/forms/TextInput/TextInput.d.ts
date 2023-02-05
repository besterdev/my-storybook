import { ComponentProps } from 'react';
export interface TextInputProps extends Omit<ComponentProps<'input'>, 'ref' | 'color'> {
    label?: string;
    error?: string;
}
export declare const TextInput: import("react").ForwardRefExoticComponent<TextInputProps & import("react").RefAttributes<HTMLInputElement>>;
