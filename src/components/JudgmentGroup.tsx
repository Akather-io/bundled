import { Controller, useFormContext } from "react-hook-form";
import RadioButton from "./RadioButton";

type Props = {
  name: string;
};

const JUGDMENT_OPTIONS = ["High", "Medium", "Low"];
const JudgmentGroup: React.FC<Props> = ({ name }) => {
  const { control } = useFormContext();
  return (
    <div className="flex items-center">
      <div className="flex w-1/5 text-xl">{name[0].toUpperCase() + name.slice(1)}</div>
      <Controller
        render={({ field: { value, onChange } }) => (
          <div className="flex space-x-5 justify-end text-xl">
            {JUGDMENT_OPTIONS.map((option, idx) => (
              <RadioButton
                label={`${idx + 1}. ${option}`}
                name={name}
                value={option}
                key={option}
                checked={value === idx}
                onChange={() => onChange(JUGDMENT_OPTIONS.indexOf(option))}
              />
            ))}
          </div>
        )}
        name={name}
        control={control}
      />
    </div>
  );
};

export default JudgmentGroup;
