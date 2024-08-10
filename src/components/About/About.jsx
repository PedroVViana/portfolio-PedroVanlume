import React from 'react';
import imgAbout from "../../assets/Perfil.png";
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className="w-screen h-auto min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-[#060022] to-[#00093d] p-8 gap-8 overflow-hidden">
      <h3 className="text-center text-white text-[clamp(18px,4vw,30px)] mt-12">
        {t('aboutTitle')} <span className="gradient-text">{t('nextproject')}</span>
      </h3>
      
      <div className="flex flex-wrap justify-center items-center gap-5 max-w-[1200px] w-full">
        <div className="w-full max-w-[450px] flex justify-center items-center flex-col gap-3">
          <img src={imgAbout} alt="Profile" className="w-full max-w-[450px] rounded-[15px]" />
        </div>
        
        <div className="flex flex-col justify-center items-center gap-5 w-full max-w-[600px]">
          <div className="flex flex-col justify-center items-center gap-5 w-full">
            <p className="text-center text-white/80 text-[clamp(14px,4vw,18px)] px-2">
              {t('aboutDescription')}
            </p>
            
            <div className="flex justify-center gap-2">
              <a href="#Portfolio" className="px-4 py-2 text-white text-[clamp(12px,4vw,14px)] bg-white/20 backdrop-blur-sm rounded-[5px] transition hover:bg-white/35 transform hover:translate-y-[-5px]">
                {t('portfolioButton')}
              </a>
              <a href="#" target="_blank" className="px-4 py-2 text-white text-[clamp(12px,4vw,14px)] bg-white/20 backdrop-blur-sm rounded-[5px] transition hover:bg-white/35 transform hover:translate-y-[-5px]">
                {t('downloadCVButton')}
              </a>
            </div>
          </div>
          
          <div className="flex justify-center flex-wrap gap-5 w-full">
            <div className="flex-1 max-w-[300px] px-4 py-2 text-center text-white text-[clamp(14px,4vw,20px)] rounded-[10px]">
              <h2>{t('experienceYears')} <br /><span className="bg-clip-text gradient-text">{t('experience')}</span></h2>
            </div>
            <div className="flex-1 max-w-[300px] px-4 py-2 text-center text-white text-[clamp(14px,4vw,20px)] rounded-[10px]">
              <h2>{t('projectsGithub')}<br /><span className="bg-clip-text gradient-text">Github</span></h2>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-10 p-8 rounded-[15px]">
        <h2 className="text-3xl mb-10 text-center text-white gradient-text">
          {t('journeyTitle')}
        </h2>
        
        <div className="flex flex-wrap justify-between items-start gap-8 max-w-[1200px] w-full">
          <div className="flex-1 p-5 rounded-[15px] text-white min-w-[280px] shadow-md transition">
            <h3 className="text-[1.8rem] mb-5 text-center">{t('education')}</h3>
            <ul className="space-y-5">
              <li>
                <div className="bg-white/10 p-4 rounded-[5px] shadow-sm transition hover:bg-white/20">
                  <span className="block text-sm gradient-text">14 de novembro de 2023</span>
                  <h4 className="text-lg mb-2">{t('uiDesign')}</h4>
                  <p className="text-base text-white/80">Alura</p>
                </div>
              </li>
              <li>
                <div className="bg-white/10 p-4 rounded-[5px] shadow-sm transition hover:bg-white/20">
                  <span className="block text-sm gradient-text mb-2">07 de abril de 2023</span>
                  <h4 className="text-lg mb-2">{t('webAccessibility')}</h4>
                  <p className="text-base text-white/80">Alura</p>
                </div>
              </li>
              <li>
                <div className="bg-white/10 p-4 rounded-[5px] shadow-sm transition hover:bg-white/20">
                  <span className="block text-sm gradient-text mb-2">09 de março de 2022</span>
                  <h4 className="text-lg mb-2">{t('frontendTraining')}</h4>
                  <p className="text-base text-white/80">Alura</p>
                </div>
              </li>
              <li>
                <div className="bg-white/10 p-4 rounded-[5px] shadow-sm transition hover:bg-white/20">
                  <span className="block text-sm gradient-text mb-2">2019 - 2023</span>
                  <h4 className="text-lg mb-2">{t('computerScienceDegree')}</h4>
                  <p className="text-base text-white/80">Wyden UniFBV</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex-1 p-5 rounded-[15px] text-white min-w-[280px] shadow-md transition">
            <h3 className="text-[1.8rem] mb-5 text-center">{t('professionalExperience')}</h3>
            <ul className="space-y-5">
              <li>
                <div className="bg-white/10 p-4 rounded-[5px] shadow-sm transition hover:bg-white/20">
                  <span className="block text-sm gradient-text mb-2">Março de 2022 - Abril de 2023</span>
                  <h4 className="text-lg mb-2">{t('softwareDeveloper')}</h4>
                  <p className="text-base text-white/80">{t('companyOPitBlast')}</p>
                </div>
              </li>
              <li>
                <div className="bg-white/10 p-4 rounded-[5px] shadow-sm transition hover:bg-white/20">
                  <span className="block text-sm gradient-text mb-2">Setembro de 2021 - Novembro de 2021</span>
                  <h4 className="text-lg mb-2">{t('webDeveloper')}</h4>
                  <p className="text-base text-white/80">{t('companyLab')}</p>
                </div>
              </li>
              <li>
                <div className="bg-white/10 p-4 rounded-[5px] shadow-sm transition hover:bg-white/20">
                  <span className="block text-sm gradient-text mb-2">Abril de 2024</span>
                  <h4 className="text-lg mb-2">{t('freelancer')}</h4>
                  <p className="text-base text-white/80">{t('companyFocusDigital')}</p>
                </div>
              </li>
              <li>
                <div className="bg-white/10 p-4 rounded-[5px] shadow-sm transition hover:bg-white/20">
                  <span className="block text-sm gradient-text mb-2">Maio de 2024</span>
                  <h4 className="text-lg mb-2">{t('webDeveloper')}</h4>
                  <p className="text-base text-white/80">{t('companyAfago')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
