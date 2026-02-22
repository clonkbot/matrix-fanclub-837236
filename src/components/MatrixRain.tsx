import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters - mix of katakana, numbers, and symbols
    const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()';
    const chars = matrixChars.split('');

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    // Array of drops - one per column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    // Trail brightness for each column
    const speeds: number[] = [];
    for (let i = 0; i < columns; i++) {
      speeds[i] = 0.5 + Math.random() * 0.5;
    }

    const draw = () => {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Brightest character at the front
        const gradient = ctx.createLinearGradient(x, y - 20, x, y);
        gradient.addColorStop(0, 'rgba(0, 255, 65, 0)');
        gradient.addColorStop(1, '#00FF41');

        ctx.fillStyle = '#00FF41';
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#00FF41';
        ctx.font = `${fontSize}px "Share Tech Mono", monospace`;
        ctx.fillText(char, x, y);

        // Reset shadow for performance
        ctx.shadowBlur = 0;

        // Draw trailing characters with decreasing opacity
        for (let j = 1; j < 20; j++) {
          const trailY = y - j * fontSize;
          const opacity = 1 - (j / 20);
          const trailChar = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillStyle = `rgba(0, 255, 65, ${opacity * 0.3})`;
          ctx.fillText(trailChar, x, trailY);
        }

        // Reset drop to top with randomness
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += speeds[i];
      }
    };

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default MatrixRain;
