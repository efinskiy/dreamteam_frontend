import Popup from 'reactjs-popup';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ContentContainer } from '@/components/ContentContainer/ContentContainer.tsx';
import Picker from 'react-mobile-picker';
import css from './BookingGuestCountSelector.module.css';

interface Props {
    isOpen: boolean;
    setOpen: (x: boolean) => void;
    guestCount: number | null;
    setGuestCount: (guestCount: number | null) => void;
}

const values = {
    value: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
};
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

export const BookingGuestCountSelectorPopup: FC<Props> = (p) => {
    const onClose = () => p.setOpen(false);

    const [pickerValue, setPickerValue] = useState({
        value: 'Mr.',
    });

    useEffect(() => {
        console.log(pickerValue);
    }, [pickerValue]);

    return (
        <StyledPopup open={p.isOpen} onClose={onClose} modal>
            <ContentContainer>
                <div className={css.content}>
                    <h3>Выберите дату</h3>
                    <Picker
                        value={pickerValue}
                        onChange={setPickerValue}
                        wheelMode="natural"
                        height={200}
                    >
                        <Picker.Column name={'value'}>
                            {values.value.map((option) => (
                                <Picker.Item key={option} value={option}>
                                    {({ selected }) => (
                                        /* Use the `selected` state to conditionally style the selected item */
                                        <div
                                            style={{
                                                color: selected
                                                    ? 'red'
                                                    : 'black',
                                            }}
                                            className={css.selectorItem}
                                        >
                                            Item 1
                                        </div>
                                    )}
                                </Picker.Item>
                            ))}
                        </Picker.Column>
                    </Picker>
                </div>
            </ContentContainer>
        </StyledPopup>
    );
};
