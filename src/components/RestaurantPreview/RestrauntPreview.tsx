import css from './RestrauntPreview.module.css';
import { classNames } from '@telegram-apps/sdk-react';
import { RestaurantBadge } from '@/components/RestaurantPreview/RestaurantBadge/RestaurantBadge.tsx';
import { Swiper } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import './swipergap.css';
import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import { SwiperSlide } from 'swiper/react';
import { RestaurantBadgePhoto } from '@/components/RestaurantPreview/RestaurantBadgePhoto/RestaurantBadgePhoto.tsx';
import { InfoTag } from '@/components/InfoTag/InfoTag.tsx';
import { Link } from 'react-router-dom';

export const RestaurantPreview = () => {
    return (
        <Link className={css.restaurant} to={'/restaurant/1'}>
            <div
                className={classNames(css.imaged, css.bgImage)}
                style={{ backgroundImage: `url('/img/placeholder_2.png')` }}
            >
                <div className={css.floatingBadges}>
                    <Swiper
                        slidesPerView="auto"
                        modules={[FreeMode]}
                        freeMode={true}
                    >
                        <SwiperSlide
                            className={css.swiperSlide}
                            style={{ width: '130px' }}
                        >
                            <RestaurantBadge
                                logo={'/img/placeholder_3.png'}
                                slogan={'Бар · гриль · коптильня'}
                            />
                        </SwiperSlide>
                        <SwiperSlide
                            className={css.swiperSlide}
                            style={{ width: '130px' }}
                        >
                            <RestaurantBadgePhoto
                                url={'/img/placeholder_4.png'}
                            />
                        </SwiperSlide>
                        <SwiperSlide
                            className={css.swiperSlide}
                            style={{ width: '130px' }}
                        >
                            <RestaurantBadgePhoto
                                url={'/img/placeholder_6.png'}
                            />
                        </SwiperSlide>
                        <SwiperSlide
                            className={css.swiperSlide}
                            style={{ width: '130px' }}
                        >
                            <RestaurantBadgePhoto
                                url={'/img/placeholder_4.png'}
                            />
                        </SwiperSlide>
                        <SwiperSlide
                            className={css.swiperSlide}
                            style={{ width: '130px' }}
                        >
                            <RestaurantBadgePhoto
                                url={'/img/placeholder_6.png'}
                            />
                        </SwiperSlide>
                        {/*
                            Пустой слайд для корректного отображения последнего слайда
                        */}
                        <SwiperSlide style={{ width: '130px' }}></SwiperSlide>
                    </Swiper>
                </div>
                <div className={css.imagedBottom}>
                    <div
                        className={classNames(css.chefPhoto, css.bgImage)}
                        style={{
                            backgroundImage: `url('/img/placeholder_5.png')`,
                        }}
                    ></div>
                    <div className={css.chefInfo}>
                        <span className={css.chefTitle}>Бренд-шеф</span>
                        <span className={css.chefName}>Алексей Смирнов</span>
                    </div>
                </div>
            </div>
            <div className={css.resInfo}>
                <div className={css.resTitleWrapper}>
                    <h2 className={css.resTitle}>Smoke BBQ</h2>
                    <span className={css.resSlogan}>
                        Бар · гриль · коптильня
                    </span>
                </div>
                <div className={css.tags}>
                    <InfoTag text={'Открыто до 00:00'} />
                    <InfoTag text={'Ср. чек 1500₽'} />
                    <InfoTag text={'Ср. чек 1500₽'} />
                    <InfoTag text={'Ср. чек 1500₽'} />
                </div>
            </div>
        </Link>
    );
};
