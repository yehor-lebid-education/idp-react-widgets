import classname from "../../../utils/classname";
import Text from "../ui/Text";
import "./input.css";

const INPUT_STYLE_CLASS = "bg-black/20 backdrop-blur-sm text-white placeholder-white/30 px-3 py-1.5 rounded-lg focus:outline-none";

type InputProps<T extends number | string> = {
    value: T;
    name: string;
    onChange?: (v: T) => void;

    width?: 50 | 100 | 150 | 180 | 200;
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

type UrlInputProps = InputProps<string> & {
    type: 'url';
}

export default function Input(props: NumberInputProps | TextInputProps | UrlInputProps) {
    if (props.type === 'number') {
        return <NumberInput {...props} />
    }

    if (props.type === 'text') {
        return <TextInput {...props} />
    }

    if (props.type === 'url') {
        return <UrlInput {...props} />
    }

    // @ts-expect-error (To make sure new types are handled)
    throw new Error(`Invalid Input type [${props.type}]`);
}

function NumberInput({ value, name, onChange, label, placeholder, readonly, ...props }: NumberInputProps) {
    const min = props.min || 0;
    const max = props.max || 1_000_000;
    const width = props.width || 50;

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        let newValue = Number(e.target.value);

        if (newValue < min) newValue = min;
        if (newValue > max) newValue = max;

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
                value={value}
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

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        let newValue = String(e.target.value);

        if (newValue.length < minLength) newValue = value.slice(0, minLength);
        if (newValue.length > maxLength) newValue = newValue.slice(0, maxLength);

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
                value={value}
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

function UrlInput({ value, name, onChange, label, placeholder, readonly, ...props }: UrlInputProps) {
    const width = props.width || 50;

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        let newValue = String(e.target.value);
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
                type="url"
                name={name}
                value={value}
                placeholder={placeholder}
                className={INPUT_STYLE_CLASS}
                readOnly={readonly}
                onChange={handleChange}
                style={{ width }}
            />
        </>
    );
}

interface SelectInputProps<T> {
    name: string;
    label: string;
    width?: number;

    value: T;
    onChange: (value: T) => void;
    options: { value: T, label: string }[];
}
export function SelectInput<T extends string | number>({
    width,
    label,
    name,
    value,
    options,
    onChange,
}: SelectInputProps<T>) {

    // const [selectValue, setSelectValue]

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        let newValue;
        if (typeof options[0].value === 'number') {
            newValue = Number(e.target.value);
        } else {
            newValue = String(e.target.value);
        }

        onChange(newValue as T);
    }
    
    return (<>
        {label && (
            <label htmlFor={name}>
                <Text size="sm">{`${label}:`}</Text>
            </label>
        )}
        <select
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            style={{width: width || 200}}
            className="bg-black/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm focus:outline-none appearance-none"
        >
            {options.map(({ value, label }) => (
                <option
                    key={value}
                    value={value}
                    className="bg-black text-white"
                >{label}</option>
            ))}
        </select>
    </>)
}