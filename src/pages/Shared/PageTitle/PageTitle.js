import React from 'react';

const PageTitle = ({ title }) => {
  return (
    <div className="bg-page-header bg-cover bg-center bg-no-repeat">
      <h2 className="py-14 text-6xl text-white text-center font-display font-bold">
        {title}
      </h2>
    </div>
  );
};

export default PageTitle;
