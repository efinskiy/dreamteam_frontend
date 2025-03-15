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
