'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Code, Users, Lightbulb, Trophy, ArrowRight, Star } from 'lucide-react';

const About = () => {
    const aboutRef = useRef(null);
    const splitTextRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Dynamic import for SplitType
        import('split-type').then((SplitTypeModule) => {
            const SplitType = SplitTypeModule.default;

            if (splitTextRef.current && aboutRef.current && containerRef.current) {
                const split = new SplitType(splitTextRef.current, {
                    types: "words,chars",
                });

                // Create a timeline for the text animation
                const textTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "+=200%", // Extend the scroll distance
                        scrub: 0.5,
                        pin: aboutRef.current, // Pin the about section
                        pinSpacing: true,
                        anticipatePin: 1,
                        onUpdate: (self) => {
                            // Optional: Add progress indicator
                            console.log('Animation progress:', self.progress);
                        }
                    },
                });

                // Animate characters to white color
                textTimeline.to(split.chars, {
                    duration: 1,
                    color: "white",
                    stagger: 0.02,
                    ease: "power2.out"
                });

                // Additional fade-in animation for the subtitle
                textTimeline.fromTo(".subtitle-text", 
                    {
                        opacity: 0,
                        y: 30
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power2.out"
                    },
                    0.8 // Start this animation when text animation is 80% complete
                );
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={containerRef} className="relative">
            <section
                ref={aboutRef}
                className="about relative min-h-screen bg-black text-white overflow-hidden"
                data-bg="black"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
                    {/* Hero Section */}
                    <div className="text-center">
                        <div className="cool-split mb-12">
                            <h2
                                ref={splitTextRef}
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                                style={{
                                    width: '85%',
                                    margin: '0 auto',
                                    color: 'rgba(255, 255, 255, 0.125)',
                                    transition: 'color 0.3s'
                                }}
                            >
                                &ldquo;At Binary Brains, we specialize in turning ideas into impactful digital solutions. Our team blends creativity with cutting-edge technology to design and build software that drives innovation, accelerates growth, and empowers businesses to thrive in the digital era.&rdquo;
                            </h2>
                        </div>

                        {/* Subtitle that appears after text animation */}
                        <div className="subtitle-text opacity-0">
                            <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-3xl mx-auto mb-8">
                                At Binary Brains, we combine creativity and technology to build products that make a difference.
                            </p>
                            
                            {/* Optional: Add a progress indicator */}
                            <div className="flex justify-center mt-8">
                                <div className="text-xs sm:text-sm md:text-sm text-zinc-500 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                    Scroll to continue
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .cool-split h2 {
                        width: 85%;
                        color: rgba(255, 255, 255, 0.125);
                        transition: color 0.3s;
                    }
                `}</style>
            </section>
        </div>
    );
};

export default About;