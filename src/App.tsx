import { useState } from 'react';
import Header from './components/Header';
import CreateForm from './components/CreateForm';
import CopyContainer from './components/CopyContainer';
import { Label } from './components/Label';

function App() {
  const [branchName, setBranchName] = useState('');

  return (
    <div className='bg-white dark:bg-slate-800 h-screen'>
      <div className='md:container md:mx-auto pt-4 px-4'>
        <Header />
        <CreateForm onSetBranchName={setBranchName} />
        <Label label='Branch name' />
        <CopyContainer branchName={branchName} />
        <Label label='Commit' />
        <CopyContainer branchName={branchName} />
      </div>
    </div>
  );
}
export default App;
