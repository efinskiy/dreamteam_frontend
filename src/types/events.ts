interface EventRestaurant {
    id: number;
    title: string;
    address: string;
    thumbnail_photo: string;
}

export interface EventTicket {
    id: number;
    event_title: string;
    event_img: string;
    event_description: string;
    date_start: string;
    guest_count: number;
    total: number;
    restaurant: EventRestaurant;
}
