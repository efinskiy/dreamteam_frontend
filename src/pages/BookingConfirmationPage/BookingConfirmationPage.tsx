import { Page } from '@/components/Page.tsx';
import css from './BookingConfirmationPage.module.css';
import { useAtom } from 'jotai';
import { bookingAtom } from '@/atoms/bookingInfoAtom.ts';
import { useEffect } from 'react';
import { RoundedButton } from '@/components/RoundedButton/RoundedButton.tsx';
import { CrossIcon } from '@/components/Icons/CrossIcon.tsx';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@telegram-apps/sdk-react';
import { TimeCircle } from '@/components/Icons/TimeCircle.tsx';
import { CalendarIcon } from '@/components/Icons/CalendarIcon.tsx';
import { UsersIcon } from '@/components/Icons/UsersIcon.tsx';
import { ChatIcon } from '@/components/Icons/ChatIcon.tsx';
import { useScript } from 'usehooks-ts';
// import { BookingCreatedPopup } from '@/pages/BookingConfirmationPage/BookingCreatedPopup/BookingCreatedPopup.tsx';
import { GoToPathIcon } from '@/components/Icons/GoToPathIcon.tsx';

export const BookingConfirmationPage = () => {
    const bookingInfo = useAtom(bookingAtom);

    // const [bookingCreatedPopup, setBookingCreatedPopup] = useState(false);

    const navigate = useNavigate();

    useScript('https://yastatic.net/taxi-widget/ya-taxi-widget-v2.js', {
        removeOnUnmount: true,
    });

    useEffect(() => {
        console.log('bookingInfo: ', bookingInfo);
    }, [bookingInfo]);

    return (
        <Page back={true}>
            {/*<BookingCreatedPopup*/}
            {/*    isOpen={bookingCreatedPopup}*/}
            {/*    rest_title={'Smoke BBQ'}*/}
            {/*    rest_address={'Москва, Трубная, 8'}*/}
            {/*    booking_date={'14 февраля'}*/}
            {/*    booking_time={'19:00'}*/}
            {/*/>*/}
            <div className={css.absolute_footer}>
                <div
                    className={classNames(css.fr, css.absolute_footer_wrapper)}
                ></div>
            </div>
            <div className={classNames(css.fc, css.page)}>
                <div className={classNames(css.main, css.border__bottom)}>
                    <div className={css.header}>
                        <div className={css.wh44}>
                            {/*<RoundedButton*/}
                            {/*    icon={<CrossIcon size={44} color={'black'} />}*/}
                            {/*/>*/}
                        </div>
                        <div className={classNames(css.fc, css.headerContent)}>
                            <h3 className={css.headerContent__title}>
                                Бронирование
                            </h3>
                            <p className={css.headerContent__subtitle}>
                                Smoke BBQ
                            </p>
                        </div>
                        <div
                            className={css.headerButtons}
                            onClick={() => navigate(-1)}
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
                        <div className={css.yaTaxi}>
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
                    </div>
                    <div className={classNames(css.fr, css.page)}>
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

                {/*<div*/}
                {/*    className={classNames(*/}
                {/*        css.main,*/}
                {/*        css.border__top,*/}
                {/*        css.border__bottom*/}
                {/*    )}*/}
                {/*>*/}
                {/*    <span className={classNames(css.about__text)}>*/}
                {/*        Нажимая «Забронировать», вы принимаете условия{' '}*/}
                {/*        <span className={css.underline}>*/}
                {/*            Пользовательского соглашения*/}
                {/*        </span>{' '}*/}
                {/*        и даете согласие на обработку персональных данных.*/}
                {/*    </span>*/}
                {/*</div>*/}
            </div>
        </Page>
    );
};
