import dayjs from "dayjs";

export function getCurrentDateFormatted(dateFormat: string): string {
    return dayjs().format(dateFormat);
}
