import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const navigat = useNavigate();
    const homePageBtn = () => {
        navigat('/')
    }

    const [open, setOpen] = useState(false);


   const isOpen = ()=>{
     setOpen(!open)
   }
    console.log(open);
    return (
      <div className='bg-yellow-400'>
          <div className='flex items-center justify-between  py-3'>
            <div className='flex items-center ml-8 z-10' >
                <img src="https://mobirise.com/extensions/grocerym4/half/assets/images/logo.png" alt="" />
                <h1 className='text-white font-bold ml-3 text-2xl'>Safe-Food-Mart</h1>
            </div>
            <div className={`flex flex-col w-full lg:w-1/3 text-center duration-500  ease-in py-8 lg:py-0 lg:justify-end lg:mr-8 bg-yellow-400 z-0 absolute  md:flex-row md:static gap-4 text-lg font-semibold ${open?'top-20':"top-[-180px]"} text-white`}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/shop'>Shop</NavLink>
                <NavLink to='/checklist'>Check List</NavLink>
            </div>
            <div onClick={isOpen} className='h-10 w-10 text-white md:hidden z-10 mx-3'>
              {
               open ? <XMarkIcon/> : <Bars3Icon/> 
              }
            </div>
        </div>
      </div>
    );
};

export default Header;