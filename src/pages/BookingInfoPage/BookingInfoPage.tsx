import { Page } from '@/components/Page.tsx';
import { useNavigate } from 'react-router-dom';
import css from './BookingInfoPage.module.css';
import { classNames } from '@telegram-apps/sdk-react';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.tsx';
import { CrossIcon } from '@/components/Icons/CrossIcon.tsx';
import { TimeCircle } from '@/components/Icons/TimeCircle.tsx';
import { CalendarIcon } from '@/components/Icons/CalendarIcon.tsx';
import { UsersIcon } from '@/components/Icons/UsersIcon.tsx';
import { ChatIcon } from '@/components/Icons/ChatIcon.tsx';
import { GoToPathIcon } from '@/components/Icons/GoToPathIcon.tsx';
import { UniversalButton } from '@/components/Buttons/UniversalButton/UniversalButton.tsx';
import { useEffect, useState } from 'react';
import { CancelBookingPopup } from '@/pages/BookingInfoPage/CancelBookingPopup/CancelBookingPopup.tsx';
import { InformationPopup } from '@/components/InformationPopup/InformationPopup.tsx';

export const BookingInfoPage = () => {
    const navigate = useNavigate();
    const [cancelPopup, setCancelPopup] = useState(false);
    const [canceledPopup, setCanceledPopup] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'scroll';
        };
    }, []);

    const onCancel = () => {
        setCancelPopup(false);
        new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
            setCanceledPopup(true);
        });
    };

    return (
        <Page back={true}>
            <CancelBookingPopup
                isOpen={cancelPopup}
                setOpen={setCancelPopup}
                onSubmit={() => onCancel()}
            />
            <InformationPopup
                isOpen={canceledPopup}
                setOpen={setCanceledPopup}
                text={'Ваше бронирование отменено'}
            />
            <div className={css.absolute_footer}>
                <div
                    className={classNames(css.fc, css.absolute_footer_wrapper)}
                >
                    <div
                        className={classNames(
                            css.fr,
                            css.bookingInfoDetails_item
                        )}
                    >
                        <UniversalButton
                            width={'full'}
                            title={'Изменить'}
                            action={() => alert('В разработке')}
                        />
                        <UniversalButton
                            width={'full'}
                            title={'Отменить'}
                            action={() => setCancelPopup(true)}
                        />
                    </div>
                    <div
                        className={classNames(
                            css.fr,
                            css.bookingInfoDetails_item
                        )}
                    >
                        <div
                            className={css.redButton}
                            onClick={() =>
                                navigate('/restaurant/1?menuOpen=true')
                            }
                        >
                            <span className={css.text}>Смотреть меню</span>
                        </div>
                        <RoundedButton
                            radius={'50px'}
                            action={() =>
                                window.open('https://maps.yandex.ru/')
                            }
                            icon={
                                <GoToPathIcon
                                    size={24}
                                    color={'var(--dark-grey)'}
                                />
                            }
                        />
                    </div>
                </div>
            </div>
            <div className={classNames(css.fc, css.page)}>
                <div className={classNames(css.main, css.border__bottom)}>
                    <div className={css.header}>
                        <div className={css.wh44} />
                        <div className={classNames(css.fc, css.headerContent)}>
                            <h3 className={css.headerContent__title}>
                                Бронирование
                            </h3>
                        </div>
                        <div
                            className={css.headerButtons}
                            onClick={() => navigate('/myBookings')}
                        >
                            <RoundedButton
                                icon={<CrossIcon size={44} color={'black'} />}
                            />
                        </div>
                    </div>
                    <div className={classNames(css.fc, css.content)}>
                        <div
                            className={classNames(
                                css.fc,
                                css.calendarContainer
                            )}
                        >
                            <div
                                className={classNames(
                                    css.calendar,
                                    css.calendar__month
                                )}
                            >
                                <span>фев</span>
                            </div>
                            <div
                                className={classNames(
                                    css.calendar,
                                    css.calendar__day
                                )}
                            >
                                <span>14</span>
                            </div>
                        </div>
                        <div
                            className={classNames(
                                css.fc,
                                css.bookingInfo_restaurant
                            )}
                        >
                            <h2 className={css.bookingInfo_restaurant__title}>
                                SMOKE BBQ
                            </h2>
                            <span
                                className={css.bookingInfo_restaurant__subtitle}
                            >
                                Москва, Трубная 8
                            </span>
                        </div>
                        <div
                            className={classNames(
                                css.fc,
                                css.bookingInfoDetails
                            )}
                        >
                            <div
                                className={classNames(
                                    css.fr,
                                    css.bookingInfoDetails_container
                                )}
                            >
                                <div
                                    className={classNames(
                                        css.fr,
                                        css.bookingInfoDetails_item
                                    )}
                                >
                                    <TimeCircle
                                        size={16}
                                        color={'var(--dark-grey)'}
                                    ></TimeCircle>
                                    <span
                                        className={
                                            css.bookingInfoDetails_item__text
                                        }
                                    >
                                        17:00
                                    </span>
                                </div>
                                <div
                                    className={classNames(
                                        css.fr,
                                        css.bookingInfoDetails_item
                                    )}
                                >
                                    <CalendarIcon
                                        size={16}
                                        color={'var(--dark-grey)'}
                                    ></CalendarIcon>
                                    <span
                                        className={
                                            css.bookingInfoDetails_item__text
                                        }
                                    >
                                        14 февраля
                                    </span>
                                </div>
                                <div
                                    className={classNames(
                                        css.fr,
                                        css.bookingInfoDetails_item
                                    )}
                                >
                                    <UsersIcon
                                        size={16}
                                        color={'var(--dark-grey)'}
                                    ></UsersIcon>
                                    <span
                                        className={
                                            css.bookingInfoDetails_item__text
                                        }
                                    >
                                        2
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            className={classNames(
                                css.fc,
                                css.bookingInfoDetails
                            )}
                        >
                            <div
                                className={classNames(
                                    css.fr,
                                    css.bookingInfoDetails_container
                                )}
                            >
                                <div
                                    className={classNames(
                                        css.fr,
                                        css.bookingInfoDetails_item
                                    )}
                                >
                                    <ChatIcon
                                        size={16}
                                        color={'var(--dark-grey)'}
                                    ></ChatIcon>
                                    <span
                                        className={
                                            css.bookingInfoDetails_item__text
                                        }
                                    >
                                        Возможно опоздаем
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            key={'taxi1'}
                            className="ya-taxi-widget"
                            data-ref="https%3A%2F%2Fdemo.efinskiy.ru%2F"
                            data-proxy-url="https://{app}.redirect.appmetrica.yandex.com/route?start-lat={start-lat}&amp;start-lon={start-lon}&amp;end-lat={end-lat}&amp;end-lon={end-lon}&amp;tariffClass={tariff}&amp;ref={ref}&amp;appmetrica_tracking_id={redirect}&amp;lang={lang}&amp;erid={erid}"
                            data-tariff="econom"
                            data-app="3"
                            data-lang="ru"
                            data-redirect="1178268795219780156"
                            data-description="Smoke BBQ"
                            data-size="s"
                            data-theme="normal"
                            data-title="Вызвать такси"
                            data-use-location="true"
                            data-point-a=""
                            data-point-b="39.751934,47.227023"
                        ></div>
                    </div>
                    <div className={classNames(css.fr, css.page)}></div>
                </div>
            </div>
        </Page>
    );
};
