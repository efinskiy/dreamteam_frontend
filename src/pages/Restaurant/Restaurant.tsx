import { Page } from '@/components/Page.tsx';
import css from './Restaurant.module.css';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.tsx';
import { BackIcon } from '@/components/Icons/BackIcon.tsx';
import { IconlyProfile } from '@/components/Icons/Profile.tsx';
import { RestaurantTopPreview } from '@/components/RestaurantTopPreview/RestaurantTopPreview.tsx';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@telegram-apps/sdk-react';

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
                                <div
                                    className={classNames(
                                        css.photoSliderNavigationItem,
                                        css.photoSliderNavigationActive
                                    )}
                                >
                                    Все фото
                                </div>
                                <div className={css.photoSliderNavigationItem}>
                                    Интерьер
                                </div>
                                <div className={css.photoSliderNavigationItem}>
                                    Блюда
                                </div>
                                <div className={css.photoSliderNavigationItem}>
                                    Напитки
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
};
