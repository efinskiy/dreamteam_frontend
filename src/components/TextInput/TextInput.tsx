import { FC } from 'react';
import css from './TextInput.module.css';

interface ITextInput {
    placeholder?: string;
    value: string | undefined;
    onChange: (value: string) => void;
}

export const TextInput: FC<ITextInput> = (p) => {
    return (
        <input
            type={'text'}
            placeholder={p.placeholder}
            value={p.value}
            onChange={(e) => p.onChange(e.target.value)}
            className={css.text_input}
        />
    );
};
