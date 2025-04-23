import { useEffect, useState } from "react";
import WidgetTile from "../../common/WidgetTile";
import { getCurrentDateFormatted } from "../../../utils/date";
import { IClockOptions, IClockWidget } from "./clock.model";

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
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <WidgetTile>
            <div className="text-lg font-mono text-white tracking-widest">
                {date}
            </div>
        </WidgetTile>
    )
}
