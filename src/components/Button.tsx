import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type Props = {} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ children, className, type, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        `inline-flex items-center trounded-md shadow-sm bg-[#655BFF] hover:brightness-110`,
        `px-11 py-3.5 border border-transparent rounded-lg`,
        `text-base font-medium text-white`,
        `transition ease-in-out duration-300`,
        className
      )}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
