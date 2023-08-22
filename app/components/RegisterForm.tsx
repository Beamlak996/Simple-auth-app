"use client";
import Link from "next/link";
import { useState, FormEvent } from 'react'
import { useRouter } from "next/navigation";

const RegisterFrom = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState("")

  const router = useRouter()

  const handleSubmit = async (e: FormEvent)=>{
    e.preventDefault()
    if(!name || !email || !password){
      setError("Please enter all fields")
      return
    }
    try {

      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email})
      });

      const { user } = await resUserExists.json()
      if(user){
        setError("User already exists")
        return 
      }

      const res = await fetch('api/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password,
        })
      })
      if(res.ok){
        router.push("/")
        setName('')
        setEmail('')
        setPassword('')
      } else{
        console.log("Error")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='grid place-items-center h-screen bg-neutral-50'>
      <div className='shadow-lg rounded-lg p-5 border-t-4 border-black flex justify-start flex-col bg-white'>
        <h1 className='font-semibold text-xl border-b-[1px]'>Sign In</h1>
        {/* Register Form*/}
        <form onSubmit={handleSubmit} className='flex flex-col w-full gap-4 my-6'>
          {/* Error message */}
          {error && (
            <div className='bg-rose-500 w-full text-white px-2 py-2 rounded-md my-2 text-sm'>
              {error}
            </div>
          )}
          <div className='flex flex-col justify-start gap-2'>
            <label
              htmlFor='name'
              className='font-semibold text-md text-neutral-700'
            >
              Username
            </label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Full Name'
              className='border-2 px-4 py-2 border-neutral-300 rounded-sm outline-none focus:border-neutral-700 bg-zinc-100/4 shadow-sm w-[400px]'
            />
          </div>
          <div className='flex flex-col justify-start gap-2'>
            <label
              htmlFor='email'
              className='font-semibold text-md text-neutral-700'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              className='border-2 px-4 py-2 border-neutral-300 rounded-sm outline-none focus:border-neutral-700 bg-zinc-100/4 shadow-sm w-[400px]'
            />
          </div>
          <div className='flex flex-col justify-start gap-2 my-2'>
            <label
              htmlFor='password'
              className='font-semibold text-md text-neutral-700'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              className={`border-2 px-4 py-2 border-neutral-300 rounded-sm outline-none focus:border-neutral-700 bg-zinc-100/4 shadow-smw-[400px] `}
            />
          </div>
        <button type="submit" className={`w-full text-center bg-white border-2 border-black font-semibold px-6 py-2 rounded-md text-black transition hover:bg-black hover:text-white`}>
          Register
        </button>
        </form>
        <Link href='/' className='mt-3 text-center'>
          Already have an account?{" "}
          <span className='hover:underline'>Login</span>
        </Link>
      </div>
    </div>
  );
};

export default RegisterFrom;
