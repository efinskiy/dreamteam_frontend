import { Page } from '@/components/Page.tsx';
import css from './RestaurantMapPage.module.css';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.tsx';
import { BackIcon } from '@/components/Icons/BackIcon.tsx';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@telegram-apps/sdk-react';
import { useCallback, useEffect, useState } from 'react';
import { InputSlider } from '@/pages/RestaurantMapPage/InputSlider/InputSlider.tsx';
import { RestaurantOnMapIcon } from '@/components/Icons/RestaurantOnMapIcon.tsx';
import { RestaurantOnMapSelectedIcon } from '@/components/Icons/RestaurantOnMapIconSelected.tsx';
import {
    YMap,
    YMapComponentsProvider,
    YMapCustomClusterer,
    YMapDefaultFeaturesLayer,
    YMapDefaultSchemeLayer,
    YMapMarker,
} from 'ymap3-components';
import * as YMaps from '@yandex/ymaps3-types';
import { restPoints } from '@/lib/ymaps.ts';
import { Feature } from '@yandex/ymaps3-types/packages/clusterer';
import { useAtom } from 'jotai';
import { getCurrentCity } from '@/atoms/cityListAtom.ts';

const RestaurantsList = [
    {
        id: 1,
        title: 'Smoke BBQ',
    },
    {
        id: 2,
        title: 'Ресторан два',
    },
    {
        id: 3,
        title: 'Ресторан три',
    },
];

export const RestaurantMapPage = () => {
    const [location] = useState({
        center: [37.618878, 55.751427],
        zoom: 12,
    });
    const [features] = useState<Feature[]>(restPoints);
    const navigate = useNavigate();
    const [, setYmap] = useState<YMaps.YMap>();
    const [selectedPoint, setSelectedPoint] = useState<string | null>(null);
    const [city] = useAtom(getCurrentCity);

    const [switchCurrent, setSwitchCurrent] = useState('map');

    // hack to prevent from scrolling on page
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'scroll';
        };
    }, []);

    const updateSelectedPoint = (id: string) => {
        if (selectedPoint == id) {
            setSelectedPoint(null);
        } else {
            setSelectedPoint(id);
        }
    };
    const cluster = useCallback(
        (coordinates: YMaps.LngLat, features: Feature[]) => (
            <YMapMarker coordinates={coordinates}>
                <span
                    style={{
                        borderRadius: '8%',
                        background: 'black',
                        color: 'white',
                        width: 42,
                        height: 42,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontFamily: 'Mont, sans-serif',
                        fontWeight: '700',
                        fontSize: '18px',
                    }}
                >
                    {features.length}
                </span>
            </YMapMarker>
        ),
        []
    );
    const marker = useCallback(
        (feature: Feature) => (
            <YMapMarker
                coordinates={feature.geometry.coordinates}
                onClick={() => updateSelectedPoint(feature.id)}
            >
                {selectedPoint == feature.id ? (
                    <div className={css.mapPoint__selected}>
                        <RestaurantOnMapSelectedIcon />
                    </div>
                ) : (
                    <div className={css.mapPoint}>
                        <RestaurantOnMapIcon size={24} />
                    </div>
                )}
            </YMapMarker>
        ),
        [selectedPoint]
    );

    return (
        <Page back={true}>
            <div className={css.page}>
                <div className={css.restInfoContainer}>
                    <div className={css.restInfo}>
                        <span
                            className={classNames(css.p15, css.restInfo__title)}
                        >
                            {
                                RestaurantsList.find(
                                    (v) => String(v.id) == selectedPoint
                                )?.title
                            }
                        </span>
                    </div>
                </div>
                <div className={classNames(css.fixedHeader)}>
                    <div className={css.header}>
                        <RoundedButton
                            icon={
                                <BackIcon
                                    size={24}
                                    color={'var(--dark-grey)'}
                                />
                            }
                            action={() => navigate(-1)}
                            bgColor={'var(--primary-background)'}
                        />
                        <span className={css.header_title}>
                            Рестораны в{' '}
                            <span className={css.red}>{city?.name_dative}</span>
                        </span>
                        <div className={css.header_spacer} />
                    </div>
                    <InputSlider
                        itemsList={[
                            { id: 'map', value: 'На карте' },
                            { id: 'list', value: 'Списком' },
                        ]}
                        state={switchCurrent}
                        setState={setSwitchCurrent}
                    />
                </div>
                <div className={css.map}>
                    <YMapComponentsProvider
                        apiKey={'73a95f3b-fa74-4525-99e3-86ee1309f266'}
                        lang={'ru_RU'}
                    >
                        <YMap
                            location={location}
                            mode="vector"
                            ref={(ymap: YMaps.YMap) => setYmap(ymap)}
                        >
                            <YMapDefaultSchemeLayer />
                            <YMapDefaultFeaturesLayer />
                            <YMapCustomClusterer
                                features={features}
                                marker={marker}
                                gridSize={64}
                                cluster={cluster}
                            />
                        </YMap>
                    </YMapComponentsProvider>
                </div>
            </div>
        </Page>
    );
};
