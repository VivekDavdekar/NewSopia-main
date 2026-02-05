import React from "react";
import { FaGlobe, FaBolt, FaLayerGroup, FaBullseye } from "react-icons/fa";
import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <section className="about-hero">
                <h1 style={{marginTop: "40px"}}>
                    About <span className="brand">Newsopia</span>
                </h1>
                <p>
                    Welcome to <strong>Newsopia</strong> — your personalized gateway to the
                    world’s most important stories. From global politics to trending
                    culture, from business insights to tech breakthroughs — Newsopia keeps
                    you informed, inspired, and always ahead.
                </p>
            </section>

            <section className="features">
                <div className="feature-card">
                    <FaGlobe className="feature-icon blue" />
                    <h3>Real-Time Updates</h3>
                    <p>
                        Get breaking news the moment it happens — powered by trusted global
                        news sources delivering data in real time.
                    </p>
                </div>

                <div className="feature-card">
                    <FaLayerGroup className="feature-icon purple" />
                    <h3>Smart Categories</h3>
                    <p>
                        Navigate through curated sections — Business, Sports, Health,
                        Science, Technology, and Entertainment — all in one seamless flow.
                    </p>
                </div>

                <div className="feature-card">
                    <FaBolt className="feature-icon yellow" />
                    <h3>Smooth Experience</h3>
                    <p>
                        Lightning-fast performance with infinite scrolling, top-loading
                        progress bar, and fluid transitions for effortless browsing.
                    </p>
                </div>
            </section>

            <section className="mission">
                <h2>
                    Our Mission <FaBullseye className="mission-icon" />
                </h2>
                <p>
                    In an age of endless information, <strong>Newsopia</strong> stands for
                    clarity. We deliver clean, fast, and unbiased updates — cutting through
                    the noise to bring you only what truly matters.
                </p>
            </section>

            <section className="cta">
                <h2>Stay Informed. Stay Ahead.</h2>
                <p>
                    Newsopia isn’t just a news app — it’s your daily window to the world.
                    Discover stories that shape tomorrow.
                </p>
            </section>

            <footer className="credit-line">
                💻 Made with ❤️ by <strong>Omkar Kadam</strong>
            </footer>
        </div>
    );
};

export default About;
