import './index.scss'
import AnimatedLetteres from '../AnimatedLetters'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser'
import Logo  from '../home/Logo'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        },3000)    
    }, [])

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm (
            'service_48p8ik8',
            'template_6cutl18',
            refForm.current,
            '_hxi95bgPRtbcQzYg'
        ).then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
    }

    return (
       
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetteres 
                    strArray={['C','o','n','t','a','c','t',' ','m','e']}
                    letterClass={letterClass}
                    idx={15}
                    />
                </h1>
                
                    <p className='contact-para'>
                        I'm interested in freelance opportunities - especially ambitious and creative projects. 
                        <br/>
                        Anyway, I'd like to hear from you <FontAwesomeIcon icon={faSmile} color='#ffd700' />
                        <br/>
                    </p>
                    <div  className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder="Name" requaired/>
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder="Email" requaired/>
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder="Subject" requaired/>
                                </li>
                                <li>
                                    <textarea name='message' placeholder="Message" requaired/>
                                </li>
                                <li>
                                    <input type='submit' name='submit' value='SEND' className='flat-button send' requaired/>
                                </li>
                            </ul>
                        </form>
                    </div>
            </div>
            <Logo/>
        </div>
      
    )
}

export default Contact;