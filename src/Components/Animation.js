import { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
   // State to manage current text being displayed and index of text
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to handle typing effect
  useEffect(() => {
    let timeout;
    // If current index is less than the length of text
    if (currentIndex < text.length) {
      // Set timeout to update current text with next character after delay
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    } else {  // If reached end of text, reset current text and index
      setCurrentText(text);
      setCurrentIndex(0);
    }
    // Cleanup function to clear timeout
    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text]);   // Dependencies for effect
  // Render current text
  return <span>{currentText}</span>;
};

export default Typewriter;
