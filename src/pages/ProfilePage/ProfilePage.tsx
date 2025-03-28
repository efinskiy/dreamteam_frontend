import { Page } from '@/components/Page.tsx';
import css from './ProfilePage.module.css';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.tsx';
import { BackIcon } from '@/components/Icons/BackIcon.tsx';
import { Link, useNavigate } from 'react-router-dom';
import { TicketsIcon } from '@/components/Icons/TicketsIcon.tsx';
import { BookIcon } from '@/components/Icons/BookIcon.tsx';
import { PenIcon } from '@/components/Icons/PenIcon.tsx';
import { UserProfileIcon } from '@/components/Icons/UserProfileIcon.tsx';
// import { SupportIcon } from '@/components/Icons/SupportIcon.tsx';
import { QRCodeIcon } from '@/components/Icons/QRCodeIcon.tsx';

export const ProfilePage = () => {
    const navigate = useNavigate();

    return (
        <Page back={true}>
            <div className={css.page}>
                <div className={css.pageWrapper}>
                    <div className={css.header}>
                        <RoundedButton
                            icon={
                                <BackIcon
                                    size={24}
                                    color={'var(--dark-grey)'}
                                />
                            }
                            action={() => navigate('/')}
                        />
                        <span className={css.headerTitle}>Профиль</span>
                        <RoundedButton
                            icon={
                                <QRCodeIcon
                                    size={18}
                                    color={'var(--dark-grey)'}
                                />
                            }
                            action={() =>
                                window.open(
                                    'https://maps.yandex.ru/?ll=37.62,55.75&z=12'
                                )
                            }
                        />
                    </div>
                    <div className={css.navLinks}>
                        <Link to={'/myBookings'} className={css.navLink}>
                            <BookIcon size={24} color={'black'} />
                            <span className={css.navLinkTitle}>
                                Мои бронирования
                            </span>
                        </Link>
                        <Link to={'/tickets'} className={css.navLink}>
                            <TicketsIcon size={24} color={'black'} />
                            <span className={css.navLinkTitle}>Мои билеты</span>
                        </Link>
                        <Link to={'/review'} className={css.navLink}>
                            <PenIcon size={24} color={'black'} />
                            <span className={css.navLinkTitle}>
                                Оставить отзыв
                            </span>
                        </Link>
                        <Link to={'/me'} className={css.navLink}>
                            <UserProfileIcon size={24} color={'black'} />
                            <span className={css.navLinkTitle}>
                                Личные данные
                            </span>
                        </Link>
                        {/*<Link to={'/support'} className={css.navLink}>*/}
                        {/*    <SupportIcon size={24} color={'black'} />*/}
                        {/*    <span className={css.navLinkTitle}>Поддержка</span>*/}
                        {/*</Link>*/}
                    </div>
                </div>
            </div>
        </Page>
    );
};
