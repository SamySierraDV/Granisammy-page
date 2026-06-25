import { motion } from 'motion/react';

export default function MarbleShimmer() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-10"
      initial={{ x: '-100%' }}
      whileHover={{ x: '100%' }}
      transition={{
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1],
      }}
      style={{
        background: 'linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.15) 45%, rgba(255, 255, 255, 0.35) 50%, rgba(255, 255, 255, 0.15) 55%, transparent 70%)',
      }}
    />
  );
}
