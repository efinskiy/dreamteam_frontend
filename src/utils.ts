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
