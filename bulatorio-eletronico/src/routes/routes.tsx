import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'

import DefaultLayout from '../layout/default-layout'
import Home from '../pages/home'
import NotFound from '../pages/not-found'

export const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
        </Route>,
    ),
)
