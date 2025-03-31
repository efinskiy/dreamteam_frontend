import css from './OptionsNavigation.module.css';
import { OptionsNavigationElement } from '@/components/OptionsNavigation/OptionsNavigationElement/OptionsNavigationElement.tsx';
import { ChatIcon } from '@/components/Icons/ChatIcon.tsx';
import { CalendarIcon } from '@/components/Icons/CalendarIcon.tsx';

export const OptionsNavigation = () => {
    return (
        <div className={css.optionsNavigation}>
            <OptionsNavigationElement
                icon={<CalendarIcon size={20} color={'var(--light-grey)'} />}
                title={'Мероприятия'}
                link={'/events'}
            />
            <OptionsNavigationElement
                icon={<ChatIcon size={20} color={'var(--light-grey)'} />}
                title={'Оставить отзыв'}
                link={'/profile?feedback=1'}
            />
        </div>
    );
};
