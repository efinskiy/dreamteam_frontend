import { Page } from '@/components/Page.tsx';
import css from './Restaurant.module.css';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.tsx';
import { BackIcon } from '@/components/Icons/BackIcon.tsx';
import { IconlyProfile } from '@/components/Icons/Profile.tsx';
import { RestaurantTopPreview } from '@/components/RestaurantTopPreview/RestaurantTopPreview.tsx';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
import { MenuPopup } from '@/components/MenuPopup/MenuPopup.tsx';
import { mockGallery } from '@/mockData.ts';
import { mockMenu } from '@/mockData.ts';
import { GalleryCollection } from '@/pages/Restaurant/Restaurant.types.ts';
import { CallRestaurantPopup } from '@/components/CallRestaurantPopup/CallRestaurantPopup.tsx';
import { useScript } from 'usehooks-ts';
// import {
//     reactify,
//     YMap,
//     YMapDefaultFeaturesLayer,
//     YMapDefaultSchemeLayer,
//     YMapMarker,
// } from '@/lib/ymaps.ts';
// import { LogoMapIcon } from '@/components/Icons/LogoMapIcon.tsx';
import { EventCard } from '@/components/EventCard/EventCard.tsx';
import { useAtom } from 'jotai';
import { backButtonAtom } from '@/atoms/backButtonAtom.ts';

