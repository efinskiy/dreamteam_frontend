import Popup from 'reactjs-popup';
import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { ContentContainer } from '@/components/ContentContainer/ContentContainer.tsx';
import css from './BookingDateSelector.module.css';
import { classNames } from '@telegram-apps/sdk-react';
import Picker, { PickerValue } from '@/lib/react-mobile-picker';

interface Props {
    isOpen: boolean;
    setOpen: (x: boolean) => void;
    guestCount: PickerValue;
    setGuestCount: (value: PickerValue) => void;
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

export const BookingDateSelectorPopup: FC<Props> = (p) => {
    const onClose = () => p.setOpen(false);

    useEffect(() => {
        console.log(p.guestCount.value);
        if (p.isOpen && p.guestCount.value == 'Гости') {
            p.setGuestCount({
                value: '1',
            });
        }
    }, [p.isOpen]);

    return (
        <StyledPopup open={p.isOpen} onClose={onClose} modal>
            <ContentContainer>
                <div className={css.content}>
                    <h3>Количество гостей</h3>
                    <h5>
                        Для бронирования на 10+ гостей свяжитесь с рестораном по
                        телефону <span>+7 (926) 041 53 72</span>
                    </h5>
                    <Picker
                        value={p.guestCount}
                        onChange={p.setGuestCount}
                        wheelMode="natural"
                        height={120}
                    >
                        <Picker.Column name={'value'}>
                            {values.value.map((option) => (
                                <Picker.Item
                                    key={option}
                                    value={option}
                                    title={'dasdas'}
                                >
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
                                                {option}
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
