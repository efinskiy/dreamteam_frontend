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
import { useEffect, useState } from 'react';
import { DownArrow } from '@/components/Icons/DownArrow.tsx';
import { InstagramIcon } from '@/components/Icons/Instagram.tsx';
import { GoToPathIcon } from '@/components/Icons/GoToPathIcon.tsx';
import { PhoneCallIcon } from '@/components/Icons/PhoneCallIcon.tsx';
import { RestaurantNavigation } from '@/components/RestaurantNavigation/RestaurantNavigation.tsx';
import { ContentBlock } from '@/components/ContentBlock/ContentBlock.tsx';
import { ContentContainer } from '@/components/ContentContainer/ContentContainer.tsx';
import { HeaderContainer } from '@/components/ContentBlock/HeaderContainer/HeaderContainer.tsx';
import { HeaderContent } from '@/components/ContentBlock/HeaderContainer/HeaderContent/HeaderContainer.tsx';
import { HeaderSubText } from '@/components/ContentBlock/HeaderContainer/HeaderSubText/HeaderContainer.tsx';
import { MenuPopup } from '@/components/FullScreenPopup/MenuPopup.tsx';

export const Restaurant = () => {
    const navigate = useNavigate();

    const [hideAbout, setHideAbout] = useState(true);
    const [hideChefAbout, setHideChefAbout] = useState(true);
    const [hideWorkHours, setHideWorkHours] = useState(true);

    const [headerScrolled, setHeaderScrolled] = useState(false);
    const [menuPopupOpen, setMenuPopupOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHeaderScrolled(window.scrollY > 190); // Если прокрутка больше 50px – меняем состояние
            console.log(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Page back={true}>
            <MenuPopup
                isOpen={menuPopupOpen}
                setOpen={setMenuPopupOpen}
                menuItems={[
                    '/img/menu1.png',
                    '/img/menu2.png',
                    '/img/menu3.png',
                    '/img/menu4.png',
                    '/img/menu5.png',
                ]}
            ></MenuPopup>
            <div
                className={classNames(
                    css.header,
                    headerScrolled ? css.scrolled : null
                )}
            >
                <div className={css.headerNav}>
                    <div className={css.headerTop}>
                        <div className={css.headerNavBlock}>
                            <RoundedButton
                                icon={<BackIcon color={'var(--dark-grey)'} />}
                                action={() => navigate(-1)}
                            ></RoundedButton>
                        </div>
                        {headerScrolled ? (
                            <span className={css.headerTitle}>Smoke BBQ</span>
                        ) : null}
                        <div className={css.headerNavBlock}>
                            <RoundedButton
                                icon={
                                    <IconlyProfile color={'var(--dark-grey)'} />
                                }
                                action={() => navigate('/profile')}
                            />
                        </div>
                    </div>
                    {headerScrolled ? <RestaurantNavigation /> : null}
                </div>
            </div>
            <div className={css.floatingFooter}>
                <div className={css.floatingFooterWrapper}>
                    <div className={css.bookingButton}>
                        <span className={css.text}>Забронировать</span>
                    </div>
                    <RoundedButton
                        icon={
                            <GoToPathIcon
                                size={24}
                                color={'var(--dark-grey)'}
                            />
                        }
                    />
                    <RoundedButton
                        icon={
                            <PhoneCallIcon
                                size={24}
                                color={'var(--dark-grey)'}
                            />
                        }
                    />
                </div>
            </div>
            <div className={css.pageContainer}>
                <RestaurantTopPreview />

                <ContentContainer>
                    <div
                        id={'booking'}
                        className={css.navSliderAndBookingContainer}
                    >
                        <RestaurantNavigation />
                        <div className={css.bookingContaner}></div>
                    </div>
                    <ContentBlock id={'gallery'}>
                        <HeaderContainer>
                            <HeaderContent title={'Галерея'} />
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
                        </HeaderContainer>
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
                    </ContentBlock>
                </ContentContainer>
                <ContentContainer id={'menu'}>
                    <ContentBlock>
                        <HeaderContainer>
                            <HeaderContent title={'Меню'} />
                            <HeaderSubText text={'Рекомендуем'} />
                        </HeaderContainer>
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
                            action={() => setMenuPopupOpen(true)}
                        />
                    </ContentBlock>
                </ContentContainer>
                <ContentContainer>
                    <ContentBlock>
                        <HeaderContainer>
                            <HeaderContent id={'about'} title={'О месте'} />
                        </HeaderContainer>
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
                                штат Техас. Наша винная карта — отдельный
                                предмет гордости. В ней — свыше 100 этикеток
                                вина, которые любим и пьем сами: от культовой
                                классики Европы и США до трендовых регионов и
                                редких находок. Кроме того, внушительная
                                коллекция бурбонов и линейка пива. Каждый день
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
                    </ContentBlock>
                    <ContentBlock>
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
                    </ContentBlock>
                    <ContentBlock>
                        <div className={css.infoBlock}>
                            <div className={css.top}>
                                <span className={css.title}>
                                    Социальные сети
                                </span>
                            </div>
                            <div className={css.infoBlock}>
                                <div className={css.socialRow}>
                                    <InstagramIcon color={'black'} size={20} />
                                    <span className={css.socialLink}>
                                        poly.stpete
                                    </span>
                                </div>
                            </div>
                        </div>
                    </ContentBlock>
                    <ContentBlock>
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
                    </ContentBlock>
                </ContentContainer>
                <ContentContainer>
                    <ContentBlock>
                        <HeaderContainer>
                            <HeaderContent id={'chef'} title={'О шефе'} />
                        </HeaderContainer>
                        <div className={css.aboutContainer}>
                            <span
                                className={classNames(
                                    css.aboutText,
                                    hideChefAbout ? css.trimLines : null
                                )}
                            >
                                Илья Бурнасов, шеф-повар с 17-летним опытом в
                                ресторанной индустрии Петербурга, участник
                                престижных гастрономических фестивалей и
                                стажировок в Лондоне и Москве. Свои первые шаги
                                в профессии он сделал в Ginza Project, где
                                принимал участие в запуске новых ресторанов.
                                Затем возглавил кухню SPA-курорта
                                «Президент-Отель», а позже стал бренд-шефом
                                таких известных проектов, как Hitch, Locale,
                                «Ателье. Tapas & Bar» и концепт-шефом PioNero.
                                Проходил стажировки в White Rabbit, а также в
                                лондонских Beats, Zelman Meats, Burger &
                                Lobster. Финалист всероссийского конкурса «На
                                высоте» (2017), участник Madrid Fusion (2018).
                                Преподавал в Novikov Space
                            </span>
                            <div
                                className={css.trimLinesButton}
                                onClick={() =>
                                    setHideChefAbout((prev) => !prev)
                                }
                            >
                                <span className={css.text}>
                                    {hideChefAbout ? 'Читать больше' : 'Меньше'}
                                </span>
                            </div>
                        </div>
                        <div className={css.chefInfoContainer}>
                            <div
                                className={classNames(
                                    css.chefImage,
                                    css.bgImage
                                )}
                                style={{
                                    backgroundImage: `url(/img/chef.png)`,
                                }}
                            ></div>
                            <div className={css.chefInfo}>
                                <span className={css.title}>Роман Клюквин</span>
                                <span className={css.subTitle}>Бренд-шеф</span>
                            </div>
                        </div>
                    </ContentBlock>
                </ContentContainer>
            </div>
        </Page>
    );
};
