import { Page } from '@/components/Page.tsx';
import css from './UserTicketsPage.module.css';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.tsx';
import { BackIcon } from '@/components/Icons/BackIcon.tsx';
import { useNavigate } from 'react-router-dom';
import { Ticket } from '@/pages/UserTicketsPage/Ticket/Ticket.tsx';

export const UserTicketsPage = () => {
    const navigate = useNavigate();

    return (
        <Page back={true}>
            <div className={css.page}>
                <div className={css.header}>
                    <RoundedButton
                        icon={<BackIcon size={24} color={'var(--dark-grey)'} />}
                        action={() => navigate(-1)}
                        bgColor={'var(--primary-background)'}
                    />
                    <span className={css.header_title}>Мои билеты</span>
                    <div className={css.header_spacer} />
                </div>

                <div className={css.cards}>
                    <Ticket />
                    <Ticket />
                    <Ticket />
                    <Ticket />
                </div>
            </div>
        </Page>
    );
};
