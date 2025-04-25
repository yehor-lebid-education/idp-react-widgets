import { useEffect, useState } from "react";
import { getCurrentDateFormatted } from "../../../utils/date";
import { IClockOptions, IClockWidget } from "./clock.types";
import { CLOCK_REFRESH_INTERVAL } from "./clock.config";

interface ClockProps {
    id: IClockWidget['id'];
    options: IClockOptions;
}
export default function Clock({ options }: ClockProps) {
    const { dateFormat } = options;

    const [date, setDate] = useState<string>(() => getCurrentDateFormatted(dateFormat));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(getCurrentDateFormatted(dateFormat));
        }, CLOCK_REFRESH_INTERVAL);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="text-lg font-mono text-white tracking-widest">
            {date}
        </div>
    )
}
