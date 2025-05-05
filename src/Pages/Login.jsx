import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h3 className='font-bold text-2xl text-center'>Login Your Account</h3>
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        <h3 className='font-bold text-center py-2'>Don't have an account ? <Link className='text-secondary ' to="/auth/register">Register</Link></h3>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Login;