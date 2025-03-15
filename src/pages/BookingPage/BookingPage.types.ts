export interface IBookingForm {
    commentary: string | undefined;
    name: string | undefined;
    phone: string | undefined;
}

export interface ITimeSlot {
    id: number;
    time: string;
}
