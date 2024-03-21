import { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    } else {
      setCurrentText(text);
      setCurrentIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

export default Typewriter;



// import { useState, useEffect } from 'react';

// const Typewriter = ({ text }) => {
//   const [currentText, setCurrentText] = useState('');
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const typingInterval = setInterval(() => {
//       if (index < text.length) {
//         setCurrentText(currentText + text[index]);
//         setIndex(index + 1);
//       } else {
//         clearInterval(typingInterval);
//       }
//     }, 100);

//     return () => clearInterval(typingInterval);
//   }, [currentText, index, text]);

//   return <span>{currentText}</span>;
// };

// export default Typewriter;