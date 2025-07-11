import Row from "../../common/ui/Row";
import { IClockConfig, IClockWidget } from './clock.types';
import { DATE_FORMATS } from "../../../utils/date";
import { SelectInput } from "../../common/inputs/Input";
import { useEffect, useState } from "react";

interface ClockConfigProps {
    widget: IClockWidget;
    onChange: (config: IClockConfig) => void;
}
export default function ClockConfig({ widget, onChange }: ClockConfigProps) {
    const { dateFormat } = widget.options;

    const [config, setConfig] = useState<IClockConfig>({
        dateFormat: dateFormat || DATE_FORMATS[0].dateTimeFormat,
    });

    useEffect(() => {
        setConfig({ dateFormat });
    }, [dateFormat]);

    const selectOptions = DATE_FORMATS.map(({ dateTimeFormat, example }) => ({
        value: dateTimeFormat,
        label: example,
    }));

    function handleChange<K extends keyof IClockConfig>(field: K, value: IClockConfig[K]): void {
        onChange({ ...config, [field]: value });
    }

    return (<>
        <Row alignX="between">
            <SelectInput
                name="dateFormat"
                label="Date Format"
                options={selectOptions}
                value={config.dateFormat}
                onChange={v => handleChange('dateFormat', v)}
            />
        </Row>
    </>)
}
