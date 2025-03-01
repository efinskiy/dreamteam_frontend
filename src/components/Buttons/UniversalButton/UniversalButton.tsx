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
}

export const UniversalButton: FC<UniversalButtonProps> = (p) => {
    return (
        <>
            {p.link ? (
                <Link to={p.link} className={css.universalButton}>
                    <span className={css.text}>{p.title}</span>
                </Link>
            ) : (
                <div
                    className={classNames(css.universalButton)}
                    onClick={() => (p.action !== undefined ? p.action() : null)}
                >
                    <span className={css.text}>{p.title}</span>
                </div>
            )}
        </>
    );
};
