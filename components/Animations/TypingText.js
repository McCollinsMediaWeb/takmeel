'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function TypingText({ words = [], speed = 100, pause = 1000 }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex] || '';
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, speed / 2);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => word.slice(0, prev.length + 1));
      }, speed);
    }

    if (!isDeleting && displayedText === word) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    }

    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, words, speed, pause]);

  return (
    <motion.div
      className="text-2xl font-mono"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <motion.span
        className="ml-1"
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
        |
      </motion.span>
    </motion.div>
  );
}
