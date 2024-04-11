import './Login.css';
import { useState } from 'react';

const Login = () => {
    //Login Form
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    //LoginFunction
    const handleLogin = () => {
        //처리
        if(username == 'ID' && password == 'PW') {
            
        } else {
            alert('Login Failed')
        }

    };
    return (
        <div className='Login'>
            <div className='login-container'>
                <h2 className='title-box'>Login</h2>
                <form className='form-control'>
                    <label>Identification</label>
                    <input 
                        type='text'
                        placeholder='Enter your ID'
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <label>Password</label>
                    <input 
                        type='password'
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />                    
                    <button type='button' onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    );
};
export default Login;