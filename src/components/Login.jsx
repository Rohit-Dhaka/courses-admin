import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/admin/login', {
                email,
                password
            });
            setMessage(res.data.msg);
            localStorage.setItem('token', res.data.token);
            setEmail('');
            setPassword('');
        } catch (error) {
            setMessage('Error logging in: ' + (error.response?.data?.message || error.message));
        }
    };
    return (
        <section className='bg-gray-200 min-h-screen flex items-center justify-center'>
            <div className="max-w-[1140px] mx-auto px-[12px] ">

                <div className='bg-white max-w-[450px] w-full  rounded-lg shadow-lg py-[24px] px-[12px] '>
                    <h2 className=' font-Poppins  text-[32px] text-[#073E87]'>Welcome Back</h2>
                    <form onSubmit={handleSubmit}>

                        <div className='flex flex-col pt-2'>
                            <label className='font-Poppins font-medium  '>Email:</label>
                            <input className='border-[2px] border-[#747D8C] rounded-md p-1' type="email" value={email} placeholder='Enter your email...' onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className='flex flex-col pt-2'>
                            <label className='font-Poppins font-medium  '>Password:</label>
                            <input className='border-[2px] border-[#747D8C] rounded-md p-1' type="password" value={password} placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button type="submit" className='py-2 bg-[#073E87] text-white font-medium w-full rounded-md  mt-7  '>Login</button>
                        {message && <p>{message}</p>}
                        <h6 className='font-Poppins font-medium text-[#747D8C] pt-2'>i have an account<Link to='/signup' className='text-[#073E87] font-semibold'> Signup</Link></h6>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
