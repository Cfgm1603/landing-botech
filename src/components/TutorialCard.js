import React from 'react';
import { FiBookOpen } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function TutorialCard({ tutorial, tier = null }) {
  const getTierStyles = () => {
    switch (tier) {
      case 'Bosque':
        return {
          cardClass: 'bg-gradient-to-br from-emerald-50 to-white border-emerald-200 hover:shadow-emerald-100',
          iconBg: 'bg-emerald-600',
          badge: 'bg-emerald-100 text-emerald-800',
          borderAccent: 'before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-emerald-500'
        };
      case 'Arbol':
        return {
          cardClass: 'bg-gradient-to-br from-blue-50 to-white border-blue-200 hover:shadow-blue-100',
          iconBg: 'bg-blue-600',
          badge: 'bg-blue-100 text-blue-800',
          borderAccent: 'before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-blue-500'
        };
      case 'Semilla':
        return {
          cardClass: 'bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:shadow-gray-100',
          iconBg: 'bg-gray-600',
          badge: 'bg-gray-100 text-gray-800',
          borderAccent: 'before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gray-500'
        };
      default:
        return {
          cardClass: 'bg-white border-gray-200',
          iconBg: 'bg-primary-botech',
          badge: '',
          borderAccent: ''
        };
    }
  };

  const styles = getTierStyles();

  return (
    <div className={`relative rounded-lg shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300 ${styles.cardClass} ${styles.borderAccent}`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 ${styles.iconBg} rounded-lg flex items-center justify-center`}>
            <tutorial.icon className="w-6 h-6 text-white" />
          </div>
          {tier && (
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles.badge}`}>
              {tier}
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {tutorial.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4">
          {tutorial.descriptionShort}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {tutorial.duration}
          </span>
          <Link
            to={`/tutoriales/${tutorial.id}`}
            className="flex items-center space-x-2 text-primary-botech hover:text-primary-botech/80 font-medium text-sm"
          >
            <FiBookOpen className="w-4 h-4" />
            <span>Leer tutorial</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 