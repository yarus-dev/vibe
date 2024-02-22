import { clsx } from 'clsx';
import { getUniqueId} from '@/utils/getUniqueId';

function getName(name, label) {
  return name || label.split(' ').map((w, i) => i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
}

export function Input({ children, className, label, description, name, id, required=false, ...props }) {
  name = getName(name, label);
  id = getUniqueId(id || name);

  return (
    <div className={clsx('flex flex-col', className)}>
      <input
        className='relative block w-full ring-4 px-4 py-2 text-base ring-gray-300 focus:ring-blue-500 outline-none'
        type='text'
        id={id}
        aria-label={label}
        name={name}
        required={required}
      {...props}
      />
    </div>
  )
}
