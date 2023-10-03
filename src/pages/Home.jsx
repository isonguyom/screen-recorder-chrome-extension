/* eslint-disable react/no-unescaped-entities */
import { ArrowRight, RecordCircle, Send2, RefreshSquare } from "iconsax-react"
import hero1 from '/images/home-hero1.png'
import hero2 from '/images/home-hero2.png'
import hero3 from '/images/home-hero3.png'
import featuresImage from '/images/feature-img.png'
import vector from '/images/work-vector.svg'

function Home() {
    return (
        <main className="Home">
            <section className='Home-hero'>
                <div className="hero-text">
                    <h1>Show Them Don’t Just Tell</h1>
                    <p>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
                    <button className="install-btn btn btn-solid btn-icon">Install HelpMeOut<ArrowRight size="20" /></button>
                </div>
                <div className="hero-image">
                    <div className='double-image'>
                        <img src={hero1} alt='hero 1' />
                        <img src={hero2} alt='hero 2' />
                    </div>
                    <div>
                        <img src={hero3} alt='hero 3' />
                    </div>
                </div>
            </section>
            <section className="Home-features">
                <div className="feature-caption-wrapper">
                    <h2>Features</h2>
                    <p>Key Highlights of Our Extension</p>
                </div>
                <div className="features-wrapper grid-wrapper">
                    <div className="features-image">
                        <img src={featuresImage} alt="feature" />
                    </div>
                    <div className="features-grid grid-wrapper">
                        <div className="feature-inner">
                            <div className="feature-icon flex"><RecordCircle size="32" variant="Bold" /></div>
                            <div className="feature-text">
                                <h3 className="feature-caption">Simple Screen Recording</h3>
                                <p className="feature-description">Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                            </div>
                        </div>
                        <div className="feature-inner">
                            <div className="feature-icon flex"><Send2 size="32" variant="Bold" /></div>
                            <div className="feature-text">
                                <h3 className="feature-caption">Easy-to-Share URL</h3>
                                <p className="feature-description">Share your recordings instantly with a single link. No attachments, no downloads.</p>
                            </div>
                        </div>
                        <div className="feature-inner">
                            <div className="feature-icon flex"><RefreshSquare size="32" variant="Bold" /></div>
                            <div className="feature-text">
                                <h3 className="feature-caption">Revisit Recordings</h3>
                                <p className="feature-description">Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Home-how-it-work">
                <h2>How it works</h2>
                <div className="work-steps-grid">
                    <div className="work-step">
                        <p className="numbering">1</p>
                        <h4>Record Screen</h4>
                        <p className="text">Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
                        <img src={vector} alt="vector" />
                    </div>
                    <div className="work-step">
                        <p className="numbering">2</p>
                        <h4>Share Your Recording</h4>
                        <p className="text">We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
                        <img src={vector} alt="vector" />
                    </div>
                    <div className="work-step">
                        <p className="numbering">3</p>
                        <h4>Learn Effortlessly</h4>
                        <p className="text">Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
                        <img src={vector} alt="vector" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home