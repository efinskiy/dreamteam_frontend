import axios from 'axios';
import { BASE_URL } from '@/api/base.ts';
import { IAuthInfo, IUser } from '@/atoms/userAtom.ts';

export const APIUserAuth = async (data: string | undefined) => {
    return await axios.post<IAuthInfo>(
        `${BASE_URL}/auth/validate`,
        {},
        {
            params: {
                data: data,
            },
        }
    );
};

export const APIUserInfo = async (access_token: string) => {
    return await axios.get<IUser>(`${BASE_URL}/auth/me`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};
