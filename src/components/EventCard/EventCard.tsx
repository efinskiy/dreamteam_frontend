import css from './EventCard.module.css';
import { classNames } from '@telegram-apps/sdk-react';
import { FC } from 'react';

interface IEventCard {
    event_name: string;
    event_price: number;
    event_img: string;
    event_desc: string;
    onClick: () => void;
}

export const EventCard: FC<IEventCard> = ({
    event_name,
    event_price,
    event_desc,
    event_img,
    onClick,
}) => {
    return (
        <div
            className={classNames(css.card, css.bgImage)}
            style={{ backgroundImage: `url(${event_img})` }}
            onClick={() => onClick()}
        >
            <span className={classNames(css.card_date)}>{event_price} ₽</span>
            <div className={css.footer}>
                <span className={css.footer__title}>{event_name}</span>
                <span className={css.footer__address}>{event_desc}</span>
            </div>
        </div>
    );
};
