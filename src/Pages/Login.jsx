import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Login = () => {

    const { signIn, signInWithGoogle, setUser } = use(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
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
            setUser(user);
            toast.success("Login Successfully")
        }).catch((error) => {
            toast.error(`${error.message}`)
        })
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle(provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(`${location.state ? location.state : "/"}`);

                toast.success("Login Successfully")

            })
            .catch((error) => {
                toast.error(`${error.message}`)
            })
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Helmet>
                <title>Login - AppStore</title>
            </Helmet>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h3 className='font-bold text-2xl text-center'>Login Your Account</h3>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <label className="input validator relative">

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                placeholder="Password"
                                minLength="6"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
                            />
                            <div
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </label>
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