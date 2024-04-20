import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/router';
import DataContextProvider from './context/DataContext';
import MedicineContextProvider from './context/MedicineContext';

function App(): React.ReactElement {
    return (
        <>
            <MedicineContextProvider>
                <RouterProvider router={router} />
            </MedicineContextProvider>
        </>
    );
}

export default App;
