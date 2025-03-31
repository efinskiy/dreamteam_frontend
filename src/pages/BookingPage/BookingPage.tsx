import { FC, useEffect, useState } from 'react';
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
import { formatDateShort, getGuestsString } from '@/utils.ts';
import { BookingGuestCountSelectorPopup } from '@/components/BookingGuestCountSelectorPopup/BookingGuestCountSelectorPopup.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { HeaderContainer } from '@/components/ContentBlock/HeaderContainer/HeaderContainer.tsx';
import { HeaderContent } from '@/components/ContentBlock/HeaderContainer/HeaderContent/HeaderContainer.tsx';
import { TextInput } from '@/components/TextInput/TextInput.tsx';
import { CommentaryOptionButton } from '@/components/CommentaryOptionButton/CommentaryOptionButton.tsx';
import {
    BOOKING_DATE_VALUES,
    BOOKINGCOMMENTMOCK,
    MockTimeSlots,
} from '@/mockData.ts';
import { IConfirmationType } from '@/components/ConfirmationSelect/ConfirmationSelect.types.ts';
import { ConfirmationSelect } from '@/components/ConfirmationSelect/ConfirmationSelect.tsx';
import {
    IBookingForm,
    ITimeSlot,
} from '@/pages/BookingPage/BookingPage.types.ts';
import { BookingDateSelectorPopup } from '@/components/BookingDateSelectorPopup/BookingDateSelectorPopup.tsx';
import { PickerValueObj } from '@/lib/react-mobile-picker/components/Picker.tsx';

const confirmationList: IConfirmationType[] = [
    {
        id: 'telegram',
        text: 'В Telegram',
    },
    {
        id: 'phone',
        text: 'По телефону',
    },
    {
        id: 'none',
        text: 'Без подтверждения',
    },
];

