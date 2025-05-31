import React from 'react';

const Spinner = () => {
  return (
    <div className="flex h-[300px] w-[200px] items-center justify-center ">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default Spinner;
