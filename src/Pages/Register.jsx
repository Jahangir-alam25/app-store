import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';





const Register = () => {
const { createUser, setUser, updateUser,signInWithGoogle } = use(AuthContext);

    const provider = new GoogleAuthProvider();
     const navigate = useNavigate();



    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({ name, photo, email, password });
        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateUser({ displayName: name, photoURL: photo })
                .then(() => {
                  setUser({ ...user, displayName: name, photoURL: photo });
                  navigate("/");
                })
                .catch((error) => {
                  console.log(error);
                  setUser(user);
                });

              
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
              
            });

    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle(provider)
        .then((result) => {
            const user = result.user;
            navigate("/");
            console.log(user);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h3 className='font-bold text-2xl text-center'>Register Your Account</h3>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="name" />
                        {/* Photo url */}
                        <label className="label">Photo Url</label>
                        <input type="text" name='photo' className="input" placeholder="photo url" />
                        {/* Email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <label className="input validator">

                            <input
                                type="password"
                                name="password"
                                required
                                placeholder="Password"
                                minLength="8"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                            />
                        </label>
                        <p className="validator-hint hidden">
                            Must be more than 8 characters, including
                            <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                        </p>

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <div className="divider">OR</div>
                        <button onClick={handleSignInWithGoogle} type="button"  className="btn btn-outline btn-secondary">
                            <FcGoogle size={20}></FcGoogle>
                            Continue with Google
                        </button>
                        <h3 className='font-bold text-center py-2'>Already have an account ? <Link className='text-secondary ' to="/auth/login">Login</Link></h3>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;