import React from 'react';

export function TutorialSection({ image, title, description, longDescription, reverse = false, children }) {
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 my-12 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      {/* Imagen */}
      <div className="flex-1 flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-44 md:w-56 lg:w-64 xl:w-72 "
        />
      </div>
      {/* Texto */}
      <div className="flex-1 flex flex-col justify-center">
        {title && <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{title}</h2>}
        {description && <p className="text-lg text-gray-700 leading-relaxed mb-4">{description}</p>}
        {longDescription && <p className="text-base text-gray-600 leading-relaxed mb-4">{longDescription}</p>}
        {children}
      </div>
    </div>
  );
} 