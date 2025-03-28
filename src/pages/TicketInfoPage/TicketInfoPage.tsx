import { Page } from '@/components/Page.tsx';
import css from './TicketInfoPage.module.css';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.tsx';
import { BackIcon } from '@/components/Icons/BackIcon.tsx';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@telegram-apps/sdk-react';
import { RefundIcon } from '@/components/Icons/RefundIcon.tsx';
import { DownloadIcon } from '@/components/Icons/DownloadIcon.tsx';

export const TicketInfoPage = () => {
    const navigate = useNavigate();

    return (
        <Page back={true}>
            <div className={css.body}>
                <div className={css.header}>
                    <div className={css.header_group}>
                        <RoundedButton
                            icon={
                                <BackIcon
                                    size={24}
                                    color={'var(--dark-grey)'}
                                />
                            }
                            action={() => navigate(-1)}
                            bgColor={'var(--primary-background)'}
                        />
                        <div className={css.header_spacer} />
                    </div>
                    <span className={css.header_title}>Мои билеты</span>
                    <div className={css.header_group}>
                        <RoundedButton
                            icon={<RefundIcon />}
                            action={() => alert('refund')}
                            bgColor={'var(--primary-background)'}
                        />

                        <RoundedButton
                            icon={<DownloadIcon />}
                            action={() => alert('download')}
                            bgColor={'var(--primary-background)'}
                        />
                    </div>
                </div>

                <div className={css.ticket}>
                    <div className={css.ticket_header}>
                        <div
                            className={classNames(
                                css.ticket_header_img,
                                css.bgImage
                            )}
                            style={{
                                backgroundImage: `url(/img/placeholder_1.png)`,
                            }}
                        />
                        <div className={css.ticket_header_details}>
                            <span
                                className={classNames(
                                    css.mont,
                                    css.ticket_header_details__title
                                )}
                            >
                                Винный ужин с виноделом Мунуэлем Морага
                                Гутьерресом
                            </span>
                            <span
                                className={classNames(
                                    css.mont,
                                    css.ticket_header_details__res
                                )}
                            >
                                Smoke BBQ
                            </span>
                        </div>
                    </div>
                    <div className={css.ticket_details}>
                        <div className={css.ticket_details_row}>
                            <div className={css.ticket_details_row_obj}>
                                <span
                                    className={classNames(
                                        css.mont,
                                        css.ticket_details_row_obj__title
                                    )}
                                >
                                    Адрес
                                </span>
                                <span
                                    className={classNames(
                                        css.mont,
                                        css.ticket_details_row_obj_cont
                                    )}
                                >
                                    Москва, Трубная, 18
                                </span>
                            </div>
                        </div>
                        <div className={css.ticket_details_row}>
                            <div className={css.ticket_details_row_obj}>
                                <span
                                    className={classNames(
                                        css.mont,
                                        css.ticket_details_row_obj__title
                                    )}
                                >
                                    Дата
                                </span>
                                <span
                                    className={classNames(
                                        css.mont,
                                        css.ticket_details_row_obj_cont
                                    )}
                                >
                                    13 фев
                                </span>
                            </div>
                            <div className={css.ticket_details_row_obj}>
                                <span
                                    className={classNames(
                                        css.mont,
                                        css.ticket_details_row_obj__title
                                    )}
                                >
                                    Время
                                </span>
                                <span
                                    className={classNames(
                                        css.mont,
                                        css.ticket_details_row_obj_cont
                                    )}
                                >
                                    12:00
                                </span>
                            </div>
                        </div>
                        <div className={css.ticket_details_row}>
                            <div className={css.ticket_details_row_obj}>
                                <span
                                    className={classNames(
                                        css.mont,
                                        css.ticket_details_row_obj__title
                                    )}
                                >
                                    Количество гостей
                                </span>
                                <span
                                    className={classNames(
                                        css.mont,
                                        css.ticket_details_row_obj_cont
                                    )}
                                >
                                    2
                                </span>
                            </div>
                            <div className={css.ticket_details_row_obj}>
                                <span
                                    className={classNames(
                                        css.mont,
                                        css.ticket_details_row_obj__title
                                    )}
                                >
                                    Стоимость
                                </span>
                                <span
                                    className={classNames(
                                        css.mont,
                                        css.ticket_details_row_obj_cont
                                    )}
                                >
                                    5000 ₽
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
};
