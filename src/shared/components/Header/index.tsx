import './Header.css';

interface HeaderProps {
    children?: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
    return (
        <header className="header">
            <h1>Bulário eletrônico</h1>

            <ul className="navigate">{children}</ul>
        </header>
    );
}
