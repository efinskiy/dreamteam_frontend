import { classNames } from '@telegram-apps/sdk-react';
import css from './RestaurantTopPreview.module.css';
import { MoneyIcon } from '@/components/Icons/MoneyIcon.tsx';
import { TimeCircleIcon } from '@/components/Icons/TimeCircleIcon.tsx';
import { IRestaurant } from '@/types/restaurant.ts';

interface Props {
    rest?: IRestaurant;
}

export const RestaurantTopPreview = ({ rest }: Props) => {
    return (
        <div
            className={classNames(css.previewContainer, css.bgImage)}
            style={{ backgroundImage: `url(${rest?.thumbnail_photo})` }}
        >
            <div className={css.halfBlackWrapper}>
                <div className={css.previewContainerContent}>
                    <div className={css.previewMainInfo}>
                        <h1 className={css.title}>{rest?.title}</h1>
                        <span className={css.location}>{rest?.address}</span>
                    </div>
                    <div className={css.previewExtra}>
                        <div className={css.extraItem}>
                            <MoneyIcon color={'white'} size={24} />
                            <div className={css.extraItemContent}>
                                <span className={css.extraTop}>
                                    {rest?.avg_cheque} ₽
                                </span>
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
                                    до {rest?.openTime}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
