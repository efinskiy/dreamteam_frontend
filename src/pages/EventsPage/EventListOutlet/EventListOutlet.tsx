import css from '@/pages/EventsPage/EventsPage.module.css';
import { EventCard } from '@/components/EventCard/EventCard.tsx';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { IEventBookingContext } from '@/utils.ts';

export const EventListOutlet = () => {
    const navigate = useNavigate();
    const [, setBookingInfo] = useOutletContext<IEventBookingContext>();

    const next = (event_id: number) => {
        setBookingInfo((prev) => ({ ...prev, eventId: String(event_id) }));
        navigate(`/events/${event_id}/restaurant`);
    };

    return (
        <div className={css.cards}>
            <EventCard
                onClick={() => next(1)}
                event_price={1500}
                event_name={
                    'Винный ужин с виноделом Мануэля Морага Гутьерресом'
                }
                event_desc={
                    'Встретимся на ужине с чилийским виноделом в седьмом поколении, Мануэлем Морага Гутьерресом (Cacique Maravilla). Его семья владеет виноградником с 1776 года в городе Юмбель (долина Био-Био)'
                }
                event_img={
                    'http://cabinet.clientomer.ru/storage/270027/advents/16.jpg'
                }
            />
        </div>
    );
};
