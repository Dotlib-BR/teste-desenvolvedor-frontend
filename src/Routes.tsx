
// Routes.js
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ '' } />
      </Routes>
      <Routes>
        <Route path="/users/:id" element={ '' } />
      </Routes>
    </BrowserRouter>
  );
};