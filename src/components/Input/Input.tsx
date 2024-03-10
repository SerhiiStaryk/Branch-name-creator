import React from 'react';

export interface InputProps {
  id: string;
  label: string;
  name: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ id, label, name, ...props }) => {
  return (
    <div className='md:flex md:items-center mb-6'>
      <div className='md:w-1/3'>
        <label
          htmlFor={id}
          className={`
            block
            text-gray-500
            font-bold
            mb-1
            dark:text-gray-200
            md:text-right
            md:mb-0 pr-4
          `}
        >
          {label}
        </label>
      </div>
      <div className='md:w-2/3'>
        <input
          {...props}
          id={id}
          name={name}
          className={`
            py-2
            px-4
            bg-gray-200
            appearance-none
            border-2
            border-gray-200
            rounded
            w-full
            text-gray-700
            leading-tight
            focus:outline-none
            focus:bg-white
            focus:border-emerald-600
          `}
        />
      </div>
    </div>
  );
};

export default Input;
