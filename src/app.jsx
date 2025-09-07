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
        <div style={{ position: 'relative', height: '200vh' }}>
            <div style={{ height: '100vh', position: 'relative' }}>
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
                    padding: '2rem'
                }}
            >
                {/* 2D Content: Vision and Mission */}
                <div style={{ 
                    maxWidth: '1200px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    opacity: isClicked ? 1 : 0,
                    transition: 'opacity 1s ease-in-out 1s'
                }}>
                    {/* Vision Section */}
                    <div style={{ flex: '1', padding: '0 2rem' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✨ Vision</h3>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                            “To be a hub of innovation and collaboration where students explore, create, and excel in web development and cloud technologies, empowering the next generation of tech leaders.”
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div style={{ flex: '1', padding: '0 2rem' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🚀 Mission</h3>
                        <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                            <li style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '1rem' }}>To cultivate technical expertise in web development and cloud computing through hands-on projects, workshops, and knowledge sharing.</li>
                            <li style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '1rem' }}>To foster a collaborative learning environment that encourages creativity, problem-solving, and teamwork.</li>
                            <li style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '1rem' }}>To bridge the gap between academic learning and industry practices by organizing hackathons, guest lectures, and mentorship programs.</li>
                            <li style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>To inspire students to build impactful solutions that leverage technology for real-world challenges.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
