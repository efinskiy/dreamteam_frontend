import { Page } from '@/components/Page.tsx';
import css from './Restaurant.module.css';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.tsx';
import { BackIcon } from '@/components/Icons/BackIcon.tsx';
import { IconlyProfile } from '@/components/Icons/Profile.tsx';
import { RestaurantTopPreview } from '@/components/RestaurantTopPreview/RestaurantTopPreview.tsx';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
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
import { MOCK_Restaurants } from '@/mockData.ts';
import { mockMenu } from '@/mockData.ts';
import {
    GalleryCollection,
    GalleryPhoto,
} from '@/pages/Restaurant/Restaurant.types.ts';
import { CallRestaurantPopup } from '@/components/CallRestaurantPopup/CallRestaurantPopup.tsx';
import { EventCard } from '@/components/EventCard/EventCard.tsx';
import { useAtom } from 'jotai';
import { backButtonAtom } from '@/atoms/backButtonAtom.ts';
import { IPhotoCard, IRestaurant } from '@/types/restaurant.ts';
import {
    YMap,
    YMapComponentsProvider,
    YMapDefaultFeaturesLayer,
    YMapDefaultSchemeLayer,
    YMapMarker,
} from 'ymap3-components';
import { LogoMapIcon } from '@/components/Icons/LogoMapIcon.tsx';
import { ImageViewerPopup } from '@/components/ImageViewerPopup/ImageViewerPopup.tsx';

export const transformGallery = (
    gallery: IPhotoCard[]
): GalleryCollection[] => {
    // Создаем объект для группировки по категориям
    const groupedByCategory: Record<string, GalleryPhoto[]> = {};

    // Группируем фотографии по категориям
    gallery.forEach((photo) => {
        if (!groupedByCategory[photo.category]) {
            groupedByCategory[photo.category] = [];
        }
        groupedByCategory[photo.category].push({ link: photo.url });
    });

    // Преобразуем объект в массив GalleryCollection
    return Object.entries(groupedByCategory).map(([title, photos]) => ({
        title,
        photos,
    }));
};

