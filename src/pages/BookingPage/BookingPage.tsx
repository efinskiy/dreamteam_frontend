import { FC, useState } from 'react';
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
import { getGuestsString } from '@/utils.ts';
import { BookingGuestCountSelectorPopup } from '@/components/BookingGuestCountSelectorPopup/BookingGuestCountSelectorPopup.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { HeaderContainer } from '@/components/ContentBlock/HeaderContainer/HeaderContainer.tsx';
import { HeaderContent } from '@/components/ContentBlock/HeaderContainer/HeaderContent/HeaderContainer.tsx';
import { TextInput } from '@/components/TextInput/TextInput.tsx';
import { CommentaryOptionButton } from '@/components/CommentaryOptionButton/CommentaryOptionButton.tsx';
import { BOOKINGCOMMENTMOCK, MOCKTIMES } from '@/mockData.ts';

export const BookingPage: FC = () => {
    const navigate = useNavigate();

    const [guestCount, setGuestCount] = useState<number | null>(null);
    const [guestCountPopup, setGuestCountPopup] = useState(false);
    //
    // const [bookingDate, setBookingDate] = useState<Date | null>(null);
    // const [bookingDatePopup, setBookingDatePopup] = useState(false);

    const [currentPartOfDay, setCurrentPartOfDay] = useState({
        morning: true,
        day: false,
        evening: false,
    });

    const [inputForm, setInputForm] = useState({
        commentary: '',
        name: '',
        phone: '',
    });

    const [currentSelectedTime, setCurrentSelectedTime] = useState<
        string | null
    >(null);

    return (
        <Page back={true}>
            <BookingGuestCountSelectorPopup
                guestCount={guestCount}
                setGuestCount={setGuestCount}
                isOpen={guestCountPopup}
                setOpen={setGuestCountPopup}
            />
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
                            <div
                                className={classNames(css.header__select)}
                                onClick={() =>
                                    setGuestCountPopup(!guestCountPopup)
                                }
                            >
                                <div className={css.header__select__left}>
                                    <UsersIcon size={24}></UsersIcon>
                                    <span
                                        className={
                                            css.header__select__left_text
                                        }
                                    >
                                        {guestCount
                                            ? getGuestsString(guestCount)
                                            : 'Гости'}
                                    </span>
                                </div>
                                <div className={css.header__select__arrow}>
                                    <DownArrow></DownArrow>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentContainer>
                <ContentContainer>
                    <div className={css.timeOfDayContainer}>
                        <div className={css.select_timeOfDay}>
                            <div
                                className={classNames(
                                    css.timeOfDay,
                                    currentPartOfDay.morning
                                        ? css.timeOfDay__active
                                        : null
                                )}
                                onClick={() =>
                                    setCurrentPartOfDay(() => ({
                                        morning: true,
                                        day: false,
                                        evening: false,
                                    }))
                                }
                            >
                                <span>Утро</span>
                            </div>
                            <div
                                className={classNames(
                                    css.timeOfDay,
                                    currentPartOfDay.day
                                        ? css.timeOfDay__active
                                        : null
                                )}
                                onClick={() =>
                                    setCurrentPartOfDay(() => ({
                                        morning: false,
                                        day: true,
                                        evening: false,
                                    }))
                                }
                            >
                                <span>День</span>
                            </div>
                            <div
                                className={classNames(
                                    css.timeOfDay,
                                    currentPartOfDay.evening
                                        ? css.timeOfDay__active
                                        : null
                                )}
                                onClick={() =>
                                    setCurrentPartOfDay(() => ({
                                        morning: false,
                                        day: false,
                                        evening: true,
                                    }))
                                }
                            >
                                <span>Вечер</span>
                            </div>
                        </div>
                        <div className={css.timeList}>
                            <Swiper
                                slidesPerView="auto"
                                modules={[FreeMode]}
                                freeMode={true}
                            >
                                {MOCKTIMES.map((v) => (
                                    <SwiperSlide
                                        key={v}
                                        style={{ width: 'max-content' }}
                                    >
                                        <div
                                            className={classNames(
                                                css.timeList_button,
                                                currentSelectedTime === v
                                                    ? css.timeList_button__active
                                                    : null
                                            )}
                                            onClick={() =>
                                                setCurrentSelectedTime(v)
                                            }
                                        >
                                            <span>{v}</span>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                <SwiperSlide style={{ width: '100px' }} />
                            </Swiper>
                        </div>
                    </div>
                </ContentContainer>
                <ContentContainer>
                    <HeaderContainer>
                        <HeaderContent title={'Пожелания к брони'} />
                    </HeaderContainer>
                    <TextInput
                        value={inputForm.name}
                        onChange={(e) =>
                            setInputForm((prevState) => ({
                                ...prevState,
                                name: e,
                            }))
                        }
                        placeholder={'Комментарий к брони'}
                    />
                    <div className={css.commentary_options}>
                        <Swiper
                            slidesPerView="auto"
                            modules={[FreeMode]}
                            freeMode={true}
                        >
                            {BOOKINGCOMMENTMOCK.map((obj) => (
                                <SwiperSlide
                                    key={`${obj.text}${obj.emoji}`}
                                    style={{ width: 'max-content' }}
                                >
                                    <CommentaryOptionButton
                                        text={obj.text}
                                        icon={obj.emoji}
                                    />
                                </SwiperSlide>
                            ))}
                            <SwiperSlide
                                style={{ width: '80px' }}
                            ></SwiperSlide>
                        </Swiper>
                    </div>
                </ContentContainer>
            </PageContainer>
        </Page>
    );
};
