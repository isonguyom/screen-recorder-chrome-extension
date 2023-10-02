import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { AiOutlineAudio } from 'react-icons/ai';
import { Camera, MirroringScreen, Microphone2 } from 'iconsax-react';
import Toggle from '../components/Toggle';
import StartRecButton from '../components/MobileStartButton.jsx';

function Permission() {
    const [recipientEmail, setRecipientEmail] = useState('')
    
    const logState = () => {

    }
    return (
        <div className='Permission'>
            <div className='mobile'>
            <StartRecButton />
                <div className="mobile-top">

                </div>
                <div className='permission-hero'>
                    <h2 className='title'>Show Them
                        Don’t Just Tell</h2>
                    <p className='text'>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
                </div>
                <div className='grid-wrapper'>
                    <div className='flex choice-label'>
                        <span className='flex'><Camera size="24" color="#141414"/> Record Camera</span> <Toggle
                            toggled={false}
                            onClick={logState}
                        /></div>
                    <div className='flex choice-label'><span className='flex'><MirroringScreen size="24" color="#141414"/> Record Screen</span><Toggle
                        toggled={true}
                        onClick={logState}
                    /></div>
                    <div className='flex choice-label'><span className='flex'><Microphone2 size="24" color="#141414"/> Record Audio</span><Toggle
                        toggled={true}
                        onClick={logState}
                    /></div>
                     <label className='input-group'>
                            <span className='input-label'>Who would you like to send recording to?</span>
                            <input
                                className='input-field'
                                type="email"
                                name="email"
                                placeholder='Johnmark@gmail.com'
                                value={recipientEmail}
                                onChange={(e) => setRecipientEmail(e.target.value)}
                            />
                        </label>
                </div>
            </div>
            <div className='desktop'>
                <div className='permission-alert'>
                    <p className='permission-intro'><span className='permission-intro-text'>HelpMeOut wants to</span> <button className='permission-close-btn'><AiOutlineCloseCircle /></button></p>
                    <div className='permission-request'>
                        <p><span className='permission-icon'><HiOutlineVideoCamera /></span><span>Use your camera</span></p>
                        <p><span className='permission-icon'><AiOutlineAudio /></span><span>Use your microphone</span></p>
                    </div>
                    <div className='permission-btns-group'>
                        <button className='permission-btn' id="grantPermission">Allow</button>
                        <button className='permission-btn' id="notGranted">Block</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Permission