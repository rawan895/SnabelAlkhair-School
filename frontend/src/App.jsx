
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css'
import './index.css'

function Home() {
  const [user, setUser] = useState(() => {
    const savedUser = sessionStorage.getItem('loggedInUser')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const handleLogout = () => {
    sessionStorage.removeItem('loggedInUser')
    setUser(null)
    alert('You have logged out successfully!')
  }

  return (
    <>
      <header>
        <nav className="container">
          <a href="/" className="logo">
            <img
              src="/images/images-removebg-preview-removebg-preview.png"
              alt="Snabel Alkhair Logo"
            />
          </a>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Sections</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Our Blog</a></li>
          </ul>

          {user ? (
            <div>
              <span>Welcome, {user.name} </span>
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn">Login</Link>
          )}
        </nav>
      </header>

      <main className="hero container">
        <div className="hero-wrapper">
          <div className="text">
            <h1>
              Welcome To
              <br />
              <span>Snabel Alkhair School</span>
            </h1>

            <p>
              Welcome to Snabel Alkhair School. We provide a
              supportive educational environment where students
              can learn, grow, and build a bright future.
            </p>

            <a href="#">Contact Us</a>
          </div>

          <div className="images">
            <img className="one" src="/images/imges1.jpg" alt="School" />
            <img className="two" src="/images/images2.jpg" alt="Students" />
            <img className="three" src="/images/imges3.jpg" alt="Education" />
          </div>
        </div>
      </main>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
