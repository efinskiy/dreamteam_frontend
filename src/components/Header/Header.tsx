import css from './Header.module.css';
import { IconlyProfile } from '@/components/Icons/Profile.tsx';
import { IconlySearch } from '@/components/Icons/Search.tsx';
import { IconlyLocation } from '@/components/Icons/Location.tsx';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.tsx';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();

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
                    action={() => alert('In dev')}
                />
                <RoundedButton
                    icon={<IconlyLocation color={'var(--dark-grey)'} />}
                    action={() => navigate('/map')}
                />
                <RoundedButton
                    icon={<IconlyProfile color={'var(--dark-grey)'} />}
                    action={() => navigate('/profile')}
                />
            </div>
        </div>
    );
};
