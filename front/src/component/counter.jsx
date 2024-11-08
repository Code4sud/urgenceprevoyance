import React, { useEffect, useState } from 'react';

function Counter({ endValue, duration = 1000 }) {
  const [count, setCount] = useState(0);
  const [fontSize, setFontSize] = useState('2rem'); // Default for larger screens

  useEffect(() => {
    const updateFontSize = () => {
      const width = window.innerWidth;
      setFontSize(width < 768 ? '1.5rem' : '2rem');
    };

    updateFontSize();
    window.addEventListener('resize', updateFontSize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', updateFontSize);
  }, []);

  useEffect(() => {
    let startTime = null;

    function animateCounter(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentCount = Math.min(Math.round((endValue * progress) / duration), endValue);

      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animateCounter);
      }
    }

    requestAnimationFrame(animateCounter);
  }, [endValue, duration]);

  return (
    <p style={{ fontSize, fontWeight: 'bold', color: '#000' }}>
      {count.toLocaleString()}
    </p>
  );
}

export default Counter;
