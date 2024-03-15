import { lazy } from 'react';

import type { Route, RouteProps } from '@nxweb/react/router';
import AddForm from '../pages/products/add'
import EditForm from '@pages/products/edit';

export const routes: Route[] = [
  {
    element: (_props: RouteProps) => null,
    path: '/'
  },
  {
    element: AddForm,
    path: '/add',
    title: 'Add Form',
    error: lazy(() => import('@views/errors/404.js'))
  },
  {
    element: EditForm,
    path: '/edit',
    title: 'Edit Form',
    error: lazy(() => import('@views/errors/404.js'))
  },
  // ** Fallback routes, must be the last route item
  {
    auth: false,
    element: lazy(() => import('@views/errors/404.js')),
    fallback: true,
    layout: 'blank',
    title: '404: Not Found'
  }
];
