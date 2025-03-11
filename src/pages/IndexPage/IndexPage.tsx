import type { FC } from 'react';
import css from './IndexPage.module.css';

import { Page } from '@/components/Page.tsx';
import { Header } from '@/components/Header/Header.tsx';
import { OptionsNavigation } from '@/components/OptionsNavigation/OptionsNavigation.tsx';
import { RestaurantPreview } from '@/components/RestaurantPreview/RestrauntPreview.tsx';
import { BookingReminder } from '@/components/BookingReminder/BookingReminder.tsx';
import { mockBookingDate } from '@/mockData.ts';

export const IndexPage: FC = () => {
    return (
        <Page back={false}>
            <div className={css.pageContainer}>
                <Header />
                <BookingReminder
                    title={'Smoke BBQ'}
                    address={''}
                    date={mockBookingDate}
                    persons={2}
                />
                {/*<NewsStories />*/}
                <OptionsNavigation />
                <div className={css.restaurants}>
                    <RestaurantPreview />
                    <RestaurantPreview />
                </div>
            </div>
        </Page>
    );
};
