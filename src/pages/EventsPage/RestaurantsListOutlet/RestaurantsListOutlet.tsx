import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import css from './RestaurantsListOutlet.module.css';
import { RestaurantCard } from '@/pages/EventsPage/RestaurantsListOutlet/RestaurantCard/RestaurantCard.tsx';
import { useAtom } from 'jotai';
import { currentCityAtom } from '@/atoms/currentCityAtom.ts';
import { MOCK_Restaurants } from '@/mockData.ts';
import { IEventBookingContext } from '@/utils.ts';

export const RestaurantsListOutlet = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [city] = useAtom(currentCityAtom);
    const [, setBookingInfo] = useOutletContext<IEventBookingContext>();

    const next = (res_id: number) => {
        setBookingInfo((p) => ({ ...p, restaurantId: String(res_id) }));
        navigate(`/events/${id}/restaurant/${res_id}`);
    };

    return (
        <>
            <div className={css.list}>
                {MOCK_Restaurants.filter(
                    (r) => r.city.name_english === city
                ).map((res) => (
                    <RestaurantCard
                        key={res.id}
                        title={res.title}
                        address={res.address}
                        image={res.thumbnail_photo}
                        onClick={() => next(res.id)}
                    />
                ))}
            </div>
        </>
    );
};
