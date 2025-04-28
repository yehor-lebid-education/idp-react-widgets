import { useEffect, useState } from "react";
import { getCurrentDateFormatted } from "../../../utils/date";
import { CLOCK_DEFAULT_OPTIONS, CLOCK_REFRESH_INTERVAL } from "./clock.config";

export default function ClockExample() {
    const { dateFormat } = CLOCK_DEFAULT_OPTIONS

    const [date, setDate] = useState<string>(getCurrentDateFormatted(dateFormat) || CLOCK_DEFAULT_OPTIONS.dateFormat);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(getCurrentDateFormatted(dateFormat));
        }, CLOCK_REFRESH_INTERVAL);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="text-lg text-center font-mono text-white tracking-widest">
            {date}
        </div>
    )
}
