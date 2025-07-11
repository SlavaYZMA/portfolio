import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AudioPlayer from './AudioPlayer';
import Gallery from './Gallery';

function ProjectView() {
  const { t } = useTranslation();
  const { lang, project } = useParams();

  // Пример данных (замени на динамическое получение из data/projects)
  const projects = {
    'quantum-portraits': {
      title: t('quantum-portraits.title', { defaultValue: 'Quantum Portraits' }),
      description: t('quantum-portraits.description', { defaultValue: 'An art-science fusion exploring quantum identity.' }),
      images: ['/assets/images/quantum-portrait1.jpg', '/assets/images/quantum-portrait2.jpg'],
      audio: '/assets/audio/quantum-portraits.mp3',
    },
    // Добавь другие проекты (sensitivity, rajm, teabag) по аналогии
  };

  const projectData = projects[project] || { title: 'Project Not Found', description: '', images: [], audio: '' };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{projectData.title}</h1>
      <p className="mb-4">{projectData.description}</p>
      <Gallery images={projectData.images} />
      {projectData.audio && <AudioPlayer src={projectData.audio} />}
    </div>
  );
}

export default ProjectView;
