import './About.css'
import ProfilePic from '/src/assets/profile-picture.jpg'

const About = () => {
    return (
        <section id="about" className="about-section" aria-label="About me">
            <article>
                <h1 className='title_intro text-start'>Hello!</h1>
                <h1 className='title_intro text-start'>I'm Alex Morgan, Growth Marketing Manager</h1>

                <div className="profile-overview-container pt-5">
                    <div className="profile-image-wrapper">
                        <img src={ProfilePic} alt="Profile" className="profile-image" />
                    </div>
                    <div className="profile-text mt-5">
                        <h2 className="section-title text-start">Profile Overview</h2>
                        <div className="section-content">
                            <p className='text-start'>
                                Growth marketing manager with 8+ years of experience scaling startups and global brands. Expert in data-driven user acquisition, funnel optimization, and building high-performing teams. Proven track record of 7-figure ARR growth, double-digit CAC reduction, and rapid, measurable results.
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default About;