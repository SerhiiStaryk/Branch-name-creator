import { Logo } from '../../icon';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const Header: React.FC = () => (
  <div className='flex mb-10'>
    <Logo />
    <h1 className='ml-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl'>
      <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
        Branch name creator
      </span>
    </h1>
    <div className='ml-auto flex'>
      <ThemeSwitcher />
    </div>
  </div>
);

export default Header;
