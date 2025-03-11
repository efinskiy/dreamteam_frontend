export const callPhone = (tel: string) => {
    // https://github.com/Telegram-Mini-Apps/telegram-apps/issues/677
    window.open(`tel:${tel}`, '_blank');
};
