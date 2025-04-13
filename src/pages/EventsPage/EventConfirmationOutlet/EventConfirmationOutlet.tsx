import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { useAtom } from 'jotai/index';
import { guestCountAtom } from '@/atoms/eventBookingAtom.ts';
import css from './EventConfirmationOutlet.module.css';
import { formatDateDT, IEventBookingContext } from '@/utils.ts';
import { UniversalButton } from '@/components/Buttons/UniversalButton/UniversalButton.tsx';

export const EventConfirmationOutlet = () => {
    const navigate = useNavigate();
    const { id, res } = useParams();
    const [bookingInfo, setBookingInfo] =
        useOutletContext<IEventBookingContext>();
    const [guestCount, setGuestCount] = useAtom(guestCountAtom);

    const incCounter = () => {
        setGuestCount((prev: number) => (prev < 9 ? prev + 1 : prev));
    };
    const decCounter = () => {
        setGuestCount((prev: number) => (prev - 1 >= 1 ? prev - 1 : prev));
    };

    const next = () => {
        setBookingInfo((prev) => ({ ...prev, guestCount: guestCount }));
        navigate(`/events/${id}/restaurant/${res}/confirm`);
    };

    return (
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
                    13 февраля встретимся на ужине с чилийским виноделом в
                    седьмом поколении, Мануэлем Морага Гутьерресом (Cacique
                    Maravilla). Его семья владеет виноградником с 1776 года в
                    городе Юмбель (долина Био-Био). Но после разрушительного
                    землетрясения 2010 года Мануэль восстановил хозяйство
                </span>
            </div>
            <div className={css.event_params}>
                <div className={css.event_params_row}>
                    <div className={css.event_params_col}>
                        <span className={css.event_params_col__title}>
                            Дата
                        </span>
                        <span className={css.event_params_col__data}>
                            {bookingInfo.date
                                ? formatDateDT(bookingInfo.date)
                                : null}
                        </span>
                    </div>
                    <div className={css.event_params_col}>
                        <span className={css.event_params_col__title}>
                            Время
                        </span>
                        <span className={css.event_params_col__data}>
                            {bookingInfo.time}
                        </span>
                    </div>
                </div>
                <div className={css.event_params_row}>
                    <div className={css.event_params_col}>
                        <span className={css.event_params_col__title}>
                            Ресторан
                        </span>
                        <span className={css.event_params_col__data}>
                            {/*{bookingInfo.restaurantId*/}
                            {/*    ? MOCK_Restaurants.find(*/}
                            {/*          (v) =>*/}
                            {/*              v.id ===*/}
                            {/*              Number(bookingInfo.restaurantId)*/}
                            {/*      )?.title*/}
                            {/*    : null}*/}
                        </span>
                    </div>
                </div>
                <div className={css.event_params_row}>
                    <div className={css.event_params_col}>
                        <span className={css.event_params_col__title}>
                            Адрес
                        </span>
                        <span className={css.event_params_col__data}>
                            {/*{bookingInfo.restaurantId*/}
                            {/*    ? MOCK_Restaurants.find(*/}
                            {/*          (v) =>*/}
                            {/*              v.id ===*/}
                            {/*              Number(bookingInfo.restaurantId)*/}
                            {/*      )?.address*/}
                            {/*    : null}*/}
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
            <div className={css.absoluteBottom}>
                <div className={css.bottomWrapper}>
                    <UniversalButton
                        width={'full'}
                        title={'Купить билет'}
                        theme={'red'}
                        action={() => next()}
                    />
                </div>
            </div>
        </div>
    );
};