export const Restaurant = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [searchParams] = useSearchParams();

    const [restaurant, setRestaurant] = useState<IRestaurant>();

    useEffect(() => {
        setRestaurant(MOCK_Restaurants.find((v) => v.id === Number(id)));
    }, [id]);

    const [hideAbout, setHideAbout] = useState(true);
    const [hideChefAbout, setHideChefAbout] = useState(true);
    const [hideWorkHours, setHideWorkHours] = useState(true);
    const [headerScrolled, setHeaderScrolled] = useState(false);
    const [, setBackUrlAtom] = useAtom(backButtonAtom);
    const [menuPopupOpen, setMenuPopupOpen] = useState(
        Boolean(searchParams.get('menuOpen')) || false
    );
    const [callPopup, setCallPopup] = useState(false);

    const [imageViewerOpen, setImageViewerOpen] = useState(false);
    const [currentImageViewerPhoto, setCurrentImageViewerPhoto] = useState('');

    const [gallery, setGallery] = useState<GalleryCollection[]>([]);
    const [currentGalleryCategory, setCurrentGalleryCategory] =
        useState('Все фото');
    const [currentGalleryPhotos, setCurrentGalleryPhotos] = useState<
        (string | string[])[]
    >([]);

    const goToProfile = () => {
        setBackUrlAtom(`/restaurant/${id}`);
        navigate('/profile');
    };

    useEffect(() => {
        if (restaurant?.gallery) {
            setGallery(transformGallery(restaurant.gallery));
        }
    }, [restaurant]);

    useEffect(() => {
        setCurrentGalleryPhotos(getGalleryPhotos());
    }, [currentGalleryCategory, gallery]);

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
            {restaurant?.gallery && (
                <ImageViewerPopup
                    isOpen={imageViewerOpen}
                    setOpen={setImageViewerOpen}
                    items={restaurant?.gallery}
                    currentItem={currentImageViewerPhoto}
                    setCurrentItem={setCurrentImageViewerPhoto}
                />
            )}
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
                            <span className={css.headerTitle}>
                                {restaurant?.title}
                            </span>
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
                        onClick={() => navigate(`/booking/${restaurant?.id}`)}
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
                                `https://maps.yandex.ru/?ll=${restaurant?.address_lonlng}&text=${restaurant?.title}&z=17`
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
                <RestaurantTopPreview rest={restaurant} />
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
                        data-description={restaurant?.address}
                        data-size="s"
                        data-theme="normal"
                        data-title="Вызвать такси"
                        data-use-location="false"
                        data-point-a=""
                        data-point-b={restaurant?.address_lonlng}
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
                                    spaceBetween={4}
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
                                spaceBetween={8}
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
                                                        onClick={() => {
                                                            setCurrentImageViewerPhoto(
                                                                smallPhoto
                                                            );
                                                            setImageViewerOpen(
                                                                true
                                                            );
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
                                                onClick={() => {
                                                    setCurrentImageViewerPhoto(
                                                        photo
                                                    );
                                                    setImageViewerOpen(true);
                                                }}
                                            ></div>
                                        )}
                                    </SwiperSlide>
                                ))}
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
                                spaceBetween={8}
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
                                {restaurant?.about_text}
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
                                    {restaurant?.worktime.map((r) => (
                                        <span
                                            key={`weekday-${r.weekday}`}
                                            className={css.text}
                                        >
                                            {r.weekday}: {r.time_start}-
                                            {r.time_end}
                                        </span>
                                    ))}
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
                                {restaurant?.socials.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className={css.socialRow}>
                                            <InstagramIcon
                                                color={'black'}
                                                size={20}
                                            />
                                            <span className={css.socialLink}>
                                                {social.name}
                                            </span>
                                        </div>
                                    </a>
                                ))}
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
                                        {restaurant?.about_dishes}
                                    </span>
                                </div>
                                <div className={css.textRow}>
                                    <span className={css.title}>Кухня:</span>
                                    <span className={css.value}>
                                        {restaurant?.about_kitchen}
                                    </span>
                                </div>
                                <div className={css.textRow}>
                                    <span className={css.title}>
                                        Особенности:
                                    </span>
                                    <span className={css.value}>
                                        {restaurant?.about_features}
                                    </span>
                                </div>
                                <div className={css.textRow}>
                                    <span className={css.title}>
                                        Средний чек:
                                    </span>
                                    <span className={css.value}>
                                        {restaurant?.avg_cheque} ₽
                                    </span>
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
                                {restaurant?.brand_chef.about}
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
                                    backgroundImage: `url(${restaurant?.brand_chef.photo_url})`,
                                }}
                            ></div>
                            <div className={css.chefInfo}>
                                <span className={css.title}>
                                    {restaurant?.brand_chef.name}
                                </span>
                                <span className={css.subTitle}>Бренд-шеф</span>
                            </div>
                        </div>
                    </ContentBlock>
                </ContentContainer>
                <div className={css.events}>
                    <EventCard
                        onClick={() => navigate(`/events/1/restaurant`)}
                        event_price={1500}
                        event_name={
                            'Винный ужин с виноделом Мануэля Морага Гутьерресом'
                        }
                        event_desc={
                            'Встретимся на ужине с чилийским виноделом в седьмом поколении, Мануэлем Морага Гутьерресом (Cacique Maravilla). Его семья владеет виноградником с 1776 года в городе Юмбель (долина Био-Био)'
                        }
                        event_img={
                            'http://cabinet.clientomer.ru/storage/270027/advents/16.jpg'
                        }
                    />
                </div>
                <ContentContainer>
                    <ContentBlock>
                        <HeaderContainer>
                            <HeaderContent title={'Адрес'} />
                        </HeaderContainer>
                        <div className={css.mapContainer}>
                            <div className={css.map}>
                                <YMapComponentsProvider
                                    apiKey={
                                        '73a95f3b-fa74-4525-99e3-86ee1309f266'
                                    }
                                    lang={'ru_RU'}
                                >
                                    <YMap
                                        location={{
                                            center: [
                                                Number(
                                                    restaurant?.address_lonlng.split(
                                                        ','
                                                    )[0]
                                                ),
                                                Number(
                                                    restaurant?.address_lonlng.split(
                                                        ','
                                                    )[1]
                                                ) - 0.0003,
                                            ],
                                            // 47.226539, 39.752190
                                            zoom: 17,
                                        }}
                                    >
                                        <YMapDefaultSchemeLayer />
                                        <YMapDefaultFeaturesLayer />
                                        <YMapMarker
                                            coordinates={[
                                                Number(
                                                    restaurant?.address_lonlng.split(
                                                        ','
                                                    )[0]
                                                ),
                                                Number(
                                                    restaurant?.address_lonlng.split(
                                                        ','
                                                    )[1]
                                                ),
                                            ]}
                                            draggable={false}
                                        >
                                            <div className={css.mapPoint}>
                                                <LogoMapIcon
                                                    size={26}
                                                ></LogoMapIcon>
                                            </div>
                                        </YMapMarker>
                                    </YMap>
                                    <section>
                                        <div className={css.relativeRestInfo}>
                                            <div className={css.mapInfo}>
                                                <div
                                                    className={css.mapInfoMetro}
                                                >
                                                    {restaurant?.address_station_color ? (
                                                        <div
                                                            className={
                                                                css.mapInfoMetroCircle
                                                            }
                                                            style={{
                                                                backgroundColor: `${restaurant.address_station_color}`,
                                                            }}
                                                        ></div>
                                                    ) : null}
                                                    <span
                                                        className={
                                                            css.mapInfoMetroText
                                                        }
                                                    >
                                                        {
                                                            restaurant?.address_station
                                                        }
                                                    </span>
                                                </div>
                                                <div
                                                    className={
                                                        css.mapInfoAddress
                                                    }
                                                >
                                                    {restaurant?.address}
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </YMapComponentsProvider>
                            </div>

                            {/*</div>*/}
                        </div>
                    </ContentBlock>
                </ContentContainer>
            </div>
        </Page>
    );
};
