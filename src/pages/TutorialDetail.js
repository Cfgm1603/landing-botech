import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiPlay, FiDownload, FiBook, FiVideo, FiArrowLeft } from 'react-icons/fi';
import { TutorialSection } from '../components/TutorialSection';
import { tutorials } from './Tutorials';

export function TutorialDetail() {
  const { id } = useParams();
  const tutorial = tutorials.find(t => t.id === Number(id));
  const navigate = useNavigate();

  if (!tutorial) {
    return (
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4 text-primary-botech">Tutorial no encontrado</h1>
        <Link to="/tutoriales" className="text-primary-botech hover:underline">Volver a tutoriales</Link>
      </div>
    );
  }

  const Icon = tutorial.icon;

  return (
    <div className="pt-10 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-8 sm:px-16 lg:px-32 py-16">
        {/* Breadcrumbs */}
        <div className="flex items-center mb-8 gap-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-3 py-1 bg-primary-botech text-white rounded hover:bg-gray-300 transition text-sm"
          >
            <FiArrowLeft className="w-4 h-4" />
          </button>
          <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="list-reset flex items-center">
              {tutorial.category && (
                <>
                  <li>
                    <Link
                      to={`/tutoriales?categoria=${encodeURIComponent(tutorial.category)}`}
                      className="text-primary-botech font-semibold hover:underline"
                    >
                      {tutorial.category}
                    </Link>
                  </li>
                  <li><span className="mx-2">/</span></li>
                </>
              )}
              <li className="text-gray-700 font-semibold">{tutorial.title}</li>
            </ol>
          </nav>
        </div>
        {tutorial.sections && tutorial.sections.length > 0 ? (
          tutorial.sections.map((section, idx) => (
            <React.Fragment key={idx}>
              <div className="w-full flex justify-center">
                <hr className="w-2/3 border-t-2 border-gray-200" />
              </div>
              <TutorialSection
                image={section.image}
                title={section.title}
                description={section.description}
                longDescription={section.longDescription}
                reverse={section.reverse}
              />
              <div className="w-full flex justify-center">
                <hr className="w-2/3 border-t-2 border-gray-200" />
              </div>
            </React.Fragment>
          ))
        ) : (
          <>
            <div className="w-full flex justify-center">
              <hr className="w-2/3 border-t-2 border-gray-200" />
            </div>
            <TutorialSection
              image={tutorial.image || undefined}
              title={tutorial.title}
              description={tutorial.description}
              longDescription={tutorial.longDescription}
            />
            <div className="w-full flex justify-center">
              <hr className="w-2/3 border-t-2 border-gray-200" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}


