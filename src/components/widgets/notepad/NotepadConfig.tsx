import Row from "../../common/ui/Row";
import Input from "../../common/inputs/Input";
import { INotepadConfig, INotepadWidget } from "./notepad.types";
import { useEffect, useState } from "react";

interface NotepadConfigProps {
    widget: INotepadWidget;
    onChange: (config: INotepadConfig) => void;
}
export default function NotepadConfig({ widget, onChange }: NotepadConfigProps) {
    const { title } = widget.options;
    
    const [config, setConfig] = useState<INotepadConfig>({
        title: title || '',
    });

    useEffect(() => {
        setConfig({
            title: title || '',
        });
    }, [title]);


    function handleChange<K extends keyof INotepadConfig>(field: K, value: INotepadConfig[K]): void {
        const newConfig = { ...config, [field]: value };
        setConfig(newConfig);
        onChange(newConfig);
    }

    return (<>
        <Row alignX="between">
            <Input
                type="text"
                name="title"
                label="Title"
                width={180}
                minLength={1}
                maxLength={50}
                value={config.title}
                onChange={v => handleChange('title', v)}
            />
        </Row>
    </>);
}
