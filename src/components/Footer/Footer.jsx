import React from 'react';
import 'tailwindcss/tailwind.css';
import 'boxicons/css/boxicons.min.css'; // Importa os ícones BoxIcons

function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className=" mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <a
            href="https://www.tiktok.com"
            className="gradient-hover transition-colors duration-300 text-2xl md:text-3xl"
          >
            <i className="bx bxl-tiktok"></i>
          </a>
          <a
            href="https://www.instagram.com"
            className="gradient-hover transition-colors duration-300 text-2xl md:text-3xl"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://github.com"
            className="gradient-hover transition-colors duration-300 text-2xl md:text-3xl"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            className="gradient-hover transition-colors duration-300 text-2xl md:text-3xl"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://www.youtube.com"
            className="gradient-hover transition-colors duration-300 text-2xl md:text-3xl"
          >
            <i className="bx bxl-youtube"></i>
          </a>
        </div>
        <p className="text-center text-gray-400 text-sm md:text-base">
          &copy; {new Date().getFullYear()} Pedro Van-Lume. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
