import { FC, useEffect, useRef } from 'react';
import css from './TextInput.module.css';
import { classNames } from '@telegram-apps/sdk-react';

interface ITextInput {
    placeholder?: string;
    value: string | undefined;
    onChange: (value: string) => void;
    validation_failed?: boolean;
}

export const TextInput: FC<ITextInput> = (p) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (p.validation_failed && inputRef.current) {
            inputRef.current.reportValidity();
        }
    }, [p.validation_failed]);

    return (
        <input
            type={'text'}
            placeholder={p.placeholder}
            value={p.value}
            onChange={(e) => p.onChange(e.target.value)}
            className={classNames(
                css.text_input,
                p.validation_failed ? css.failed : null
            )}
            ref={inputRef}
        />
    );
};
