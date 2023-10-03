/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
// import { IoChevronBackOutline } from 'react-icons/io5'
import { Edit, ArrowLeft2 } from 'iconsax-react'
import { LuCopy } from 'react-icons/lu'
function ShareVideo() {
    const [recipientEmail, setRecipientEmail] = useState('Johnmark@gmail.com')
    const [videoTitle, setVideoTitle] = useState("Untitled_Video_20232509 ")

    const handleShare = () => {

    }
    return (
        <section className="ShareVideo">
            <div className='mobile'>
                <div className="mobile-top">
                    <button className="mobile-back-btn"><ArrowLeft2 size="24" color="#141414" /></button>
                    <h4 className='mobile-page-title'>Share recording</h4>
                </div>
                <div className='recorded-video-details'>
                    <div className='mobile'>
                        <div className='video-name-wrapper flex'>
                            <label className='input-group'>
                                <span className='input-label'>Name</span>
                                <input
                                    className='input-field'
                                    type="text"
                                    name="videoTitle"
                                    value={videoTitle}
                                    onChange={(e) => setVideoTitle(e.target.value)}
                                />
                            </label>
                            <button className='video-name-edit-btn'><Edit size="24"
                                color="#120B48" /></button>
                        </div>
                        <div className='recorded-video-wrapper'>
                            <video className='recorded-video'>
                                video
                            </video>
                            <div className='recorded-video-overlay'>
                                <button className='btn'>
                                    <img src='icons/play-icon.svg' alt='play' />
                                </button>
                            </div>
                        </div>
                        <div className='video-share-options'>
                            <div className='share-input-wrapper'>
                                <form className='grid-wrapper' onSubmit={handleShare}>
                                    <div className='share-input-group'>
                                        <input
                                            className='share-input'
                                            type="email"
                                            name="shareEmail"
                                            value={recipientEmail} onChange={(e) => setRecipientEmail(e.target.value)}
                                        />
                                        <button className='share-btn' type='submit'>Send</button>
                                    </div>
                                </form>
                                <p className='share-email-tip'>Your video to {recipientEmail} is now ready.   <br />
                                    <a href=''>Not the receiver?</a></p>
                            </div>
                            <div className='copy-options flex'>
                                <button className='btn copy-btn btn-outline'><LuCopy size='20' color='#120B48' />Copy video link</button>
                                <div className='social-options flex'>
                                    <a href=''><img src='icons/whatsapp.svg' alt='whatsapp' /></a>
                                    <a href=''><img src='icons/facebook.svg' alt='facebook' /></a>
                                    <a href=''><img src='icons/telegram.svg' alt='telegram' /></a>
                                </div>
                            </div>
                        </div>
                        <div className='recorded-video-transcript'>
                            <h3 className='transcript-title'>Transcript</h3>
                            <div className='transcript-wrapper'>
                                <div className='time-stamp flex active'>
                                    <p>0.01</p>
                                    <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </p>
                                </div>
                                <div className='time-stamp flex'>
                                    <p>0.15</p>
                                    <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </p>
                                </div>
                                <div className='time-stamp flex'>
                                    <p>0.15</p>
                                    <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </p>
                                </div>
                                <div className='time-stamp flex'>
                                    <p>0.30</p>
                                    <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="desktop">
                <div>
                <h1 className='video-ready'>Your video is ready!</h1>
                <div className='video-name-wrapper flex'>
                            <label className='input-group'>
                                <span className='input-label'>Name</span>
                                <input
                                    className='input-field'
                                    type="text"
                                    name="videoTitle"
                                    value={videoTitle}
                                    onChange={(e) => setVideoTitle(e.target.value)}
                                />
                            </label>
                            <button className='video-name-edit-btn'><Edit size="24"
                                color="#120B48" /></button>
                        </div>
                    <div className="filepage-inputs">
                        <label className='input-group'>

                            <input
                                className='input-field'
                                type="email"
                                name="recipientEmail"
                                placeholder='Enter email of receiver'
                                value={recipientEmail} onChange={(e) => setRecipientEmail(e.target.value)}
                            />
                            <button className='btn2 btn-solid'>Send</button>
                        </label>
                        <label className='input-group'>

                            <input
                                className='input-field'
                                type="text"
                                name="recipientEmail"
                                placeholder='https://www.helpmeout/Untitled_Video_20232509'

                            />
                            <button className='btn2 btn-outline btn-icon'><LuCopy />Copy URL</button>
                        </label>
                    </div>
                    <div className="social-wrapper">
                        <h4>Share your video </h4>
                        <div className="social-share">
                            <a href="https//:" className='btn btn-outline btn-icon'><img src='/icons/facebook24.svg' alt='facebook' />Facebook</a>
                            <a href="https//:" className='btn btn-outline btn-icon'><img src='/icons/whatsapp24.svg' alt='whatsapp' />Whatsapp</a>
                            <a href="https//:" className='btn btn-outline btn-icon'><img src='/icons/telegram24.svg' alt='telegram' />Telegram</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='recorded-video-wrapper'>
                        <video className='recorded-video'>
                            video
                        </video>
                        <div className='recorded-video-overlay'>
                            <button className='btn'>
                                <img src='icons/play-icon.svg' alt='play' />
                            </button>
                        </div>
                    </div>
                    <div className='recorded-video-transcript'>
                        <h3 className='transcript-title'>Transcript</h3>
                        <div className='transcript-wrapper'>
                            <div className='time-stamp flex active'>
                                <p>0.01</p>
                                <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </p>
                            </div>
                            <div className='time-stamp flex'>
                                <p>0.15</p>
                                <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </p>
                            </div>
                            <div className='time-stamp flex'>
                                <p>0.15</p>
                                <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </p>
                            </div>
                            <div className='time-stamp flex'>
                                <p>0.30</p>
                                <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid-wrapper recommend">
                    <p>To ensure the availability and privacy of your video, we recommend saving it to your account.</p>
                    <button className='btn btn-solid'>Save Video</button>
                    <p><span className='faint-text'>Don't have an account?</span> <a href="">Create account</a></p>
                </div>
        </section>
    )
}


export default ShareVideo