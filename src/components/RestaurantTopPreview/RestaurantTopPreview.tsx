import { classNames } from '@telegram-apps/sdk-react';
import css from '@/pages/Restaurant/Restaurant.module.css';
import { MoneyIcon } from '@/components/Icons/MoneyIcon.tsx';
import { TimeCircleIcon } from '@/components/Icons/TimeCircleIcon.tsx';

export const RestaurantTopPreview = () => {
    return (
        <div
            className={classNames(css.previewContainer, css.bgImage)}
            style={{ backgroundImage: `url('/img/placeholder_2.png')` }}
        >
            <div className={css.halfBlackWrapper}>
                <div className={css.previewContainerContent}>
                    <div className={css.previewMainInfo}>
                        <h1 className={css.title}>Smoke BBQ</h1>
                        <span className={css.location}>
                            Москва, Трубная, 18
                        </span>
                    </div>
                    <div className={css.previewExtra}>
                        <div className={css.extraItem}>
                            <MoneyIcon color={'white'} size={24} />
                            <div className={css.extraItemContent}>
                                <span className={css.extraTop}>1500 ₽</span>
                                <span className={css.extraBottom}>
                                    Средний чек
                                </span>
                            </div>
                        </div>
                        <div className={css.splitter}></div>
                        <div className={css.extraItem}>
                            <TimeCircleIcon color={'white'} size={24} />
                            <div className={css.extraItemContent}>
                                <span className={css.extraTop}>Открыто</span>
                                <span className={css.extraBottom}>
                                    до 00:00
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
