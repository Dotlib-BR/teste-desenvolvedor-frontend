import './Header.css';

import { useState } from 'react';
import IconSunMoon from '../../icons/SunMoon/SunMoon';
import Button from '../Button/Button';

interface HeaderProps {
    children?: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
    const [icon, setIcon] = useState<'sun' | 'moon'>('sun');

    const handleMode = () => {
        const html = document.querySelector('html') as HTMLElement;

        if (html.classList[0] === 'dark-mode') {
            html.classList.remove('dark-mode');

            setIcon('moon');
        } else {
            html.classList.add('dark-mode');

            setIcon('sun');
        }
    };

    return (
        <header className="header">
            <h1>Bulário eletrônico</h1>

            <div className="navigate">{children}</div>
            <Button onClick={() => handleMode()}>
                <IconSunMoon name={icon} />
            </Button>
        </header>
    );
}
