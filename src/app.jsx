// src/App.jsx

import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';

export default function App() {
    const aboutRef = useRef(null);
    const containerRef = useRef(null); // 1. Add a ref for the main container
    const [isClicked, setIsClicked] = useState(false);

    const handleAboutClick = () => {
        setIsClicked(true);

        // 2. Update the scroll logic
        if (aboutRef.current && containerRef.current) {
            // Instead of scrollIntoView, we use scrollTo for precision
            containerRef.current.scrollTo({
                top: aboutRef.current.offsetTop, // Get the exact top position of the about section
                behavior: 'smooth'
            });
        }
    };

    return (
        // Attach the new ref to the main scrolling div
        <div ref={containerRef} style={{
            position: 'relative',
            height: '100vh', // Changed from 200vh as the parent body/html is now the scroller
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
                <div style={{ maxWidth: '800px', opacity: isClicked ? 1 : 0, transition: 'opacity 1s ease-in-out 1s' }}>
                    <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Our Motto</h2>
                    <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
                        Innovating the future, one byte at a time.
                    </p>
                </div>
            </section>
        </div>
    );
}
