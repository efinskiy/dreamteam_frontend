import { Page } from '@/components/Page.tsx';
import css from './EventBookingPage.module.css';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.tsx';
import { BackIcon } from '@/components/Icons/BackIcon.tsx';
import { useNavigate } from 'react-router-dom';
import { CalendarIcon } from '@/components/Icons/CalendarIcon.tsx';
import { classNames } from '@telegram-apps/sdk-react';
import { useAtom } from 'jotai';
import { guestCountAtom, selectedEventAtom } from '@/atoms/eventBookingAtom.ts';
import { TextInput } from '@/components/TextInput/TextInput.tsx';
import { IConfirmationType } from '@/components/ConfirmationSelect/ConfirmationSelect.types.ts';
import { useState } from 'react';
import { ConfirmationSelect } from '@/components/ConfirmationSelect/ConfirmationSelect.tsx';
import { UniversalButton } from '@/components/Buttons/UniversalButton/UniversalButton.tsx';

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

export const EventBookingPage = () => {
    const navigate = useNavigate();
    const [currentEvent] = useAtom(selectedEventAtom);
    const [guestCount] = useAtom(guestCountAtom);

    const [confirmation, setConfirmation] = useState<IConfirmationType>({
        id: 'telegram',
        text: 'В Telegram',
    });

    return (
        <Page back={true}>
            <div className={css.page}>
                <div className={css.contentContainer__top}>
                    <div className={css.header}>
                        <RoundedButton
                            bgColor={'var(--secondary-background)'}
                            icon={<BackIcon color={'var(--dark-grey)'} />}
                            action={() => navigate(-1)}
                        />
                        <span className={css.header_title}>Мероприятия</span>
                        <div className={css.header_spacer} />
                    </div>
                    <div className={css.contentItem}>
                        <h2 className={css.contentItem__title}>
                            Детали заказа
                        </h2>
                        <div className={css.dateInfoContainer}>
                            <div className={css.cubicIconContainer}>
                                <CalendarIcon size={22} />
                            </div>
                            <div className={css.dateInfoContainer_dates}>
                                <span
                                    className={
                                        css.dateInfoContainer_dates__date
                                    }
                                >
                                    13 фев
                                </span>
                                <span
                                    className={
                                        css.dateInfoContainer_dates__times
                                    }
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
                                    <span
                                        className={css.goodsItems_item__title}
                                    >
                                        {currentEvent?.title}
                                    </span>
                                    <span
                                        className={css.goodsItems_item__price}
                                    >
                                        {currentEvent?.price} ₽
                                    </span>
                                </div>
                                <div className={css.roundedText}>
                                    <span>✓ 100% предоплата</span>
                                </div>
                            </div>
                        </div>
                        <div className={css.hr} />
                        <div
                            className={classNames(css.goodsItems_item, css.aic)}
                        >
                            <span className={css.goodsItems_item__total}>
                                Предоплата
                            </span>
                            <span className={css.goodsItems_item__price}>
                                {currentEvent?.price
                                    ? guestCount * currentEvent?.price + ' ₽'
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
                {/*<div className={css.contentContainer}>*/}
                {/*    <div className={classNames(css.goodsItems_item, css.aic)}>*/}
                {/*        <span className={css.goodsItems_item__total}>*/}
                {/*            Предоплата*/}
                {/*        </span>*/}
                {/*        <span className={css.goodsItems_item__price}>*/}
                {/*            {currentEvent?.price*/}
                {/*                ? guestCount * currentEvent?.price + ' ₽'*/}
                {/*                : '...'}*/}
                {/*        </span>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={css.contentContainer}></div>*/}
                <div className={css.bottomButton}>
                    <UniversalButton
                        width={'full'}
                        title={'Оплатить'}
                        theme={'red'}
                        action={() => alert('')}
                    />
                </div>
            </div>
        </Page>
    );
};
