import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import contact data
import { contact } from '../Data';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dgnac72',
        'template_ksa4i4c',
        form.current,
        'EIjaHlhb86ntGW1wg'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(
            'Your message has been sent successfully 😃, Thanks for contacting me.'
          );
          form.current.reset();
        },
        (error) => {
          // console.log(error.text);
          toast.error(
            'Failed!Message not sent 😒 Habibi Email me directly instead'
          );
        }
      );
  };
  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        {/* Section Title */}
        <div className='flex flex-col items-center text-center'>
          <h2
            className='section-title before:content-contact relative
      before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block 
      '
          >
            Contact me
          </h2>
          <p>Name: Amr Ibrahim Mohamed,</p>
          <p>Address: Mansoura, Dakahlia, Egypt,</p>
          <p>Phone: +20 102 969 6632</p>
          <p className='subtitle'>Gmail: amrtolba015@gmail.com</p>
        </div>

        <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
          {/* Info */}
          <div className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'>
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div
                    className='text-accent
                  rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl
                  '
                  >
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1'>{subtitle}</p>
                    <p className='text-accent font-normal'>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* form */}
          <form
            className='space-y-8 w-full max-w-[780px]'
            ref={form}
            onSubmit={sendEmail}
          >
            <div className='flex gap-8'>
              <input
                className='input'
                type='text'
                placeholder='Your Name'
                name='user_name'
              />
              <input
                className='input'
                type='text'
                placeholder='Your Email'
                name='user_email'
              />
            </div>
            <textarea
              className='textarea'
              placeholder='Your Message'
              name='message'
            ></textarea>
            <button
              className='btn btn-lg bg-accent hover:bg-accent-hover'
              type='submit'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <ToastContainer theme='dark' />
    </section>
  );
};

export default Contact;
