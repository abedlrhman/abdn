import {FunctionComponent, lazy} from 'react'
import MainLayout from "../layout/Main"
/*
*/

const Products = lazy(() => import('../pages/products'))

type Route = {
    path: string;
    component: any;
    layout: any;
    meta : {
        authRoute?: boolean;
        navLink?: string;
        publicRoute?: boolean;
    }
    children ?: Route[];
}

const PagesRoutes : Route[] = [

    {
        path: '/products',
        component: Products,
        layout: MainLayout,
        meta: {
            authRoute: false
        },

    },
    {
        path: '/products/:id',
        component: Products,
        layout: MainLayout,
        meta: {
            authRoute: false
        },

    },

]

export default PagesRoutes

