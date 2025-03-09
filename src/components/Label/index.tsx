interface LabelProps {
  label: string;
}

export const Label: React.FC<LabelProps> = ({ label }) => (
  <h3 className='text-gray-500 font-bold dark:text-gray-200 text-left mb-2 pl-1'>{label}</h3>
);
