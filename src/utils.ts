import { IWorkTime } from '@/types/restaurant.ts';
import { IEventBooking } from '@/pages/EventsPage/EventsPage.tsx';
import { Dispatch, SetStateAction } from 'react';

export const callPhone = (tel: string) => {
    // https://github.com/Telegram-Mini-Apps/telegram-apps/issues/677
    window.open(`tel:${tel}`, '_blank');
};

export const getGuestsString = (num: string | number): string => {
    let parsedNum;

    if (typeof num === 'number') {
        parsedNum = num;
    } else {
        parsedNum = Number.parseInt(num);
    }

    if (isNaN(parsedNum)) {
        return 'Гости';
    }

    const n = parsedNum % 100;
    if (n >= 11 && n <= 14) {
        return `${num} гостей`;
    }
    const lastDigit = n % 10;
    switch (lastDigit) {
        case 1:
            return `${num} гость`;
        case 2:
        case 3:
        case 4:
            return `${num} гостя`;
        default:
            return `${num} гостей`;
    }
};

const MONTHS = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек',
];
const MONTHS_LONG = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
];

export const formatDate = (inputDate: string): string => {
    const today = new Date();
    const input = new Date(inputDate);

    // Убираем время, чтобы сравнивать только даты
    today.setHours(0, 0, 0, 0);
    input.setHours(0, 0, 0, 0);

    const day = input.getDate();
    const month = MONTHS[input.getMonth()];

    if (input.getTime() === today.getTime()) {
        return `Сегодня, ${day} ${month}`;
    } else if (input.getTime() === today.getTime() + 86400000) {
        // 86400000 миллисекунд в одном дне
        return `Завтра, ${day} ${month}`;
    } else {
        return `${day} ${month}`;
    }
};

export const formatDateCalendar = (inputDate: Date): string => {
    const month = MONTHS_LONG[inputDate.getMonth()];
    const year = inputDate.getFullYear();

    return `${month} ${year}`;
};

export const formatDateDT = (inputDate: Date): string => {
    const day = inputDate.getDate();
    const month = MONTHS[inputDate.getMonth()];

    return `${day} ${month}`;
};

export const formatDateShort = (inputDate: string): string => {
    const today = new Date();
    const input = new Date(inputDate);

    // Убираем время, чтобы сравнивать только даты
    today.setHours(0, 0, 0, 0);
    input.setHours(0, 0, 0, 0);

    const day = input.getDate();
    const month = MONTHS[input.getMonth()];

    return `${day} ${month}`;
};

export function formatWorkTime(worktime: IWorkTime[]): string[] {
    const result: string[] = [];
    let currentRange: IWorkTime[] = [];

    for (let i = 0; i < worktime.length; i++) {
        if (currentRange.length === 0) {
            currentRange.push(worktime[i]);
            continue;
        }

        const last = currentRange[currentRange.length - 1];
        const current = worktime[i];

        if (
            last.time_start === current.time_start &&
            last.time_end === current.time_end
        ) {
            currentRange.push(current);
        } else {
            addToResult(currentRange, result);
            currentRange = [current];
        }
    }

    if (currentRange.length > 0) {
        addToResult(currentRange, result);
    }

    return result;
}

function addToResult(range: IWorkTime[], result: string[]): void {
    if (range.length === 1) {
        result.push(
            `${range[0].weekday}: ${range[0].time_start} - ${range[0].time_end}`
        );
    } else {
        const first = range[0].weekday;
        const last = range[range.length - 1].weekday;
        result.push(
            `${first}-${last}: ${range[0].time_start} - ${range[0].time_end}`
        );
    }
}

export type IEventBookingContext = [
    IEventBooking,
    Dispatch<SetStateAction<IEventBooking>>,
];
