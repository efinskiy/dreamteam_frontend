import { FC } from 'react';
import css from './BookingReminder.module.css';
import { TimeCircle } from '@/components/Icons/TimeCircle.tsx';
import { CalendarIcon } from '@/components/Icons/CalendarIcon.tsx';
import { UsersIcon } from '@/components/Icons/UsersIcon.tsx';

interface BookingReminderProps {
    date: string;
    time: string;
    persons: number;
}

export const BookingReminder: FC<BookingReminderProps> = (p) => {
    return (
        <div className={css.bookingReminder}>
            <div className={css.inner}>
                <span className={css.title}>Мое бронирование</span>
                <div className={css.sub}>
                    <div className={css.subItem}>
                        <TimeCircle
                            size={16}
                            color={'var(--dark-grey)'}
                        ></TimeCircle>
                        <span className={css.subText}>{p.time}</span>
                    </div>
                    <div className={css.subItem}>
                        <CalendarIcon
                            size={16}
                            color={'var(--dark-grey)'}
                        ></CalendarIcon>
                        <span className={css.subText}>{p.date}</span>
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
