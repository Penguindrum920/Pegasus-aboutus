// src/App.jsx

import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';

export default function App() {
    const aboutRef = useRef(null);
    const [isClicked, setIsClicked] = useState(false);

    const handleAboutClick = () => {
        setIsClicked(true);
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div style={{
            position: 'relative',
            height: '200vh',
            overflowY: 'scroll',
            scrollSnapType: 'y mandatory'
        }}>
            <div style={{ height: '100vh', position: 'relative', scrollSnapAlign: 'start' }}>
                <Canvas
                    camera={{
                        fov: 45,
                        near: 0.1,
                        far: 200,
                        position: [4, -2, 6]
                    }}
                >
                    <Experience onAboutClick={handleAboutClick} isClicked={isClicked} />
                </Canvas>
            </div>
            
            <section
                id="about-us-section"
                ref={aboutRef}
                style={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgb(4, 5, 14)',
                    color: 'white',
                    textAlign: 'center',
                    padding: '2rem',
                    scrollSnapAlign: 'start'
                }}
            >
                <div style={{ maxWidth: '800px', textAlign: 'left', opacity: isClicked ? 1 : 0, transition: 'opacity 1s ease-in-out 1s' }}>
    
    <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', textAlign: 'center' }}>✨ Our Vision & Mission 🚀</h2>

    {/* Vision Section */}
    <h3 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Vision</h3>
    <p style={{ fontSize: '1.5rem', lineHeight: '1.6', marginBottom: '3rem' }}>
        “To be a hub of innovation and collaboration where students explore, create, and excel in web development and cloud technologies, empowering the next generation of tech leaders.”
    </p>

    {/* Mission Section */}
    <h3 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Mission</h3>
    <ul style={{ fontSize: '1.5rem', lineHeight: '1.6', paddingLeft: '2rem', margin: 0 }}>
        <li style={{ marginBottom: '1rem' }}>
            To cultivate technical expertise in web development and cloud computing through hands-on projects, workshops, and knowledge sharing.
        </li>
        <li style={{ marginBottom: '1rem' }}>
            To foster a collaborative learning environment that encourages creativity, problem-solving, and teamwork.
        </li>
        <li style={{ marginBottom: '1rem' }}>
            To bridge the gap between academic learning and industry practices by organizing hackathons, guest lectures, and mentorship programs.
        </li>
        <li>
            To inspire students to build impactful solutions that leverage technology for real-world challenges.
        </li>
    </ul>
                </div>
            </section>
        </div>
    );

}
