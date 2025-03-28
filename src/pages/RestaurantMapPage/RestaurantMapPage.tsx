import { Page } from '@/components/Page.tsx';
import css from './RestaurantMapPage.module.css';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.tsx';
import { BackIcon } from '@/components/Icons/BackIcon.tsx';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@telegram-apps/sdk-react';
import {
    reactify,
    YMap,
    YMapDefaultFeaturesLayer,
    YMapDefaultSchemeLayer,
    YMapMarker,
} from '@/lib/ymaps.ts';
import { LogoMapIcon } from '@/components/Icons/LogoMapIcon.tsx';
import { useEffect, useState } from 'react';
import { InputSlider } from '@/pages/RestaurantMapPage/InputSlider/InputSlider.tsx';

export const RestaurantMapPage = () => {
    const navigate = useNavigate();

    const [switchCurrent, setSwitchCurrent] = useState('map');

    // hack to prevent from scrolling on page
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'scroll';
        };
    }, []);

    return (
        <Page back={true}>
            <div className={css.page}>
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
                            Рестораны в <span className={css.red}>Москве</span>
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
                    <YMap
                        location={reactify.useDefault({
                            center: [39.752053, 47.227037 - 0.0005],
                            // 47.226539, 39.752190
                            zoom: 17,
                        })}
                    >
                        <YMapDefaultSchemeLayer />
                        <YMapDefaultFeaturesLayer />

                        <YMapMarker
                            coordinates={reactify.useDefault([
                                39.752053, 47.227037,
                            ])}
                            draggable={false}
                            onClick={(e) => console.log(e)}
                        >
                            <LogoMapIcon size={26}></LogoMapIcon>
                        </YMapMarker>
                    </YMap>
                </div>
            </div>
        </Page>
    );
};
