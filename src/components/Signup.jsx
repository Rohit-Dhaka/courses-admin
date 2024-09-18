import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/admin/signup', {
                name,
                email,
                password
            });
            setMessage(res.data.msg);             
            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            setMessage('Error signing up: ' + error.response?.data?.message || error.message);
        }
    };
    return (
        <section className='bg-gray-200 min-h-screen flex items-center justify-center'>
            <div className='bg-white max-w-[450px]  rounded-lg shadow-lg py-[24px] px-[12px] '>
                <form onSubmit={handleSubmit}>
                    <h2 className=' font-Poppins  text-[32px] text-[#073E87]'>Welcome to Elmohandes</h2>
                    <h6 className='font-Poppins font-medium text-[#747D8C] '>Start learing and create your account</h6>
                    <div className='flex flex-col pt-2'>
                        <label className='font-Poppins font-medium  '>Name:</label>
                        <input className='border-[2px] border-[#747D8C] rounded-md p-1' placeholder='Enter your name...' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className='flex flex-col pt-2'>
                        <label className='font-Poppins font-medium  '>Email:</label>
                        <input className='border-[2px] border-[#747D8C] rounded-md p-1' type="email" value={email} placeholder='Enter your email...' onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='flex flex-col pt-2'>
                        <label className='font-Poppins font-medium  '>Password:</label>
                        <input className='border-[2px] border-[#747D8C] rounded-md p-1' type="password" value={password} placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} required />
                    </div>                  
                    {message && <p>{message}</p>}
                    <button type="submit" className='py-2 bg-[#073E87] text-white font-medium w-full rounded-md  mt-7  '>Sign Up</button>                    
                    <h6 className='font-Poppins font-medium text-[#747D8C] pt-2'>Already have an account<Link to='/login' className='text-[#073E87] font-semibold'> Login</Link></h6>
                </form>
            </div>
        </section>
    );
};
export default Signup;
