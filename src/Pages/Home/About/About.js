import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} alt="" className="lg:w-4/5 lg:h-96 rounded-lg shadow-2xl" />
                    <img src={parts} alt="" className="lg:w-80 lg:h-80 rounded-lg shadow-2xl lg:absolute right-12 top-36 border-8 border-white" />
                </div>

                <div className='lg:w-1/2'>
                    <h1 className='text-xl text-start text-red-600 font-bold mt-16'>About</h1>
                    <h1 className="text-5xl font-bold lg:w-96 text-start">We are qualified & of experience in this field</h1>
                    <p className="py-6 lg:w-5/6 text-start">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="py-6 w-5/6 text-start">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary flex flex-row">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;