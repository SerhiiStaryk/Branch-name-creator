import { useState } from 'react';
import Header from './components/Header';
import CreateForm from './components/CreateForm';
import CopyContainer from './components/CopyContainer';
import { Label } from './components/Label';

const App = () => {
  const [branchName, setBranchName] = useState<string>('');
  const [commit, setCommit] = useState<string>('');

  const handleSetBranchNameAndCommit = ({ branchName, commit }: { branchName: string; commit: string }) => {
    setBranchName(branchName);
    setCommit(commit);
  };

  return (
    <div className='bg-white dark:bg-slate-800 h-screen'>
      <div className='md:container md:mx-auto pt-4 px-4'>
        <Header />
        <CreateForm onSetBranchNameAndCommit={handleSetBranchNameAndCommit} />
        <Label label='Branch name' />
        <CopyContainer value={branchName} />
        <Label label='Commit' />
        <CopyContainer value={commit} />
      </div>
    </div>
  );
};

export default App;
