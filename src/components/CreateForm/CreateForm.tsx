import { FormEvent } from 'react';
import Input from '../Input/Input';
import { normalizeText, trimAndUppercase } from '../../util/text';

interface CreateFormProps {
  onSetBranchName: (branchName: string) => void;
}

const CreateForm: React.FC<CreateFormProps> = ({ onSetBranchName }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fd = new FormData(event.currentTarget);

    const name: string | undefined = fd.get('name') as string;
    const description: string | undefined = fd.get('description') as string;

    const result = `${trimAndUppercase(name)}/${normalizeText(description)}`;

    onSetBranchName(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id='task-name'
        type='text'
        label='Task'
        name='name'
      />
      <Input
        id='description'
        type='text'
        label='Description'
        name='description'
      />
      <div className='flex justify-end'>
        <button
          className={`
            active:bg-emerald-700
            bg-emerald-500
            focus:outline-none focus:ring
            focus:ring-emerald-300
            font-semibold
            hover:bg-emerald-600-600
            leading-5
            px-5
            py-2
            rounded-full
            text-sm
            text-white
          `}
        >
          Create branch name
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
