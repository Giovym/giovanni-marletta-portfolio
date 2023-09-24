import React from 'react';
import Form from './Form';

import PatternRing from '../assets/images/pattern-rings.svg';
import IconInstagram from '../assets/images/icon-instagram.svg';
import IconGithub from '../assets/images/icon-github.svg';
import IconLinkedin from '../assets/images/icon-linkedin.svg';
import IconTwitter from '../assets/images/icon-twitter.svg';

const Contact = () => {
  return (
    <div className='lg:h-full xl:h-screen px-8 lg:px-20 xl:px-32 bg-dark-grey'>
      <div className='flex flex-col xl:flex-row items-center xl:items-start xl:justify-between lg:h-full xl:h-3/4 mb-20 xs:mb-40 xl:mb-10'>
        <div className='relative container sm:w-2/3 xl:w-5/12 h-fit xl:h-52 mt-12 xs:mt-20 sm:mb-10 xl:mb-0 flex flex-col justify-center items-center xl:items-start gap-6 xs:gap-9'>
          <h2 className='text-white text-4xl xs:text-5xl sm:text-7xl font-bold sm:pb-6 leading-10'>
            Contact
          </h2>
          <p className='container sm:w-10/12 text-center md:text-left text-grey text-lg font-medium leading-7'>
            Feel free to Contact me by submitting the form and I will get back
            to you as soon as possible.
          </p>

          <img
            src={PatternRing}
            className='absolute top-129 md:top-168 lg:top-160 xl:top-64 left-0 sm:-left-8 md:-left-20 lg:-left-32 -translate-x-3/4 xl:-translate-x-1/2'
            style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}
            alt='a pattern with a ring'
          />
        </div>

        <Form />
      </div>
      <div className='flex flex-col xs:flex-row items-center xs:justify-between border-t-2 pb-10 xl:pb-0'>
        <h4 className='text-white font-bold pt-10 text-2xl sm:text-3xl'>
          giovanni marletta
        </h4>
        <nav className='flex xs:justify-end gap-6 pt-6 xs:pt-10'>
          <a href='https://github.com/Giovym' target='_blank'>
            <img
              className='scale-80 xs:scale-100'
              src={IconGithub}
              alt='an icon of github'
            />
          </a>
          <a href='https://www.instagram.com/giovanni.m88/' target='_blank'>
            <img
              className='scale-80 xs:scale-100'
              src={IconInstagram}
              alt='an icon of Instagram'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/giovanni-marletta/'
            target='_blank'
          >
            <img
              className='scale-80 xs:scale-100'
              src={IconLinkedin}
              alt='an icon of linkedin'
            />
          </a>
          <a href='https://twitter.com/GiovanniMa88' target='_blank'>
            <img
              className='scale-80 xs:scale-100'
              src={IconTwitter}
              alt='an icon of twitter'
            />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Contact;
