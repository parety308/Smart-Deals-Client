import React, { use } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        createUser(email, password)
            .then(res => {
                updateUser({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        console.log(res.user);
                        setUser(res.user);
                        toast('create user successfully');
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="hero bg-base-200 my-6">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-105 max-w-sm shrink-0 shadow-2xl">
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p>Already have an account?<NavLink to='/login' className='link link-hover text-[#9F62F2]'> Login Now</NavLink></p>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Your Name</label>
                                <input type="text" name='name' className="input" placeholder="Your Name" />
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Photo URL</label>
                                <input type="text" name='photoURL' className="input" placeholder="Photo URL" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button type='submit' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-lg text-white mt-4">Create Account</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;