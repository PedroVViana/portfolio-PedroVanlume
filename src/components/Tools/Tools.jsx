import React, { useState } from 'react';
import './tools.css';
import 'boxicons';
import 'boxicons/css/boxicons.min.css';
import { useTranslation } from 'react-i18next';

function Tools() {
  const [filter, setFilter] = useState('Front-end');
  const { t } = useTranslation();

  const skills = {
    frontend: [
      { name: 'HTML5', level: 90 },
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 75 },
      { name: 'CSS', level: 70 },
      { name: 'Javascript', level: 80 },
      { name: 'Xaml (Xamarin)', level: 70 },
      { name: 'Bootstrap5', level: 70 },
      { name: 'Tailwind CSS', level: 65 },
      { name: 'Next.js', level: 75 },
      { name: 'Python', level: 55 },
    ],
    backend: [
      { name: 'Node.js', level: 70 },
      { name: 'Python', level: 65 },
      { name: 'MongoDB', level: 60 },
      { name: '.Net Framework', level: 70 },
      { name: 'WPF', level: 70 },
      { name: 'C#', level: 70 },
    ],
    webDevelopment: [
      { name: 'HTML5', level: 90 },
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 75 },
      { name: 'CSS', level: 70 },
      { name: 'Javascript', level: 80 },
      { name: 'Bootstrap5', level: 70 },
      { name: 'Tailwind CSS', level: 65 },
      { name: 'Next.js', level: 75 },
      { name: 'Node.js', level: 70 },
      { name: 'MongoDB', level: 60 },
      { name: 'Python', level: 55 },
    ],
    softwareDevelopment: [
      { name: 'Python', level: 65 },
      { name: '.Net Framework', level: 70 },
      { name: 'WPF', level: 70 },
      { name: 'C#', level: 70 },
      { name: 'Xaml (Xamarin)', level: 70 },
    ],
  };

  const filteredSkills = (() => {
    switch (filter) {
      case t('Front-end'):
        return skills.frontend;
      case t('Back-end'):
        return skills.backend;
      case t('Web Development'):
        return skills.webDevelopment;
      case t('Software Development'):
        return skills.softwareDevelopment;
      default:
        return [];
    }
  })();

  return (
    <div className="bgTools py-16 flex justify-center items-center min-h-screen">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-12 sm:mb-16 animate-fadeIn">
          <span className='gradient-text'>{t('tools')}</span> {t('and')} <span className='gradient-text'>{t('skills')}</span>
        </h2>

        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {[t('Front-end'), t('Back-end'), t('Web Development'), t('Software Development')].map((category) => (
            <button
              key={category}
              className={`btnCategory ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              <h3 className="gradient-text">{category}</h3>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-5xl animate-slideUp">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl gradient-text mb-8 text-center animate-fadeIn">
              {t('tools')}
            </h3>
            <ul className="space-y-6 w-full">
              <li className="flex items-center justify-center text-white text-lg">
                <i className="bx bxl-visual-studio gradient-text text-3xl mr-4 animate-pulse"></i>
                Visual Studio Code
              </li>
              <li className="flex items-center justify-center text-white text-lg">
                <i className="bx bxl-git gradient-text text-3xl mr-4 animate-pulse"></i>
                Git
              </li>
              <li className="flex items-center justify-center text-white text-lg">
                <i className="bx bxl-github gradient-text text-3xl mr-4 animate-pulse"></i>
                GitHub
              </li>
              <li className="flex items-center justify-center text-white text-lg">
                <i className="bx bxl-figma gradient-text text-3xl mr-4 animate-pulse"></i>
                Figma
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-2xl gradient-text mb-8 text-center animate-fadeIn">
              {t('skills')}
            </h3>
            {filteredSkills.map((skill, index) => (
              <div key={index} className="w-full max-w-sm mb-6 animate-grow">
                <div className="flex justify-between mb-2">
                  <span className="text-white text-lg">{skill.name}</span>
                  <span className="gradient-text text-lg">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-4">
                  <div
                    className="gradient-bg h-4 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
