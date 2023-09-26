import React from 'react';

import PatternRing from '../assets/images/pattern-rings.svg';
import ImageProfile from '../assets/images/photo-grey.png';
import IconInstagram from '../assets/images/icon-instagram.svg';
import IconGithub from '../assets/images/icon-github.svg';
import IconLinkedin from '../assets/images/icon-linkedin.svg';
import IconTwitter from '../assets/images/icon-twitter.svg';

const Header = () => {
  const goToContactSection = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='h-fit xl:h-screen flex flex-col sm-flex-row items-center sm:items-stretch mx-8 lg:mx-20 xl:mx-32 mb-12 sm:mb-10'>
      <div className='container h-full sm:w-2/3 flex flex-col items-center justify-start sm:justify-between gap-4 sm:gap-0 sm:block z-10'>
        <h4 className='text-white font-bold pt-4 sm:pt-10 text-2xl sm:text-3xl'>
          giovanni marletta
        </h4>
        <img
          src={PatternRing}
          className='absolute top-40 sm:top:16 lg:top-32 -left-70 lg:-left-24 -z-10'
          alt='a pattern with a ring'
        />
        <div className='flex flex-col sm:hidden w-1/2 sm:w-1/3 h-fit bg-dark-grey'>
          <nav className='container flex justify-evenly gap-4 pt-4 px-2'>
            <a href='https://github.com/Giovym'>
              <img
                className='scale-80'
                src={IconGithub}
                alt='an icon of github'
              />
            </a>
            <a href='https://www.instagram.com/giovanni.m88/'>
              <img
                className='scale-80'
                src={IconInstagram}
                alt='an icon of Instagram'
              />
            </a>
            <a href='https://www.linkedin.com/in/giovanni-marletta/'>
              <img
                className='scale-80'
                src={IconLinkedin}
                alt='an icon of linkedin'
              />
            </a>
            <a href='https://twitter.com/GiovanniMa88'>
              <img
                className='scale-80'
                src={IconTwitter}
                alt='an icon of twitter'
              />
            </a>
          </nav>
          <div className='flex container'>
            <img
              src={ImageProfile}
              className='w-full h-full'
              alt='An image with me'
            />
          </div>
        </div>
        <div className='flex flex-col items-center sm:items-start sm:pt-12'>
          <h1 className='text-white text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-10 -mt-8 text-center md:text-left'>
            <br />
            Nice to meet you!
            <br /> I'm{' '}
            <span className='underline decoration-2 sm:decoration-4 underline-offset-8 sm:underline-offset-10 decoration-green-light'>
              Giovanni Marletta
            </span>
          </h1>
          <p className='text-grey text-lg leading-7 sm:w-96 font-medium text-center md:text-left'>
            Based in Italy, I'm a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <button
            className='text-white text-base font-bold hover:text-green-light pt-6 sm:pt-16 underline decoration-1.5 sm:decoration-2 underline-offset-10 decoration-green-light leading-relaxed tracking-widest'
            onClick={goToContactSection}
          >
            CONTACT ME
          </button>
        </div>
      </div>
      <div className='absolute hidden sm:flex flex-col sm:right-0 lg:right-20 xl:right-32 top-30 sm:top-auto w-1/2 sm:w-1/3 h-1/2 md:h-fit bg-dark-grey'>
        <nav className='container flex justify-evenly sm:justify-end gap-6 pt-4 sm:pt-10 pr-0 sm:pr-10'>
          <a href='https://github.com/Giovym'>
            <img src={IconGithub} alt='an icon of github' />
          </a>
          <a href='https://www.instagram.com/giovanni.m88/'>
            <img src={IconInstagram} alt='an icon of Instagram' />
          </a>
          <a href='https://www.linkedin.com/in/giovanni-marletta/'>
            <img src={IconLinkedin} alt='an icon of linkedin' />
          </a>
          <a href='https://twitter.com/GiovanniMa88'>
            <img src={IconTwitter} alt='an icon of twitter' />
          </a>
        </nav>
        <div className='flex container mt-auto'>
          <img
            src={ImageProfile}
            className='w-full h-full'
            alt='An image with me'
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
