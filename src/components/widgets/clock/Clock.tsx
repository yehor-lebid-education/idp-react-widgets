import { useEffect, useState } from "react";
import { IClockOptions } from "./clock.options";
import { getCurrentDateFormatted } from "../../../utils/date";
import { IWidget } from "../widget.type";
import WidgetTile from "../../common/WidgetTile";


interface ClockProps {
    id: IWidget['id'];
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
            <div className="text-2xl font-mono text-white tracking-widest">
                {date}
            </div>
        </WidgetTile>
    )
}
