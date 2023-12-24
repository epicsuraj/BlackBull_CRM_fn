import React from "react";

const Button = (props: any) => {
  return (
    <div className="mt-4">
      <button
        type="submit"
        className={` text-white rounded-md p-2 w-full bg-[#032272] ${props.className}`}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
