import React, { useState } from 'react';

const LanguageProgress = ({ languages, maxHeight }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleLanguages = showAll ? languages : languages.slice(0, 5);
   // Change 5 to your desired initial visible count

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div id='skills' className='progressdiv' style={{ maxHeight: `${maxHeight}px`, overflowY: 'auto' }}>
      {visibleLanguages.map((language, index) => (
        <div key={index} className="progress-bar">
          <div className="language-icon" dangerouslySetInnerHTML={{ __html: language.imageSvg }} />
          <div className='full_progress'>
            <div className="progress-indicator" style={{ width: `${language.progress}%` }}></div>
            <div className="language-label">{language.name}</div>
          </div>
        </div>
      ))}
      {languages.length > 5 && (
        <button onClick={toggleShowAll} className="see-more-button">
          {showAll ? 'See Less' : 'See More'}
        </button>
      )}
    </div>
  );
};

export default LanguageProgress;
