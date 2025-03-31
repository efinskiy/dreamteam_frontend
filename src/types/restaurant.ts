import { ICity } from '@/atoms/cityListAtom.ts';

export interface RestaurantChef {
    name: string;
    photo_url: string;
}

export interface PhotoCard {
    id: number;
    category: string;
    url: string;
}

export interface IRestaurantShort {
    id: number;
    title: string;
    slogan: string;
    address: string;
    logo_url: string;
    thumbnail_photo: string;
    photo_cards: PhotoCard[];
    openTime: string;
    avg_cheque: number;
    brand_chef: RestaurantChef;
    city: ICity;
}
