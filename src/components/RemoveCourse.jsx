import React, { useState } from 'react';
import axios from 'axios';
const RemoveCourse = () => {
    const [courseId, setCourseId] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleChange = (e) => {
        setCourseId(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.delete(`http://localhost:3000/admin/delete-course/${courseId}`);
            setSuccess(response.data.msg);
            setError('');
        } catch (err) {
            setError(err.response ? err.response.data : 'An error occurred');
            setSuccess('');
        }
    };
    return (
        <section className='bg-gray-200 min-h-screen flex items-center justify-center'>
            <div className="max-w-[1140px] mx-auto px-[12px] ">
                <div>
                    <h2 className=' font-Poppins  text-[32px] text-[#073E87] text-center font-bold pb-4'>Remove Course</h2>
                    <form onSubmit={handleSubmit} className='bg-white p-4 rounded-md'>
                        <div>
                            <label className='font-Poppins font-medium '>Course ID:-</label>
                            <input
                                type="text"
                                value={courseId}
                                onChange={handleChange}
                                required
                                className='border-[1px] border-black w-full rounded-md my-2 '
                            />
                        </div>
                        <button type="submit" className='w-full bg-red-600  py-1 rounded-md font-semibold  text-white  mt-2'>Remove Course</button>
                    </form>
                    {success && <p>{success}</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
        </section>
    );
};
export default RemoveCourse;
