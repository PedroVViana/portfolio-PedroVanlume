import React from 'react';
import 'tailwindcss/tailwind.css';

const futureProjects = [
  {
    id: 1,
    title: 'Projeto Futuro 1',
    description: 'Este projeto visa desenvolver uma plataforma inovadora que transforma a maneira como interagimos com dados em tempo real.',
    tech: ['React', 'GraphQL', 'Tailwind CSS'],
    image: 'https://via.placeholder.com/800x400', // Substitua com a URL da imagem do projeto
  },
  {
    id: 2,
    title: 'Projeto Futuro 2',
    description: 'Um sistema avançado de gerenciamento de tarefas com funcionalidades de automação e integração com várias plataformas.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL'],
    image: 'https://via.placeholder.com/800x400', // Substitua com a URL da imagem do projeto
  },
  {
    id: 3,
    title: 'Projeto Futuro 3',
    description: 'Aplicativo móvel para otimização de finanças pessoais com recursos de análise inteligente e relatórios detalhados.',
    tech: ['React Native', 'Redux', 'Firebase'],
    image: 'https://via.placeholder.com/800x400', // Substitua com a URL da imagem do projeto
  },
];

function FutureProjects() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bgTools">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Projetos Fututos
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {futureProjects.map((project) => (
          <div key={project.id} className="relative BGblur rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
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
