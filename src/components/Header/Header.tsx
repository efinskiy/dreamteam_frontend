import css from './Header.module.css';
import { IconlyProfile } from '@/components/Icons/Profile.tsx';
import { IconlySearch } from '@/components/Icons/Search.tsx';
import { IconlyLocation } from '@/components/Icons/Location.tsx';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.tsx';

export const Header = () => {
    return (
        <div className={css.header}>
            <img
                className={css.logo}
                src="/img/logoFull.png"
                alt="DreamTeam logo"
            />
            <div className={css.buttons}>
                <RoundedButton
                    icon={<IconlySearch color={'var(--dark-grey)'} />}
                />
                <RoundedButton
                    icon={<IconlyLocation color={'var(--dark-grey)'} />}
                />
                <RoundedButton
                    icon={<IconlyProfile color={'var(--dark-grey)'} />}
                    action={() => alert(1)}
                />
            </div>
        </div>
    );
};
