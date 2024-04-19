import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/";
import { FavoritePage } from "../../pages/FavoritePage/FavoritePage";

export const App = () => {
  const basename = "/";
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </BrowserRouter>
  );
};
