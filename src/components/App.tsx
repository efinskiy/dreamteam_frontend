import { swipeBehavior, useLaunchParams } from '@telegram-apps/sdk-react';
import { initNavigator } from '@telegram-apps/sdk';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { Navigate, Route, Routes, Router } from 'react-router-dom';
import { ScrollToTop } from '@/navigation/utills.tsx';
import { useEffect, useMemo } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '@/atoms/userAtom.ts';
import { AppLoadingScreen } from '@/components/AppLoadingScreen/AppLoadingScreen.tsx';
import { RequestPermissions } from '@/components/RequestPermissions/RequestPermissions.tsx';
import { useIntegration } from '@telegram-apps/react-router-integration';
import { useScript } from 'usehooks-ts';
import { IndexPage } from '@/pages/IndexPage/IndexPage.tsx';
import { RestaurantMapPage } from '@/pages/RestaurantMapPage/RestaurantMapPage.tsx';
import { ProfilePage } from '@/pages/ProfilePage/ProfilePage.tsx';
import { UserProfilePage } from '@/pages/UserProfilePage/UserProfilePage.tsx';
import { EventsPage } from '@/pages/EventsPage/EventsPage.tsx';
import { UserTicketsPage } from '@/pages/UserTicketsPage/UserTicketsPage.tsx';
import { MyBookingsPage } from '@/pages/MyBookingsPage/MyBookingsPage.tsx';
import { BookingInfoPage } from '@/pages/BookingInfoPage/BookingInfoPage.tsx';
import { Restaurant } from '@/pages/Restaurant/Restaurant.tsx';
import { BookingPage } from '@/pages/BookingPage/BookingPage.tsx';
import { BookingConfirmationPage } from '@/pages/BookingConfirmationPage/BookingConfirmationPage.tsx';
import { EnvUnsupported } from '@/components/EnvUnsupported.tsx';
import { EventListOutlet } from '@/pages/EventsPage/EventListOutlet/EventListOutlet.tsx';
import { EventInfoOutlet } from '@/pages/EventsPage/EventInfoOutlet/EventInfoOutlet.tsx';
import { RestaurantsListOutlet } from '@/pages/EventsPage/RestaurantsListOutlet/RestaurantsListOutlet.tsx';
import { DTSelectionOutlet } from '@/pages/EventsPage/DTSelectionOutlet/DTSelectionOutlet.tsx';
import { EventConfirmationOutlet } from '@/pages/EventsPage/EventConfirmationOutlet/EventConfirmationOutlet.tsx';
import { EventBookingOutlet } from '@/pages/EventsPage/EventBookingOutlet/EventBookingOutlet.tsx';

const AppRouter = () => {
    const navigator = useMemo(() => initNavigator('app-navigation-state'), []);
    const [location, reactNavigator] = useIntegration(navigator);

    useScript('https://yastatic.net/taxi-widget/ya-taxi-widget-v2.js', {
        removeOnUnmount: true,
    });

    return (
        <Router location={location} navigator={reactNavigator}>
            <ScrollToTop />
            <Routes>
                <Route path={'/'} element={<IndexPage />} />
                <Route path={'/map'} element={<RestaurantMapPage />} />
                <Route path={'/profile'} element={<ProfilePage />} />
                <Route path={'/me'} element={<UserProfilePage />} />
                <Route path={'/events'} element={<EventsPage />}>
                    <Route path={'/events'} element={<EventListOutlet />} />
                    <Route path={'/events/:id'} element={<EventInfoOutlet />} />
                    <Route
                        path={'/events/:id/restaurant'}
                        element={<RestaurantsListOutlet />}
                    />
                    <Route
                        path={'/events/:id/restaurant/:res'}
                        element={<DTSelectionOutlet />}
                    />
                    <Route
                        path={'/events/:id/restaurant/:res/guests'}
                        element={<EventConfirmationOutlet />}
                    />
                    <Route
                        path={'/events/:id/restaurant/:res/confirm'}
                        element={<EventBookingOutlet />}
                    />
                </Route>
                <Route path={'/tickets'} element={<UserTicketsPage />} />
                {/*<Route*/}
                {/*    path={'/eventBookingScreen'}*/}
                {/*    element={<EventBookingPage />}*/}
                {/*/>*/}
                <Route path={'/myBookings'} element={<MyBookingsPage />} />
                <Route path={'/myBookings/:id'} element={<BookingInfoPage />} />
                <Route path={'/restaurant/:id'} element={<Restaurant />} />
                <Route path={'/booking/:id'} element={<BookingPage />} />
                <Route
                    path={'/bookingConfirmation'}
                    element={<BookingConfirmationPage />}
                />
                <Route path={'/unsupported'} element={<EnvUnsupported />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export function App() {
    const lp = useLaunchParams();
    useEffect(() => {
        swipeBehavior.mount();
    }, []);
    const [userState] = useAtom(userAtom);

    return (
        <AppRoot
            appearance={'light'}
            platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
        >
            {}
            <RequestPermissions />
            {!userState ? <AppLoadingScreen /> : <AppRouter />}
        </AppRoot>
    );
}
