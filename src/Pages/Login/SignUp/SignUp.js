import React, { useContext} from 'react';
import img from '../../../assets/images/login/login.svg';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';

const SignUp = () => {
    const { signUp } = useContext(AuthContext);

    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleFormSubmit} className="card-body">
                        <h1 className="text-5xl font-bold">Sign Up</h1>

                        {/* Name field  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" name='name' className="input input-bordered" />
                        </div>

                        {/* Email field  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Your email" name='email' className="input input-bordered" />
                        </div>

                        {/* Password field  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Your password" name='password' className="input input-bordered" />
                            <label className="label">
                                <a href="1" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn  bg-[#FF3811]" type="submit" value="Sign Up" />
                        </div>
                        <p>or Sign up with</p>
                        <div>
                            <button> <FaFacebook size={25} /></button>
                            <button className='mx-4'> <FaLinkedin size={25} /></button>
                            <button> <FcGoogle size={25} /></button>
                        </div>
                        <p>Already have an account ? <Link to="/login" className='text-[#FF3811] font-bold'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;