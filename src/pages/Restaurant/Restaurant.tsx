import { Page } from '@/components/Page.tsx';
import css from './Restaurant.module.css';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.tsx';
import { BackIcon } from '@/components/Icons/BackIcon.tsx';
import { IconlyProfile } from '@/components/Icons/Profile.tsx';
import { RestaurantTopPreview } from '@/components/RestaurantTopPreview/RestaurantTopPreview.tsx';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@telegram-apps/sdk-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { UnmountClosed } from 'react-collapse';

import 'swiper/css/bundle';

import { FreeMode } from 'swiper/modules';
import { UniversalButton } from '@/components/Buttons/UniversalButton/UniversalButton.tsx';
import { useState } from 'react';
import { DownArrow } from '@/components/Icons/DownArrow.tsx';

export const Restaurant = () => {
    const navigate = useNavigate();

    const [hideAbout, setHideAbout] = useState(true);
    const [hideWorkHours, setHideWorkHours] = useState(true);

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
                <div className={css.contentContainer}>
                    <div className={css.contentBlock}>
                        <div className={css.headerContainer}>
                            <h3 className={css.contentHeader}>О месте</h3>
                        </div>
                        <div className={css.aboutContainer}>
                            <span
                                className={classNames(
                                    css.aboutText,
                                    hideAbout ? css.trimLines : null
                                )}
                            >
                                Ресторан с концепцией ultimate firewood cooking,
                                где на огне готовится не только мясо, но и рыбу,
                                овощи и морепродукты. Главный специалитет —
                                брискет, говяжья грудинка, которую мы коптим в
                                смокере в течение 14–16 часов до совершенного
                                вкуса и текстуры. Технологию приготовления
                                бренд-шеф Алексей Каневский привез из Остина,
                                штат Техас.  Наша винная карта — отдельный
                                предмет гордости. В ней — свыше 100 этикеток
                                вина, которые любим и пьем сами: от культовой
                                классики Европы и США до трендовых регионов и
                                редких находок. Кроме того, внушительная
                                коллекция бурбонов и линейка пива.  Каждый день
                                готовим завтраки из печи: по будням с 09:00 до
                                12:00, по субботам — с 09:00 до 14:00. По
                                воскресеньям проводим бранчи для всей семьи,
                                меню которых почти не повторяется.
                            </span>
                            <div
                                className={css.trimLinesButton}
                                onClick={() => setHideAbout((prev) => !prev)}
                            >
                                <span className={css.text}>
                                    {hideAbout ? 'Читать больше' : 'Меньше'}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={css.contentBlock}>
                        <div className={css.infoBlock}>
                            <div className={css.top}>
                                <span className={css.title}>До 00:00</span>
                                <div
                                    className={css.right}
                                    onClick={() =>
                                        setHideWorkHours((prev) => !prev)
                                    }
                                >
                                    <span className={css.expandButton}>
                                        График
                                    </span>
                                    <div
                                        className={classNames(css.right, {
                                            [css.closed]: hideWorkHours,
                                        })}
                                    >
                                        <DownArrow
                                            size={20}
                                            color={'var(--grey)'}
                                        ></DownArrow>
                                    </div>
                                </div>
                            </div>
                            <UnmountClosed
                                isOpened={!hideWorkHours}
                                className={css.collapse}
                            >
                                <div className={css.workHours}>
                                    <span className={css.text}>
                                        Вс-чт: 09:00-23:00
                                    </span>
                                    <span className={css.text}>
                                        Пт-сб: 09:00-00:00
                                    </span>
                                </div>
                            </UnmountClosed>
                        </div>
                    </div>
                    <div className={css.contentBlock}>
                        <div className={css.infoBlock}>
                            <div className={css.top}>
                                <span className={css.title}>Детали</span>
                            </div>
                            <div className={css.infoBlock}>
                                <div className={css.textRow}>
                                    <span className={css.title}>Блюда:</span>
                                    <span className={css.value}>
                                        Мясо, Рыба и морепродукты
                                    </span>
                                </div>
                                <div className={css.textRow}>
                                    <span className={css.title}>Блюда:</span>
                                    <span className={css.value}>
                                        Мясо, Рыба и морепродукты
                                    </span>
                                </div>
                                <div className={css.textRow}>
                                    <span className={css.title}>
                                        Особенности:
                                    </span>
                                    <span className={css.value}>
                                        Завтраки, Обеды, Бранчи, Веранда, Второй
                                        этаж под мероприятия, Парковка
                                    </span>
                                </div>
                                <div className={css.textRow}>
                                    <span className={css.title}>С детьми:</span>
                                    <span className={css.value}>
                                        Дети — всегда желанные гости! Предложим
                                        детского меню, стульчик и раскраски
                                    </span>
                                </div>
                                <div className={css.textRow}>
                                    <span className={css.title}>
                                        С животными:
                                    </span>
                                    <span className={css.value}>
                                        Мы рады гостям с воспитанными питомцами
                                        и предложим миску с водой
                                    </span>
                                </div>
                                <div className={css.textRow}>
                                    <span className={css.title}>
                                        Средний чек:
                                    </span>
                                    <span className={css.value}>1500 ₽</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.contentContainer}></div>
            </div>
        </Page>
    );
};
