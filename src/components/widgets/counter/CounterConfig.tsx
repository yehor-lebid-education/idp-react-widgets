import { COUNTER_WIDGET_CONFIG } from "./counter.config";
import { ICounterWidget } from "./counter.types";

interface CounterConfigProps {
    widget: ICounterWidget
}
export function CounterConfig({ widget }: CounterConfigProps) {
    const settings = COUNTER_WIDGET_CONFIG.map(config => {
        
    });

    return (
        <div>

        </div>
    )
}
