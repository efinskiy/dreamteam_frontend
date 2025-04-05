import { FC, useEffect, useState } from 'react';
import css from './IndexPage.module.css';

import { Page } from '@/components/Page.tsx';
import { Header } from '@/components/Header/Header.tsx';
import { OptionsNavigation } from '@/components/OptionsNavigation/OptionsNavigation.tsx';
import { RestaurantPreview } from '@/components/RestaurantPreview/RestrauntPreview.tsx';
import { BookingReminder } from '@/components/BookingReminder/BookingReminder.tsx';
import { mockBookingDate } from '@/mockData.ts';
import { useAtom } from 'jotai';
import {
    currentCityAtom,
    setCurrentCityAtom,
} from '@/atoms/currentCityAtom.ts';
import { cityListAtom, ICity } from '@/atoms/cityListAtom.ts';
import { IConfirmationType } from '@/components/ConfirmationSelect/ConfirmationSelect.types.ts';
import { CitySelect } from '@/components/CitySelect/CitySelect.tsx';
import { IRestaurant } from '@/types/restaurant.ts';
import { restaurantsListAtom } from '@/atoms/restaurantsListAtom.ts';

const transformToConfirmationFormat = (v: ICity): IConfirmationType => {
    return {
        id: v.name_english,
        text: v.name,
    };
};

export const IndexPage: FC = () => {
    // Пиздец говно. Такого кала я еще не писал никогда.
    // Скорее всего это можно переписать в 2 строки, но я слишком пьян и уже ничего не понимаю.
    const [currentCityA] = useAtom(currentCityAtom);
    const [, setCurrentCityA] = useAtom(setCurrentCityAtom);
    const [cityListA] = useAtom(cityListAtom);
    const [cityListConfirm] = useState<IConfirmationType[]>(
        cityListA.map((v: ICity) => transformToConfirmationFormat(v))
    );
    const [restaurantsList, setRestaurantsList] = useState<IRestaurant[]>([]);

    const [currentCityS, setCurrentCityS] = useState<IConfirmationType>(
        cityListConfirm.find((v) => v.id == currentCityA) ?? {
            id: 'moscow',
            text: 'Москва',
        }
    );
    const [restaurants] = useAtom(restaurantsListAtom);

    useEffect(() => {
        setCurrentCityS(
            cityListConfirm.find((v) => v.id == currentCityA) ?? {
                id: 'moscow',
                text: 'Москва',
            }
        );
    }, [cityListA]);

    useEffect(() => {
        setRestaurantsList(
            restaurants.filter((v) => v.city.name_english == currentCityA)
        );
    }, [currentCityA, cityListA]);

    const updateCurrentCity = (city: IConfirmationType) => {
        setCurrentCityS(city);
        setCurrentCityA(city.id);
    };

    return (
        <Page back={false}>
            <div className={css.pageContainer}>
                <Header />
                <BookingReminder
                    title={'Smoke BBQ'}
                    address={''}
                    date={mockBookingDate}
                    persons={2}
                />
                {/*<NewsStories />*/}
                <OptionsNavigation />
                <div className={css.restaurants}>
                    <CitySelect
                        options={cityListConfirm}
                        currentValue={currentCityS}
                        onChange={updateCurrentCity}
                    />
                    {restaurantsList.map((rest) => (
                        <RestaurantPreview
                            restaurant={rest}
                            key={`rest-${rest.id}`}
                        />
                    ))}
                </div>
            </div>
        </Page>
    );
};
