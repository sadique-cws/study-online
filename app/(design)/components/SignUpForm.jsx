"use client"

import { useState } from "react"

const SignUpForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit =  async(e) =>{
        e.preventDefault();

        let data = await fetch("/api/user/signup",{
            method:"POST",
            body:JSON.stringify({name,email, contact, password}),
            header:{
                "Content-Type":"application/json"
            }
        })

        data = await data.json();

        alert((data.message) || (data.error));

    }
  return (
    <div className="bg-white border p-5">
                <h1>Create account Here</h1>
                <form method="post" onSubmit={handleSubmit}>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name'  className="border px-3 py-2" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email'  className="border px-3 py-2" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="contact">contact</label>
                        <input type="text" name='contact'  className="border px-3 py-2" placeholder='Enter your contact' value={contact} onChange={(e) => setContact(e.target.value)} />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password'  className="border px-3 py-2" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <input type="submit" value="Create an Account" className="bg-teal-600 text-white px-3 py-2 w-full" />
                    </div>
                </form>
            </div>
  )
}

export default SignUpForm