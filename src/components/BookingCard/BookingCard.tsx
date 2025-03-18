import { classNames } from '@telegram-apps/sdk-react';
import css from './BookingCard.module.css';
import { FC } from 'react';

interface BookingCardProps {
    booking_id: number;
    active: boolean;
    title: string;
    address: string;
    date: string;
    click_callback: (id: number) => void;
}

export const BookingCard: FC<BookingCardProps> = ({
    booking_id,
    active,
    title,
    address,
    date,
    click_callback,
}) => {
    return (
        <div
            className={classNames(
                css.card,
                css.bgImage,
                !active ? css.notActive : null
            )}
            style={{ backgroundImage: `url('/img/bookingCard.png')` }}
            onClick={() => click_callback(booking_id)}
        >
            <span
                className={classNames(
                    css.card_date,
                    !active ? css.card_date__notActive : null
                )}
            >
                12.03.2025 в 12:00
            </span>
            <div className={css.footer}>
                <span className={css.footer__title}>{title}</span>
                <span className={css.footer__address}>{address}</span>
            </div>
        </div>
    );
};
