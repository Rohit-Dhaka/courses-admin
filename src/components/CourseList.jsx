import React, { useState, useEffect } from 'react';
import axios from 'axios';
const CourseList = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {        
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:3000/courses');
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };
        fetchCourses();
    }, []);
    const handleDelete = async (courseId) => {
        try {
            await axios.delete(`http://localhost:3000/admin/delete-course/${courseId}`);            
            setCourses(courses.filter(course => course.courseId !== courseId));
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    };
    return (
        <section className='bg-gray-200 min-h-screen flex items-center justify-center'>
            <div className="max-w-[1140px] mx-auto px-[12px] ">
                <div>                
                    <h2 className=' font-Poppins font-bold  text-[32px] text-[#073E87] text-center pb-3'>Course List</h2>
                    <ul className='flex gap-5 flex-wrap'>
                        {courses.map(course => (
                            <li key={course.courseId} className='bg-white p-3 rounded-lg max-w-[250px] w-full  flex flex-col justify-between flex-wrap '>
                                <div>
                                    <img src={course.img} alt={course.title} className='h-[150px] mx-auto w-auto' />
                                    <h2 className=' font-Poppins font-semibold uppercase '>{course.title}</h2>
                                    <p className='font-Poppins font-medium text-[14px]'>{course.description}</p>
                                    <p className=' font-Poppins font-medium '>Price: ${course.price}</p>
                                </div>
                                <button onClick={() => handleDelete(course.courseId)} className='text-white  mt-1 bg-red-600 py-1 w-full  rounded-md font-Poppins '>Delete Course</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
export default CourseList;