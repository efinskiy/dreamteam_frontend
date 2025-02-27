import { Page } from '@/components/Page.tsx';
import css from './Restaurant.module.css';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.tsx';
import { BackIcon } from '@/components/Icons/BackIcon.tsx';
import { IconlyProfile } from '@/components/Icons/Profile.tsx';
import { RestaurantTopPreview } from '@/components/RestaurantTopPreview/RestaurantTopPreview.tsx';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@telegram-apps/sdk-react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';
import { FreeMode } from 'swiper/modules';

export const Restaurant = () => {
    const navigate = useNavigate();

    return (
        <Page back={true}>
            <div className={css.header}>
                <div className={css.headerNav}>
                    <div className={css.headerNavBlock}>
                        <RoundedButton
                            icon={<BackIcon color={'var(--dark-grey)'} />}
                            action={() => navigate(-1)}
                        ></RoundedButton>
                    </div>
                    <div className={css.headerNavBlock}>
                        <RoundedButton
                            icon={<IconlyProfile color={'var(--dark-grey)'} />}
                            action={() => alert(1)}
                        />
                    </div>
                </div>
            </div>
            <div className={css.pageContainer}>
                <RestaurantTopPreview />

                <div className={css.contentContainer}>
                    <div className={css.navSliderAndBookingContainer}>
                        <div className={css.navigationSlider}>
                            <div
                                className={classNames(
                                    css.navigationLink,
                                    css.navigationLinkActive
                                )}
                            >
                                Бронь
                            </div>
                            <div className={css.navigationLink}>
                                <span>Галерея</span>
                            </div>
                            <div className={css.navigationLink}>
                                <span>Меню</span>
                            </div>
                            <div className={css.navigationLink}>
                                <span>О месте</span>
                            </div>
                            <div className={css.navigationLink}>
                                <span>О шефе</span>
                            </div>
                        </div>
                        <div className={css.bookingContaner}></div>
                    </div>
                    <div className={css.contentBlock}>
                        <div className={css.headerContainer}>
                            <h3 className={css.contentHeader}>Галерея</h3>
                            <div className={css.photoSliderNavigationContainer}>
                                <div
                                    className={classNames(
                                        css.photoSliderNavigationItem,
                                        css.photoSliderNavigationActive
                                    )}
                                >
                                    <span>Все фото</span>
                                </div>
                                <div className={css.photoSliderNavigationItem}>
                                    <span>Интерьер</span>
                                </div>
                                <div className={css.photoSliderNavigationItem}>
                                    <span>Блюда</span>
                                </div>
                                <div className={css.photoSliderNavigationItem}>
                                    <span>Напитки</span>
                                </div>
                            </div>
                        </div>
                        <div className={css.photoSliderContainer}>
                            <Swiper
                                slidesPerView="auto"
                                modules={[FreeMode]}
                                freeMode={true}
                            >
                                <SwiperSlide className={css.photoBig}>
                                    <div
                                        className={classNames(
                                            css.photo,
                                            css.photoBig
                                        )}
                                        style={{
                                            backgroundImage: `url("/img/placeholder_7.png")`,
                                        }}
                                    ></div>
                                </SwiperSlide>
                                <SwiperSlide
                                    className={css.smallPhotoSlideContainer}
                                >
                                    <div className={css.smallPhotoContainer}>
                                        <div
                                            className={classNames(
                                                css.photo,
                                                css.photoSmall
                                            )}
                                            style={{
                                                backgroundImage: `url("/img/placeholder_4.png")`,
                                            }}
                                        ></div>
                                        <div
                                            className={classNames(
                                                css.photo,
                                                css.photoSmall
                                            )}
                                            style={{
                                                backgroundImage: `url("/img/placeholder_6.png")`,
                                            }}
                                        ></div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide
                                    className={css.smallPhotoSlideContainer}
                                >
                                    <div className={css.smallPhotoContainer}>
                                        <div
                                            className={classNames(
                                                css.photo,
                                                css.photoSmall
                                            )}
                                            style={{
                                                backgroundImage: `url("/img/placeholder_4.png")`,
                                            }}
                                        ></div>
                                        <div
                                            className={classNames(
                                                css.photo,
                                                css.photoSmall
                                            )}
                                            style={{
                                                backgroundImage: `url("/img/placeholder_6.png")`,
                                            }}
                                        ></div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide
                                    className={css.smallPhotoSlideContainer}
                                >
                                    <div className={css.smallPhotoContainer}>
                                        <div
                                            className={classNames(
                                                css.photo,
                                                css.photoSmall
                                            )}
                                            style={{
                                                backgroundImage: `url("/img/placeholder_4.png")`,
                                            }}
                                        ></div>
                                        <div
                                            className={classNames(
                                                css.photo,
                                                css.photoSmall
                                            )}
                                            style={{
                                                backgroundImage: `url("/img/placeholder_6.png")`,
                                            }}
                                        ></div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide
                                    className={css.smallPhotoSlideContainer}
                                >
                                    <div className={css.smallPhotoContainer}>
                                        <div
                                            className={classNames(
                                                css.photo,
                                                css.photoSmall
                                            )}
                                            style={{
                                                backgroundImage: `url("/img/placeholder_4.png")`,
                                            }}
                                        ></div>
                                        <div
                                            className={classNames(
                                                css.photo,
                                                css.photoSmall
                                            )}
                                            style={{
                                                backgroundImage: `url("/img/placeholder_6.png")`,
                                            }}
                                        ></div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide
                                    className={css.smallPhotoSlideContainer}
                                ></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
};
