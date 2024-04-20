import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/router';
import DataContextProvider from './context/DataContext';

function App(): React.ReactElement {
    return (
        <>
            <DataContextProvider>
                <RouterProvider router={router} />
            </DataContextProvider>
        </>
    );
}

export default App;
