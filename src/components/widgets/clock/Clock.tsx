import { useEffect, useState } from "react";
import { getCurrentDateFormatted } from "../../../utils/date";
import { IClockOptions, IClockWidget } from "./clock.types";
import { CLOCK_DEFAULT_OPTIONS, CLOCK_REFRESH_INTERVAL } from "./clock.config";
import WidgetContainer from "../../common/WidgetContainer";

interface ClockProps {
    id: IClockWidget['id'];
    options: IClockOptions;
}

export default function Clock({ id, options }: ClockProps) {
    if (options.mode === 'preview') {
        return <ClockPreviewWidget />;
    }

    return <ClockWidget id={id} options={options} />;
}

function ClockWidget({ options }: ClockProps) {
    const { dateFormat } = options;
    const [date, setDate] = useState<string>(() => getCurrentDateFormatted(dateFormat || CLOCK_DEFAULT_OPTIONS.dateFormat));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(getCurrentDateFormatted(dateFormat));
        }, CLOCK_REFRESH_INTERVAL);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <WidgetContainer className="text-lg text-center font-mono text-white tracking-widest">
            {date}
        </WidgetContainer>
    )
}

function ClockPreviewWidget() {
    const { dateFormat } = CLOCK_DEFAULT_OPTIONS;
    const [date, setDate] = useState<string>(() => getCurrentDateFormatted(CLOCK_DEFAULT_OPTIONS.dateFormat));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(getCurrentDateFormatted(dateFormat));
        }, CLOCK_REFRESH_INTERVAL);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <WidgetContainer className="text-sm text-center font-mono text-white tracking-widest">
            {date}
        </WidgetContainer>
    )
}
