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
import { Feature } from '@yandex/ymaps3-types/packages/clusterer';
import { useAtom } from 'jotai';
import { getCurrentCity } from '@/atoms/cityListAtom.ts';
import { MOCK_Restaurants } from '@/mockData.ts';
import { IRestaurant } from '@/types/restaurant.ts';
import { IconlyLocation } from '@/components/Icons/Location.tsx';
import { TimeCircle } from '@/components/Icons/TimeCircle.tsx';
import { formatWorkTime } from '@/utils.ts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { PhoneCallIcon } from '@/components/Icons/PhoneCallIcon.tsx';
import { backButtonAtom } from '@/atoms/backButtonAtom.ts';

interface IRestaurantDetails {
    selectedRest: IRestaurant;
}

const RestaurantDetails = ({ selectedRest }: IRestaurantDetails) => {
    return (
        <div className={css.restInfoContainer}>
            <div className={css.restInfo}>
                <span className={classNames(css.p15, css.restInfo__title)}>
                    {selectedRest?.title}
                </span>
                <div className={classNames(css.p15, css.restInfo)}>
                    <div className={css.restInfo_block}>
                        <IconlyLocation
                            size={18}
                            color={'var(--dark-grey)'}
                        ></IconlyLocation>
                        <div className={css.restInfo_block__payload}>
                            <span
                                className={classNames(
                                    css.mont,
                                    css.restInfo__address
                                )}
                            >
                                {selectedRest?.address}
                            </span>
                            <div className={css.restInfo__metro_block}>
                                <div
                                    className={css.restInfo__metro}
                                    style={{
                                        backgroundColor: `${selectedRest?.address_station_color}`,
                                    }}
                                />
                                <span
                                    className={classNames(
                                        css.mont,
                                        css.restInfo__address
                                    )}
                                >
                                    {selectedRest?.address_station}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={css.restInfo_block}>
                        <TimeCircle size={18} color={'var(--dark-grey)'} />
                        <div className={css.restInfo_block__payload}>
                            {selectedRest?.worktime
                                ? formatWorkTime(selectedRest?.worktime).map(
                                      (v, index) => (
                                          <span
                                              className={classNames(
                                                  css.mont,
                                                  css.restInfo__address
                                              )}
                                              key={index}
                                          >
                                              {v}
                                          </span>
                                      )
                                  )
                                : null}
                        </div>
                    </div>
                    <span
                        className={classNames(
                            css.mont,
                            css.restInfo__address,
                            css.restInfo_about
                        )}
                    >
                        {selectedRest?.about_text}
                    </span>
                </div>
                <div>
                    <Swiper
                        modules={[FreeMode]}
                        freeMode={true}
                        slidesPerView={'auto'}
                        slidesOffsetAfter={64}
                        slidesOffsetBefore={15}
                    >
                        <SwiperSlide style={{ width: 'max-content' }}>
                            <span
                                className={classNames(
                                    css.mont,
                                    css.swiper_slide
                                )}
                            >
                                Открыто до {selectedRest?.openTime}
                            </span>
                        </SwiperSlide>
                        {selectedRest?.about_kitchen.split(',').map((v) => (
                            <SwiperSlide
                                key={v}
                                style={{ width: 'max-content' }}
                            >
                                <span
                                    className={classNames(
                                        css.mont,
                                        css.swiper_slide
                                    )}
                                >
                                    {v} кухня
                                </span>
                            </SwiperSlide>
                        ))}
                        <SwiperSlide style={{ width: 'max-content' }}>
                            <span
                                className={classNames(
                                    css.mont,
                                    css.swiper_slide
                                )}
                            >
                                Средний чек {selectedRest?.avg_cheque} ₽
                            </span>
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/*<div className={css.p15}>*/}
                {/*    <div*/}
                {/*        className="ya-taxi-widget"*/}
                {/*        data-ref="https%3A%2F%2Fdemo.efinskiy.ru%2F"*/}
                {/*        data-proxy-url="https://{app}.redirect.appmetrica.yandex.com/route?end-lat={end-lat}&amp;end-lon={end-lon}&amp;tariffClass={tariff}&amp;ref={ref}&amp;appmetrica_tracking_id={redirect}&amp;lang={lang}&amp;erid={erid}"*/}
                {/*        data-tariff="econom"*/}
                {/*        data-app="3"*/}
                {/*        data-lang="ru"*/}
                {/*        data-redirect="1178268795219780156"*/}
                {/*        data-description={selectedRest?.address}*/}
                {/*        data-size="s"*/}
                {/*        data-theme="normal"*/}
                {/*        data-title="Вызвать такси"*/}
                {/*        data-use-location="false"*/}
                {/*        data-point-a=""*/}
                {/*        data-point-b={selectedRest?.address_lonlng}*/}
                {/*    />*/}
                {/*</div>*/}
                <div className={classNames(css.p15, css.buttons)}>
                    <div className={css.redButton}>
                        <span className={css.mont}>Забронировать</span>
                    </div>

                    <div className={css.roundButton}>
                        <PhoneCallIcon size={24} color={'var(--dark-grey)'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const RestaurantMapPage = () => {
    const [location, setLocation] = useState({
        center: [37.618878, 55.751427],
        zoom: 12,
    });
    const [features, setFeatures] = useState<Feature[]>([]);
    const navigate = useNavigate();
    const [, setYmap] = useState<YMaps.YMap>();
    const [selectedPoint, setSelectedPoint] = useState<string | null>(null);
    const [city] = useAtom(getCurrentCity);
    const [selectedRest, setSelectedRest] = useState<IRestaurant>();
    const [switchCurrent, setSwitchCurrent] = useState('map');
    const [, setBackButton] = useAtom(backButtonAtom);

    useEffect(() => {
        setFeatures(
            MOCK_Restaurants.map((v) => ({
                type: 'Feature',
                id: `${v.id}`,
                properties: {
                    name: `${v.title}`,
                    description: 'rest',
                },
                geometry: {
                    type: 'Point',
                    coordinates: [
                        Number(v.address_lonlng.split(',')[0]),
                        Number(v.address_lonlng.split(',')[1]),
                    ],
                },
            }))
        );
    }, []);

    useEffect(() => {
        switch (city?.name_english) {
            case 'moscow':
                setLocation({
                    center: [37.618878, 55.751427],
                    zoom: 12,
                });
                break;
            case 'spb':
                setLocation({
                    center: [30.314997, 59.938784],
                    zoom: 12,
                });
                break;
            case 'ekb':
                setLocation({
                    center: [60.597474, 56.838011],
                    zoom: 12,
                });
                break;
        }
    }, [city]);

    useEffect(() => {
        const rest = MOCK_Restaurants.find(
            (v) => v.id == Number(selectedPoint)
        );
        if (rest) {
            setSelectedRest(rest);
        } else {
            setSelectedRest(undefined);
        }
    }, [selectedPoint]);

    useEffect(() => {
        setSelectedRest(undefined);
        setSelectedPoint(null);
    }, [switchCurrent]);

    // hack to prevent from scrolling on page
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'scroll';
        };
    }, []);

    const navigateToRestaurant = (id: number) => {
        setBackButton('/map');
        navigate(`/restaurant/${id}`);
    };

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
                {selectedRest ? (
                    <RestaurantDetails selectedRest={selectedRest} />
                ) : null}
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
                {switchCurrent === 'map' ? (
                    <div className={css.bottomEl}>
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
                ) : (
                    <div className={css.bottomEl}>
                        <div className={css.restListContainer}>
                            {MOCK_Restaurants.filter(
                                (v) =>
                                    v.city.name_english === city?.name_english
                            ).map((v) => (
                                <div
                                    className={css.restList_item}
                                    key={v.title}
                                    onClick={() => navigateToRestaurant(v.id)}
                                >
                                    <span className={css.restList_item_title}>
                                        {v.title}
                                    </span>
                                    <span
                                        className={classNames(
                                            css.mont,
                                            css.restList_item_subtitle
                                        )}
                                    >
                                        {v.address}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Page>
    );
};
