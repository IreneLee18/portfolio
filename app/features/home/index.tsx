import { paths } from '@/constants/paths';
import { buttonVariants } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { Ghost, Sparkles } from 'lucide-react';

export default function Homepage() {
  const mainTitle = 'Hi, I am Irene Lee';
  const subtitle =
    'A frontend developer passionate about creating intuitive and engaging digital experiences.';

  const [showButton, setShowButton] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Reset animation every 5 seconds (3s sprite + 2s button)
    const resetInterval = setInterval(() => {
      setShowButton(false);
      setAnimationKey((prev) => {
        return prev + 1;
      });

      // Show button after sprite animation completes (3 seconds)
      setTimeout(() => {
        return setShowButton(true);
      }, 3000);
    }, 5000);

    // Initial animation
    setTimeout(() => {
      return setShowButton(true);
    }, 3000);

    return () => {
      return clearInterval(resetInterval);
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const renderAnimatedText = (text: string) => {
    return text.split('').map((char, index) => {
      return (
        <motion.span
          key={`${char}-${index}`}
          variants={child}
          className="inline-block"
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      );
    });
  };

  return (
    <div className="container flex-1 flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
          <motion.span
            variants={container}
            initial="hidden"
            animate="visible"
            className="inline-block"
          >
            {renderAnimatedText(mainTitle)}
          </motion.span>
        </h1>

        {/* Subtitle/Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* Sprite Animation Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="md:mt-4 lg:mt-8"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 min-h-[60px]">
            {/* Sprite Icon */}
            <motion.div
              key={`sprite-${animationKey}`}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 3, ease: 'easeInOut' }}
              className="text-2xl md:text-3xl"
            >
              <Ghost className="w-6 h-6 md:w-8 md:h-8 text-purple-500 dark:text-purple-400" />
            </motion.div>

            {/* Loading Dots */}
            <AnimatePresence mode="wait">
              {!showButton && (
                <motion.div
                  key={`dots-${animationKey}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex gap-1"
                >
                  {[0, 1, 2, 3, 4].map((i) => {
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          repeatType: 'reverse' as const,
                          delay: i * 0.2,
                        }}
                        className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"
                      />
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Portfolio Button */}
            <AnimatePresence mode="wait">
              {showButton && (
                <motion.div
                  key={`button-${animationKey}`}
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <Link
                    to={paths.portfolios.url}
                    className={buttonVariants({
                      variant: 'outline',
                      size: 'sm',
                    })}
                  >
                    View My Projects
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
