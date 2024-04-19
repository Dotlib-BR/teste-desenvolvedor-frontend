import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import Medicine from '../pages/medicine/Medicine';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/medicine/:id" element={<Medicine />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
