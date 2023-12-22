import React from 'react'
import DropdownIcon from './svg/DropdownIcon'


const Header = () => {
  return (
    <React.Fragment>
    <header className="p-4 top-0 fixed bg-white w-[80%] left-[300px]">
      <div className='flex items-center	justify-end gap-5'>
     <img src="/notifications.png" alt="" className='h-5'/>
     <div className='flex items-center gap-1'>
     <span className='border-2 pt-[4px] pb-[4px] pl-[8px] pr-[8px] rounded-full bg-[#E9EFFF] text-xs'>R</span> 
     <span><DropdownIcon />
     </span>
     </div>
      </div>
    </header>
      </React.Fragment>
  )
}

export default Header