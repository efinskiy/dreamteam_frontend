import css from './OptionsNavigation.module.css';
import { OptionsNavigationElement } from '@/components/OptionsNavigation/OptionsNavigationElement/OptionsNavigationElement.tsx';
import { EventClockIcon } from '@/components/Icons/EventClock.tsx';
import { PersonFeedbackIcon } from '@/components/Icons/PersonFeedback.tsx';

export const OptionsNavigation = () => {
    return (
        <div className={css.optionsNavigation}>
            <OptionsNavigationElement
                icon={<EventClockIcon size={38} color={'var(--light-grey)'} />}
                title={'Мероприятия'}
                link={'/events'}
            />
            <OptionsNavigationElement
                icon={
                    <PersonFeedbackIcon size={38} color={'var(--light-grey)'} />
                }
                title={'Отзыв'}
                link={'/review'}
            />
        </div>
    );
};
