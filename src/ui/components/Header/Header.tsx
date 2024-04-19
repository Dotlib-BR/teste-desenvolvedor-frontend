import { useNavigate } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  const history = useNavigate();
  return (
    <header className="header">
      <img
        className="header-logo"
        src="Leaflet-Collection-Logo.svg"
        alt="Leaflet Collection Logo"
        title="Leaflet Collection Logo"
        onClick={() => history(`/`)}
      />
    </header>
  );
};
