import css from './EventCard.module.css';
import { classNames } from '@telegram-apps/sdk-react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface IEventCard {
    event_id: number;
    event_name: string;
    event_datetime: string;
    event_price: number;
    restaurant_title: string;
    restaurant_img: string;
}

export const EventCard: FC<IEventCard> = ({
    event_id,
    event_name,
    event_datetime,
    event_price,
    restaurant_title,
    restaurant_img,
}) => {
    const navigate = useNavigate();
    return (
        <div
            className={classNames(css.card, css.bgImage)}
            style={{ backgroundImage: `url(${restaurant_img})` }}
            onClick={() => navigate(`/event/${event_id}`)}
        >
            <span className={classNames(css.card_date)}>{event_price} ₽</span>
            <div className={css.footer}>
                <span className={css.footer__title}>{event_name}</span>
                <span className={css.footer__address}>{restaurant_title}</span>
                <span className={css.footer__address}>{event_datetime}</span>
                <span className={css.footer__address}>19:00</span>
            </div>
        </div>
    );
};
