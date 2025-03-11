import { FC } from 'react';
import css from './BookingReminder.module.css';
import { TimeCircle } from '@/components/Icons/TimeCircle.tsx';
import { CalendarIcon } from '@/components/Icons/CalendarIcon.tsx';
import { UsersIcon } from '@/components/Icons/UsersIcon.tsx';

interface BookingReminderProps {
    title: string;
    date: Date;
    address: string;
    persons: number;
}

const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
    });
};

const formatDate = (date: Date): string => {
    return date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
    });
};

export const BookingReminder: FC<BookingReminderProps> = (p) => {
    return (
        <div className={css.bookingReminder}>
            <div className={css.inner}>
                <span className={css.title}>{p.title}</span>
                <span className={css.subText}>Москва, Трубная 8</span>
                <div className={css.sub}>
                    <div className={css.subItem}>
                        <TimeCircle
                            size={16}
                            color={'var(--dark-grey)'}
                        ></TimeCircle>
                        <span className={css.subText}>
                            {formatTime(p.date)}
                        </span>
                    </div>
                    <div className={css.subItem}>
                        <CalendarIcon
                            size={16}
                            color={'var(--dark-grey)'}
                        ></CalendarIcon>
                        <span className={css.subText}>
                            {formatDate(p.date)}
                        </span>
                    </div>
                    <div className={css.subItem}>
                        <UsersIcon
                            size={16}
                            color={'var(--dark-grey)'}
                        ></UsersIcon>
                        <span className={css.subText}>{p.persons}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
