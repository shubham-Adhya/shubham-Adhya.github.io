import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {SiMessenger} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Flip } from 'react-toastify';

const Contact = () => {
  const form = useRef();
  const notify = () => toast('📨 Email Sent ', {
    position: "bottom-right",
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

  const sendEmail = async (e) => {
    e.preventDefault();

    await emailjs.sendForm('service_2b0yb3k', 'template_718g2q9', form.current, '-eJC2_zpi44xd8_jY')
      .then((result) => {
          e.target.reset()
          notify()
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>shubhamadhya@gmail.com</h5>
              <a href="mailto:shubhamadhya@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact__option'>
              <SiMessenger className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Shubham Adhya</h5>
              <a href="https://m.me/profile.php?id=100004944075743" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+91-7980652143</h5>
              <a href="https://api.whatsapp.com/send?phone=7980652143" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
            <ToastContainer
            transition={Flip}
            position="bottom-right"
            autoClose={3500}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"/>
        </form>
      </div>
    </section>
  )
}

export default Contact