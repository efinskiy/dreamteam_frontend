import { Page } from '@/components/Page.tsx';
import css from './Restaurant.module.css';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.tsx';
import { BackIcon } from '@/components/Icons/BackIcon.tsx';
import { IconlyProfile } from '@/components/Icons/Profile.tsx';
import { RestaurantTopPreview } from '@/components/RestaurantTopPreview/RestaurantTopPreview.tsx';
import { useNavigate } from 'react-router-dom';

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
            </div>
        </Page>
    );
};
