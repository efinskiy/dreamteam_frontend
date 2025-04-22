import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai/index';
import { authAtom, userAtom } from '@/atoms/userAtom.ts';

export const Redirecter = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [user] = useAtom(userAtom);
    const [auth] = useAtom(authAtom);

    const EXCLUDED_URLS = ['/phoneConfirmation', '/onboarding', '/gdpr'];

    useEffect(() => {
        if (
            auth?.access_token &&
            !user?.phone_number &&
            !EXCLUDED_URLS.includes(location.pathname)
        ) {
            navigate('/phoneConfirmation');
        }
    }, [auth, user, location.pathname]);

    return <></>;
};
