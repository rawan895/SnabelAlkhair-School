
import { useState } from 'react'
import './Login.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })

            const data = await response.json()

            if (data.success) {
                sessionStorage.setItem('loggedInUser', JSON.stringify({
                    name: data.name,
                    email: data.email,
                }))

                alert('Login successful!')
                window.location.href = '/'
            } else {
                alert(data.message)
            }
        } catch (error) {
            alert('Could not connect to the server. Please try again.')
        }
    }

    return (
        <div className="login-page">
            <div className="login-card">
                <h1>Welcome Back!</h1>
                <p>Login to Snabel Alkhair School</p>

                <form onSubmit={handleSubmit}>
                    <label>Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Login</button>
                </form>

                <p className="register-text">
                    Don't have an account? <a href="/register">Register</a>
                </p>

                <a href="/" className="back-home">Back to Home</a>
            </div>
        </div>
    )
}

export default Login
