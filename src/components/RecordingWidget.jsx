/* eslint-disable react/prop-types */
import { RiPauseFill } from 'react-icons/ri'
import { BsStop as BsStop } from 'react-icons/bs'
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { AiOutlineAudio } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GoDotFill } from 'react-icons/go';
import { MdKeyboardArrowUp } from 'react-icons/md';

function Widget({onStop}) {
    return (
        <div className="Widget">
            <div className='widget-timer-wrapper'>
                <span className="recording-timer">00:03:45</span>
                <span className="recording-indicator"><GoDotFill /></span>
            </div>
            <div className="widget-btn-group">
                <button className="widget-btn"><span className="widget-btn-icon"><RiPauseFill /></span><span className="widget-btn-text">Pause</span></button>
                <button className="widget-btn" onClick={() => onStop()}><span className="widget-btn-icon"><BsStop /></span><span className="widget-btn-text">Stop</span></button>
                <button className="widget-btn"><span className="widget-btn-icon"><HiOutlineVideoCamera /></span><span className='mini-icon'><MdKeyboardArrowUp /></span><span className="widget-btn-text">Camera</span></button>
                <button className="widget-btn"><span className="widget-btn-icon"><AiOutlineAudio /></span><span className='mini-icon'><MdKeyboardArrowUp /></span><span className="widget-btn-text">Mic</span></button>
            </div>
            <button className="widget-del-btn"><span className="widget-btn-icon"><RiDeleteBin6Line /></span><span className="widget-btn-text">Mic</span></button>
        </div>
    )
}

export default Widget