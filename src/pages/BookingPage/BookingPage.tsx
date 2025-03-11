import { FC } from 'react';
import css from './BookingPage.module.css';

import { Page } from '@/components/Page.tsx';
import { PageContainer } from '@/components/PageContainer/PageContainer.tsx';
import { ContentContainer } from '@/components/ContentContainer/ContentContainer.tsx';
import { CrossIcon } from '@/components/Icons/CrossIcon.tsx';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.tsx';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@telegram-apps/sdk-react';
import { CalendarIcon } from '@/components/Icons/CalendarIcon.tsx';
import { DownArrow } from '@/components/Icons/DownArrow.tsx';
import { UsersIcon } from '@/components/Icons/UsersIcon.tsx';

export const BookingPage: FC = () => {
    const navigate = useNavigate();

    return (
        <Page back={true}>
            <PageContainer>
                <ContentContainer>
                    <div className={css.headerContainer}>
                        <div className={css.headerNav}>
                            <div style={{ width: '44px' }}></div>
                            <div className={css.headerInfo}>
                                <h3 className={css.headerInfo__title}>
                                    Бронирование
                                </h3>
                                <p className={css.headerInfo__subtitle}>
                                    Smoke BBQ
                                </p>
                            </div>
                            <div>
                                <RoundedButton
                                    icon={<CrossIcon size={44} />}
                                    action={() => navigate(-1)}
                                />
                            </div>
                        </div>
                        <div className={css.header__selector}>
                            <div className={classNames(css.header__select)}>
                                <div className={css.header__select__left}>
                                    <CalendarIcon size={24}></CalendarIcon>
                                    <span
                                        className={
                                            css.header__select__left_text
                                        }
                                    >
                                        24 мар
                                    </span>
                                </div>
                                <div className={css.header__select__arrow}>
                                    <DownArrow></DownArrow>
                                </div>
                            </div>
                            <div className={classNames(css.header__select)}>
                                <div className={css.header__select__left}>
                                    <UsersIcon size={24}></UsersIcon>
                                    <span
                                        className={
                                            css.header__select__left_text
                                        }
                                    >
                                        2 гостя
                                    </span>
                                </div>
                                <div className={css.header__select__arrow}>
                                    <DownArrow></DownArrow>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentContainer>
            </PageContainer>
        </Page>
    );
};
