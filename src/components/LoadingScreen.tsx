'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const triangleRef = useRef<HTMLDivElement>(null);
  const squareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out the entire loading screen
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: onComplete
        });
      }
    });

    // Initial state - hide all shapes
    gsap.set([circleRef.current, triangleRef.current, squareRef.current], {
      scale: 0,
      opacity: 0,
      rotation: 0
    });

    // Animate shapes appearing one by one (0-1.2s)
    tl.to(circleRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: "back.out(1.7)"
    })
    .to(triangleRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "-=0.3")
    .to(squareRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "-=0.3")
    
    // Continuous rotation (1.2-4s)
    .to([circleRef.current, triangleRef.current, squareRef.current], {
      rotation: 360, // One full rotation
      duration: 2.8,
      ease: "none",
    })
    
    // Pulsing animation (2-4s, overlapping with rotation)
    .to([circleRef.current, triangleRef.current, squareRef.current], {
      scale: 1.3,
      duration: 0.5,
      yoyo: true,
      repeat: 3,
      ease: "power2.inOut"
    }, 2)
    
    // Final gathering and exit animation (4-5s)
    .to([circleRef.current, triangleRef.current, squareRef.current], {
      x: 0,
      y: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "power2.inOut"
    }, 4)
    .to([circleRef.current, triangleRef.current, squareRef.current], {
      scale: 2,
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut"
    }, 4.5);

    // Cleanup
    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
    >
      {/* Loading Shapes Container */}
      <div className="relative flex items-center justify-center space-x-8">
        {/* Circle */}
        <div 
          ref={circleRef}
          className="w-12 h-12 bg-white rounded-full"
        />

        {/* Triangle */}
        <div 
          ref={triangleRef}
          className="w-[0] h-[0] border-l-[24px] border-r-[24px] border-b-[48px] border-l-transparent border-r-transparent border-b-white"
        />

        {/* Square */}
        <div 
          ref={squareRef}
          className="w-12 h-12 bg-white"
        />
      </div>

      {/* Loading Text */}
      <div className="absolute bottom-20 text-white text-lg font-medium">
        Loading...
      </div>
    </div>
  );
};

export default LoadingScreen;