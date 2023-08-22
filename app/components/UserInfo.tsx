"use client"

const UserInfo = () => {
  return (
    <div className='grid place-items-center h-screen bg-neutral-50'>
      <div className='border-t-4 border-black rounded-lg shadow p-5 shadow-lg flex flex-col justify-start gap-3 bg-white'>
        <h1 className='font-bold text-xl border-b-[1px]'>User Information</h1>
        {/* Information */}
        <div className='flex mt items-center mt-2'>
          <h1 className='text-start'>Name:</h1>
          <div className='ml-2 py-[2px] font-semibold'>Beamlak</div>
        </div>
        {/* Information */}
        <div className='flex mt items-center'>
          <h1 className='text-start'>Email:</h1>
          <div className='ml-2 py-[2px] font-semibold'>Beamlak@gmail.com</div>
        </div>
        <button className='w-full text-center bg-white border-2 border-black font-semibold px-6 py-2 rounded-md text-black transition hover:bg-black hover:text-white mt-2'>
          Logout
        </button>
      </div>
    </div>
  );
}

export default UserInfo
