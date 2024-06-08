import React from 'react';

const Select = ({ label, options, name, value, setValue } : any) => {
  const handleChange = (event:any) => {
    setValue(event);
  };

  return (
    <>
      <label>
        <p>{label}</p>
        <select
          name={name}
          id={name}
          value={value}
          onChange={({ target }) => handleChange(target.value)}
        >
          <option defaultValue="" hidden>
            Selecione...
          </option>
          {options.map((option: any) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default Select;
