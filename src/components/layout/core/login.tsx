// Agendamento.js
import React from 'react';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <br />
            <button type="submit">Login </button> 
        </form>
    </div>
        
        
        
    
  );
}

export default Login;