import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import imgport1 from '../../assets/vl-dask.jpeg';

const projects = [
  { id: 1, title: 'Projeto 1', image: imgport1, description: 'Projeto do laboratório digital da faculdade, que consiste na criação de uma cartilha digital que ajude as pessoas a conhecer mais sobre a lei LGPD.', tech: ['React', 'Node.js', 'CSS'], repo: '#', demo: '#'},
  { id: 2, title: 'Projeto 2', image: 'https://via.placeholder.com/800x600', description: 'Descrição detalhada do Projeto 2, com uma quantidade muito maior de informações para testar o layout da modal.', tech: ['HTML', 'JavaScript', 'CSS'], repo: '#', demo: '#'},
  { id: 3, title: 'Projeto 3', image: 'https://via.placeholder.com/800x600', description: 'Descrição detalhada do Projeto 3', tech: ['Python', 'Django', 'HTML'], repo: '#', demo: '#'},
  { id: 4, title: 'Projeto 4', image: 'https://via.placeholder.com/800x600', description: 'Descrição detalhada do Projeto 4', tech: ['Vue.js', 'Node.js', 'CSS'], repo: '#', demo: '#'},
  { id: 5, title: 'Projeto 5', image: 'https://via.placeholder.com/800x600', description: 'Descrição detalhada do Projeto 5', tech: ['Angular', 'JavaScript', 'SCSS'], repo: '#', demo: '#'},
  { id: 6, title: 'Projeto 6', image: 'https://via.placeholder.com/800x600', description: 'Descrição detalhada do Projeto 6', tech: ['Ruby', 'Rails', 'HTML'], repo: '#', demo: '#'}
];

function Portfolio() {
  const [modalData, setModalData] = useState(null);

  const handleViewMore = (project) => {
    setModalData(project);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
    <div className='about py-16 px-4 md:px-8 lg:px-16'>
      <h2 className='text-4xl gradient-text font-bold text-center mb-12 text-gray-900'>
        Meu Portfólio
      </h2>

      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <div key={project.id} className='relative BGblur rounded-xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
            <img src={project.image} alt={project.title} className='w-full h-60 object-cover transition-transform duration-300 transform hover:scale-110'/>
            <div className='relative px-4 mb-5'>
              <h3 className='text-2xl font-semibold gradient-text mt-5 mb-10'>{project.title}</h3>
              <div className='flex flex-col md:flex-row gap-2'>
                <a href={project.repo} className='bg-black text-white py-2 px-4 rounded-lg text-center transition-colors duration-300 hover:bg-gray-900 flex items-center justify-center w-auto'>
                  <i className='bx bxl-github text-xl mr-2'></i> GitHub
                </a>
                <a href={project.demo} className='bg-green-600 text-white py-2 px-4 rounded-lg text-center transition-colors duration-300 hover:bg-green-700 flex items-center justify-center w-auto'>
                  <i className='bx bx-world text-xl mr-2'></i> Demo
                </a>
                <button onClick={() => handleViewMore(project)} className='bg-blue-600 text-white py-2 px-4 rounded-lg text-center transition-colors duration-300 hover:bg-blue-700 flex items-center justify-center w-auto'>
                  <i className='bx bx-show text-xl mr-2'></i> Ver Mais
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botão "Ver Mais Projetos" */}
      <div className='text-center mt-12'>
        <a href='https://example.com' target='_blank' rel='noopener noreferrer' className='gradient-bg text-white py-3 px-6 rounded-lg text-lg transition-colors duration-300'>
          Ver Mais Projetos
        </a>
      </div>

      {modalData && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-lg z-50 p-4'>
          <div className='relative BGblur2 rounded-xl w-full max-w-4xl h-auto max-h-screen p-8 overflow-auto shadow-xl backdrop-blur-sm'>
            <button onClick={handleCloseModal} className='absolute top-4 right-4 text-4xl text-white hover:text-gray-200 transition-transform transform hover:scale-125'>
              <i className='bx bx-x'></i>
            </button>
            <img src={modalData.image} alt={modalData.title} className='w-full h-48 object-contain rounded-xl mb-6'/>
            <h3 className='text-3xl font-semibold text-gray-100 mb-4'>{modalData.title}</h3>
            <p className='text-gray-100 mb-4'>{modalData.description}</p>
            <div className='flex flex-wrap gap-2 mb-6'>
              {modalData.tech.map((tech, index) => (
                <span key={index} className='gradient-bg text-gray-100 py-1 px-3 rounded-lg text-sm'>{tech}</span>
              ))}
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
              <a href={modalData.repo} className='bg-black text-white py-2 px-4 rounded-lg text-center transition-colors duration-300 hover:bg-gray-900 flex items-center justify-center w-auto'>
                <i className='bx bxl-github text-xl mr-2'></i> GitHub
              </a>
              <a href={modalData.demo} className='bg-green-600 text-white py-2 px-4 rounded-lg text-center transition-colors duration-300 hover:bg-green-700 flex items-center justify-center w-auto'>
                <i className='bx bx-world text-xl mr-2'></i> Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
