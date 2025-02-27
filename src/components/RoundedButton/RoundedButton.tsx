import css from './roundedButton.module.css';
import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = {
    icon: ReactNode;
    is_link?: boolean;
    to?: string;
    is_action?: boolean;
    action?: () => void;
};

export const RoundedButton: FC<Props> = (props) => {
    const button = (
        <div
            onClick={() => (props.action ? props.action() : null)}
            className={css.rounded_button}
        >
            {props.icon}
        </div>
    );

    return (
        <>
            {props.is_link && props.to ? (
                <Link to={props.to}>{button}</Link>
            ) : (
                button
            )}
        </>
    );
};
