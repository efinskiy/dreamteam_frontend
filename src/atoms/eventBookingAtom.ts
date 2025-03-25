import { atom } from 'jotai';

export const guestCountAtom = atom<number>(1);

interface ISelectedEvent {
    title: string;
    id: number;
    startDate: string;
    endDate: string;
    price: number;
}

export const selectedEventAtom = atom<ISelectedEvent | null>(null);
