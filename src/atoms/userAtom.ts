import { atom } from 'jotai';

export interface IUser {
    id: number;
    email: string;
    first_name: string;
    phone_number: string;
    allergies: string;
    early_access: boolean;
    license_agreement: boolean;
    advertisement_agreement: boolean;
    gdpr_agreement: boolean;
}

export interface IAuthInfo {
    access_token: string;
    expires_in: number;
}

export const userAtom = atom<IUser>();
export const authAtom = atom<IAuthInfo>();
