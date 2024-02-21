import { IconType } from "react-icons";
import React from "react";
interface ButtonProps {
  label: string;
  disabled?: boolean;
  outlined?: boolean;
  small?: boolean;
  custom?: string;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({
  label,
  custom,
  disabled,
  icon: Icon,
  outlined,
  small,
  onClick
}: ButtonProps) {
  return (
    <button
    onClick={onClick}
      disabled={disabled}
      className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80 transition w-full border-slate-700 flex items-center justify-center gap-2 ${
        outlined ? "bg-white" : "bg-slate-700"
      } ${outlined ? "text-slate-700" : "text-white"} ${
        small ? "text-sm font-light " : "text-md font-semibold "
      } ${small ? 'py-1 px-2 border-[1px] ':'py-3 px-4'} ${custom ? custom :''}`}
    >
      {label}
      {Icon && <Icon size={24} />}
    </button>
  );
}
