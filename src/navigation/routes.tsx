import type { ComponentType, JSX } from 'react';

import { IndexPage } from '@/pages/IndexPage/IndexPage';
import { Restaurant } from '@/pages/Restaurant/Restaurant.tsx';

interface Route {
    path: string;
    Component: ComponentType;
    title?: string;
    icon?: JSX.Element;
}

const PlaceHolder = () => {
    return <h1>Placeholder page</h1>;
};

export const routes: Route[] = [
    { path: '/', Component: IndexPage },
    {
        path: '/events',
        Component: PlaceHolder,
    },
    {
        path: '/review',
        Component: PlaceHolder,
    },
    {
        path: '/restaurant/:id',
        Component: Restaurant,
    },
];
