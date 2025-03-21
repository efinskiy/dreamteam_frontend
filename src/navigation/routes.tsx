import type { ComponentType, JSX } from 'react';

import { IndexPage } from '@/pages/IndexPage/IndexPage';
import { Restaurant } from '@/pages/Restaurant/Restaurant.tsx';
import { EnvUnsupported } from '@/components/EnvUnsupported.tsx';
import { ProfilePage } from '@/pages/ProfilePage/ProfilePage.tsx';
import { BookingPage } from '@/pages/BookingPage/BookingPage.tsx';
import { BookingConfirmationPage } from '@/pages/BookingConfirmationPage/BookingConfirmationPage.tsx';
import { MyBookingsPage } from '@/pages/MyBookingsPage/MyBookingsPage.tsx';

interface Route {
    path: string;
    Component: ComponentType;
    title?: string;
    icon?: JSX.Element;
}

const PlaceHolder = () => {
    return <h1>Placeholder page</h1>;
};

export const routes: Route[] = [
    { path: '/', Component: IndexPage },
    {
        path: '/profile',
        Component: ProfilePage,
    },
    {
        path: '/events',
        Component: PlaceHolder,
    },
    {
        path: '/review',
        Component: PlaceHolder,
    },
    {
        path: '/myBookings',
        Component: MyBookingsPage,
    },
    {
        path: '/restaurant/:id',
        Component: Restaurant,
    },
    {
        path: '/booking/:id',
        Component: BookingPage,
    },
    {
        path: '/bookingConfirmation',
        Component: BookingConfirmationPage,
    },
    {
        path: '/unsupported',
        Component: EnvUnsupported,
    },
];
