import type { ComponentType, JSX } from 'react';

import { IndexPage } from '@/pages/IndexPage/IndexPage';
import { Restaurant } from '@/pages/Restaurant/Restaurant.tsx';
import { EnvUnsupported } from '@/components/EnvUnsupported.tsx';
import { ProfilePage } from '@/pages/ProfilePage/ProfilePage.tsx';
import { BookingPage } from '@/pages/BookingPage/BookingPage.tsx';
import { BookingConfirmationPage } from '@/pages/BookingConfirmationPage/BookingConfirmationPage.tsx';
import { MyBookingsPage } from '@/pages/MyBookingsPage/MyBookingsPage.tsx';
import { EventsPage } from '@/pages/EventsPage/EventsPage.tsx';
import { EventPage } from '@/pages/EventPage/EventPage.tsx';
import { EventBookingPage } from '@/pages/EventBookingPage/EventBookingPage.tsx';
import { UserProfilePage } from '@/pages/UserProfilePage/UserProfilePage.tsx';
import { UserTicketsPage } from '@/pages/UserTicketsPage/UserTicketsPage.tsx';
import { TicketInfoPage } from '@/pages/TicketInfoPage/TicketInfoPage.tsx';
import { RestaurantMapPage } from '@/pages/RestaurantMapPage/RestaurantMapPage.tsx';

interface Route {
    path: string;
    Component: ComponentType;
    title?: string;
    icon?: JSX.Element;
}

export const routes: Route[] = [
    { path: '/', Component: IndexPage },
    {
        path: '/map',
        Component: RestaurantMapPage,
    },
    {
        path: '/profile',
        Component: ProfilePage,
    },
    {
        path: '/me',
        Component: UserProfilePage,
    },
    {
        path: '/events',
        Component: EventsPage,
    },
    {
        path: '/event/:id',
        Component: EventPage,
    },
    {
        path: '/tickets',
        Component: UserTicketsPage,
    },
    {
        path: '/tickets/:id',
        Component: TicketInfoPage,
    },
    {
        path: '/eventBookingScreen',
        Component: EventBookingPage,
    },
    {
        path: '/review',
        Component: UserProfilePage,
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
