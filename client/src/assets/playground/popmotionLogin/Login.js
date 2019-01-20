import React from 'react'
import { tween } from 'popmotion'
import '../../themes/css/loginStyles.css'


const Login = () => 
    <form>
        <span className='msg'>Full name please!</span>
        <input type='text' placeholder='name' className='txtfld' />
        <input type='text' placeholder='email' className='txtfld' />

        <input type='submit' placeholder='enter info' className='btn' />
    </form>


export default Login
