import clsx from "clsx";

type Props = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
const RadioButton: React.FC<Props> = ({ label, name, value, checked, onChange }) => {
  return (
    <label
      className={clsx(
        "w-32 h-14 bg-gray-800 border-gray-500 border rounded-md hover:bg-indigo-800 hover:border-0 text-white",
        "flex justify-center items-center transition-colors  duration-300 cursor-pointer",
        checked && "bg-indigo-700 checked:border-0 checked:text-white"
      )}
    >
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
