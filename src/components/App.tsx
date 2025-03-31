import { swipeBehavior, useLaunchParams } from '@telegram-apps/sdk-react';
import { initNavigator } from '@telegram-apps/sdk';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { Navigate, Route, Routes, Router } from 'react-router-dom';
import { routes } from '@/navigation/routes.tsx';
import { ScrollToTop } from '@/navigation/utills.tsx';
import { useEffect, useMemo } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '@/atoms/userAtom.ts';
import { AppLoadingScreen } from '@/components/AppLoadingScreen/AppLoadingScreen.tsx';

import { RequestPermissions } from '@/components/RequestPermissions/RequestPermissions.tsx';
import { useIntegration } from '@telegram-apps/react-router-integration';

const AppRouter = () => {
    const navigator = useMemo(() => initNavigator('app-navigation-state'), []);
    const [location, reactNavigator] = useIntegration(navigator);

    return (
        <Router location={location} navigator={reactNavigator}>
            <ScrollToTop />
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} {...route} />
                ))}
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
