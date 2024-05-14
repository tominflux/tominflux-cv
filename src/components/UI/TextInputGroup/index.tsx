import clsx from "clsx";
import { TextInput, TextInputProps } from "../TextInput";

export interface TextInputGroupProps {
  className?: string;
  textInputs: (TextInputProps & { key: string })[];
}

export default function TextInputGroup({
  className,
  textInputs,
}: TextInputGroupProps) {
  return (
    <div className={clsx("flex flex-col gap-2 py-2 text-left", className)}>
      {textInputs.map(({ key, ...textInputProps }) => (
        <TextInput key={key} {...textInputProps} />
      ))}
    </div>
  );
}
