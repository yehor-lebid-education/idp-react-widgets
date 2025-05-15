import dayjs from "dayjs";

export function getCurrentDateFormatted(dateFormat: string): string {
    return dayjs().format(dateFormat);
}

export const DATE_FORMATS = [
    // Date only
    { dateTimeFormat: 'YYYY-MM-DD', example: '2025-05-14' },
    { dateTimeFormat: 'DD/MM/YYYY', example: '14/05/2025' },
    { dateTimeFormat: 'MM/DD/YYYY', example: '05/14/2025' },
    { dateTimeFormat: 'DD.MM.YYYY', example: '14.05.2025' },
    { dateTimeFormat: 'MMMM D, YYYY', example: 'May 14, 2025' },
    { dateTimeFormat: 'D MMM YYYY', example: '14 May 2025' },

    // Time only
    { dateTimeFormat: 'HH:mm', example: '13:45' },
    { dateTimeFormat: 'hh:mm A', example: '01:45 PM' },
    { dateTimeFormat: 'HH:mm:ss', example: '13:45:30' },
    { dateTimeFormat: 'hh:mm:ss A', example: '01:45:30 PM' },

    // Date + Time (24-hour)
    { dateTimeFormat: 'YYYY-MM-DD HH:mm', example: '2025-05-14 13:45' },
    { dateTimeFormat: 'YYYY-MM-DD HH:mm:ss', example: '2025-05-14 13:45:30' },
    { dateTimeFormat: 'DD/MM/YYYY HH:mm', example: '14/05/2025 13:45' },
    { dateTimeFormat: 'DD.MM.YYYY HH:mm:ss', example: '14.05.2025 13:45:30' },

    // Date + Time (12-hour)
    { dateTimeFormat: 'YYYY-MM-DD hh:mm A', example: '2025-05-14 01:45 PM' },
    { dateTimeFormat: 'MMMM D, YYYY hh:mm:ss A', example: 'May 14, 2025 01:45:30 PM' },
] as const;