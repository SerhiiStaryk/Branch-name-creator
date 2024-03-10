import { useState } from 'react';
import Header from './components/Header/Header';
import CreateForm from './components/CreateForm/CreateForm';
import CopyContainer from './components/CopyContainer/CopyContainer';


function App() {
  const [branchName, setBranchName] = useState('');

  return (
    <div className='bg-white dark:bg-slate-800 h-screen'>
      <div className='md:container md:mx-auto pt-4'>
        <Header />
        <CreateForm onSetBranchName={setBranchName} />
        <CopyContainer branchName={branchName} />
      </div>
    </div>
  );
}
export default App;
