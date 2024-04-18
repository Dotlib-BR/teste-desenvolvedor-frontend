import './Button.css';

interface ButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
    return (
        <button className="customButton" {...props}>
            {children}
        </button>
    );
}
