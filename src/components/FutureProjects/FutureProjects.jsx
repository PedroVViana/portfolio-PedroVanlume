import React from 'react';
import 'tailwindcss/tailwind.css';
import { useTranslation } from 'react-i18next';

// Importar imagens
import blogPlatformImg from '../../assets/emBreve/blog.png';
import trustSolutionsImg from '../../assets/emBreve/confianca.png';
import psychoanalysisTemplateImg from '../../assets/emBreve/psico.jpg';

function FutureProjects() {
  const { t } = useTranslation();

  const futureProjects = [
    {
      id: 1,
      title: t('futureProjects.projects.0.title'),
      description: t('futureProjects.projects.0.description'),
      tech: t('futureProjects.projects.0.tech', { returnObjects: true }),
      image: blogPlatformImg,
    },
    {
      id: 2,
      title: t('futureProjects.projects.1.title'),
      description: t('futureProjects.projects.1.description'),
      tech: t('futureProjects.projects.1.tech', { returnObjects: true }),
      image: trustSolutionsImg,
    },
    {
      id: 3,
      title: t('futureProjects.projects.2.title'),
      description: t('futureProjects.projects.2.description'),
      tech: t('futureProjects.projects.2.tech', { returnObjects: true }),
      image: psychoanalysisTemplateImg,
    },
  ];

  return (
    <section id='contact' className="py-16 px-4 md:px-8 lg:px-16 bgTools">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        {t('futureProjects.title')}
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {futureProjects.map((project) => (
          <div key={project.id} className="relative BGblur rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold gradient-text mb-4">{project.title}</h3>
              <p className="text-white mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, index) => (
                  <span key={index} className="bg-gray-200 text-gray-800 py-1 px-3 rounded-lg text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FutureProjects;

