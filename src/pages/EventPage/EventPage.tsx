import { Page } from '@/components/Page.tsx';
import css from './EventPage.module.css';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.tsx';
import { BackIcon } from '@/components/Icons/BackIcon.tsx';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { guestCountAtom, selectedEventAtom } from '@/atoms/eventBookingAtom.ts';
import { UniversalButton } from '@/components/Buttons/UniversalButton/UniversalButton.tsx';

export const EventPage = () => {
    const navigate = useNavigate();

    const [guestCount, setGuestCount] = useAtom(guestCountAtom);
    const [, setSelectedEvent] = useAtom(selectedEventAtom);

    const incCounter = () => {
        setGuestCount((prev: number) => (prev < 9 ? prev + 1 : prev));
    };
    const decCounter = () => {
        setGuestCount((prev: number) => (prev - 1 >= 1 ? prev - 1 : prev));
    };

    const continueButton = () => {
        setSelectedEvent({
            title: 'Винный ужин с виноделом Мануэлем Морага Гутьерресом',
            id: 10,
            startDate: '2025-03-30 17:00:00',
            endDate: '2025-03-30 18:30:00',
            price: 1500,
        });
        navigate('/eventBookingScreen');
    };

    return (
        <Page back={true}>
            <div className={css.bottomButton}>
                <UniversalButton
                    width={'full'}
                    title={'Продолжить'}
                    theme={'red'}
                    action={() => continueButton()}
                />
            </div>
            <div className={css.page}>
                <div className={css.header}>
                    <RoundedButton
                        bgColor={'var(--primary-background)'}
                        icon={<BackIcon color={'var(--dark-grey)'} />}
                        action={() => navigate(-1)}
                    />
                    <span className={css.header_title}>Мероприятия</span>
                    <div className={css.header_spacer} />
                </div>
                <div className={css.content}>
                    <div
                        className={css.event_img}
                        style={{
                            backgroundImage:
                                'url(http://cabinet.clientomer.ru/storage/270027/advents/16.jpg)',
                        }}
                    />
                    <div className={css.content_description}>
                        <h2 className={css.content_description__title}>
                            Винный ужин с виноделом Мунуэлем Морага Гутьерресом
                        </h2>
                        <span className={css.content_description__info}>
                            13 февраля встретимся на ужине с чилийским виноделом
                            в седьмом поколении, Мануэлем Морага Гутьерресом
                            (Cacique Maravilla). Его семья владеет виноградником
                            с 1776 года в городе Юмбель (долина Био-Био). Но
                            после разрушительного землетрясения 2010 года
                            Мануэль восстановил хозяйство
                        </span>
                    </div>
                    <div className={css.event_params}>
                        <div className={css.event_params_row}>
                            <div className={css.event_params_col}>
                                <span className={css.event_params_col__title}>
                                    Дата
                                </span>
                                <span className={css.event_params_col__data}>
                                    13 фев
                                </span>
                            </div>
                            <div className={css.event_params_col}>
                                <span className={css.event_params_col__title}>
                                    Время
                                </span>
                                <span className={css.event_params_col__data}>
                                    12:00
                                </span>
                            </div>
                        </div>
                        <div className={css.event_params_row}>
                            <div className={css.event_params_col}>
                                <span className={css.event_params_col__title}>
                                    Ресторан
                                </span>
                                <span className={css.event_params_col__data}>
                                    SMOKE BBQ
                                </span>
                            </div>
                        </div>
                        <div className={css.event_params_row}>
                            <div className={css.event_params_col}>
                                <span className={css.event_params_col__title}>
                                    Адрес
                                </span>
                                <span className={css.event_params_col__data}>
                                    Москва, ул Трубная 8
                                </span>
                            </div>
                        </div>
                        <div className={css.event_params_row}>
                            <div className={css.event_params_col}>
                                <span className={css.event_params_col__title}>
                                    Цена
                                </span>
                                <span className={css.event_params_col__data}>
                                    1500 ₽
                                </span>
                            </div>
                        </div>
                        <div className={css.roundedText}>
                            <span>✓ 100% предоплата</span>
                        </div>
                        <div className={css.personsContainer}>
                            <span className={css.personsContainer__title}>
                                Количество мест
                            </span>
                            <div className={css.personCounter}>
                                <span
                                    className={css.clickableSpan}
                                    onClick={incCounter}
                                >
                                    +
                                </span>
                                <span>{guestCount}</span>
                                <span
                                    className={css.clickableSpan}
                                    onClick={decCounter}
                                >
                                    -
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
};
