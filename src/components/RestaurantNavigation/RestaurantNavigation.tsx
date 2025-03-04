import { FC } from 'react';
import css from './RestaurantNavigation.module.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { classNames } from '@telegram-apps/sdk-react';

export const RestaurantNavigation: FC = () => {
    return (
        <div className={css.navigationSlider}>
            <AnchorLink href="#booking" offset={64}>
                <div
                    className={classNames(
                        css.navigationLink
                        // css.navigationLinkActive
                    )}
                >
                    Бронь
                </div>
            </AnchorLink>

            <AnchorLink href="#gallery" offset={128}>
                <div className={css.navigationLink}>Галерея</div>
            </AnchorLink>
            <AnchorLink href="#menu" offset={128}>
                <div className={css.navigationLink}>Меню</div>
            </AnchorLink>
            <AnchorLink href="#about" offset={128}>
                <div className={css.navigationLink}>О месте</div>
            </AnchorLink>
            <AnchorLink href="#chef" offset={128}>
                <div className={css.navigationLink}>О шефе</div>
            </AnchorLink>
        </div>
    );
};
