import React, { useState, useRef, useEffect } from "react";

export const Card = React.forwardRef(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`rounded-xl border border-white bg-black ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
  />
));
Card.displayName = "Card";

const CardSwap = ({
  width = 1000,
  height = 650,
  children,
  onCardClick,
  delay = 5000,
}) => {
  const childArr = React.Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoplayRef = useRef();

  const total = childArr.length;

  const goTo = (idx) => {
    const validIdx = ((idx % total) + total) % total;
    setCurrentIndex(validIdx);
  };

  const nextCard = () => goTo(currentIndex + 1);
  const prevCard = () => goTo(currentIndex - 1);

  // Autoplay
  useEffect(() => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      nextCard();
    }, delay);
    return () => clearInterval(autoplayRef.current);
    // eslint-disable-next-line
  }, [currentIndex, delay, total]);

  // Pausar autoplay al interactuar
  const pauseAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      nextCard();
    }, delay);
  };

  // Touch/drag handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
    pauseAutoplay();
  };
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    touchEndX.current = e.touches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    setDragOffset(-diff * 0.5);
  };
  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setDragOffset(0);
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 80;
    if (Math.abs(distance) > threshold) {
      if (distance > 0) {
        nextCard();
      } else {
        prevCard();
      }
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
    pauseAutoplay();
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center min-w-0"
      style={{ width, height }}
    >
      {/* Carrusel */}
      <div
        className="relative overflow-hidden rounded-xl w-full h-full min-w-0"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ height }}
      >
        <div
          className="flex h-full transition-transform ease-out min-w-0"
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
            transitionDuration: isDragging ? "0ms" : "400ms",
          }}
        >
          {childArr.map((child, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full h-full flex items-center justify-center min-w-0"
              style={{ width, height }}
            >
              {React.isValidElement(child)
                ? React.cloneElement(child, {
                    style: { width: "100%", height: "100%", ...(child.props.style ?? {}) },
                    onClick: (e) => {
                      child.props.onClick?.(e);
                      onCardClick?.(idx);
                    },
                  })
                : child}
            </div>
          ))}
        </div>
      </div>
      {/* Controles */}
      <div className="flex justify-between items-center mt-4 w-full max-w-xs mx-auto">
        <button
          onClick={() => { prevCard(); pauseAutoplay(); }}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        {/* Indicadores */}
        <div className="flex justify-center space-x-2">
          {childArr.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-primary-botech w-8" : "bg-gray-300 hover:bg-gray-400 w-2"
              }`}
              onClick={() => { goTo(idx); pauseAutoplay(); }}
            />
          ))}
        </div>
        <button
          onClick={() => { nextCard(); pauseAutoplay(); }}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
};

export default CardSwap;
  