import Row from "../../common/ui/Row";
import Input from "../../common/inputs/Input";
import { IPictureConfig, IPictureWidget } from "./picture.types";
import { useEffect, useState } from "react";

interface PictureConfigProps {
    widget: IPictureWidget;
    onChange: (config: IPictureConfig) => void;
}
export default function PictureConfig({ widget, onChange }: PictureConfigProps) {
    const { url, title, width } = widget.options;

    const [config, setConfig] = useState<IPictureConfig>({
        url: url || '',
        title: title || '',
        width: width || 100,
    });

    useEffect(() => {
        setConfig({
            url: url || '',
            title: title || '',
            width: width || 0,
        });
    }, [url, title, width]);

    function handleChange<K extends keyof IPictureConfig>(field: K, value: IPictureConfig[K]): void {
        const newConfig = { ...config, [field]: value };
        setConfig(newConfig);
        onChange(newConfig);
    }

    return (<>
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
        <Row alignX="between">
            <Input
                type="text"
                name="title"
                label="Title"
                width={180}
                minLength={0}
                maxLength={50}
                value={config.title}
                onChange={v => handleChange('title', v)}
            />
        </Row>
        <Row alignX="between">
            <Input
                type="number"
                name="width"
                label="Width"
                width={100}
                min={0}
                max={10000}
                value={config.width}
                onChange={v => handleChange('width', v)}
            />
        </Row>
    </>);
}
