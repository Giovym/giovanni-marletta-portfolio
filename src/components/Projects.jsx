import React from 'react';

import ImageEntertainmentApp from '../assets/images/thumbnail-project-1-large.webp';
import ImageTicTacToeApp from '../assets/images/thumbnail-project-2-large.jpg';
import ImageToDoApp from '../assets/images/thumbnail-project-3-large.webp';
import ImageClockApp from '../assets/images/thumbnail-project-4-large.jpg';
import ImageRoomHomePage from '../assets/images/thumbnail-project-5-large.jpg';
import ImageLoopstudiosLandingPage from '../assets/images/thumbnail-project-6-large.jpg';

const Projects = () => {
  const goToContactSection = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='mx-8 lg:mx-20 xl:mx-32 mb-10'>
      <div className=' flex justify-between mb-20'>
        <h2 className='text-white text-4xl xs:text-5xl sm:text-7xl font-bold'>
          Projects
        </h2>
        <button
          className='text-white text-base font-bold hover:text-green-light underline decoration-1.5 sm:decoration-2 underline-offset-10 decoration-green-light leading-relaxed tracking-widest'
          onClick={goToContactSection}
        >
          CONTACT ME
        </button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center sm:justify-between gap-x-6 xl:gap-x-10'>
        <div className='container mb-18'>
          <div className='relative group  container h-fit lg:h-64 xl:h-100'>
            <div className='absolute hidden md:group-hover:flex container h-full  justify-center items-center'>
              <div className='w-2/4 h-1/3 group flex flex-col justify-center items-center gap-12 z-10'>
                <a
                  href='https://giovym.github.io/entertainment-web-app/'
                  target='_blank'
                  className='text-white hover:text-green-light text-base font-bold leading-relaxed tracking-widest underline decoration-2 underline-offset-10 decoration-green-light'
                >
                  VIEW PROJECT
                </a>
                <a
                  href='https://github.com/Giovym/entertainment-web-app'
                  target='_blank'
                  className='text-white hover:text-green-light text-base font-bold leading-relaxed tracking-widest underline decoration-2 underline-offset-10 decoration-green-light'
                >
                  VIEW CODE
                </a>
              </div>
            </div>
            <img
              className='container h-full md:group-hover:opacity-20 cursor-pointer'
              src={ImageEntertainmentApp}
              alt='an image of one of my project'
            />
          </div>
          <div className='flex flex-col h-16 my-5'>
            <h4 className='text-white text-xl md:text-2xl font-bold leading-relaxed'>
              ENTERTAINMENT WEB APP
            </h4>
            <div className='flex gap-x-3 md:gap-x-5'>
              <span className='text-grey text-base md:text-lg font-medium leading-7'>
                REACT
              </span>
              <span className='text-grey text-base md:text-lg font-medium leading-7'>
                TYPESCRIPT
              </span>
              <span className='text-grey text-base md:text-lg font-medium leading-7'>
                REACT-ROUTER
              </span>
            </div>
          </div>
          <div className='container flex md:hidden justify-start gap-6'>
            <a
              href='https://giovym.github.io/entertainment-web-app/'
              target='_blank'
              className='text-white text-base font-bold leading-relaxed tracking-widest underline decoration-1.5 sm:decoration-2 underline-offset-10 decoration-green-light'
            >
              VIEW PROJECT
            </a>
            <a
              href='https://github.com/Giovym/entertainment-web-app'
              target='_blank'
              className='text-white text-base font-bold leading-relaxed tracking-widest underline decoration-1.5 sm:decoration-2 underline-offset-10 decoration-green-light'
            >
              VIEW CODE
            </a>
          </div>
        </div>
        <div className='container mb-18'>
          <div className='relative group container h-fit lg:h-64 xl:h-100'>
            <div className='absolute hidden md:group-hover:flex container h-full  justify-center items-center'>
              <div className='w-2/4 h-1/3 group flex flex-col justify-center items-center gap-12 z-10'>
                <a
                  href='https://giovym.github.io/Tic-Tac-Toe-App/'
                  target='_blank'
                  className='text-white hover:text-green-light text-base font-bold leading-relaxed tracking-widest underline decoration-2 underline-offset-10 decoration-green-light'
                >
                  VIEW PROJECT
                </a>
                <a
                  href='https://github.com/Giovym/Tic-Tac-Toe-App/'
                  target='_blank'
                  className='text-white hover:text-green-light text-base font-bold leading-relaxed tracking-widest underline decoration-2 underline-offset-10 decoration-green-light'
                >
                  VIEW CODE
                </a>
              </div>
            </div>
            <img
              className='container h-full md:group-hover:opacity-20 cursor-pointer'
              src={ImageTicTacToeApp}
              alt='an image of one of my project'
            />
          </div>
          <div className='flex flex-col h-16 my-5'>
            <h4 className='text-white text-xl md:text-2xl font-bold leading-relaxed'>
              TIC TAC TOE GAME APP
            </h4>
            <div className='flex gap-x-3 md:gap-x-5'>
              <span className='text-grey text-base md:text-lg font-medium leading-7'>
                REACT
              </span>
              <span className='text-grey text-base md:text-lg font-medium leading-7'>
                REDUX
              </span>
              <span className='text-grey text-base md:text-lg font-medium leading-7'>
                TAILWIND-CSS
              </span>
            </div>
          </div>
          <div className='container flex md:hidden justify-start gap-6'>
            <a
              href='https://giovym.github.io/Tic-Tac-Toe-App/'
              target='_blank'
              className='text-white text-base font-bold leading-relaxed tracking-widest underline decoration-1.5 sm:decoration-2 underline-offset-10 decoration-green-light'
            >
              VIEW PROJECT
            </a>
            <a
              href='https://github.com/Giovym/Tic-Tac-Toe-App/'
              target='_blank'
              className='text-white text-base font-bold leading-relaxed tracking-widest underline decoration-1.5 sm:decoration-2 underline-offset-10 decoration-green-light'
            >
              VIEW CODE
            </a>
          </div>
        </div>
        <div className='container mb-18'>
          <div className='relative group container h-fit lg:h-64 xl:h-100'>
            <div className='absolute hidden md:group-hover:flex container h-full  justify-center items-center'>
              <div className='w-2/4 h-1/3 group flex flex-col justify-center items-center gap-12 z-10'>
                <a
                  href='https://giovym.github.io/todo-app/'
                  target='_blank'
                  className='text-white hover:text-green-light text-base font-bold leading-relaxed tracking-widest underline decoration-2 underline-offset-10 decoration-green-light'
                >
                  VIEW PROJECT
                </a>
                <a
                  href='https://github.com/Giovym/todo-app'
                  target='_blank'
                  className='text-white hover:text-green-light text-base font-bold leading-relaxed tracking-widest underline decoration-2 underline-offset-10 decoration-green-light'
                >
                  VIEW CODE
                </a>
              </div>
            </div>
            <img
              className='container h-full md:group-hover:opacity-20 cursor-pointer'
              src={ImageToDoApp}
              alt='an image of one of my project'
            />
          </div>
          <div className='flex flex-col h-16 my-5'>
            <h4 className='text-white text-xl md:text-2xl font-bold leading-relaxed'>
              TODO WEB APP
            </h4>
            <div className='flex gap-x-2 md:gap-x-5'>
              <span className='text-grey text-base md:text-lg font-medium leading-7'>
                REACT
              </span>
              <span className='text-grey text-base md:text-lg font-medium leading-7'>
                REACT-HOOKS
              </span>
              <span className='text-grey text-base md:text-lg font-medium leading-7'>
                CSS-MODULES
              </span>
            </div>
          </div>
          <div className='container flex md:hidden justify-start gap-6'>
            <a
              href='https://giovym.github.io/todo-app/'
              target='_blank'
              className='text-white text-base font-bold leading-relaxed tracking-widest underline decoration-1.5 sm:decoration-2 underline-offset-10 decoration-green-light'
            >
              VIEW PROJECT
            </a>
            <a
              href='https://github.com/Giovym/todo-app'
              target='_blank'
              className='text-white text-base font-bold leading-relaxed tracking-widest underline decoration-1.5 sm:decoration-2 underline-offset-10 decoration-green-light'
            >
              VIEW CODE
            </a>
          </div>
        </div>
        <div className='container mb-18'>
          <div className='relative group container lg:h-64 xl:h-100'>
            <div className='absolute hidden md:group-hover:flex container h-full  justify-center items-center'>
              <div className='w-2/4 h-1/3 group flex flex-col justify-center items-center gap-12 z-10'>
                <a
                  href='https://giovym.github.io/clock-app/'
                  target='_blank'
                  className='text-white hover:text-green-light text-base font-bold leading-relaxed tracking-widest underline decoration-2 underline-offset-10 decoration-green-light'
                >
                  VIEW PROJECT
                </a>
                <a
                  href='https://github.com/Giovym/clock-app'
                  target='_blank'
                  className='text-white hover:text-green-light text-base font-bold leading-relaxed tracking-widest underline decoration-2 underline-offset-10 decoration-green-light'
                >
                  VIEW CODE
                </a>
              </div>
            </div>
            <img
              className='container h-full md:group-hover:opacity-20 cursor-pointer'
              src={ImageClockApp}
              alt='an image of one of my project'
            />
          </div>
          <div className='flex flex-col h-16 my-5'>
            <h4 className='text-white text-xl md:text-2xl font-bold leading-relaxed'>
              CLOCK APP
            </h4>
            <div className='flex gap-x-3 md:gap-x-5'>
              <span className='text-grey text-base md:text-lg font-medium leading-7'>
                REACT
              </span>
              <span className='text-grey text-base md:text-lg font-medium leading-7'>
                REACT-HOOKS
              </span>
              <span className='text-grey text-base md:text-lg font-medium leading-7'>
                API
              </span>
            </div>
          </div>
          <div className='container flex md:hidden justify-start gap-6'>
            <a
              href='https://giovym.github.io/clock-app/'
              target='_blank'
              className='text-white text-base font-bold leading-relaxed tracking-widest underline decoration-1.5 sm:decoration-2 underline-offset-10 decoration-green-light'
            >
              VIEW PROJECT
            </a>
            <a
              href='https://github.com/Giovym/clock-app'
              target='_blank'
              className='text-white text-base font-bold leading-relaxed tracking-widest underline decoration-1.5 sm:decoration-2 underline-offset-10 decoration-green-light'
            >
              VIEW CODE
            </a>
          </div>
        </div>
        <div className='container mb-18'>
          <div className='relative group container lg:h-64 xl:h-100'>
            <div className='absolute hidden md:group-hover:flex container h-full  justify-center items-center'>
              <div className='w-2/4 h-1/3 group flex flex-col justify-center items-center gap-12 z-10'>
                <a
                  href='https://giovym.github.io/room-homepage/'
                  target='_blank'
                  className='text-white hover:text-green-light text-base font-bold leading-relaxed tracking-widest underline decoration-2 underline-offset-10 decoration-green-light'
                >
                  VIEW PROJECT
                </a>
                <a
                  href='https://github.com/Giovym/room-homepage'
                  target='_blank'
                  className='text-white hover:text-green-light text-base font-bold leading-relaxed tracking-widest underline decoration-2 underline-offset-10 decoration-green-light'
                >
                  VIEW CODE
                </a>
              </div>
            </div>
            <img
              className='container h-full md:group-hover:opacity-20 cursor-pointer'
              src={ImageRoomHomePage}
              alt='an image of one of my project'
            />
          </div>
          <div className='flex flex-col h-16 my-5'>
            <h4 className='text-white text-xl md:text-2xl font-bold leading-relaxed'>
              ROOM HOMEPAGE
            </h4>
            <div className='flex gap-x-3 md:gap-x-5'>
              <span className='text-grey text-base md:text-lg font-medium leading-7'>
                JAVASCRIPT
              </span>
              <span className='text-grey text-base md:text-lg font-medium leading-7'>
                CSS
              </span>
              <span className='text-grey text-base md:text-lg font-medium leading-7'>
                HTML
              </span>
            </div>
          </div>
          <div className='container flex md:hidden justify-start gap-6'>
            <a
              href='https://giovym.github.io/room-homepage/'
              target='_blank'
              className='text-white text-base font-bold leading-relaxed tracking-widest underline decoration-1.5 sm:decoration-2 underline-offset-10 decoration-green-light'
            >
              VIEW PROJECT
            </a>
            <a
              href='https://github.com/Giovym/room-homepage'
              target='_blank'
              className='text-white text-base font-bold leading-relaxed tracking-widest underline decoration-1.5 sm:decoration-2 underline-offset-10 decoration-green-light'
            >
              VIEW CODE
            </a>
          </div>
        </div>
        <div className='container mb-18'>
          <div className='relative group container lg:h-64 xl:h-100'>
            <div className='absolute hidden md:group-hover:flex container h-full  justify-center items-center'>
              <div className='w-2/4 h-1/3 group flex flex-col justify-center items-center gap-12 z-10'>
                <a
                  href='https://giovym.github.io/loopstudios-landing-page/'
                  target='_blank'
                  className='text-white hover:text-green-light text-base font-bold leading-relaxed tracking-widest underline decoration-2 underline-offset-10 decoration-green-light'
                >
                  VIEW PROJECT
                </a>
                <a
                  href='https://github.com/Giovym/loopstudios-landing-page'
                  target='_blank'
                  className='text-white hover:text-green-light text-base font-bold leading-relaxed tracking-widest underline decoration-2 underline-offset-10 decoration-green-light'
                >
                  VIEW CODE
                </a>
              </div>
            </div>
            <img
              className='container h-full md:group-hover:opacity-20 cursor-pointer'
              src={ImageLoopstudiosLandingPage}
              alt='an image of one of my project'
            />
          </div>
          <div className='flex flex-col h-16 my-5'>
            <h4 className='text-white text-xl md:text-2xl font-bold leading-relaxed'>
              LOOPSTUDIOS LANDING PAGE
            </h4>
            <div className='flex gap-x-3 md:gap-x-5'>
              <span className='text-grey text-base md:text-lg font-medium leading-7'>
                JAVASCRIPT
              </span>
              <span className='text-grey text-base md:text-lg font-medium leading-7'>
                SASS
              </span>
              <span className='text-grey text-base md:text-lg font-medium leading-7'>
                HTML
              </span>
            </div>
          </div>
          <div className='container flex md:hidden justify-start gap-6'>
            <a
              href='https://giovym.github.io/loopstudios-landing-page/'
              target='_blank'
              className='text-white text-base font-bold leading-relaxed tracking-widest underline decoration-1.5 sm:decoration-2 underline-offset-10 decoration-green-light'
            >
              VIEW PROJECT
            </a>
            <a
              href='https://github.com/Giovym/loopstudios-landing-page'
              target='_blank'
              className='text-white text-base font-bold leading-relaxed tracking-widest underline decoration-1.5 sm:decoration-2 underline-offset-10 decoration-green-light'
            >
              VIEW CODE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
