import React from 'react';

export function TutorialSection({ image, title, description, longDescription, reverse = false, children, appStoreLink, googlePlayLink, appStoreImg, googlePlayImg }) {
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
        {/* Botones de tienda solo si hay links */}
        {(appStoreLink || googlePlayLink) && (
          <div className="flex gap-4 mt-4">
            {appStoreLink && appStoreImg && (
              <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
                <img src={appStoreImg} alt="App Store" className="h-12 w-auto" />
              </a>
            )}
            {googlePlayLink && googlePlayImg && (
              <a href={googlePlayLink} target="_blank" rel="noopener noreferrer">
                <img src={googlePlayImg} alt="Google Play" className="h-12 w-auto" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 