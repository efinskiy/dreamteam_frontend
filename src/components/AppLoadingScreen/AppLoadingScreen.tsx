import css from './AppLoadingScreen.module.css';
import { authAtom, userAtom } from '@/atoms/userAtom.ts';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { APIUserAuth, APIUserInfo } from '@/api/auth.ts';
import { useLaunchParams } from '@telegram-apps/sdk-react';

export const AppLoadingScreen = () => {
    const [user, setUser] = useAtom(userAtom);
    const [, setAuth] = useAtom(authAtom);
    // const
    const lp = useLaunchParams();

    useEffect(() => {
        APIUserAuth(lp.initDataRaw)
            .then((res) => {
                setAuth(res);
                return res.data.access_token;
            })
            .then((token) => {
                APIUserInfo(token).then((res) => setUser(res.data));
            });
    }, []);

    useEffect(() => {
        if (!user) {
            return;
        }
        if (!user.early_access) {
        }
    }, [user]);

    return (
        <div className={css.screen}>
            <div className={css.loader}></div>
        </div>
    );
};
