import React, { Fragment, useState, } from 'react'
import { GradientShield, Partition, SectionTitle, SmallContainer, } from '../../appStyles'
import { ContactForm, Footer, } from './styles'


const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
        alert: '',
    })

    const handleChange = e => setFormState({ ...formState, [e.target.name]: e.target.value })

    const handleFormSubmit = e => {
        console.log(submit)
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

                    <button type='submit'>Submit</button>
                </ContactForm>

            
            
            <Footer></Footer>
        </Fragment>
        
    )
}


export { Contact }
