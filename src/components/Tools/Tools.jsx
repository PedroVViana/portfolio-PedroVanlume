import React, { useState } from 'react';
import './tools.css';
import 'boxicons';
import 'boxicons/css/boxicons.min.css';

function Tools() {
  const [filter, setFilter] = useState('Todos');

  const skills = {
    frontend: [
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 75 },
      { name: 'CSS', level: 70 },
      { name: 'Figma', level: 80 },
    ],
    backend: [
      { name: 'Node.js', level: 80 },
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 60 },
    ],
    webDevelopment: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 80 },
    ],
    softwareDevelopment: [
      { name: 'Python', level: 75 },
      { name: 'C++', level: 65 },
      { name: 'Java', level: 70 },
    ],
  };

  const filteredSkills = (() => {
    switch (filter) {
      case 'Front-end':
        return skills.frontend;
      case 'Back-end':
        return skills.backend;
      case 'Desenvolvimento Web':
        return skills.webDevelopment;
      case 'Desenvolvimento de Software':
        return skills.softwareDevelopment;
      default:
        return [
          ...skills.frontend,
          ...skills.backend,
          ...skills.webDevelopment,
          ...skills.softwareDevelopment,
        ];
    }
  })();

  return (
    <div className="bgTools py-16 flex justify-center items-center min-h-screen">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-12 sm:mb-16 animate-fadeIn">
          <span className='gradient-text'>Ferramentas</span> e <span className='gradient-text'>Habilidades</span>
        </h2>

        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {['Todos', 'Front-end', 'Back-end', 'Desenvolvimento Web', 'Desenvolvimento de Software'].map((category) => (
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
              Ferramentas
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
                <i className="bx bxl-nodejs gradient-text text-3xl mr-4 animate-pulse"></i>
                Node.js
              </li>
              <li className="flex items-center justify-center text-white text-lg">
                <i className="bx bxl-react gradient-text text-3xl mr-4 animate-pulse"></i>
                React
              </li>
              <li className="flex items-center justify-center text-white text-lg">
                <i className="bx bxl-figma gradient-text text-3xl mr-4 animate-pulse"></i>
                Figma
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-2xl gradient-text mb-8 text-center animate-fadeIn">
              Habilidades
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
