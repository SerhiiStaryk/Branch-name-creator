import { createPortal } from 'react-dom';
import { Close, Success } from '../../icon';
import { useUiDispatch } from '../../store/ui-context';
import { motion } from 'framer-motion';

interface ToastProps {
  message: string;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  const dispatch = useUiDispatch();

  const handleCloseToast = () => {
    dispatch({ type: 'hideToast' });
  };

  const toastComponent = (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
      }}
      initial='hidden'
      animate='visible'
      exit='hidden'
      id='toast-success'
      className={`
        absolute
        flex
        items-center
        max-w-xs
        mb-4
        p-4
        rounded-lg
        shadow
        w-full
      bg-white
      dark:bg-gray-800
      dark:text-gray-400
      text-gray-500
        left-5
        top-5
      `}
    >
      <div
        className={`
          flex-shrink-0
          h-8
          inline-flex
          items-center
          justify-center
          rounded-lg
          w-8
        bg-green-100
        dark:bg-green-800
        dark:text-green-200
        text-green-500
        `}
      >
        <Success />
      </div>
      <div className='ms-3 text-sm font-normal'>{message}</div>
      <button
        type='button'
        onClick={handleCloseToast}
        className={`
          -mx-1.5
          -my-1.5
          focus:ring-2
          h-8
          inline-flex
          items-center
          justify-center
          ms-auto
          p-1.5
          rounded-lg
          w-8
        bg-white
        dark:bg-gray-800
        dark:hover:bg-gray-700
        dark:hover:text-white
        dark:text-gray-500
        focus:ring-gray-300
        hover:bg-gray-100
        hover:text-gray-900
        text-gray-400
        `}
      >
        <Close />
      </button>
    </motion.div>
  );

  return createPortal(toastComponent, document.getElementById('toast')!);
};

export default Toast;
