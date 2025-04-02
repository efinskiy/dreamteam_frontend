import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import { useEffect, useMemo, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import { formatDateCalendar, IEventBookingContext } from '@/utils.ts';
import { ArrowLeft, ArrowRight } from 'react-iconly';
import css from './DTSelectionOutlet.module.css';
import { ITimeSlot } from '@/pages/BookingPage/BookingPage.types.ts';
import { MockTimeSlots } from '@/mockData.ts';
import { classNames } from '@telegram-apps/sdk-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { UniversalButton } from '@/components/Buttons/UniversalButton/UniversalButton.tsx';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const AvailableDates = [
    new Date('2025.04.04'),
    new Date('2025.04.05'),
    new Date('2025.04.06'),
    new Date('2025.04.07'),
];

export const DTSelectionOutlet = () => {
    const { id, res } = useParams();
    const navigate = useNavigate();
    const [value, onChange] = useState<Value>();
    const [, setBookingInfo] = useOutletContext<IEventBookingContext>();
    const [currentPartOfDay, setCurrentPartOfDay] = useState({
        morning: true,
        day: false,
        evening: false,
    });
    const [filteredTimeslots, setFilteredTimeslots] = useState<ITimeSlot[]>([]);
    const [availableTimeslots, setAvailableTimeslots] = useState<ITimeSlot[]>(
        []
    );
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

    const isValid = useMemo(() => {
        return value && currentSelectedTime;
    }, [value, currentSelectedTime]);

    const next = (dt: Value | undefined, timeslot: ITimeSlot | null) => {
        if (dt && typeof dt === 'object' && timeslot) {
            // @ts-expect-error type
            setBookingInfo((prev) => ({
                ...prev,
                date: dt,
                time: timeslot.time,
            }));
            navigate(`/events/${id}/restaurant/${res}/guests`);
        }
    };

    return (
        <div className={css.frame}>
            <Calendar
                onChange={onChange}
                allowPartialRange={false}
                selectRange={false}
                value={value}
                tileDisabled={({ date }) =>
                    !AvailableDates.some((d) => d.getTime() == date.getTime())
                }
                showDoubleView={false}
                formatMonthYear={(_, date) => formatDateCalendar(date)}
                prev2Label={null}
                next2Label={null}
                maxDetail={'month'}
                minDetail={'year'}
                prevLabel={<ArrowLeft />}
                nextLabel={<ArrowRight />}
            />
            {value ? (
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
                            spaceBetween={8}
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
                        </Swiper>
                    </div>
                </div>
            ) : null}
            <div className={css.absoluteBottom}>
                <div className={css.bottomWrapper}>
                    <UniversalButton
                        width={'full'}
                        title={'Купить билет'}
                        theme={isValid ? 'red' : undefined}
                        action={() => {
                            isValid
                                ? next(value, currentSelectedTime)
                                : alert(
                                      'Для продолжения выберите доступную дату и время из списка.'
                                  );
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
