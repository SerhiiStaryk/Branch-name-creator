import { FormEvent, useState } from 'react';

import Input from '../Input';
import { normalizeText, trimAndUppercase } from '../../util/text';

type CreateFormProps = { onSetBranchName: (branchName: string) => void };

type FormData = { name: string; description: string };

const initialState: FormData = { name: '', description: '' };

const CreateForm: React.FC<CreateFormProps> = ({ onSetBranchName }) => {
  const [formData, setFormData] = useState(initialState);

  const { name, description } = formData;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevState: FormData) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = `${trimAndUppercase(name)}/${normalizeText(description)}`;

    onSetBranchName(result);
  };

  const handleReset = () => {
    setFormData(initialState);
    onSetBranchName('');
  };

  const disabled = name.trim().length === 0 || description.trim().length === 0;

  const types = [
    {
      type: 'feat',
      description: 'new feature for the user, not a new feature for build script',
    },
    {
      type: 'fix',
      description: 'bug fix for the user, not a fix to a build script',
    },
    {
      type: 'docs',
      description: 'changes to the documentation',
    },
    {
      type: 'style',
      description: 'formatting, missing semi colons, etc; no production code change',
    },
    {
      type: 'refactor',
      description: 'refactoring production code, eg. renaming a variable',
    },
    {
      type: 'test',
      description: 'adding missing tests, refactoring tests; no production code change',
    },
    {
      type: 'chore',
      description: 'updating grunt tasks etc; no production code change',
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <h3 className='text-gray-500 font-bold dark:text-gray-200 text-left mb-2 pl-1'>Type</h3>
      <ul className='mb-6 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
        <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'>
          <div className='flex items-center ps-3'>
            <input
              id='feat'
              type='radio'
              value=''
              name='list-radio'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
            />
            <label
              htmlFor='feat'
              className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              feat
            </label>
          </div>
        </li>
        <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'>
          <div className='flex items-center ps-3'>
            <input
              id='fix'
              type='radio'
              value=''
              name='list-radio'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
            />
            <label
              htmlFor='fix'
              className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              fix
            </label>
          </div>
        </li>
        <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'>
          <div className='flex items-center ps-3'>
            <input
              id='style'
              type='radio'
              value=''
              name='list-radio'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
            />
            <label
              htmlFor='style'
              className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              style
            </label>
          </div>
        </li>
        <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'>
          <div className='flex items-center ps-3'>
            <input
              id='refactor'
              type='radio'
              value=''
              name='list-radio'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
            />
            <label
              htmlFor='refactor'
              className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              refactor
            </label>
          </div>
        </li>
        <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'>
          <div className='flex items-center ps-3'>
            <input
              id='chore'
              type='radio'
              value=''
              name='list-radio'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
            />
            <label
              htmlFor='chore'
              className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              chore
            </label>
          </div>
        </li>
        <li className='w-full dark:border-gray-600'>
          <div className='flex items-center ps-3'>
            <input
              id='bug'
              type='radio'
              value=''
              name='list-radio'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
            />
            <label
              htmlFor='bug'
              className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              bug
            </label>
          </div>
        </li>
      </ul>
      <Input
        id='name'
        type='text'
        name='name'
        label='Task'
        value={name}
        onChange={e => handleChange(e)}
      />
      <Input
        type='text'
        id='description'
        name='description'
        label='Description'
        value={description}
        onChange={e => handleChange(e)}
      />
      <div className='flex justify-end'>
        <button
          type='button'
          disabled={disabled}
          onClick={handleReset}
          className={`px-5 py-2 mr-2 text-sm leading-5 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-700 disabled:bg-slate-500`}
        >
          Reset
        </button>
        <button
          type='submit'
          disabled={disabled}
          className={`px-5 py-2 text-sm leading-5 text-white rounded-full font-semibold bg-emerald-500 hover:bg-emerald-700 disabled:bg-slate-500`}
        >
          Create branch name
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
