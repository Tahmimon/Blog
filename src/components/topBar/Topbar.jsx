import React from 'react'

const Topbar = () => {
  return (
    <>
        <div className="w-full h-12 bg-white-500 sticky top-0 flex items-center font-display">
            <div className="w-1/5 flex gap-3 items-center justify-center text-gray-300">
            <i class="fa-brands fa-square-facebook text-3xl cursor-pointer"></i>
            <i class="fa-brands fa-square-twitter text-3xl cursor-pointer"></i>
            <i class="fa-brands fa-square-pinterest text-3xl cursor-pointer"></i>
            <i class="fa-brands fa-square-instagram text-3xl cursor-pointer"></i>
            </div>
            <div className="w-3/5 flex justify-center list-none">
                <li className='cursor-pointer text-xl font-light mr-5 ml-10'>HOME</li>
                <li className='cursor-pointer text-xl font-light mr-5'>CONTACT</li>
                <li className='cursor-pointer text-xl font-light mr-5'>ABOUT</li>
                <li className='cursor-pointer text-xl font-light mr-5'>WRITE</li>
                <li className='cursor-pointer text-xl font-light mr-5'>LOGOUT</li>
            </div>
            <div className="w-1/5 flex gap-3 items-center justify-center">
                <img className="w-10 h-10 rounded-full object-cover cursor-pointer" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile-avatar" />
                <i class="fa-solid fa-magnifying-glass text-2xl text-gray-300 cursor-pointer"></i>
            </div>
        </div>
        
    </>
    
  )
}

export default Topbar