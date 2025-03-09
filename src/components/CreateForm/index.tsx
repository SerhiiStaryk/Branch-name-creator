import { FormEvent, useState } from 'react';
import Input from '../Input';
import { normalizeText, trimAndUppercase } from '../../util/text';
import { Type, types } from '../../constants/types';
import { ItemType } from '../ItemType';

type CreateFormProps = {
  onSetBranchNameAndCommit: ({ branchName, commit }: { branchName: string; commit: string }) => void;
};

type FormData = {
  type: Type;
  name: string;
  description: string;
};

const initialState: FormData = { type: 'feat', name: '', description: '' };

const CreateForm = ({ onSetBranchNameAndCommit }: CreateFormProps) => {
  const [formData, setFormData] = useState(initialState);

  const { name, description, type } = formData;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevState: FormData) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSetType = (type: Type) => {
    setFormData((prevState: FormData) => ({
      ...prevState,
      type,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSetBranchNameAndCommit({
      branchName: `${type}/OMS-${trimAndUppercase(name)}-${normalizeText(description)}`,
      commit: `${type}: #${name} ${description}`,
    });
  };

  const handleReset = () => {
    setFormData(initialState);
    onSetBranchNameAndCommit({ branchName: '', commit: '' });
  };

  const disabled = name.trim().length === 0 || description.trim().length === 0;

  return (
    <form onSubmit={handleSubmit}>
      <h3 className='text-gray-500 font-bold dark:text-gray-200 text-left mb-2 pl-1'>Type</h3>
      <ul className='mb-6 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
        {types.map(item => (
          <ItemType
            key={item.type}
            type={item.type}
            onChanged={onSetType}
            checked={type === item.type}
            description={item.description}
          />
        ))}
      </ul>
      <Input
        id='name'
        type='text'
        name='name'
        label='Task #'
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
          Create branch name & commit
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
