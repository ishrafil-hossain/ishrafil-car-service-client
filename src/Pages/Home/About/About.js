import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} alt="" className="lg:w-4/5 lg:h-96 rounded-lg shadow-2xl" />
                    <img src={parts} alt="" className="lg:w-80 lg:h-80 rounded-lg shadow-2xl lg:absolute right-12 top-40" />
                </div>

                <div className='w-1/2'>
                    <h1 className='text-xl text-start text-red-600 font-bold mt-20'>About</h1>
                    <h1 className="text-5xl font-bold w-96 text-start">We are qualified & of experience in this field</h1>
                    <p className="py-6 w-5/6 text-start">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="py-6 w-5/6 text-start">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary flex flex-row">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;