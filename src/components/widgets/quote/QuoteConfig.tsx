import { useEffect, useState } from "react";
import Input, { SelectInput } from "../../common/inputs/Input";
import Row from "../../common/ui/Row";
import { IQuoteConfig, IQuoteWidget } from "./quote.types";

interface QuoteConfigProps {
    widget: IQuoteWidget;
    onChange: (config: IQuoteConfig) => void;
}
export default function QuoteConfig({ widget, onChange }: QuoteConfigProps) {
    const { refreshDuration } = widget.options;

    const [config, setConfig] = useState<IQuoteConfig>({
        refreshDuration: refreshDuration || 60 * 1000,
    });

    useEffect(() => {
        setConfig({
            refreshDuration: refreshDuration || 60 * 1000,
        })
    }, [refreshDuration])

    const selectOptions = [
        { label: 'Second', value: 1000 },
        { label: '5 Seconds', value: 5 * 1000 },
        { label: '30 Seconds', value: 30 * 1000 },
        { label: 'Minute', value: 60 * 1000 },
        { label: '5 Minutes', value: 5 * 60 * 1000 },
        { label: '10 Minutes', value: 10 * 60 * 1000 },
        { label: '15 Minutes', value: 15 * 60 * 1000 },
        { label: '30 Minutes', value: 30 * 60 * 1000 },
        { label: 'Hour', value: 60 * 60 * 1000 },
    ];

    function handleChange<K extends keyof IQuoteConfig>(field: K, value: IQuoteConfig[K]): void {
        const newConfig = { ...config, [field]: value };
        setConfig(newConfig);
        onChange(newConfig);
    }

    return (<>
        <Row alignX="between">
            <SelectInput
                name="refresh"
                label="Refresh Quote Every"
                width={100}
                options={selectOptions}
                value={config.refreshDuration}
                onChange={v => handleChange('refreshDuration', v)}
            />
        </Row>
    </>)
}
