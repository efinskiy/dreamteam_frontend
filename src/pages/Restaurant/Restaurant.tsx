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
import { UniversalButton } from '@/components/Buttons/UniversalButton/UniversalButton.tsx';

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
                            <div className={css.navigationLink}>Галерея</div>
                            <div className={css.navigationLink}>Меню</div>
                            <div className={css.navigationLink}>О месте</div>
                            <div className={css.navigationLink}>О шефе</div>
                        </div>
                        <div className={css.bookingContaner}></div>
                    </div>
                    <div className={css.contentBlock}>
                        <div className={css.headerContainer}>
                            <h3 className={css.contentHeader}>Галерея</h3>
                            <div className={css.photoSliderNavigationContainer}>
                                <Swiper
                                    modules={[FreeMode]}
                                    freeMode={true}
                                    slidesPerView={'auto'}
                                >
                                    <SwiperSlide
                                        style={{ width: 'max-content' }}
                                    >
                                        <div
                                            className={classNames(
                                                css.photoSliderNavigationItem,
                                                css.photoSliderNavigationActive
                                            )}
                                        >
                                            Все фото
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide
                                        style={{ width: 'max-content' }}
                                    >
                                        <div
                                            className={classNames(
                                                css.photoSliderNavigationItem
                                            )}
                                        >
                                            Интерьер
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide
                                        style={{ width: 'max-content' }}
                                    >
                                        <div
                                            className={
                                                css.photoSliderNavigationItem
                                            }
                                        >
                                            Блюда
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide
                                        style={{ width: 'max-content' }}
                                    >
                                        <div
                                            className={
                                                css.photoSliderNavigationItem
                                            }
                                        >
                                            Напитки
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
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
                <div className={css.contentContainer}>
                    <div className={css.contentBlock}>
                        <div className={css.headerContainer}>
                            <h3 className={css.contentHeader}>Меню</h3>
                            <span className={css.headerSubText}>
                                Рекомендуем
                            </span>
                        </div>
                        <div className={css.photoSliderContainer}>
                            <Swiper
                                slidesPerView="auto"
                                modules={[FreeMode]}
                                freeMode={true}
                            >
                                <SwiperSlide style={{ width: '162px' }}>
                                    <div className={css.menuItem}>
                                        <div
                                            className={classNames(
                                                css.menuItemPhoto,
                                                css.bgImage
                                            )}
                                            style={{
                                                backgroundImage: `url("/img/placeholder_4.png")`,
                                            }}
                                        ></div>
                                        <div className={css.menuItemInfo}>
                                            <span className={css.title}>
                                                Крем - суп из пастернака
                                            </span>
                                            <span className={css.subtitle}>
                                                1300 ₽
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: '162px' }}>
                                    <div className={css.menuItem}>
                                        <div
                                            className={classNames(
                                                css.menuItemPhoto,
                                                css.bgImage
                                            )}
                                            style={{
                                                backgroundImage: `url("/img/placeholder_4.png")`,
                                            }}
                                        ></div>
                                        <div className={css.menuItemInfo}>
                                            <span className={css.title}>
                                                Крем - суп из пастернака
                                            </span>
                                            <span className={css.subtitle}>
                                                1300 ₽
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: '162px' }}>
                                    <div className={css.menuItem}>
                                        <div
                                            className={classNames(
                                                css.menuItemPhoto,
                                                css.bgImage
                                            )}
                                            style={{
                                                backgroundImage: `url("/img/placeholder_4.png")`,
                                            }}
                                        ></div>
                                        <div className={css.menuItemInfo}>
                                            <span className={css.title}>
                                                Крем - суп из пастернака
                                            </span>
                                            <span className={css.subtitle}>
                                                1300 ₽
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <UniversalButton
                            title={'Посмотреть меню'}
                            width={'full'}
                            action={() => alert(1)}
                        />
                    </div>
                </div>
            </div>
        </Page>
    );
};
