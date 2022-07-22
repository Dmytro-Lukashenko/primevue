import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface InputSwitchProps {
    /**
     * Specifies whether a inputswitch should be checked or not.
     */
    modelValue?: boolean | string | undefined;
    /**
     * Value in checked state.
     */
    trueValue?: any;
    /**
     * Value in unchecked state.
     */
    falseValue?: any;
    /**
     * 	Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Style class of the input field.
     */
    inputClass?: any | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: any | undefined;
    /**
     * 
     */
    inputProps?: object | undefined;
}

export interface InputSwitchSlots {
}

export declare type InputSwitchEmits = {
    /**
     * Emitted when the value changes.
     * @param {boolean} value - New value.
     */
    'update:modelValue': (value: boolean) => void;
    /**
     * Callback to invoke on click.
     * @param {Event} event - Browser event.
     */
    'click': (event: Event) => void;
    /**
     * Callback to invoke on value change.
     * @param {Event} event - Browser event.
     */
    'change': (event: Event) => void;
    /**
     * Callback to invoke on value change.
     * @param {boolean} value - New value.
     */
    'input': (value: boolean) => void;
}

declare class InputSwitch extends ClassComponent<InputSwitchProps, InputSwitchSlots, InputSwitchEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        InputSwitch: GlobalComponentConstructor<InputSwitch>
    }
}

/**
 *
 * InputSwitch is used to select a boolean value.
 *
 * Demos:
 *
 * - [InputSwitch](https://www.primefaces.org/primevue/showcase/#/inputswitch)
 *
 */
export default InputSwitch;
