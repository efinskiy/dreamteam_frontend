import { atom } from 'jotai';

interface IBookingInfo {
    restaurantId: number;
    restaurantName: string;
    date: Date;
    timeSlotId: number;
    timeSlotTime: string;
    persons: number;
    commentary: string | undefined;
}

export const bookingAtom = atom<IBookingInfo | null>(null);
