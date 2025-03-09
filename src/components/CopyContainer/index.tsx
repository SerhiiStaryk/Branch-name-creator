import { FC } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Copy } from '../../icon';
import Toast from '../Toast';
import { useUi, useUiDispatch } from '../../store/ui-context';

interface CopyContainerProps {
  branchName: string;
}

const CopyContainer: FC<CopyContainerProps> = ({ branchName }) => {
  const { isToast } = useUi();
  const dispatch = useUiDispatch();

  const handleCopyText = () => {
    navigator.clipboard.writeText(branchName);
    dispatch({ type: 'showToast' });

    setTimeout(() => dispatch({ type: 'hideToast' }), 1500);
  };

  return (
    <>
      <AnimatePresence>{isToast && <Toast message='copy name success' />}</AnimatePresence>
      <span className='bg-gray-200 inline-flex items-center min-h-14 mt-10 p-4 pl-6 relative rounded-lg sm:text-base space-x-4 text-left text-sm w-full'>
        <span className='text-gray-500'>{branchName}</span>
        {branchName && (
          <span
            className='absolute cursor-pointer right-4'
            onClick={handleCopyText}
          >
            <Copy />
          </span>
        )}
      </span>
    </>
  );
};

export default CopyContainer;
