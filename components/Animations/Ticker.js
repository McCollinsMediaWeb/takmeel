'use client';

import { color, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function VerticalTicker({ items = [], speed = 2000 }) {
  const [index, setIndex] = useState(0);
  const itemHeight = 40; // pixel height of each item

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, speed);
    return () => clearInterval(interval);
  }, [items.length, speed]);

  return (
    <div style={styles.container}>
      <motion.div
        animate={{ y: `-${index * itemHeight}px` }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={styles.inner}
      >
        {items.map((item, i) => (
          <div key={i} style={styles.item}>
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    overflow: 'hidden',
    width: '100%',
    height: '35px', // same as itemHeight
    position: 'relative',
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
  },
  item: {
    height: '35px',
  },
};
