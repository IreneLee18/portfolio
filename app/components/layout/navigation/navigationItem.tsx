import { Link } from 'react-router';
import { cn } from '@/lib/utils';

type NavigationItemProps = {
  path: string;
  name: string;
  className?: string;
  onClick?: () => void;
};
export function NavigationItem({
  path,
  name,
  className,
  onClick,
}: NavigationItemProps) {
  return (
    <Link
      to={path}
      className={cn(
        'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 font-medium transition-colors',
        className
      )}
      onClick={onClick}
    >
      {name}
    </Link>
  );
}
