import {
    GalleryCollection,
    IMenuItem,
} from '@/pages/Restaurant/Restaurant.types.ts';

export const mockGallery: GalleryCollection[] = [
    {
        title: 'Интерьер',
        photos: [
            {
                link: '/img/placeholder_7.png',
            },
            {
                link: '/img/placeholder_4.png',
            },
            {
                link: '/img/placeholder_5.png',
            },
            {
                link: '/img/placeholder_4.png',
            },
            {
                link: '/img/placeholder_3.png',
            },
            {
                link: '/img/placeholder_2.png',
            },
            {
                link: '/img/placeholder_1.png',
            },
        ],
    },
    {
        title: 'Блюда',
        photos: [
            {
                link: '/img/placeholder_7.png',
            },
            {
                link: '/img/placeholder_4.png',
            },
            {
                link: '/img/placeholder_3.png',
            },
        ],
    },
];

export const mockMenu: IMenuItem[] = [
    {
        title: 'Крем - суп из пастернака 1',
        photo: '/img/placeholder_4.png',
        price: 1000,
    },
    {
        title: 'Крем - суп из пастернака 2',
        photo: '/img/placeholder_4.png',
        price: 1100,
    },
    {
        title: 'Крем - суп из пастернака 3',
        photo: '/img/placeholder_4.png',
        price: 1200,
    },
    {
        title: 'Крем - суп из пастернака 4',
        photo: '/img/placeholder_4.png',
        price: 1300,
    },
];

export const mockBookingDate = new Date();
