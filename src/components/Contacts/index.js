import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_nhuznjf',
            'template_n6l6165',
            refForm.current,
            'v0Q7dts-YGgyaS5L-'
        )
        .then(
            () => {
                alert('Message was successfully send!');
                window.location.reload(false);
            },
            () => {
                alert('Failed to send the message, please try again.');
            }
        )
    }
    
    return (
        <> 
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={"Contact Me".split("")} idx={15}/>
                    </h1>
                    <p>
                        If you have any questions or concerns, please don't hesitate to contact me using the form below!
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Message" required />
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="Send" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="cube-transition" />
        </>
    )
}

export default Contact