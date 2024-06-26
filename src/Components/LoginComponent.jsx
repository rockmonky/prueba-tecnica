import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/LoginStyle.css'


export default function LoginComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario
        // Verifica si alguno de los campos está vacío
        if (!email.trim() || !password.trim()) {
            return; // Detiene la función aquí si alguno de los campos está vacío
        }
        localStorage.setItem('userCredentials', JSON.stringify({ email, password }));
        // Aquí puedes añadir más lógica de validación o autenticación
        navigate('/home'); // Navega a la siguiente pantalla si la validación es exitosa
    };

    return (
        <div className="login bg-slate-500">
            <form className="login__form" onSubmit={handleLogin}>
                <h1 className="login__title">Login</h1>
                <div className="login__content">
                    <div className="login__box">
                        <i className="ri-user-3-line login__icon"></i>
                        <div className="login__box-input">
                            <input type="email" required className="login__input" id="login-email" placeholder=" " value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="login-email" className="login__label">Email</label>
                        </div>
                    </div>
                    <div className="login__box">
                        <i className="ri-lock-2-line login__icon"></i>
                        <div className="login__box-input">
                            <input type="password" required className="login__input" id="login-pass" placeholder=" " value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="login-pass" className="login__label">Password</label>
                        </div>
                    </div>
                </div>
                <div className="login__check">
                    <div className="login__check-group">
                        <input type="checkbox" className="login__check-input" id="login-check" />
                        <label htmlFor="login-check" className="login__check-label">Remember me</label>
                    </div>
                    <a href="#" className="login__forgot">Forgot Password?</a>
                </div>
                <button type="submit" className="login__button">Login</button>
                <p className="login__register">
                    Don't have an account? <a href="#">Register</a>
                </p>
            </form>
        </div>
    );
}