import axios from 'axios';
import { BASE_URL } from '@/api/base.ts';
import { IRestaurant } from '@/types/restaurant.ts';

export const APIGetRestaurants = () => {
    return axios.get<IRestaurant[]>(`${BASE_URL}/restaurant/list`);
};

export const APIGetAvailableDays = (
    token: string,
    restaurant_id: number,
    guests: number
) => {
    return axios.get<string[]>(
        `${BASE_URL}/restaurant/${restaurant_id}/availableDays`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                guests: guests,
            },
        }
    );
};

export const APIGetAvailableTimeSlots = (
    token: string,
    restaurant_id: number,
    d: string,
    guests: number
) => {
    return axios.get(
        `${BASE_URL}/restaurant/${restaurant_id}/availableTimeslots`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                guests,
                d,
            },
        }
    );
};
