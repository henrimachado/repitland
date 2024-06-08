import React from 'react';
interface InputProps {
  label: string;
  name: string;
  type: string;
  value: any;
  setValue: (value: any) => void;

}
const Input = ({ label, name, type, value, setValue, ...props }: InputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  if (type == 'date') {
    return (
      <>
        <label>
          <p>{label}</p>
          <input
            id={name}
            name={name}
            type={type}
            // value={value}
            onChange={({ target }) => setValue(target.value)}
            defaultValue={value}
            {...props}
          />
        </label>
      </>
    );
  }

  return (
    <>
      <label>
        <p>{label}</p>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={({ target }) => setValue(target.value)}
          {...props}
        />
      </label>
    </>
  );
};

export default Input;
