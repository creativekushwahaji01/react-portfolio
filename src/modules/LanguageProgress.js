import React from 'react';

function LanguageProgress() {
  const languages = [
    { name: 'HTML', progress: 80 },
    { name: 'CSS', progress: 60 },
    { name: 'JavaScript', progress: 40 },
    { name: 'React', progress: 30 },
    { name: 'Python', progress: 70 },
    { name: 'C', progress: 50 },
    { name: 'C#', progress: 20 },
    { name: 'C++', progress: 15 },
  ];

  return (
    <div>
      {languages.map((language, index) => (
        <div key={index} className="progress-bar">
          <div className="progress-indicator" style={{ width: `${language.progress}%` }}>{language.name}</div>
          <div className="language-label"></div>
        </div>
      ))}
    </div>
  );
}

export default LanguageProgress;
