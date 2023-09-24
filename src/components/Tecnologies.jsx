import React from 'react';

import PatternRing from '../assets/images/pattern-rings.svg';

const Tecnologies = () => {
  return (
    <div className='md:mb-20 overflow-hidden'>
      <div className='flex flex-col mx-8 lg:mx-20 xl:mx-32 border-t-2 border-b-2 sm:border-b-0'>
        <h2 className='text-white text-4xl xs:text-5xl sm:text-7xl font-bold mt-10 mx-auto sm:mx-0'>
          Skills
        </h2>

        <div className='container grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 justify-items-center xs:justify-items-stretch gap-12 my-14 mb-10'>
          <h3 className='text-grey text-3xl sm:text-4xl md:text-5xl'>React</h3>
          <h3 className='text-grey text-3xl sm:text-4xl md:text-5xl'>
            Javascript
          </h3>
          <h3 className='text-grey text-3xl sm:text-4xl md:text-5xl'>
            Typescript
          </h3>
          <h3 className='text-grey text-3xl sm:text-4xl md:text-5xl'>Redux</h3>
          <h3 className='text-grey text-3xl sm:text-4xl md:text-5xl'>
            CSS/HTML
          </h3>
          <h3 className='text-grey text-3xl sm:text-4xl md:text-5xl'>
            Responsive UI
          </h3>
        </div>
      </div>

      <div className='flex justify-end'>
        <img
          src={PatternRing}
          className='-mr-64 sm:-mr-80 -mt-10 md:-mt-20'
          style={{
            clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
          }}
          alt='a pattern with a ring'
        />
      </div>
    </div>
  );
};

export default Tecnologies;
