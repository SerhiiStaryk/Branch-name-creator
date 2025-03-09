import { FC, ChangeEvent } from 'react';

export interface InputProps {
  id: string;
  name: string;
  type: string;
  value: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ id, label, name, type, value, onChange }) => {
  return (
    <div className='md:flex md:items-center mb-6'>
      <div className='md:w-1/3'>
        <label
          htmlFor={id}
          className='block text-gray-500 font-bold mb-1 dark:text-gray-200 md:text-right md:mb-0 pr-4'
        >
          {label}
        </label>
      </div>
      <div className='md:w-2/3'>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className='py-2 px-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-600'
        />
      </div>
    </div>
  );
};

export default Input;
