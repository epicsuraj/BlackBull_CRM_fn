import React from 'react'

const Progressbar = () => {
  return (
 <>
    <h4 className='text-[#607D8B] text-[12px] font-semibold'>Your progress</h4>
    <div className='flex justify-between items-center'>
      <h5 className='text-[#032272] text-[16px] font-bold'>80% to complete</h5>
      <p className='text-[#8097A2] text-[15px] flex gap-1 items-center'>
       <span><img src="/clock.png" alt="" /></span>
       20min
      </p>
    </div>
    <div className='border-solid border-2 rounded-xl bg-[#EFF2F3] mt-2'>
       <div className='border-solid border-2 rounded-xl bg-[#032272] p-[6px] w-[230px]'>
       </div>
     <div>

     </div>
    </div>
 </>
  )
}

export default Progressbar