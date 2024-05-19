import { ReactNode } from "react";

export interface TextAreaProps {
  label?: ReactNode;
  placeholder?: string;
  name?: string;
  id?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  onValueApply?: (value: string) => void;
}

export function TextArea({
  label,
  placeholder,
  name,
  id,
  value,
  onValueChange,
  onValueApply,
}: TextAreaProps) {
  return (
    <fieldset className="w-full space-y-1 dark:text-gray-800">
      {label ? (
        <label htmlFor="url" className="block text-sm font-medium">
          {label}
        </label>
      ) : undefined}
      <div className="flex">
        <textarea
          name={name}
          id={id}
          placeholder={placeholder}
          className="flex flex-1 border sm:text-sm focus:ring-inset dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600 rounded-md"
          value={value}
          onChange={
            onValueChange ? (e) => onValueChange(e.target.value) : undefined
          }
          onBlur={
            onValueApply ? (e) => onValueApply(e.target.value) : undefined
          }
        />
      </div>
    </fieldset>
  );
}