export const Restaurant = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useScript('https://yastatic.net/taxi-widget/ya-taxi-widget-v2.js', {
        removeOnUnmount: true,
    });

    const [hideAbout, setHideAbout] = useState(true);
    const [hideChefAbout, setHideChefAbout] = useState(true);
    const [hideWorkHours, setHideWorkHours] = useState(true);
    const [headerScrolled, setHeaderScrolled] = useState(false);
    const [, setBackUrlAtom] = useAtom(backButtonAtom);
    const [menuPopupOpen, setMenuPopupOpen] = useState(
        Boolean(searchParams.get('menuOpen')) || false
    );
    const [callPopup, setCallPopup] = useState(false);

    const [gallery] = useState<GalleryCollection[]>(mockGallery);
    const [currentGalleryCategory, setCurrentGalleryCategory] =
        useState('Все фото');
    const [currentGalleryPhotos, setCurrentGalleryPhotos] = useState<
        (string | string[])[]
    >([]);

    const goToProfile = () => {
        setBackUrlAtom(`/restaurant/1`);
        navigate('/profile');
    };

    useEffect(() => {
        setCurrentGalleryPhotos(getGalleryPhotos());
    }, [currentGalleryCategory]);

    useEffect(() => {
        const handleScroll = () => {
            setHeaderScrolled(window.scrollY > 190); // Если прокрутка больше 50px – меняем состояние
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getGalleryPhotos = () => {
        let photoList: string[] = [];

        if (currentGalleryCategory === 'Все фото') {
            gallery.forEach((g) => {
                g.photos.forEach((photo) => photoList.push(photo.link));
            });
            photoList = [...new Set(photoList)];
        } else {
            const searchedGallery = gallery.find(
                (item) => item.title === currentGalleryCategory
            );
            searchedGallery?.photos.forEach((photo) =>
                photoList.push(photo.link)
            );
        }

        const groupedPhotos: (string | string[])[] = [];
        let i = 0;

        while (i < photoList.length) {
            groupedPhotos.push(photoList[i]);
            i++;

            if (i < photoList.length - 1) {
                groupedPhotos.push([photoList[i], photoList[i + 1]]);
                i += 2;
            }
        }

        return groupedPhotos;
    };

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
            />
            <CallRestaurantPopup
                isOpen={callPopup}
                setOpen={setCallPopup}
                phone={'+79094167269'}
            />
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
                                action={() => navigate('/')}
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
                                action={() => goToProfile()}
                            />
                        </div>
                    </div>
                    {headerScrolled ? <RestaurantNavigation /> : null}
                </div>
            </div>
            <div className={css.floatingFooter}>
                <div className={css.floatingFooterWrapper}>
                    <div
                        className={css.bookingButton}
                        onClick={() => navigate(`/booking/1`)}
                    >
                        <span className={css.text}>Забронировать</span>
                    </div>
                    <RoundedButton
                        icon={
                            <GoToPathIcon
                                size={24}
                                color={'var(--dark-grey)'}
                            />
                        }
                        action={() =>
                            // ,
                            window.open(
                                'https://maps.yandex.ru/?ll=37.625285,55.769541&text=Smoke BBQ&z=17'
                            )
                        }
                    />
                    <RoundedButton
                        icon={
                            <PhoneCallIcon
                                size={24}
                                color={'var(--dark-grey)'}
                            />
                        }
                        action={() => setCallPopup(true)}
                    />
                </div>
            </div>
            <div className={css.pageContainer}>
                <RestaurantTopPreview />
                <div className={css.yaTaxi}>
                    <div
                        key={'taxi1'}
                        className="ya-taxi-widget"
                        data-ref="https%3A%2F%2Fdemo.efinskiy.ru%2F"
                        data-proxy-url="https://{app}.redirect.appmetrica.yandex.com/route?end-lat={end-lat}&amp;end-lon={end-lon}&amp;tariffClass={tariff}&amp;ref={ref}&amp;appmetrica_tracking_id={redirect}&amp;lang={lang}&amp;erid={erid}"
                        data-tariff="econom"
                        data-app="3"
                        data-lang="ru"
                        data-redirect="1178268795219780156"
                        data-description="Москва, Трубная, 18"
                        data-size="s"
                        data-theme="normal"
                        data-title="Вызвать такси"
                        data-use-location="false"
                        data-point-a=""
                        data-point-b="37.625285,55.769541"
                    ></div>
                </div>
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
                                        onClick={() =>
                                            setCurrentGalleryCategory(
                                                'Все фото'
                                            )
                                        }
                                    >
                                        <div
                                            className={classNames(
                                                css.photoSliderNavigationItem,
                                                currentGalleryCategory ==
                                                    'Все фото'
                                                    ? css.photoSliderNavigationActive
                                                    : null
                                            )}
                                        >
                                            Все фото
                                        </div>
                                    </SwiperSlide>
                                    {gallery.map((d) => (
                                        <SwiperSlide
                                            style={{ width: 'max-content' }}
                                            key={d.title}
                                            onClick={() =>
                                                setCurrentGalleryCategory(
                                                    d.title
                                                )
                                            }
                                        >
                                            <div
                                                className={classNames(
                                                    css.photoSliderNavigationItem,
                                                    currentGalleryCategory ==
                                                        d.title
                                                        ? css.photoSliderNavigationActive
                                                        : null
                                                )}
                                            >
                                                {d.title}
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </HeaderContainer>
                        <div className={css.photoSliderContainer}>
                            <Swiper
                                slidesPerView="auto"
                                modules={[FreeMode]}
                                freeMode={true}
                            >
                                {currentGalleryPhotos.map((photo, index) => (
                                    <SwiperSlide
                                        key={`${index}${photo}`}
                                        className={
                                            Array.isArray(photo)
                                                ? css.smallPhotoSlideContainer
                                                : css.photoBig
                                        }
                                    >
                                        {Array.isArray(photo) ? (
                                            <div
                                                className={
                                                    css.smallPhotoContainer
                                                }
                                            >
                                                {photo.map((smallPhoto, i) => (
                                                    <div
                                                        key={`${i}${smallPhoto}`}
                                                        className={classNames(
                                                            css.photo,
                                                            css.photoSmall
                                                        )}
                                                        style={{
                                                            backgroundImage: `url(${smallPhoto})`,
                                                        }}
                                                    ></div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div
                                                className={classNames(
                                                    css.photo,
                                                    css.photoBig
                                                )}
                                                style={{
                                                    backgroundImage: `url(${photo})`,
                                                }}
                                            ></div>
                                        )}
                                    </SwiperSlide>
                                ))}
                                <SwiperSlide
                                    style={{ width: '50px' }}
                                ></SwiperSlide>
                            </Swiper>
                        </div>
                    </ContentBlock>
                </ContentContainer>
                <ContentContainer>
                    <ContentBlock>
                        <HeaderContainer id={'menu'}>
                            <HeaderContent title={'Меню'} />
                            <HeaderSubText text={'Рекомендуем'} />
                        </HeaderContainer>
                        <div className={css.photoSliderContainer}>
                            <Swiper
                                slidesPerView="auto"
                                modules={[FreeMode]}
                                freeMode={true}
                            >
                                {mockMenu.map((menu, index) => (
                                    <SwiperSlide
                                        style={{ width: '162px' }}
                                        key={`${index}${menu.photo}`}
                                    >
                                        <div className={css.menuItem}>
                                            <div
                                                className={classNames(
                                                    css.menuItemPhoto,
                                                    css.bgImage
                                                )}
                                                style={{
                                                    backgroundImage: `url(${menu.photo})`,
                                                }}
                                            ></div>
                                            <div className={css.menuItemInfo}>
                                                <span className={css.title}>
                                                    {menu.title}
                                                </span>
                                                <span className={css.subtitle}>
                                                    {menu.price} ₽
                                                </span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
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
                                    {hideAbout ? 'Читать больше' : 'Скрыть'}
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
                                <a
                                    href={
                                        'https://www.instagram.com/poly.stpete/'
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className={css.socialRow}>
                                        <InstagramIcon
                                            color={'black'}
                                            size={20}
                                        />
                                        <span className={css.socialLink}>
                                            poly.stpete
                                        </span>
                                    </div>
                                </a>
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
                                    {hideChefAbout ? 'Читать больше' : 'Скрыть'}
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
                <div className={css.events}>
                    <EventCard
                        event_id={1}
                        event_name={
                            'Винный ужин с виноделом Мануэля Морага Гутьерресом'
                        }
                        event_datetime={'13.02.2025'}
                        event_price={1500}
                        restaurant_title={'Poly'}
                        restaurant_img={
                            'https://cabinet.clientomer.ru/storage/270027/advents/16.jpg'
                        }
                    />
                </div>
                <ContentContainer>
                    <ContentBlock>
                        <HeaderContainer>
                            <HeaderContent title={'Контакты'} />
                        </HeaderContainer>
                        <div className={css.mapContainer}>
                            {/*<div className={css.map}>*/}
                            {/*    <YMap*/}
                            {/*        location={reactify.useDefault({*/}
                            {/*            center: [39.752053, 47.227037 - 0.0005],*/}
                            {/*            // 47.226539, 39.752190*/}
                            {/*            zoom: 17,*/}
                            {/*        })}*/}
                            {/*    >*/}
                            {/*        <YMapDefaultSchemeLayer />*/}
                            {/*        <YMapDefaultFeaturesLayer />*/}

                            {/*        <YMapMarker*/}
                            {/*            coordinates={reactify.useDefault([*/}
                            {/*                39.752053, 47.227037,*/}
                            {/*            ])}*/}
                            {/*            draggable={false}*/}
                            {/*            onClick={(e) => console.log(e)}*/}
                            {/*        >*/}
                            {/*            <LogoMapIcon size={26}></LogoMapIcon>*/}
                            {/*        </YMapMarker>*/}
                            {/*    </YMap>*/}
                            {/*    <section>*/}
                            {/*        <div className={css.relativeRestInfo}>*/}
                            {/*            <div className={css.mapInfo}>*/}
                            {/*                <div className={css.mapInfoMetro}>*/}
                            {/*                    <div*/}
                            {/*                        className={*/}
                            {/*                            css.mapInfoMetroCircle*/}
                            {/*                        }*/}
                            {/*                    ></div>*/}
                            {/*                    <span*/}
                            {/*                        className={*/}
                            {/*                            css.mapInfoMetroText*/}
                            {/*                        }*/}
                            {/*                    >*/}
                            {/*                        м. Достоевская*/}
                            {/*                    </span>*/}
                            {/*                </div>*/}
                            {/*                <div className={css.mapInfoAddress}>*/}
                            {/*                    Санкт-Петербург, Рубинштейна, 11*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </section>*/}
                            {/*</div>*/}
                        </div>
                    </ContentBlock>
                </ContentContainer>
            </div>
        </Page>
    );
};
