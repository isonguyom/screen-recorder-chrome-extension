import { Setting2, Link1 } from "iconsax-react"
import StartRecButton from "../components/MobileStartButton"


function UserPage() {
    return (
        <div className="UserPage">
            <div className="mobile">
            <StartRecButton />
                <div className="mobile-top">
                    <h4 className='mobile-page-title'>Hello Jack</h4>
                    <Setting2 size="24" color="#141414" />
                </div>
                <div className="user-recent">
                    <h3 className='title'>Recent Activity</h3>
                    <div className="user-activity-wrapper">
                        <div className="user-video-wrapper">

                        </div>
                        <div className="flex">
                            <div>
                                <h3>How to post new adverts on whatsapp</h3>
                                <p className="faint-text">2 days ago</p>
                            </div>
                            <div>
                            <Link1 size="24" color="#08051E"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed-bottom-nav">

                </div>
            </div>
        </div>
    )
}



export default UserPage