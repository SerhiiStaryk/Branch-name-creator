import { FC } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Copy } from '../../icon';
import Toast from '../Toast';
import { useUi, useUiDispatch } from '../../store/ui-context';

interface CopyContainerProps {
  value: string;
}

const CopyContainer: FC<CopyContainerProps> = ({ value }) => {
  const { isToast } = useUi();
  const dispatch = useUiDispatch();

  const handleCopyText = () => {
    navigator.clipboard.writeText(value);
    dispatch({ type: 'showToast' });

    setTimeout(() => dispatch({ type: 'hideToast' }), 1500);
  };

  return (
    <>
      <AnimatePresence>{isToast && <Toast message='Copy successful' />}</AnimatePresence>
      <span className='bg-gray-200 inline-flex items-center min-h-14 mb-8 p-4 pl-6 relative rounded-lg sm:text-base space-x-4 text-left text-sm w-full'>
        <span className='text-gray-500'>{value}</span>
        {value && (
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
