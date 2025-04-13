import { IConfirmationType } from '@/components/ConfirmationSelect/ConfirmationSelect.types.ts';
import { CalendarIcon } from '@/components/Icons/CalendarIcon.tsx';
import { classNames } from '@telegram-apps/sdk-react';
import { TextInput } from '@/components/TextInput/TextInput.tsx';
import { ConfirmationSelect } from '@/components/ConfirmationSelect/ConfirmationSelect.tsx';
import { UniversalButton } from '@/components/Buttons/UniversalButton/UniversalButton.tsx';
import css from './EventBookingOutlet.module.css';
import { useOutletContext } from 'react-router-dom';
import { formatDateDT, IEventBookingContext } from '@/utils.ts';
import { useState } from 'react';

const confirmationList: IConfirmationType[] = [
    {
        id: 'telegram',
        text: 'В Telegram',
    },
    {
        id: 'phone',
        text: 'По телефону',
    },
    {
        id: 'none',
        text: 'Без подтверждения',
    },
];

export const EventBookingOutlet = () => {
    const [bookingInfo] = useOutletContext<IEventBookingContext>();
    const [confirmation, setConfirmation] = useState<IConfirmationType>({
        id: 'telegram',
        text: 'В Telegram',
    });
    return (
        <div>
            <div className={css.contentContainer__top}>
                <div className={css.contentItem}>
                    <h2 className={css.contentItem__title}>Детали заказа</h2>
                    <div className={css.dateInfoContainer}>
                        <div className={css.cubicIconContainer}>
                            <CalendarIcon size={22} />
                        </div>
                        <div className={css.dateInfoContainer_dates}>
                            <span className={css.dateInfoContainer_dates__date}>
                                {bookingInfo.date
                                    ? formatDateDT(bookingInfo.date)
                                    : '...'}
                            </span>
                            <span
                                className={css.dateInfoContainer_dates__times}
                            >
                                12:00 - 13:30
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.contentContainer}>
                <div className={css.contentItem}>
                    <h2 className={css.contentItem__title}>Услуги</h2>
                    <div className={css.goodsItems}>
                        <div className={css.itemContainer}>
                            <div className={css.goodsItems_item}>
                                <span className={css.goodsItems_item__title}>
                                    Винный ужин с виноделом Мунуэлем Морага
                                    Гутьерресом
                                </span>
                                <span className={css.goodsItems_item__price}>
                                    1500 ₽
                                </span>
                            </div>
                            <div className={css.roundedText}>
                                <span>✓ 100% предоплата</span>
                            </div>
                        </div>
                    </div>
                    <div className={css.hr} />
                    <div className={classNames(css.goodsItems_item, css.aic)}>
                        <span className={css.goodsItems_item__total}>
                            Предоплата
                        </span>
                        <span className={css.goodsItems_item__price}>
                            {bookingInfo.guestCount
                                ? bookingInfo.guestCount * 1500 + ' ₽'
                                : '...'}
                        </span>
                    </div>
                </div>
            </div>
            <div className={css.contentContainer}>
                <div className={css.contentItem}>
                    <h2 className={css.contentItem__title}>Контакты</h2>
                    <div className={css.form}>
                        <TextInput
                            value={''}
                            onChange={() => null}
                            placeholder={'Имя'}
                        ></TextInput>
                        <TextInput
                            value={''}
                            onChange={() => null}
                            placeholder={'Номер телефона'}
                        ></TextInput>
                        <TextInput
                            value={''}
                            onChange={() => null}
                            placeholder={'Email'}
                        ></TextInput>
                        <TextInput
                            value={''}
                            onChange={() => null}
                            placeholder={'Комментарий'}
                        ></TextInput>
                    </div>
                    <ConfirmationSelect
                        options={confirmationList}
                        currentValue={confirmation}
                        onChange={setConfirmation}
                    />
                </div>
            </div>
            <div className={css.absoluteBottom}>
                <div className={css.bottomWrapper}>
                    <UniversalButton
                        width={'full'}
                        title={'Оплатить'}
                        theme={'red'}
                        action={() => alert('Тут происходит оплата.')}
                    />
                </div>
            </div>
        </div>
    );
};
