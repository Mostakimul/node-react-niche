import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center">
      <Loader
        type="Puff"
        color="#19752f"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};

export default Loader;
