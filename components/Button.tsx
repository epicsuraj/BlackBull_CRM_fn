import Image from "next/image";
import React from "react";

const Button = (props: any) => {
  return (
    <div>
      <button
        type="submit"
        className={`flex items-center gap-2 text-white rounded-md p-2 w-full ${props.visible? "bg-[#032272]": "bg-[#818692]"} bg-[#032272] ${props.className}`}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.text}
        {props.dropDownIcon ? (
          <Image src="/arrow-down.svg" alt="dropdown" width={16} height={16} />
        ) : (
          ""
        )}
      </button>
    </div>
  );
};

export default Button;
