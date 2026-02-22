import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`アイウエオカキク';

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        setIsGlitching(true);
        const glitchedText = text
          .split('')
          .map((char) => {
            if (Math.random() > 0.7 && char !== ' ') {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
          })
          .join('');
        setDisplayText(glitchedText);

        setTimeout(() => {
          setDisplayText(text);
          setIsGlitching(false);
        }, 100);
      }
    }, 200);

    return () => clearInterval(glitchInterval);
  }, [text]);

  return (
    <span
      className={`relative ${className} ${isGlitching ? 'animate-pulse' : ''}`}
      style={{
        textShadow: isGlitching
          ? '2px 0 #FF0040, -2px 0 #00FF41'
          : '0 0 10px #00FF41, 0 0 20px #00FF41, 0 0 30px #00FF41',
      }}
    >
      {displayText}
    </span>
  );
};

export default GlitchText;
