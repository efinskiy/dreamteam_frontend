import axios from 'axios';
import { BASE_URL } from '@/api/base.ts';
import { IEvent } from '@/pages/EventsPage/EventsPage.tsx';

export const APIGetEvents = async () => {
    return await axios.get<IEvent[]>(`${BASE_URL}/events`);
};
