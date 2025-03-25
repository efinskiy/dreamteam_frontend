import { Page } from '@/components/Page.tsx';
import css from './EventsPage.module.css';
import { EventCard } from '@/components/EventCard/EventCard.tsx';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.tsx';
import { BackIcon } from '@/components/Icons/BackIcon.tsx';
import { useNavigate } from 'react-router-dom';

export const EventsPage = () => {
    const navigate = useNavigate();

    return (
        <Page back={true}>
            <div className={css.page}>
                <div className={css.header}>
                    <RoundedButton
                        bgColor={'var(--primary-background)'}
                        icon={<BackIcon color={'var(--dark-grey)'} />}
                        action={() => navigate(-1)}
                    />
                    <span className={css.header_title}>Мероприятия</span>
                    <div className={css.header_spacer} />
                </div>
                <div className={css.cards}>
                    <EventCard
                        event_id={1}
                        event_name={
                            'Винный ужин с виноделом Мануэля Морага Гутьерресом'
                        }
                        event_datetime={'13.02.2025'}
                        event_price={1500}
                        restaurant_title={'Poly'}
                        restaurant_img={
                            'http://cabinet.clientomer.ru/storage/270027/advents/16.jpg'
                        }
                    />
                    <EventCard
                        event_id={1}
                        event_name={
                            'Винный ужин с виноделом Мануэля Морага Гутьерресом'
                        }
                        event_datetime={'13.02.2025'}
                        event_price={1500}
                        restaurant_title={'Poly'}
                        restaurant_img={
                            'http://cabinet.clientomer.ru/storage/270027/advents/16.jpg'
                        }
                    />
                    <EventCard
                        event_id={1}
                        event_name={
                            'Винный ужин с виноделом Мануэля Морага Гутьерресом'
                        }
                        event_datetime={'13.02.2025'}
                        event_price={1500}
                        restaurant_title={'Poly'}
                        restaurant_img={
                            'http://cabinet.clientomer.ru/storage/270027/advents/16.jpg'
                        }
                    />
                    <EventCard
                        event_id={1}
                        event_name={
                            'Винный ужин с виноделом Мануэля Морага Гутьерресом'
                        }
                        event_datetime={'13.02.2025'}
                        event_price={1500}
                        restaurant_title={'Poly'}
                        restaurant_img={
                            'http://cabinet.clientomer.ru/storage/270027/advents/16.jpg'
                        }
                    />
                    <EventCard
                        event_id={1}
                        event_name={
                            'Винный ужин с виноделом Мануэля Морага Гутьерресом'
                        }
                        event_datetime={'13.02.2025'}
                        event_price={1500}
                        restaurant_title={'Poly'}
                        restaurant_img={
                            'http://cabinet.clientomer.ru/storage/270027/advents/16.jpg'
                        }
                    />
                </div>
            </div>
        </Page>
    );
};
