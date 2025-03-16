import Popup from 'reactjs-popup';
import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import styled from 'styled-components';
import { ContentContainer } from '@/components/ContentContainer/ContentContainer.tsx';
import css from './BookingDateSelector.module.css';
import { classNames } from '@telegram-apps/sdk-react';
import Picker, { PickerValue } from '@/lib/react-mobile-picker';
import { PickerValueObj } from '@/lib/react-mobile-picker/components/Picker.tsx';
import { formatDate } from '@/utils.ts';

interface Props {
    isOpen: boolean;
    setOpen: (x: boolean) => void;
    bookingDate: PickerValue;
    setBookingDate: Dispatch<SetStateAction<PickerValueObj>>;
    values: PickerValueObj[];
}

const StyledPopup = styled(Popup)`
    &-overlay {
        background: #58585869;
        display: flex;
        flex-direction: column-reverse;
        overscroll-behavior: contain;
    }

    // use your custom style for ".popup-content"

    &-content {
        width: 100vw;
        margin: 0 !important;
        padding: 0;
    }
`;

export const BookingDateSelectorPopup: FC<Props> = ({
    isOpen,
    setOpen,
    bookingDate,
    setBookingDate,
    values,
}) => {
    const onClose = () => setOpen(false);

    useEffect(() => {
        if (isOpen && bookingDate.value == 'unset') {
            setBookingDate(values[0]);
        }
    }, [isOpen]);

    return (
        <StyledPopup open={isOpen} onClose={onClose} modal>
            <ContentContainer>
                <div className={css.content}>
                    <h3>Выберите дату</h3>

                    <Picker
                        value={bookingDate}
                        // @ts-expect-error broken-lib
                        onChange={setBookingDate}
                        wheelMode="natural"
                        height={120}
                    >
                        <Picker.Column name={'value'}>
                            {values.map((option) => (
                                <Picker.Item key={option.value} value={option}>
                                    {({ selected }) => (
                                        <div className={css.selectorItem}>
                                            <span
                                                className={classNames(
                                                    css.item,
                                                    selected
                                                        ? css.item__selected
                                                        : null
                                                )}
                                            >
                                                {formatDate(option.value)}
                                            </span>
                                        </div>
                                    )}
                                </Picker.Item>
                            ))}
                        </Picker.Column>
                    </Picker>
                    <div>
                        <div className={css.redButton} onClick={onClose}>
                            <span className={css.text}>Сохранить</span>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </StyledPopup>
    );
};
