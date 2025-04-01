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
import { FC } from 'react';
import { IRestaurantShort } from '@/types/restaurant.ts';

interface IProps {
    restaurant: IRestaurantShort;
}

export const RestaurantPreview: FC<IProps> = ({ restaurant }) => {
    return (
        <Link className={css.restaurant} to={`/restaurant/${restaurant.id}`}>
            <div
                className={classNames(css.imaged, css.bgImage)}
                style={{
                    backgroundImage: `url(${restaurant.thumbnail_photo})`,
                }}
            >
                <div className={css.floatingBadges}>
                    <Swiper
                        slidesPerView="auto"
                        modules={[FreeMode]}
                        freeMode={true}
                    >
                        <SwiperSlide style={{ width: '15px' }}></SwiperSlide>
                        <SwiperSlide
                            className={css.swiperSlide}
                            style={{ width: '130px' }}
                        >
                            <RestaurantBadge logo={restaurant.logo_url} />
                        </SwiperSlide>
                        {restaurant.photo_cards.map((card) => (
                            <SwiperSlide
                                className={css.swiperSlide}
                                style={{ width: '130px' }}
                                key={`card-${card.id}`}
                            >
                                <RestaurantBadgePhoto url={card.url} />
                            </SwiperSlide>
                        ))}
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
                            backgroundImage: `url(${restaurant.brand_chef.photo_url})`,
                        }}
                    ></div>
                    <div className={css.chefInfo}>
                        <span className={css.chefTitle}>Бренд-шеф</span>
                        <span className={css.chefName}>
                            {restaurant.brand_chef.name}
                        </span>
                    </div>
                </div>
            </div>
            <div className={css.resInfo}>
                <div className={css.resTitleWrapper}>
                    <h2 className={css.resTitle}>{restaurant.title}</h2>
                    <span className={css.resSlogan}>{restaurant.slogan}</span>
                </div>
                <div className={css.tags}>
                    <InfoTag text={`Открыто до ${restaurant.openTime}`} />
                    <InfoTag text={`Ср. чек ${restaurant.avg_cheque}₽`} />
                </div>
            </div>
        </Link>
    );
};
