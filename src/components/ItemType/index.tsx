import { ItemTypeType, Type } from '../../constants/types';

type ItemTypeProps = {
  checked: boolean;
  onChanged: (type: Type) => void;
} & ItemTypeType;

export const ItemType = ({ checked, type, description, onChanged }: ItemTypeProps) => (
  <li
    className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'
    title={description}
  >
    <div className='flex items-center ps-3'>
      <input
        id={type}
        type='radio'
        checked={checked}
        name='list-radio'
        onChange={() => onChanged(type)}
        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
      />
      <label
        htmlFor={type}
        className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
      >
        {type}
      </label>
    </div>
  </li>
);
