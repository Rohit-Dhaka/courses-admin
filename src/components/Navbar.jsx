import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <section>
            <div className="max-w-[1140px] mx-auto px-[12px]">
                <nav className="flex justify-between items-center py-4">
                    <div className="font-Poppins font-bold text-[#073E87] text-[24px]">Logo</div>
                    <div className="menu flex items-center gap-4">
                        <ul className='flex  gap-4'>
                            <li><Link to='/add-course' className='font-Poppins font-medium text-[18px] '>Addcourse</Link></li>
                            <li><Link to='/courses' className='font-Poppins font-medium text-[18px] '>CourseList</Link></li>
                            {/* <li><Link to='/remove-course' className='font-Poppins font-medium text-[18px] '>RemoveCours</Link></li> */}
                        </ul>                        
                        <Link to='/login' className='text-white font-Poppins bg-[#073E87] rounded-[20px]  py-3 px-5'>Login</Link>
                    </div>
                </nav>
            </div>
        </section>
    )
}
export default Navbar