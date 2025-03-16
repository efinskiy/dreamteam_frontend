import {
    GalleryCollection,
    IMenuItem,
} from '@/pages/Restaurant/Restaurant.types.ts';
import { ITimeSlot } from '@/pages/BookingPage/BookingPage.types.ts';
import { PickerValueObj } from '@/lib/react-mobile-picker/components/Picker.tsx';

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
    '21:00',
    '21:15',
    '21:30',
    '21:45',
];

export const MockTimeSlots: ITimeSlot[] = [
    {
        id: 1,
        time: '9:00',
    },
    {
        id: 2,
        time: '9:30',
    },
    {
        id: 3,
        time: '9:45',
    },
    {
        id: 4,
        time: '10:00',
    },
    {
        id: 5,
        time: '10:15',
    },
    {
        id: 6,
        time: '10:30',
    },
    {
        id: 7,
        time: '10:45',
    },
    {
        id: 8,
        time: '11:00',
    },
    {
        id: 9,
        time: '11:15',
    },
    {
        id: 10,
        time: '11:30',
    },
    {
        id: 11,
        time: '11:45',
    },
    {
        id: 12,
        time: '12:00',
    },
    {
        id: 13,
        time: '12:15',
    },
    {
        id: 14,
        time: '12:30',
    },
    {
        id: 15,
        time: '12:45',
    },
    {
        id: 16,
        time: '13:00',
    },
    {
        id: 17,
        time: '13:15',
    },
    {
        id: 18,
        time: '13:30',
    },
    {
        id: 19,
        time: '13:45',
    },
    {
        id: 20,
        time: '14:00',
    },
    {
        id: 21,
        time: '14:15',
    },
    {
        id: 22,
        time: '14:30',
    },
    {
        id: 23,
        time: '14:45',
    },
    {
        id: 24,
        time: '15:00',
    },
    {
        id: 25,
        time: '15:15',
    },
    {
        id: 26,
        time: '15:30',
    },
    {
        id: 27,
        time: '15:45',
    },
    {
        id: 28,
        time: '16:00',
    },
    {
        id: 29,
        time: '16:15',
    },
    {
        id: 30,
        time: '16:30',
    },
    {
        id: 31,
        time: '16:45',
    },
    {
        id: 32,
        time: '17:00',
    },
    {
        id: 33,
        time: '17:15',
    },
    {
        id: 34,
        time: '17:30',
    },
    {
        id: 35,
        time: '17:45',
    },
    {
        id: 36,
        time: '18:00',
    },
    {
        id: 37,
        time: '18:15',
    },
    {
        id: 38,
        time: '18:30',
    },
    {
        id: 39,
        time: '18:45',
    },
    {
        id: 40,
        time: '19:00',
    },
    {
        id: 41,
        time: '20:15',
    },
    {
        id: 42,
        time: '20:30',
    },
    {
        id: 43,
        time: '20:45',
    },
    {
        id: 44,
        time: '21:00',
    },
    {
        id: 45,
        time: '21:15',
    },
    {
        id: 46,
        time: '21:30',
    },
    {
        id: 47,
        time: '21:45',
    },
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

export const BOOKING_DATE_VALUES = <PickerValueObj[]>[
    {
        title: 'Сегодня, 16 марта',
        value: '2025-03-16',
    },
    {
        title: 'Завтра, 17 марта',
        value: '2025-03-17',
    },
    {
        title: '19 марта',
        value: '2025-03-19',
    },
    {
        title: '20 марта',
        value: '2025-03-20',
    },
    {
        title: '21 марта',
        value: '2025-03-21',
    },
    {
        title: '22 марта',
        value: '2025-03-22',
    },
    {
        title: '23 марта',
        value: '2025-03-23',
    },
    {
        title: '24 марта',
        value: '2025-03-24',
    },
];
