import { classNames } from '@telegram-apps/sdk-react';
import css from './Ticket.module.css';
import { useNavigate } from 'react-router-dom';

export const Ticket = () => {
    const navigate = useNavigate();
    return (
        <div
            className={classNames(css.card, css.bgImage)}
            style={{ backgroundImage: `url(/img/placeholder_1.png)` }}
            onClick={() => navigate('/tickets/1')}
        >
            <span className={classNames(css.card_date)}>
                12.03.2025 в 12:00
            </span>
            <div className={css.footer}>
                <span className={css.footer__title}>
                    Винный ужин с виноделом Мунуэлем Морага Гутьерресом
                </span>
                <span className={css.footer__address}>Smoke BBQ</span>
            </div>
        </div>
    );
};
