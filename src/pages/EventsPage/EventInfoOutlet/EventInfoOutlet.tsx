import { classNames } from '@telegram-apps/sdk-react';
import css from './EventInfoOutlet.module.css';
import { UniversalButton } from '@/components/Buttons/UniversalButton/UniversalButton.tsx';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { IEventBookingContext } from '@/utils.ts';

export const EventInfoOutlet = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [, setBookingInfo] = useOutletContext<IEventBookingContext>();

    const next = () => {
        setBookingInfo((prev) => ({ ...prev, eventId: id }));
        navigate(`/events/${id}/restaurant`);
    };

    return (
        <div className={css.outlet}>
            <div
                className={classNames(css.card, css.bgImage)}
                style={{
                    backgroundImage: `url(http://cabinet.clientomer.ru/storage/270027/advents/16.jpg`,
                }}
            >
                <span className={classNames(css.card_date)}>1500 ₽</span>
            </div>
            <div className={css.event_info}>
                <span className={css.title}>
                    Винный ужин с виноделом Мунуэлем Морага Гутьерресом
                </span>
                <span className={css.description}>
                    13 февраля встретимся на ужине с чилийским виноделом в
                    седьмом поколении, Мануэлем Морага Гутьерресом (Cacique
                    Maravilla). Его семья владеет виноградником с 1776 года в
                    городе Юмбель (долина Био-Био). Но после разрушительного
                    землетрясения 2010 года Мануэль восстановил хозяйство
                </span>
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
