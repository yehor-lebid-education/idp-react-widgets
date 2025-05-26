import { useEffect, useState } from "react";
import { getCurrentDateFormatted } from "../../../utils/date";
import { IClockConfig, IClockWidget } from "./clock.types";
import { CLOCK_DEFAULT_OPTIONS, CLOCK_REFRESH_INTERVAL } from "./clock.config";
import WidgetContainer from "../../common/WidgetContainer";
import useWidgetOptions from "../../../hooks/useWidgetOptions";

interface ClockProps {
    id: IClockWidget['id'];
    previewMode?: boolean;
}

export default function Clock({ id, previewMode }: ClockProps) {
    if (previewMode) {
        return <ClockPreviewWidget />;
    }

    return <ClockWidget id={id} />;
}

function ClockWidget({ id }: { id: IClockWidget['id'] }) {
    const { widgetOptions } = useWidgetOptions<IClockConfig>(id);
    const { dateFormat } = widgetOptions || CLOCK_DEFAULT_OPTIONS;

    const [date, setDate] = useState<string>(() => getCurrentDateFormatted(dateFormat));

    useEffect(() => {
        setDate(getCurrentDateFormatted(dateFormat));

        const intervalId = setInterval(() => {
            setDate(getCurrentDateFormatted(dateFormat));
        }, CLOCK_REFRESH_INTERVAL);

        return () => clearInterval(intervalId);
    }, [dateFormat]);

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
    }, [dateFormat]);

    return (
        <WidgetContainer className="text-sm text-center font-mono text-white tracking-widest">
            {date}
        </WidgetContainer>
    )
}
