import React from "react";


const LoginForm = ({ handleLogin }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogin();
      };
    
  return (
  
     <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" required /><br></br><br></br>
      <input type="password" placeholder="Password" required /><br></br><br></br>
      <button type="submit">Login</button>
    </form>
  
    );
};

export default LoginForm;
