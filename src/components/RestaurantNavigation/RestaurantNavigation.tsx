import { FC } from 'react';
import css from './RestaurantNavigation.module.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { classNames } from '@telegram-apps/sdk-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

export const RestaurantNavigation: FC = () => {
    return (
        <div className={css.navigationSlider}>
            <Swiper modules={[FreeMode]} freeMode={true} slidesPerView={'auto'}>
                <SwiperSlide style={{ width: 'max-content' }}>
                    <AnchorLink href="#booking" offset={64}>
                        <div
                            className={classNames(
                                css.navigationLink
                                // css.navigationLinkActive
                            )}
                        >
                            Бронирование
                        </div>
                    </AnchorLink>
                </SwiperSlide>
                <SwiperSlide style={{ width: 'max-content' }}>
                    <AnchorLink href="#gallery" offset={128}>
                        <div className={css.navigationLink}>Галерея</div>
                    </AnchorLink>
                </SwiperSlide>
                <SwiperSlide style={{ width: 'max-content' }}>
                    <AnchorLink href="#menu" offset={128}>
                        <div className={css.navigationLink}>Меню</div>
                    </AnchorLink>
                </SwiperSlide>
                <SwiperSlide style={{ width: 'max-content' }}>
                    <AnchorLink href="#about" offset={128}>
                        <div className={css.navigationLink}>О месте</div>
                    </AnchorLink>
                </SwiperSlide>
                <SwiperSlide style={{ width: 'max-content' }}>
                    <AnchorLink href="#chef" offset={128}>
                        <div className={css.navigationLink}>О шефе</div>
                    </AnchorLink>
                </SwiperSlide>
                <SwiperSlide style={{ width: '24px' }}></SwiperSlide>
            </Swiper>
        </div>
    );
};
