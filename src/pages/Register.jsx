import { useState } from 'react';

import { ArrowLeft2 } from 'iconsax-react'
import googleIcon from '/icons/google-icon.svg'
import facebookIcon from '/icons/facebook-round.svg'


function Register() {
    const [userDetails, setUserDetails] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserDetails(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = () => {
        // e.preventDefault();
        // alert(userDetails);
    }
    return (
        <main className="Register">
            <a href='/' className="brand desktop"><img className="brand-icon" src="icons/icon-main.svg" /><h2 className="brand-name">HelpMeOut</h2></a>
            <div className='wrapper'>
            <div className="mobile-top">
                <button className="mobile-back-btn"><ArrowLeft2 size="24" color="#141414" /></button>
            </div>
            <div className='register-hero'>
                <div className='mobile'>
                    <h2 className='title'>Create an account</h2>
                    <p className='text'>Join millions of others in sharing successful moves on HelpMeOut.</p>
                </div>
                <div className='desktop'>
                    <h2 className='title'>Log in or Sign up</h2>
                    <p className='text'>Join millions of others in sharing successful moves on HelpMeOut.</p>
                </div>
            </div>
            <div className='grid-wrapper'>
                <button className='btn btn-outline btn-icon full-width'><img src={googleIcon} alt='google' />Continue with Google</button>
                <button className='btn btn-outline btn-icon full-width'><img src={facebookIcon} alt='' />Continue with Facebook</button>
            </div>
            <div className='demarcator-wrapper'>
                <hr />
                <p className='demarcator-text'>or</p>
            </div>
            <div className='form'>
                <form className='grid-wrapper' onSubmit={handleSubmit} action='#dashboard'>
                    <label className='input-group'>
                        <span className='input-label'>Email</span>
                        <input
                            className='input-field'
                            type="email"
                            name="email"
                            placeholder='Enter your email address'
                            value={userDetails.email || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <label className='input-group'>
                        <span className='input-label'>Password</span>
                        <input
                            className='input-field'
                            type="password"
                            name="password"
                            placeholder='Enter your Password'
                            value={userDetails.password || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <button className='btn btn-solid full-width' type='submit'>Create Account</button>
                </form>
            </div>
            <a className='action-link' href='/'>Continue as a Guest</a>
            </div>
        </main>
    )
}






export default Register