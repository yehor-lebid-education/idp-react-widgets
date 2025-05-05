import { useEffect, useRef, useState } from "react";
import { getCurrentDateFormatted } from "../../../utils/date";
import { CLOCK_DEFAULT_OPTIONS, CLOCK_REFRESH_INTERVAL } from "./clock.config";

export default function ClockExample() {
    const { dateFormat } = CLOCK_DEFAULT_OPTIONS

    const { current } = useRef<{ intervalId: undefined | number }>({ intervalId: undefined });
    const [date, setDate] = useState<string>(getCurrentDateFormatted(dateFormat) || CLOCK_DEFAULT_OPTIONS.dateFormat);

    useEffect(() => {
        if (current.intervalId) {
            clearInterval(current.intervalId);
        }

        current.intervalId = setInterval(() => {
            setDate(getCurrentDateFormatted(dateFormat));
        }, CLOCK_REFRESH_INTERVAL);

        return () => clearInterval(current.intervalId);
    }, [current, dateFormat]);

    return (
        <div className="text-lg text-center font-mono text-white tracking-widest">
            {date}
        </div>
    )
}
