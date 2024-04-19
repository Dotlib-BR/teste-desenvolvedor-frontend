import "./styles.css";

interface Props {
  value: string;
  onChangeValue: (value: string) => void;
  options: Array<{ value: string; label: string }>;
}
export const Select: React.FC<Props> = ({ onChangeValue, value, options }) => {
  return (
    <select
      className="base-select"
      value={value}
      onChange={(e) => onChangeValue(e.target.value)}
    >
      {options.map((option) => (
        <option className="option-item" key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
