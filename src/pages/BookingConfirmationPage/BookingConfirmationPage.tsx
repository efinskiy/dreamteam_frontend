import { Page } from '@/components/Page.tsx';
import css from './BookingConfirmationPage.module.css';
import { useAtom } from 'jotai';
import { bookingAtom } from '@/atoms/bookingInfoAtom.ts';
import { useEffect } from 'react';
import AddToCalendarButton from '@/components/AddToCalendarButton/AddToCalendarButton.tsx';

export const BookingConfirmationPage = () => {
    const bookingInfo = useAtom(bookingAtom);

    useEffect(() => {
        console.log('bookingInfo: ', bookingInfo);
    }, [bookingInfo]);

    return (
        <Page back={true}>
            <div className={css.page}>
                <AddToCalendarButton />
            </div>
        </Page>
    );
};
