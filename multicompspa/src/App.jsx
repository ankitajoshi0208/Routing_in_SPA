import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import profilePic from './ankitapic.PNG';

function Profile() {
  return (
    <div className="main-content">
      <div className="card">
        <h1>Ankita Joshi</h1>

        <h3 className="tagline">
          Software Developer | Tech Enthusiast | Lifelong Learner
        </h3>

        <p className="summary">
          Passionate about building innovative solutions and learning new
          technologies. Interested in full-stack development and AI-based
          applications.
        </p>

        <div className="profile-pic">
         <img src={profilePic} alt="Ankita Joshi" />
        </div>

        <h2>Projects</h2>
        <ul className="project-list">
          <li>Personal Portfolio Website</li>
          <li>Gesture Detection Application</li>
          <li>BlogSphere (RBAC Application)</li>
        </ul>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="main-content">
      <div className="card">
        <h2>Skills</h2>

        <div className="skills-container">
          <div className="skill-card">Java</div>
          <div className="skill-card">React</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">SQL</div>
          <div className="skill-card">Machine Learning</div>
          <div className="skill-card">Data Structures</div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <Link className="nav-link" to="/">Profile</Link>
        <Link className="nav-link" to="/Dashboard">Dashboard</Link>
      </div>

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
