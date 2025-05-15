import { useEffect, useState } from "react";
import Input from "../../common/inputs/Input";
import Row from "../../common/ui/Row";
import { ICounterConfig, ICounterWidget } from "./counter.types";

interface CounterConfigProps {
    widget: ICounterWidget;
    onChange: (config: ICounterConfig) => void;
}
export default function CounterConfig({ widget, onChange }: CounterConfigProps) {
    const { label, total, step } = widget.options;

    const [config, setConfig] = useState<ICounterConfig>({
        label: label || '',
        total: total || 1,
        step: step || 0,
    });

    useEffect(() => {
        setConfig({
            label: label || '',
            total: total || 1,
            step: step || 0,
        })
    }, [label, total, step])

    function handleChange<K extends keyof ICounterConfig>(field: K, value: ICounterConfig[K]): void {
        const newConfig = { ...config, [field]: value };
        setConfig(newConfig);
        onChange(newConfig);
    }

    return (<>
        <Row alignX="between">
            <Input
                type="text"
                name="label"
                label="Label"
                width={180}
                minLength={0}
                maxLength={20}
                value={config.label}
                onChange={v => handleChange('label', v)}
            />
        </Row>
        <Row alignX="between">
            <Input
                type="number"
                name="step"
                label="Step"
                width={100}
                min={1}
                max={config.total}
                value={config.step}
                onChange={v => handleChange('step', v)}
            />
        </Row>
        <Row alignX="between">
            <Input
                type="number"
                name="total"
                label="Total"
                width={100}
                min={1}
                max={1_000_000}
                value={config.total}
                onChange={v => handleChange('total', v)}
            />
        </Row>
    </>)
}
