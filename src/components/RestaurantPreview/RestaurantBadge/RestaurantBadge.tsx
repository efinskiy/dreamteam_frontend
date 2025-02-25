import css from './RestaurantBadge.module.css';

interface RestaurantBadgeProps {
    logo: string;
    slogan: string;
}

export const RestaurantBadge = ({ logo, slogan }: RestaurantBadgeProps) => {
    return (
        <div className={css.badge}>
            <div
                style={{ backgroundImage: `url(${logo})` }}
                className={css.img}
            ></div>
            <span>{slogan}</span>
        </div>
    );
};
