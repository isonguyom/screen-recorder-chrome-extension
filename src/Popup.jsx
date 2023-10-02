/* eslint-disable no-undef */
import { useState } from 'react'
import { Setting2, CloseCircle, Monitor, Copy, Video, Microphone2 } from 'iconsax-react';
import Toggle from './components/Toggle';

import './Popup.css'

// eslint-disable-next-line react/prop-types
function Popup() {
    const [activeTab, setActiveTab] = useState(1);

    const optionTabs = [
        { id: 1, text: 'Full Screen', icon: Monitor },
        { id: 2, text: 'Current Tab', icon: Copy }
    ]

    const handleStartRec = () => {
        const homePageURL = chrome.runtime.getURL('home.html');
        chrome.tabs.create({ url: homePageURL });
    }


    const handleTabClick = (index) => {
        setActiveTab(index);

    };

    const logState = () => {

    }
    return (
        <main className="Popup">
            <header className='Popup-header'>
                <div className="top-header">
                    <a href='' className="brand"><img className="brand-icon" src="icons/icon-popup.svg" /><span className="brand-name">HelpMeOut</span></a>
                    <div className="top-header-btns flex">
                        <button className="header-btn settings-icon active"><Setting2 size="20" /></button>
                        <button className="header-btn close-icon"><CloseCircle size="20" /></button>
                    </div>
                </div>
                <p className='description'>This extension helps you record and share help videos with ease.</p>
            </header>
            <section className='Popup-main'>
                <div className='bottom-btn-group'>
                    <div className="screen-option-tabs">
                        {optionTabs.map((tab, index) => (
                            <div
                                key={index}
                                onClick={() => handleTabClick(index)}
                                className={`screen-option-tab ${activeTab === index ? 'active' : ''}`}
                            >
                                <tab.icon size='32' className='screen-option-tab-icon' />
                                <span className='screen-option-tab-text'>{tab.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className='choice-btn'><span className='choice-btn-inner'><Video size="24" /> Camera</span> <Toggle
                        toggled={true}
                        onClick={logState}
                    /></div>
                    <div className='choice-btn'><span className='choice-btn-inner'><Microphone2 size="24" /> Audio</span><Toggle
                        toggled={true}
                        onClick={logState}
                    /></div>
                    <button className='btn btn-solid' onClick={handleStartRec}>Start Recording</button>
                </div>
            </section>
        </main>
    )
}

export default Popup