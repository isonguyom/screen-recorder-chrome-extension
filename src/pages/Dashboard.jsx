import { useState } from "react";
import { SearchNormal1, Link1, ProfileCircle, ArrowDown2, Setting2, VideoHorizontal, More } from "iconsax-react";
import { LuMoreVertical } from "react-icons/lu";
import StartRecButton from "../components/MobileStartButton";
import { Link } from "react-router-dom"

function Dashboard() {
    const [searchInput, setSearchInput] = useState('');

    // const handleSearch = (event) => {

    // }


    return (
        <main className="Dashboard">
            <div className="mobile">
                <StartRecButton />
                <div className="mobile-top">
                    <h4 className='mobile-page-title'>Hello Jack</h4>
                    <Setting2 size="24" color="#141414" />
                </div>
                <div className="fixed-bottom-nav">
                    <a href="/dashboard" className="fixed-bottom-item active"><span className=""><VideoHorizontal size="24" variant="Bold" /></span><span className="">Repository</span></a>
                    <button className="fixed-bottom-item"><span className=""><SearchNormal1 size='24' /></span><span className="">Search</span></button>
                    <button className="fixed-bottom-item"><span className=""><More size="34" variant="Outline" /></span><span className="">More</span></button>
                </div>
            </div>
            <div className="desktop">
                <div className="top-header2">
                    <a href='/' className="brand desktop">
                        <img className="brand-icon" src="icons/icon-main.svg" />
                        <h2 className="brand-name">HelpMeOut</h2></a>
                    <div className="user-widget">
                        <ProfileCircle size="40" variant="Bulk" />
                        <span>John Mark</span>
                        <ArrowDown2 size="24" />
                    </div>
                </div>
                <div className="greetings-bar">
                    <div>
                        <h2>Hello, John Mark</h2>
                        <p className="faint-text">Here are your recorded videos</p>
                    </div>
                    <label className='input-group'>
                        <span className='input-label'><SearchNormal1 size="20" /></span>
                        <input
                            className='input-field'
                            type="text"
                            name="searchInput"
                            placeholder='Search for a particular video'
                            value={searchInput} onChange={(e) => setSearchInput(e.target.value)}
                        />
                    </label>
                </div>
            </div>
            <div className="recent-files">
                <h4>Recent files</h4>
                <div className="recent-files-wrapper">
                    <div className="recent-file">
                        <div className="video-wrapper">
                            <video></video>
                            <span className="video-timer">00:34</span>
                        </div>
                        <div className="recent-file-label">
                            <div className="file-des">
                                <Link className="video-title" tag="h3" to='/file/1'>How to create Facebook Ad listing</Link>
                                <span className="faint-text">SEPTEMBER 23, 2023</span>
                            </div>
                            <div className="file-icons">
                                <Link1 size="24" />
                                <LuMoreVertical size='24' />
                            </div>
                        </div>
                    </div>
                    <div className="recent-file">
                        <div className="video-wrapper">
                            <video></video>
                            <span className="video-timer">00:34</span>
                        </div>
                        <div className="recent-file-label">
                            <div className="file-des">
                                <Link className="video-title" tag="h3" to='/file/2'>How to create Facebook Ad listing</Link>
                                <span className="faint-text"> SEPTEMBER 23, 2023</span>
                            </div>
                            <div className="file-icons">
                                <Link1 size="24" />
                                <LuMoreVertical size='24' />
                            </div>
                        </div>
                    </div>
                    <div className="recent-file">
                        <div className="video-wrapper">
                            <video></video>
                            <span className="video-timer">00:34</span>
                        </div>
                        <div className="recent-file-label">
                            <div className="file-des">
                                <Link className="video-title" tag="h3" to='/file/1'>How to create Facebook Ad listing</Link>
                                <span className="faint-text"> SEPTEMBER 23, 2023 </span>
                            </div>
                            <div className="file-icons">
                                <Link1 size="24" />
                                <LuMoreVertical size='24' />
                            </div>
                        </div>
                    </div>
                    <div className="recent-file">
                        <div className="video-wrapper">
                            <video></video>
                            <span className="video-timer">00:34</span>
                        </div>
                        <div className="recent-file-label">
                            <div className="file-des">
                                <Link className="video-title" tag="h3" to='/file/1'>How to create Facebook Ad listing</Link>
                                <span className="faint-text">  SEPTEMBER 23, 2023</span>
                            </div>
                            <div className="file-icons">
                                <Link1 size="24" />
                                <LuMoreVertical size='24' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </main>
    )
}




export default Dashboard