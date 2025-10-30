import { paths } from '@/constants/paths';
import { NavigationItem } from './navigationItem';

export default function DesktopNavigation() {
  return (
    <nav className="hidden md:flex gap-8">
      <NavigationItem
        path={paths.portfolios.url}
        name={paths.portfolios.name}
      />
      <NavigationItem path={paths.about.url} name={paths.about.name} />
      <NavigationItem path={paths.contact.url} name={paths.contact.name} />
    </nav>
  );
}
