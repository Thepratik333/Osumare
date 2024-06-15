import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import undrawLogin from '../../assets/undrawLogin.png'
import lock from '../../assets/lock.png'

const Login = () => {
    const [Credentials, setCredentials] = useState({ email: "", password: "" });
   
    const onChange = (e) => {
        setCredentials({ ...Credentials, [e.target.name]: e.target.value });
    };
    return (
        <div className="min-h-[85vh] flex items-center justify-evenly bg-gray-100">
        <img src={lock} className='w-[600px]' alt="" />
            <div className="login-box bg-white rounded-lg shadow-md p-8 mr-20 max-w-3xl w-full md:w-96">
                <form className="login-form" >
                    <h1 className="text-2xl font-bold mb-4">Welcome Back</h1>
                    <p className="text-gray-700 mb-6">Please login to your account</p>
                    <div className="input-group mb-4">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={Credentials.email}
                            placeholder="Username"
                            onChange={onChange}
                            required
                            className="px-2 py-3 w-full border-2 rounded-md "
                        />
                    </div>
                    <div className="input-group mb-4">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={Credentials.password}
                            placeholder="Password"
                            onChange={onChange}
                            required
                            className="px-2 py-3 w-full border-2 rounded-md"
                        />
                    </div>
                    <button type="submit" className="bn632-hover bn24 w-full py-3 bg-gradient-to-r from-[#585de2] to-[#84859f] text-white font-bold rounded-lg shadow-md hover:from-purple-700 hover:to-red-600 transition duration-300">
                        Login
                    </button>
                    <div className="bottom-text mt-6 text-gray-700">
                        <p>Don't have an account? <Link to="/Signup" className="text-blue-500">Sign Up</Link></p>
                        <p><Link to="/" className="text-blue-500">Forgot password?</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
