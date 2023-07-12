"use client"

import { useState } from "react"

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit =  async(e) =>{
        e.preventDefault();

        let data = await fetch("/api/user/login",{
            method:"POST",
            body:JSON.stringify({email, password}),
            header:{
                "Content-Type":"application/json"
            }
        })

        data = await data.json();

        alert((data.message) || (data.error));

    }
  return (
    <div className="bg-white border p-5">
                <h1>Login Here</h1>
                <form method="post" onSubmit={handleSubmit}>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email'  className="border px-3 py-2" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password'  className="border px-3 py-2" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <input type="submit" value="Login" className="bg-teal-600 text-white px-3 py-2 w-full" />
                    </div>
                </form>
            </div>
  )
}

export default LoginForm