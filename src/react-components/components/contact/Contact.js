import React, { Fragment, useState, } from 'react'
import * as emailjs from 'emailjs-com'
import { GradientShield, Partition, SectionTitle, SmallContainer, } from '../../appStyles'
import { ContactForm, Footer, SubmitButton, } from './styles'


const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
        alert: 'Information will only be used for the purposes of completing your request.',
    })
    const [isComplete, setIsComplete] = useState(false)


    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
        
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const isEmail = re.test(formState.email)

        if (formState.name.length > 0 && formState.message.length > 0 && isEmail) {
            setIsComplete(true)
        } else {
            setIsComplete(false)
        }
    }

    const handleFormSubmit = e => {
        e.preventDefault()
console.log('submit')
        // const { name, email, message, } = formState
        // const fullMessage = `${message} Email: ${email}`

        // const templateParams = {
        //     from_name: name,
        //     to_name: 'Michael',
        //     subject: 'A message form your portfolio',
        //     message_html: fullMessage,
        //     sender_email: email
        // }

        // emailjs.send(
        //     'gmail',
        //     'template_oxSdnufr',
        //     templateParams,
        //     'user_zQLOWi9I5SmNVHxZFAANB'
        // ).then(res => {
        //     setFormState({ ...formState, alert: 'Thank you for making a request. We will make contact you as soon as possible.' })
        // }).catch(e => {
        //     setFormState({ ...formState, alert: 'We are sorry, but we are unable to process your request at this time.' })
        // })
    }


    return (
        <Fragment>
            <SectionTitle id='contact'>Contact Me</SectionTitle>

                <ContactForm onSubmit={handleFormSubmit}>
                    <p>{formState.alert}</p>
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

                    <SubmitButton 
                        type='submit'
                        isComplete={isComplete} >
                        Submit
                    </SubmitButton>
                </ContactForm>
           
            {/**/}
            <Footer />
        </Fragment>
        
    )
}


export { Contact }
