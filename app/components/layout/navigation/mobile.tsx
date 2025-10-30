import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { NavigationItem } from './navigationItem';
import { paths } from '@/constants/paths';

type MobileNavigationProps = {
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
  toggleTheme: () => void;
};

export default function MobileNavigation({
  isMobileMenuOpen,
  closeMobileMenu,
  toggleTheme,
}: MobileNavigationProps) {
  const { theme } = useTheme();

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const,
      },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const mobileLinkVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };
  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.nav
          className="md:hidden flex flex-col gap-4 overflow-hidden absolute w-full left-0 px-4 border-t top-[68px] h-screen bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 border-b"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={mobileMenuVariants}
        >
          <motion.div variants={mobileLinkVariants} className="pt-4">
            <NavigationItem
              path={paths.portfolios.url}
              name={paths.portfolios.name}
              className="py-2 block"
              onClick={closeMobileMenu}
            />
          </motion.div>
          <motion.div variants={mobileLinkVariants}>
            <NavigationItem
              path={paths.about.url}
              name={paths.about.name}
              className="py-2 block"
              onClick={closeMobileMenu}
            />
          </motion.div>
          <motion.div variants={mobileLinkVariants}>
            <NavigationItem
              path={paths.contact.url}
              name={paths.contact.name}
              className="py-2 block"
              onClick={closeMobileMenu}
            />
          </motion.div>
          <motion.div
            variants={mobileLinkVariants}
            className="flex items-center gap-4 pt-2 border-t border-gray-200 pb-4"
          >
            <Button
              size="icon"
              variant="iconGhost"
              aria-label="Toggle Theme"
              onClick={toggleTheme}
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Moon /> : <Sun />}
            </Button>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
