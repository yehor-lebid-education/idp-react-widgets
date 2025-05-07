import { useState } from "react";
import classname from "../../../utils/classname";
import Text from "../ui/Text";
import "./input.css";

const INPUT_STYLE_CLASS = "bg-black/20 backdrop-blur-sm text-white placeholder-white/30 px-3 py-1.5 rounded-lg focus:outline-none";

type InputProps<T extends number | string> = {
    value: T;
    name: string;
    onChange?: (v: T) => void;

    width?: 50 | 100 | 150;
    label?: string;
    readonly?: boolean;
    placeholder?: string;
}

type NumberInputProps = InputProps<number> & {
    type: 'number';
    min?: number;
    max?: number;
};

type TextInputProps = InputProps<string> & {
    type: 'text';
    minLength?: number;
    maxLength?: number;
}

export default function Input(props: NumberInputProps | TextInputProps) {
    if (props.type === 'number') {
        return <NumberInput {...props} />
    }

    if (props.type === 'text') {
        return <TextInput {...props} />
    }

    // @ts-expect-error (To make sure new types are handled)
    throw new Error(`Invalid Input type [${props.type}]`);
}

function NumberInput({ value, name, onChange, label, placeholder, readonly, ...props }: NumberInputProps) {
    const min = props.min || 0;
    const max = props.max || 1_000_000;
    const width = props.width || 50;

    const [inputValue, setInputValue] = useState<number>(Number(value));

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        let newValue = Number(e.target.value);

        console.log({ inputValue, newValue });

        if (newValue < min) newValue = min;
        if (newValue > max) newValue = max;

        setInputValue(newValue);
        typeof onChange === 'function' && onChange(newValue);
    }

    return (
        <>
            {label && (
                <label htmlFor={name}>
                    <Text size="sm">{`${label}:`}</Text>
                </label>
            )}
            <input
                id={name}
                type="number"
                name={name}
                value={inputValue}
                placeholder={placeholder}
                min={min}
                max={max}
                readOnly={readonly}
                onChange={handleChange}
                className={classname(INPUT_STYLE_CLASS)}
                style={{ width }}
            />
        </>
    );
}

function TextInput({ value, name, onChange, label, placeholder, readonly, ...props }: TextInputProps) {
    const minLength = props.minLength || 0;
    const maxLength = props.maxLength || 100;
    const width = props.width || 50;

    const [inputValue, setInputValue] = useState(value);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        let newValue = String(e.target.value);

        if (newValue.length < minLength) newValue = inputValue.slice(0, minLength);
        if (newValue.length > maxLength) newValue = newValue.slice(0, maxLength);

        setInputValue(newValue);
        typeof onChange === 'function' && onChange(newValue);
    }

    return (
        <>
            {label && (
                <label htmlFor={name}>
                    <Text size="sm">{`${label}:`}</Text>
                </label>
            )}
            <input
                id={name}
                type="text"
                name={name}
                value={inputValue}
                placeholder={placeholder}
                className={INPUT_STYLE_CLASS}
                minLength={minLength || 0}
                maxLength={maxLength || 100}
                readOnly={readonly}
                onChange={handleChange}
                style={{ width }}
            />
        </>
    );
}
