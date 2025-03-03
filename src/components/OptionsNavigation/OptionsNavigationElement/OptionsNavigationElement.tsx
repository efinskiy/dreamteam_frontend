import css from './OptionsNavigationElement.module.css';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface OptionsNavigationElementProps {
    icon: ReactNode;
    title: string;
    link: string;
}

export const OptionsNavigationElement = (
    props: OptionsNavigationElementProps
) => {
    return (
        <Link to={props.link} className={css.element}>
            <div className={css.wrapper}>
                <div className={css.topIcon}>{props.icon}</div>
                <div className={css.bottomText}>{props.title}</div>
            </div>
        </Link>
    );
};
