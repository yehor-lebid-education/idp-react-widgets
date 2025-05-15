import { useEffect, useState } from "react";
import Input from "../../common/inputs/Input";
import Row from "../../common/ui/Row";
import { ILinkConfig, ILinkWidget } from "./link.types";

interface LinkConfigProps {
    widget: ILinkWidget;
    onChange: (config: ILinkConfig) => void;
}
export default function LinkConfig({ widget, onChange }: LinkConfigProps) {
    const { label, url } = widget.options;

    const [config, setConfig] = useState<ILinkConfig>({
        label: label || '',
        url: url || '',
    });

    useEffect(() => {
        setConfig({
            label: label || '',
            url: url || '',
        });
    }, [label, url]);


    function handleChange<K extends keyof ILinkConfig>(field: K, value: ILinkConfig[K]): void {
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
                minLength={1}
                maxLength={50}
                value={config.label}
                onChange={v => handleChange('label', v)}
            />
        </Row>
        <Row alignX="between">
            <Input
                type="url"
                name="url"
                label="Url"
                width={180}
                value={config.url}
                onChange={v => handleChange('url', v)}
            />
        </Row>
    </>)
}
