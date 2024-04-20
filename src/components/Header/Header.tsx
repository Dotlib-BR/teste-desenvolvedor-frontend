import React from 'react';
import { Link } from 'react-router-dom';
import LogoSVG from '../../assets/logo.svg?react';

export const Header = (): React.ReactElement => {
    return (
        <header>
            <nav className="nav-desktop">
                <Link to="/">
                    <LogoSVG className="logo" />
                </Link>

                <Link to="/" className="ml-3 color-white">
                    Home
                </Link>
            </nav>
        </header>
    );
};
