import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_0e595eh',
        'template_bn1kfvj',
        form.current,
        'GXYl3tUOUYNjOmJxr'
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
    reset();
  };

  return (
    <div className='sm:w-2/3 xl:w-1/3 h-fit xl:h-80 mt-10 xs:mt-16 xl:mt-24'>
      <form
        className='container h-full flex-col justify-start items-start inline-flex'
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
      >
        <div className='container h-11 mb-12 flex flex-col'>
          <input
            className={`container pl-6 outline-none bg-dark-grey text-white text-base font-medium pb-4 border-b-2 ${
              errors.name
                ? 'border-red-400'
                : 'border-white focus:border-green-light'
            }  `}
            {...register('name', { required: true })}
            name='name'
            placeholder='NAME'
          />
          {errors.name && (
            <span className='text-red-400'>This field is required</span>
          )}
        </div>

        <div className='container h-11 mb-12 flex-col justify-start items-start'>
          <input
            className={`container pl-6 outline-none bg-dark-grey text-white text-base font-medium pb-4 border-b-2 ${
              errors.email
                ? 'border-red-400'
                : 'border-white focus:border-green-light'
            }  `}
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
            name='email'
            placeholder='EMAIL'
          />
          {errors.email && errors.email.type === 'required' && (
            <span className='text-red-400'>This field is required</span>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <span className='text-red-400'>Sorry, invalid format here</span>
          )}
        </div>

        <div className='container h-32 mb-12 flex-col justify-start items-start'>
          <textarea
            className={`container pl-6 outline-none bg-dark-grey text-white text-base font-medium pb-4 border-b-2 ${
              errors.message
                ? 'border-red-400'
                : 'border-white focus:border-green-light'
            }  `}
            {...register('message', { required: true })}
            name='message'
            placeholder='MESSAGE'
            rows='10'
            cols='30'
            style={{ height: '120px', resize: 'none' }}
          ></textarea>
          {errors.message && (
            <span className='text-red-400'>This field is required</span>
          )}
        </div>

        <button
          className='text-white text-base font-bold hover:text-green-light ml-auto underline decoration-1.5 sm:decoration-2 underline-offset-10 decoration-green-light leading-relaxed tracking-widest'
          type='submit'
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Form;
