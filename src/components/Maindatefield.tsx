import React from 'react'
import CalendarIcon from './svg/CalendarIcon'


const Maindatefield = (props:any) => {
  return (
    <div className="bg-[#EFF2F3] w-[300px] pt-[6px] pb-[6px] rounded-md pl-[20px] relative">
    <label className="text-[12px] block pl-[15px] text-[#57727E]" htmlFor='cal'>
      {props.label}
    </label>
 <span className='absolute top-[16px] left-[4px]'><CalendarIcon /></span>
    <input
      type="date"
      id="cal"
      className="pl-[15px] bg-[#EFF2F3] outline-none  placeholder:text-[12px] text-[12px] font-medium "
      placeholder={props.placeholder}
    />
  </div>
  )
}

export default Maindatefield