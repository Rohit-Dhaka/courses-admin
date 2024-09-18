import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddCourse from './components/AddCourse';
import CourseList from './components/CourseList';
import Login from './components/Login';
import Signup from './components/Signup';
// import RemoveCourse from './components/RemoveCourse';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />   
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/courses" element={<CourseList />} />
        {/* <Route path="/remove-course" element={<RemoveCourse />} /> */}
      </Routes>
    </>
  );
}

export default App;