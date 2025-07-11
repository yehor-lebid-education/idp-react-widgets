import Row from "../../common/ui/Row";
import Input from "../../common/inputs/Input";
import { ITodoConfig, ITodoWidget } from "./todo.types";
import { useEffect, useState } from "react";

interface TodoConfigProps {
    widget: ITodoWidget;
    onChange: (config: ITodoConfig) => void;
}
export default function TodoConfig({ widget, onChange }: TodoConfigProps) {
    const { title } = widget.options;
    
    const [config, setConfig] = useState<ITodoConfig>({
        title: title || '',
    });

    useEffect(() => {
        setConfig({
            title: title || '',
        });
    }, [title]);


    function handleChange<K extends keyof ITodoConfig>(field: K, value: ITodoConfig[K]): void {
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