export const BookingPage: FC = () => {
    const navigate = useNavigate();

    const [guestCount, setGuestCount] = useState<PickerValueObj>({
        title: 'unset',
        value: 'unset',
    });
    const [bookingDate, setBookingDate] = useState<PickerValueObj>({
        title: 'unset',
        value: 'unset',
    });
    const [guestCountPopup, setGuestCountPopup] = useState(false);
    const [bookingDatePopup, setBookingDatePopup] = useState(false);

    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');

    const [confirmation, setConfirmation] = useState<IConfirmationType>({
        id: 'telegram',
        text: 'В Telegram',
    });

    useEffect(() => {
        console.log(guestCount, 'guestCount');
    }, [guestCount]);
    //

    const [availableTimeslots, setAvailableTimeslots] = useState<ITimeSlot[]>(
        []
    );

    const [filteredTimeslots, setFilteredTimeslots] = useState<ITimeSlot[]>([]);

    const [currentPartOfDay, setCurrentPartOfDay] = useState({
        morning: true,
        day: false,
        evening: false,
    });

    const [inputForm, setInputForm] = useState<IBookingForm>({
        commentary: undefined,
        name: undefined,
        phone: undefined,
    });

    const [currentSelectedTime, setCurrentSelectedTime] =
        useState<ITimeSlot | null>(null);

    useEffect(() => {
        setAvailableTimeslots(MockTimeSlots);
    }, []);

    useEffect(() => {
        if (currentPartOfDay.morning) {
            setFilteredTimeslots(
                availableTimeslots.filter(
                    (v) =>
                        Number(v.time.split(':')[0]) >= 8 &&
                        Number(v.time.split(':')[0]) < 12
                )
            );
        } else if (currentPartOfDay.day) {
            setFilteredTimeslots(
                availableTimeslots.filter(
                    (v) =>
                        Number(v.time.split(':')[0]) >= 12 &&
                        Number(v.time.split(':')[0]) < 18
                )
            );
        } else if (currentPartOfDay.evening) {
            setFilteredTimeslots(
                availableTimeslots.filter(
                    (v) =>
                        Number(v.time.split(':')[0]) >= 18 &&
                        Number(v.time.split(':')[0]) < 23
                )
            );
        }
    }, [availableTimeslots, currentPartOfDay]);

    return (
        <Page back={true}>
            <BookingGuestCountSelectorPopup
                guestCount={guestCount}
                setGuestCount={setGuestCount}
                isOpen={guestCountPopup}
                setOpen={setGuestCountPopup}
            />
            <BookingDateSelectorPopup
                isOpen={bookingDatePopup}
                setOpen={setBookingDatePopup}
                bookingDate={bookingDate}
                setBookingDate={setBookingDate}
                values={BOOKING_DATE_VALUES}
            />
            <div className={css.page}>
                <PageContainer>
                    <ContentContainer>
                        <div className={css.headerContainer}>
                            <div className={css.headerNav}>
                                <div style={{ width: '44px' }}></div>
                                <div className={css.headerInfo}>
                                    <h3 className={css.headerInfo__title}>
                                        Бронирование
                                    </h3>
                                </div>
                                <div>
                                    <RoundedButton
                                        icon={<CrossIcon size={44} />}
                                        isBack={true}
                                    />
                                </div>
                            </div>
                            <div className={css.header_bottom}>
                                <div className={css.header__selector}>
                                    <div
                                        className={classNames(
                                            css.header__select
                                        )}
                                        onClick={() =>
                                            setBookingDatePopup(true)
                                        }
                                    >
                                        <div
                                            className={css.header__select__left}
                                        >
                                            <CalendarIcon
                                                size={24}
                                            ></CalendarIcon>
                                            <span
                                                className={
                                                    css.header__select__left_text
                                                }
                                            >
                                                {bookingDate.value !== 'unset'
                                                    ? formatDateShort(
                                                          bookingDate.value
                                                      )
                                                    : 'Дата'}
                                            </span>
                                        </div>
                                        <div
                                            className={
                                                css.header__select__arrow
                                            }
                                        >
                                            <DownArrow></DownArrow>
                                        </div>
                                    </div>
                                    <div
                                        className={classNames(
                                            css.header__select
                                        )}
                                        onClick={() =>
                                            setGuestCountPopup(!guestCountPopup)
                                        }
                                    >
                                        <div
                                            className={css.header__select__left}
                                        >
                                            <UsersIcon size={24}></UsersIcon>
                                            <span
                                                className={
                                                    css.header__select__left_text
                                                }
                                            >
                                                {guestCount
                                                    ? getGuestsString(
                                                          guestCount.value
                                                      )
                                                    : 'Гости'}
                                            </span>
                                        </div>
                                        <div
                                            className={
                                                css.header__select__arrow
                                            }
                                        >
                                            <DownArrow></DownArrow>
                                        </div>
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
                                    {filteredTimeslots.map((v) => (
                                        <SwiperSlide
                                            key={`time_${v.id}`}
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
                                                <span>{v.time}</span>
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
                                        key={obj.text}
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
                    <ContentContainer>
                        <HeaderContainer>
                            <HeaderContent title={'Контакты'} />
                        </HeaderContainer>
                        <div className={css.form}>
                            <TextInput
                                value={userName}
                                onChange={setUserName}
                                placeholder={'Имя'}
                            />
                            <TextInput
                                value={userPhone}
                                onChange={setUserPhone}
                                placeholder={'Телефон'}
                            />
                        </div>
                    </ContentContainer>
                    <ContentContainer>
                        <HeaderContainer>
                            <HeaderContent title={'Способ подтверждения'} />
                        </HeaderContainer>
                        <ConfirmationSelect
                            options={confirmationList}
                            currentValue={confirmation}
                            onChange={setConfirmation}
                        />
                    </ContentContainer>
                </PageContainer>
            </div>
            <div className={css.absoluteBottom}>
                <div className={css.absoluteBottom_wrapper}>
                    <div
                        className={css.redButton}
                        onClick={() => navigate(`/bookingConfirmation`)}
                    >
                        <span className={css.text}>Забронировать</span>
                    </div>
                </div>
            </div>
        </Page>
    );
};
