'use client';

import React, { useEffect, useState } from 'react';

const Loader = ({ onLoadComplete, duration = 2000 }) => {
  const [stage, setStage] = useState('full'); // 'full' → 'shrinking' → 'hidden'

  useEffect(() => {
    const shrinkTimer = setTimeout(() => setStage('shrinking'), duration - 500);
    const completeTimer = setTimeout(() => {
      setStage('hidden');
      onLoadComplete?.();
    }, duration);

    return () => {
      clearTimeout(shrinkTimer);
      clearTimeout(completeTimer);
    };
  }, [duration, onLoadComplete]);

  if (stage === 'hidden') return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div
        className={`
          bg-orange-500 text-white flex items-center justify-center
          transition-all duration-500 ease-in-out
          ${stage === 'full'
            ? 'w-full h-full '
            : 'w-24 h-24 text-sm rounded-md'}
        `}
        style={{
          transform: 'scale(1)',
        }}
      >
        {stage === 'full' && <span className='text-[6rem]'>Welcome to Urban Chanakya</span>}
      </div>
    </div>
  );
};

export default Loader;
