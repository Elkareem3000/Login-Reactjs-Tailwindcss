import { useState } from 'react'
import './App.css'

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <>
      <section id="center">
    
        <div className="bg-white w-96 h-96 rounded-lg shadow-lg p-8 m-10">
        
        <form className="grid grid-flow-row bg-red" >
          <label htmlFor="email">Email:</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='enter email' required className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='enter password' required className="mb-5 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" id="password" name="password" />
          <button onClick={(e) => loginUser(e, email, password)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" type="submit" >Login</button>
        </form>        
        </div>
       
      </section>


   
    </>
  )
}

const loginUser =(e,email,password) =>{
  e.prevenDefault()
  if(email === 'admin@example.com' && password === 'admin123') {
     console.log('Login successful');
  }else{
    console.log('Invalid email or password');
  }
}


export default App
