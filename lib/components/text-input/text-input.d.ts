import React, { ChangeEventHandler, HTMLAttributes } from 'react';
import { ComponentSize } from '../../config/sizes';
export interface TextInputProps extends Omit<HTMLAttributes<HTMLInputElement>, 'size' | 'disabled' | 'onChange'> {
    icon?: React.ElementType;
    size?: ComponentSize;
    disabled?: boolean;
    error?: boolean;
    value?: string;
    width?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    readonly?: boolean;
    clearable?: boolean;
    [key: string]: any;
}
declare const _default: React.ForwardRefExoticComponent<Pick<TextInputProps, keyof TextInputProps> & React.RefAttributes<HTMLInputElement>>;
export default _default;
//# sourceMappingURL=text-input.d.ts.map