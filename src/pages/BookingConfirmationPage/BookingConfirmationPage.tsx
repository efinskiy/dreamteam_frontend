import { Page } from '@/components/Page.tsx';
import css from './BookingConfirmationPage.module.css';
import { useAtom } from 'jotai';
import { bookingAtom } from '@/atoms/bookingInfoAtom.ts';
import { useEffect } from 'react';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.tsx';
import { CrossIcon } from '@/components/Icons/CrossIcon.tsx';

export const BookingConfirmationPage = () => {
    const bookingInfo = useAtom(bookingAtom);

    useEffect(() => {
        console.log('bookingInfo: ', bookingInfo);
    }, [bookingInfo]);

    return (
        <Page back={true}>
            <div className={css.page}>
                <div className={css.header}>
                    <div>
                        <RoundedButton
                            icon={<CrossIcon size={44} color={'black'} />}
                        />
                    </div>
                    <div className={css.headerContent}>
                        <h3 className={css.headerContent__title}>
                            Бронирование
                        </h3>
                        <p className={css.headerContent__subtitle}>Smoke BBQ</p>
                    </div>
                    <div className={css.headerButtons}>
                        <RoundedButton
                            icon={<CrossIcon size={44} color={'black'} />}
                        />
                    </div>
                </div>
            </div>
        </Page>
    );
};
