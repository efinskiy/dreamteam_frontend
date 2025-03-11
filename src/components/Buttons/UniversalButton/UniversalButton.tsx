import { FC } from 'react';
import css from './UniversalButton.module.css';
import { classNames } from '@telegram-apps/sdk-react';
import { Link } from 'react-router-dom';

interface UniversalButtonProps {
    width: number | 'full';
    title: string;
    color?: string;
    link?: string;
    action?: () => void;
    theme?: string;
}

export const UniversalButton: FC<UniversalButtonProps> = (p) => {
    return (
        <>
            {p.link ? (
                <Link
                    to={p.link}
                    className={classNames(
                        css.universalButton,
                        p.theme == 'red' ? css.redTheme : null,
                        p.width == 'full' ? css.fullWidth : null
                    )}
                >
                    <span className={css.text}>{p.title}</span>
                </Link>
            ) : (
                <div
                    className={classNames(
                        css.universalButton,
                        p.theme == 'red' ? css.redTheme : null,
                        p.width == 'full' ? css.fullWidth : null
                    )}
                    onClick={() => (p.action !== undefined ? p.action() : null)}
                >
                    <span className={css.text}>{p.title}</span>
                </div>
            )}
        </>
    );
};
