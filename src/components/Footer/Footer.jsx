import React from 'react';
import 'tailwindcss/tailwind.css';
import 'boxicons/css/boxicons.min.css'; // Importa os ícones BoxIcons
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-6">
      <div className="mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <a
            href="https://www.tiktok.com/@devlume__"
            className="gradient-hover transition-colors duration-300 text-2xl md:text-3xl"
             target="_blank"
          >
            <i className="bx bxl-tiktok"></i>
          </a>
          <a
            href="https://www.instagram.com/pedrovviana10/"
            className="gradient-hover transition-colors duration-300 text-2xl md:text-3xl"
             target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://github.com/PedroVViana"
            className="gradient-hover transition-colors duration-300 text-2xl md:text-3xl"
             target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-vanlume-0230551b9/"
            className="gradient-hover transition-colors duration-300 text-2xl md:text-3xl"
             target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://www.youtube.com/@DevLume"
            className="gradient-hover transition-colors duration-300 text-2xl md:text-3xl"
             target="_blank"
          >
            <i className="bx bxl-youtube"></i>
          </a>
          <a
            href="https://web.whatsapp.com/send?phone=5581994952030"
            className="gradient-hover transition-colors duration-300 text-2xl md:text-3xl"
             target="_blank"
          >
            <i class='bx bxl-whatsapp'></i>
          </a>
        </div>
        <p className="text-center text-gray-400 text-sm md:text-base">
          {t('footer.copyRight', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
