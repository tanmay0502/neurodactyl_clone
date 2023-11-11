import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className='flex justify-center pb-4'>About Us</h2>
        <div className='px-10 pb-6'>
            <p>
            Neurodactyl is a technology start-up founded in 2023 by specialists in machine vision and deep learning technologies.
            We have vast experience in biometric markets and have been working with different biometric technologies since 2014,
            when neural network-based facial recognition technologies completely changed the market.
            Today we are focused on creating cutting-edge algorithms in fingerprint recognition, striving to bring new life
            and the power of new mobile technologies to the market of old-school biometrics.
            </p>
            <p>
            We aim to make identification powered by biometrics convenient, easy, and reliable and help to protect personal
            and financial data in the new digital reality.
            </p>
            <p>
            Besides fingerprint recognition, our R&D team also conducts research in other biometrics like face, voice, and iris.
            </p>
        </div>
      </div>
    </div>
  );
};

export default About;