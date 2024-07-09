import React from "react";
type FormInputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const FormInput: React.FC<FormInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 mb-3 border rounded-md focus:outline-none focus:ring focus:border-primary"
    />
  );
};
export default FormInput;
