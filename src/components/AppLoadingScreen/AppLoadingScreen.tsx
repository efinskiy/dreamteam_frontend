import css from './AppLoadingScreen.module.css';
import { authAtom, userAtom } from '@/atoms/userAtom.ts';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { APIUserAuth, APIUserInfo } from '@/api/auth.ts';
import { useLaunchParams } from '@telegram-apps/sdk-react';
import { cityListAtom } from '@/atoms/cityListAtom.ts';

const Loader = () => {
    return <div className={css.loader}></div>;
};

export const AppLoadingScreen = () => {
    const [, setUser] = useAtom(userAtom);
    const [auth, setAuth] = useAtom(authAtom);
    const [, setCities] = useAtom(cityListAtom);
    const lp = useLaunchParams();

    useEffect(() => {
        APIUserAuth(lp.initDataRaw)
            .then((res) => {
                setAuth(res.data);
                return res.data.access_token;
            })
            .then((token) => {
                APIUserInfo(token).then((res) => setUser(res.data));
            });
    }, []);

    useEffect(() => {
        if (auth) {
            setCities([
                {
                    id: 1,
                    name: 'Москва',
                    name_english: 'moscow',
                    name_dative: 'Москве',
                },
                {
                    id: 2,
                    name: 'Санкт-Петербург',
                    name_english: 'spb',
                    name_dative: 'Санкт-Петербурге',
                },
                {
                    id: 3,
                    name: 'Екатеринбург',
                    name_english: 'ekb',
                    name_dative: 'Екатеринбурге',
                },
            ]);
        }
    }, [auth]);

    return (
        <div className={css.screen}>
            <Loader />
        </div>
    );
};
