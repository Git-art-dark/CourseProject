import { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Импортируем файл с стилями

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {  // Показывать кнопку, если прокручено больше 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
      >
        ↑
      </button>
    )
  );
}
