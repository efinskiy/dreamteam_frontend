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

export const MOCKTIMES = [
    '9:00',
    '9:30',
    '9:45',
    '10:00',
    '10:15',
    '10:30',
    '10:45',
    '11:00',
    '11:15',
    '11:30',
    '11:45',
    '12:00',
    '12:15',
    '12:30',
    '12:45',
    '13:00',
    '13:15',
    '13:30',
    '13:45',
    '14:00',
    '14:15',
    '14:30',
    '14:45',
    '15:00',
    '15:15',
    '15:30',
    '15:45',
    '16:00',
    '16:15',
    '16:30',
    '16:45',
    '17:00',
    '17:15',
    '17:30',
    '17:45',
    '18:00',
    '18:15',
    '18:30',
    '18:45',
    '19:00',
    '20:15',
    '20:30',
    '20:45',
    '20:00',
    '20:15',
    '20:30',
    '20:45',
];

export const BOOKINGCOMMENTMOCK = [
    {
        text: 'Семейный ужин',
        emoji: '🥞',
    },
    {
        text: 'Деловая встреча 1',
        emoji: '☕️',
    },
    {
        text: 'Деловая встреча 2',
        emoji: '☕️',
    },
    {
        text: 'Деловая встреча 3',
        emoji: '☕️',
    },
];
