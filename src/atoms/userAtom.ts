import { atom } from 'jotai';

export interface IUser {
    email?: string;
    first_name: string;
    last_name: string;
    phone_number?: string;
    allergies?: string;
    early_access: boolean;
    license_agreement: boolean;
    advertisement_agreement: boolean;
    gdpr_agreement: boolean;
    date_of_birth?: string;
}

export interface IAuthInfo {
    access_token: string;
    expires_in: number;
}

export const userAtom = atom<IUser>();
export const authAtom = atom<IAuthInfo>();
