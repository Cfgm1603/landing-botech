import React, { useState, useEffect, useRef } from 'react';

export function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const [institutions, setInstitutions] = useState(0);
  const [students, setStudents] = useState(0);
  const [availability, setAvailability] = useState(0);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } 
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCount = (start, end, duration, setter) => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4); 
      const current = Math.floor(start + (end - start) * easeOutQuart);
      setter(current);
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    if (isVisible) {
      animateCount(0, 150, 2000, setInstitutions);
      
      animateCount(0, 50000, 2500, setStudents);
      
      animateCount(0, 999, 2200, (value) => {
        setAvailability(value / 10); 
      });
    }
  }, [isVisible]);

  return (
    <div 
      ref={statsRef}
      className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200"
    >
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-primary-botech">
          {institutions}+
        </div>
        <div className="text-xs text-gray-500 mt-1">instituciones</div>
      </div>
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-primary-botech">
          {students >= 1000 ? `${Math.floor(students / 1000)}K` : students}+
        </div>
        <div className="text-xs text-gray-500 mt-1">estudiantes</div>
      </div>
      <div className="text-center col-span-2 sm:col-span-1">
        <div className="text-2xl sm:text-3xl font-bold text-primary-botech">
          {availability.toFixed(1)}%
        </div>
        <div className="text-xs text-gray-500 mt-1">disponibilidad</div>
      </div>
    </div>
  );
} 