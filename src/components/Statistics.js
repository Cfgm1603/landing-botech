import React from 'react';

export function Statistics() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-primary-botech">150+</div>
        <div className="text-sm text-gray-600 mt-1">Instituciones</div>
      </div>
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-primary-botech">50K+</div>
        <div className="text-sm text-gray-600 mt-1">Estudiantes</div>
      </div>
      <div className="text-center col-span-2 sm:col-span-1">
        <div className="text-2xl sm:text-3xl font-bold text-primary-botech">99.9%</div>
        <div className="text-sm text-gray-600 mt-1">Disponibilidad</div>
      </div>
    </div>
  );
} 