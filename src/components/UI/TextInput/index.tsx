import clsx from "clsx";
import { ReactNode } from "react";

export interface TextInputProps {
  label?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  placeholder?: string;
  name?: string;
  id?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  onValueApply?: (value: string) => void;
}

export function TextInput({
  label,
  prefix,
  suffix,
  placeholder,
  name,
  id,
  value,
  onValueChange,
  onValueApply,
}: TextInputProps) {
  const getInputRoundedBordersClass = () => {
    if (prefix && suffix) return "rounded-md";
    if (prefix) return "rounded-r-md";
    if (suffix) return "rounded-l-md";
    return undefined;
  };

  return (
    <fieldset className="w-full space-y-1 dark:text-gray-800">
      {label ? (
        <label htmlFor="url" className="block text-sm font-medium">
          {label}
        </label>
      ) : undefined}
      <div className="flex">
        {prefix ? (
          <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md dark:bg-gray-300">
            {prefix}
          </span>
        ) : undefined}
        <input
          type="text"
          name={name}
          id={id}
          placeholder={placeholder}
          className={clsx(
            "flex flex-1 border sm:text-sm focus:ring-inset dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600",
            getInputRoundedBordersClass()
          )}
          value={value}
          onChange={
            onValueChange ? (e) => onValueChange(e.target.value) : undefined
          }
          onBlur={
            onValueApply ? (e) => onValueApply(e.target.value) : undefined
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.currentTarget.blur();
            }
          }}
        />
        {suffix ? (
          <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md dark:bg-gray-300">
            {suffix}
          </span>
        ) : undefined}
      </div>
    </fieldset>
  );
}
