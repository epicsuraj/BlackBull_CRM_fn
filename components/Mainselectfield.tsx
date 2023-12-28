import React from "react";

const Mainselectfield = (props: any) => {
  return (
    <div className="bg-[#EFF2F3]  pt-[5px] pb-[5px] rounded-md">
      <label className="text-[12px] block pl-[15px] text-[#57727E]">
        {props.label}
      </label>
      <select
        id={props.id}
        className="pl-[10px] bg-[#EFF2F3] outline-none w-[97%] h-[70%] text-[12px] text-[#8097A2]"
      >
        <option value={props.option}>{props.option}</option>
      </select>
    </div>
  );
};

export default Mainselectfield;
