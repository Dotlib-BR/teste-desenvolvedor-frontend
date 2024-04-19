import "./styles.css";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChangeValue: (value: string) => void;
}
export const Input: React.FC<Props> = ({ onChangeValue, value, ...rest }) => {
  return (
    <input
      value={value}
      onChange={(e) => onChangeValue(e.target.value)}
      className="base-input"
      {...rest}
    />
  );
};
