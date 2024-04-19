import "./Switch.scss";

interface SwitchProps {
  onChange: () => void;
}

export const Switch = ({ onChange }: SwitchProps) => {
  return (
    <label className="switch">
      <input type="checkbox" onClick={() => onChange()} />
      <span className="slider"></span>
    </label>
  );
};
