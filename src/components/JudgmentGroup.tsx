import RadioButton from "./RadioButton";

type Props = {
  name: string;
};

const JUGDMENT_OPTIONS = ["High", "Medium", "Low"];
const JudgmentGroup: React.FC<Props> = ({ name }) => {
  return (
    <div className="flex items-center">
      <div className="flex w-1/5">{name}</div>
      <div className="flex space-x-5 justify-end">
        {JUGDMENT_OPTIONS.map((option, idx) => (
          <RadioButton
            label={`${idx + 1}. ${option}`}
            name={name}
            value={option}
            key={option}
          />
        ))}
      </div>
    </div>
  );
};

export default JudgmentGroup;
