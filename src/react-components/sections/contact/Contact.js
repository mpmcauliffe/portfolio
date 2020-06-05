import React, { Fragment, useState, } from 'react'
import * as emailjs from 'emailjs-com'
import { GradientShield, Partition, SectionTitle, SmallContainer, } from '../../appStyles'
import { ContactForm, Footer, SubmitButton, } from './styles'


const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
        alert: '',
    })

    const handleChange = e => setFormState({ ...formState, [e.target.name]: e.target.value })

    const handleFormSubmit = e => {
        e.preventDefault()

        const { name, email, message, } = formState
        const fullMessage = `${message} Email: ${email}`

        const templateParams = {
            from_name: name,
            to_name: 'Michael',
            subject: 'A message form your portfolio',
            message_html: fullMessage,
            sender_email: email
        }

        emailjs.send(
            'gmail',
            'template_oxSdnufr',
             templateParams,
            'user_zQLOWi9I5SmNVHxZFAANB'
        )
    }


    return (
        <Fragment>
            <SectionTitle id='contact'>Contact Me</SectionTitle>

                <ContactForm onSubmit={handleFormSubmit}>
                    <input /* NAME */
                        value={formState.name}
                        name='name'
                        onChange={handleChange}
                        type='text'
                        placeholder='Name'
                        required />

                    <input /* EMAIL */
                        value={formState.email}
                        name='email'
                        onChange={handleChange}
                        type='email'
                        placeholder='Email'
                        required />

                    <textarea /* MESSAGE */
                        value={formState.message}
                        name='message'
                        onChange={handleChange}
                        type='text'
                        placeholder='Message'
                        required />

                    <SubmitButton type='submit'>Submit</SubmitButton>
                </ContactForm>

            
            
            <Footer></Footer>
        </Fragment>
        
    )
}


export { Contact }
