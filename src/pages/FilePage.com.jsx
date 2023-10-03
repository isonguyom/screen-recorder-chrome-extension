/* eslint-disable react/no-unescaped-entities */
import { ProfileCircle, ArrowDown2, Edit, Setting2 } from "iconsax-react"
import { LuCopy } from 'react-icons/lu'
import { useState } from "react"

function FilePage() {
    const [recipientEmail, setRecipientEmail] = useState('')
    const [shareEmail, setShareEmail] = useState('Johnmark@gmail.com')
    const [videoTitle, setVideoTitle] = useState("How To Create A Facebook Ad Listing")
    const handleShare = () => {

    }
    return (
        <main className="File">
            <div className="top-header2">
                <a href='/' className="brand desktop">
                    <img className="brand-icon" src="/icons/icon-main.svg" />
                    <h2 className="brand-name">HelpMeOut</h2></a>
                <div className="user-widget">
                    <ProfileCircle size="40" variant="Bulk" />
                    <span>John Mark</span>
                    <ArrowDown2 size="24" />
                </div>
            </div>
            <div className="">
                <div className="mobile-top">
                    <h4 className='mobile-page-title'>Hello Jack</h4>
                    <Setting2 size="24" color="#141414" />
                </div>


                <div className='video-name-wrapper flex'>
                    <label className='input-group'>
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
                <div className="recent-file">
                    <div className="video-wrapper">
                        <video></video>
                    </div>
                </div>

            </div>
            <div className='video-share-options mobile'>
                <div className='share-input-wrapper'>
                    <form className='grid-wrapper' onSubmit={handleShare}>
                        <div className='share-input-group'>
                            <input
                                className='share-input'
                                type="email"
                                name="shareEmail"
                                value={shareEmail} onChange={(e) => setShareEmail(e.target.value)}
                            />
                            <button className='share-btn' type='submit'>Send</button>
                        </div>
                    </form>
                    <p className='share-email-tip'>Your video to {shareEmail} is now ready.   <br />
                        <a href=''>Not the receiver?</a></p>
                </div>
                <div className='copy-options flex'>
                    <button className='btn copy-btn btn-outline'><LuCopy size='20' color='#120B48' />Copy video link</button>
                    <div className='social-options flex'>
                        <a href=''><img src='/icons/whatsapp.svg' alt='whatsapp' /></a>
                        <a href=''><img src='/icons/facebook.svg' alt='facebook' /></a>
                        <a href=''><img src='/icons/telegram.svg' alt='telegram' /></a>
                    </div>
                </div>
            </div>
            <div className="desktop">
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
            <div className=''>
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
        </main>
    )
}



export default FilePage