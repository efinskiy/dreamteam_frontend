import { Page } from '@/components/Page.tsx';
import css from './MyBookingsPage.module.css';
import { classNames } from '@telegram-apps/sdk-react';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.tsx';
import { BackIcon } from '@/components/Icons/BackIcon.tsx';
import { useNavigate } from 'react-router-dom';
import { BookingCard } from '@/components/BookingCard/BookingCard.tsx';

export const MyBookingsPage = () => {
    const navigate = useNavigate();

    const clickOnActiveBooking = (id: number) => {
        navigate(`/myBookings/${id}`);
    };

    return (
        <Page back={true}>
            <div className={classNames(css.page, css.fc)}>
                <div className={classNames(css.fr, css.header)}>
                    <RoundedButton
                        icon={<BackIcon size={24} />}
                        bgColor={'var(--primary-background)'}
                        action={() => navigate('/profile')}
                    />
                    <span className={css.header__title}>Мои бронирования</span>
                    <div className={css.wh44}></div>
                </div>
                <div className={css.bookingList}>
                    <BookingCard
                        date={''}
                        active={true}
                        booking_id={1}
                        title={'Smoke BBQ'}
                        address={'Трубная, 8'}
                        click_callback={clickOnActiveBooking}
                    />

                    <BookingCard
                        date={''}
                        active={false}
                        booking_id={2}
                        title={'Smoke BBQ'}
                        address={'Трубная, 8'}
                        click_callback={clickOnActiveBooking}
                    />

                    <BookingCard
                        date={''}
                        active={false}
                        booking_id={3}
                        title={'Smoke BBQ'}
                        address={'Трубная, 8'}
                        click_callback={clickOnActiveBooking}
                    />
                    <BookingCard
                        date={''}
                        active={false}
                        booking_id={4}
                        title={'Smoke BBQ'}
                        address={'Трубная, 8'}
                        click_callback={clickOnActiveBooking}
                    />
                    <BookingCard
                        date={''}
                        active={false}
                        booking_id={5}
                        title={'Smoke BBQ'}
                        address={'Трубная, 8'}
                        click_callback={clickOnActiveBooking}
                    />
                    <BookingCard
                        date={''}
                        active={false}
                        booking_id={6}
                        title={'Smoke BBQ'}
                        address={'Трубная, 8'}
                        click_callback={clickOnActiveBooking}
                    />
                </div>
            </div>
        </Page>
    );
};
