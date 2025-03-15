import { swipeBehavior, useLaunchParams } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';

import { routes } from '@/navigation/routes.tsx';
import { ScrollToTop } from '@/navigation/utills.tsx';
import { useEffect } from 'react';

// import { RequestPermissions } from '@/components/RequestPermissions/RequestPermissions.tsx';

export function App() {
    const lp = useLaunchParams();
    useEffect(() => {
        swipeBehavior.mount();
    }, []);

    return (
        <AppRoot
            appearance={'light'}
            platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
        >
            {/*<RequestPermissions />*/}
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.path} {...route} />
                    ))}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </AppRoot>
    );
}
