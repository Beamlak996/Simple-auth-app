"use client";
import Link from "next/link";


const LoginFrom = () => {
  return (
    <div className='grid place-items-center h-screen'>
      <div className='shadow-lg rounded-lg p-5 border-t-4 border-black flex justify-start flex-col'>
        <h1 className='font-semibold text-xl border-b-[1px]'>Sign In</h1>
        <form className='flex flex-col w-full gap-4 my-6'>
        <div className="bg-rose-500 w-full text-white px-2 py-2 rounded-md my-2 text-sm" >Error message</div>
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
              placeholder='Password'
              className='border-2 px-4 py-2 border-neutral-300 rounded-sm outline-none focus:border-neutral-700 bg-zinc-100/4 shadow-smw-[400px]'
            />
          </div>
        </form>
        <button className='w-full text-center bg-white border-2 border-black font-semibold px-6 py-2 rounded-md text-black transition hover:bg-black hover:text-white '>
          Login
        </button>
        <Link href="/register" className="mt-3 text-center">
            Don't have an account? <span className="hover:underline">Register</span>
        </Link>
      </div>
    </div>
  );
};

export default LoginFrom;
