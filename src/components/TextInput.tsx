import React from "react";

interface Props {
  id: string;
  name: string;
  placeholder: string;
  type?: string;
  classes: string;
  maxRow?: number;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

const TextInput: React.FC<Props> = ({
  id,
  name,
  placeholder,
  classes,
  type,
  setInput,
  value,
}) => {
  return type === "input" ? (
    <input
      className={`${classes} text-xl p-4 resize-none bg-gray-700 placeholder-slate-500 placeholder: placeholder:text-xl rounded-md`}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setInput(e.target.value);
      }}
    />
  ) : (
    <textarea
      className={`${classes} text-xl p-4 resize-none bg-gray-700 placeholder-slate-500 placeholder: placeholder:text-xl rounded-md`}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setInput(e.target.value);
      }}
    />
  );
};

export default TextInput;
