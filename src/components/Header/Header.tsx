import css from './Header.module.css';
import { IconlyProfile } from '@/components/Icons/Profile.tsx';
import { IconlySearch } from '@/components/Icons/Search.tsx';
import { IconlyLocation } from '@/components/Icons/Location.tsx';

export const Header = () => {
    return (
        <div className={css.header}>
            <img
                className={css.logo}
                src="/img/logoFull.png"
                alt="DreamTeam logo"
            />
            <div className={css.buttons}>
                <div className={css.rounded_button}>
                    <IconlySearch color={'var(--dark-grey)'} />
                </div>
                <div className={css.rounded_button}>
                    <IconlyLocation color={'var(--dark-grey)'} />
                </div>
                <div className={css.rounded_button}>
                    <IconlyProfile color={'var(--dark-grey)'} />
                </div>
            </div>
        </div>
    );
};
