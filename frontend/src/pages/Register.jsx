
import { useState } from 'react'
import './Register.css'

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert('Passwords do not match!')
            return
        }

        try {
            const response = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            })

            const data = await response.json()

            if (data.success) {
                alert('Registration successful!')
                window.location.href = '/login'
            } else {
                alert(data.message)
            }
        } catch (error) {
            alert('Could not connect to the server. Please try again.')
        }
    }

    return (
        <div className="register-page">
            <div className="register-card">
                <h1>Create Account</h1>
                <p>Join Snabel Alkhair School</p>

                <form onSubmit={handleSubmit}>
                    <label>Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

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
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                    />

                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        minLength={6}
                    />

                    <button type="submit">Create Account</button>
                </form>

                <p className="login-text">
                    Already have an account? <a href="/login">Login</a>
                </p>

                <a href="/" className="back-home">Back to Home</a>
            </div>
        </div>
    )
}

export default Register
