import React, { useEffect } from 'react';
import './AuraVisualizer.css';

const AuraVisualizer = ({ coreEmotion, middleEmotion, outerEmotion }) => {
  useEffect(() => {
    const core = document.querySelector('.aura-core');
    const middle = document.querySelector('.aura-middle');
    const outer = document.querySelector('.aura-outer');
    const particles = document.querySelector('.particles');

    const handleMouseMove = (event) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;

      const rotateX = (y - 0.5) * 30;
      const rotateY = (x - 0.5) * 30;

      core.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(50px)`;
      middle.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(30px)`;
      outer.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
      particles.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="container">
      <div className="glass-dome">
        <div className="aura-core" style={{ background: coreEmotion }}></div>
        <div className="aura-middle" style={{ background: middleEmotion }}></div>
        <div className="aura-outer" style={{ background: outerEmotion }}></div>
        <div className="particles"></div>
      </div>
    </div>
  );
};

export default AuraVisualizer;


