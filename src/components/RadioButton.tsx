type Props = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
const RadioButton: React.FC<Props> = ({
  label,
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <label className="w-24 h-10 bg-gray-800 border-gray-500 border rounded-md hover:bg-indigo-800 hover:border-0 text-white flex justify-center items-center transition-colors  duration-300 cursor-pointer">
      <input
        name={name}
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      {label}
    </label>
  );
};

export default RadioButton;
