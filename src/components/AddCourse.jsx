import React, { useState } from 'react';
import axios from 'axios';
const AddCourse = () => {
    const [course, setCourse] = useState({
        courseId: '',
        img: '',
        title: '',
        description: '',
        price: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse({
            ...course,
            [name]: value
        });
        
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/admin/add-course', course);
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
                    <h2 className=' font-Poppins  text-[32px] text-[#073E87] text-center font-bold pb-4'>Add Course</h2>
                    <form onSubmit={handleSubmit} className='bg-white  p-4 rounded-lg '>
                        <div>
                            <label className='font-Poppins  font-medium '>Course ID :-</label>
                            <input
                                type="text"
                                name="courseId"
                                value={course.courseId}
                                onChange={handleChange}
                                required
                                className='w-full border-[1px]  border-black rounded-md mt-1 '
                            />
                        </div>
                        <div  className='mt-2'>
                            <label  className='font-Poppins  font-medium '>Image URL</label>
                            <input
                                type="text"
                                name="img"
                                value={course.img}
                                onChange={handleChange}
                                required
                                className='w-full border-[1px]  border-black rounded-md '
                            />
                        </div>
                        <div className='mt-2'>
                            <label  className='font-Poppins  font-medium '>Title</label>
                            <input
                                type="text"
                                name="title"
                                value={course.title}
                                onChange={handleChange}
                                className='w-full border-[1px]  border-black rounded-md '
                                required
                            />
                        </div>
                        <div className='mt-2'>
                            <label  className='font-Poppins  font-medium '>Description</label>
                            <textarea
                                name="description"
                                value={course.description}
                                onChange={handleChange}
                                className='w-full border-[1px]  border-black rounded-md '
                                required
                            />
                        </div>
                        <div className='mt-2'>
                            <label  className='font-Poppins  font-medium '>Price</label>
                            <input
                                type="number"
                                name="price"
                                value={course.price}
                                onChange={handleChange}
                                className='w-full border-[1px]  border-black rounded-md '
                                required
                            />
                        </div>
                        <button className='bg-[#073E87] py-1 text-white font-Poppins rounded-md  w-full mt-2' type="submit">Add Course</button>
                    </form>
                    {success && <p>{success}</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
        </section>
    );
};
export default AddCourse;
