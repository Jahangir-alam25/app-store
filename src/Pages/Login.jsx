import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { signIn, signInWithGoogle } = use(AuthContext);
    const provider = new GoogleAuthProvider();
     const location = useLocation();
      const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password).then((result) => {
            const user = result.user;
            navigate(`${location.state ? location.state : "/"}`);
            console.log(user);
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle(provider)
        .then((result) => {
            const user = result.user;
            navigate(`${location.state ? location.state : "/"}`);
            console.log(user);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h3 className='font-bold text-2xl text-center'>Login Your Account</h3>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        <div className="divider">OR</div>
                        <button onClick={handleSignInWithGoogle} type="button" className="btn btn-outline btn-secondary">
                            <FcGoogle size={20}></FcGoogle>
                            Continue with Google
                        </button>
                        <h3 className='font-bold text-center py-2'>Don't have an account ? <Link className='text-secondary ' to="/auth/register">Register</Link></h3>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;