import { ICity } from '@/atoms/cityListAtom.ts';

export interface IRestaurantChef {
    name: string;
    photo_url: string;
    about: string;
}

export interface IPhotoCard {
    id: number;
    category: string;
    url: string;
}

export interface ISocialnetwork {
    type: string;
    url: string;
    name: string;
}

export interface IWorkTime {
    weekday: string;
    time_start: string;
    time_end: string;
}

interface IMenuItem {
    id: number;
    title: string;
    photo_url: string;
    price: number;
}

export interface IRestaurantShort {
    id: number;
    title: string;
    slogan: string;
    address: string;
    logo_url: string;
    thumbnail_photo: string;
    photo_cards: IPhotoCard[];
    openTime: string;
    avg_cheque: number;
    brand_chef: IRestaurantChef;
    city: ICity;
}

export interface IRestaurant extends IRestaurantShort {
    gallery: IPhotoCard[];
    about_text: string;
    about_dishes: string;
    about_kitchen: string;
    about_features: string;
    menu: IMenuItem[];

    worktime: IWorkTime[];

    address_lonlng: string;
    address_station?: string;
    address_station_color?: string;
}
