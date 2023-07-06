import React from 'react';
import s from './InputForm.module.scss';

const InputForm = ({ type, ph, name, value, setValue, style, className, error }) => {
  const onInputChangeHandler = (e) => {
    setValue(e.currentTarget.value);
  };

  return (
    <>
      <input
        style={style ? style : {}}
        className={`${s.input} ${className}`}
        type={type ? type : 'text'}
        placeholder={ph ? ph : ''}
        name={name ? name : ''}
        aria-label={name ? name : ''}
        value={value}
        onChange={(e) => {
          onInputChangeHandler(e);
        }}
      />
    </>
  );
};

export default InputForm;
