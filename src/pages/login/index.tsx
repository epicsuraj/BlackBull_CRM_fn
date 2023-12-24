import React from "react";
import Checkbox from "@/components/Checkbox";
// import {useLogin} from '../../network-request/mutation';
// import { toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
import InputField from "@/components/InputField";
import Image from "next/image";
import Button from "@/components/Button";

const Login = () => {
  // const {mutate}=useLogin();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log("e", { e });
    // mutate(
    //   {email,password},
    //    {
    //     onSuccess: (data:any) => {
    //        if (data.success) {
    //         toast.success("Login Successfully");
    //         console.log("data",{data});
    //         setTimeout(() => {
    //           window.location.href = "/dashboard";
    //         }, 2000);
    //     } else {

    //       toast.error(data.message || "Login Failed");
    //     }

    //     },
    //     onError: (data:any) => {
    //       toast.error(data?.response?.data?.message || "Something Went Wrong");
    //     },
    //   });
  };

  return (
    <>
      <div>
        <div className=" pt-4 pl-6 absolute">
          <Image src="/logo.png" alt="logo" width={150} height={150} />
        </div>
        <div className="grid grid-cols-2 items-center">
          <form onSubmit={handleLogin} method="POST">
            <div className="max-w-[440px] ml-auto mr-auto text-center pt-10">
              <h1 className="font-bold text-3xl tracking-wide">
                New User Login
              </h1>
              <p className="mt-2">
                Sign in using your email and temporary password to set up your
                account.
              </p>
              <div className="flex flex-col mt-11">
                <InputField
                  type="text"
                  placeholder="Email address"
                  className="bg-cool-gray"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name={""}
                  id={""}
                  src="/mail.svg"
                  alt="mail"
                  svgWidth={16}
                  svgHeight={16}
                />

                <InputField
                  type="password"
                  placeholder="password"
                  className="bg-cool-gray"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name={""}
                  id={""}
                  src="/lock.svg"
                  alt="lock"
                  svgWidth={16}
                  svgHeight={16}
                />
                <p className="text-right text-[#0F172A] font-semibold text-sm ">
                  <span className="cursor-pointer">Forgot Password?</span>
                </p>
              </div>
              <div>
                <Checkbox content="Remember Me" />
              </div>

              <div className="mt-8 mb-4">
                <Button
                  text="Proceed to Change Password"
                  className="rounded-[30px]"
                />
              </div>
              {/* <div>
                <span className="text-[#737373] text-sm mt-10 font-medium">
                  Already joined?{" "}
                  <b className="text-black font-medium">Login now</b>
                </span>
              </div> */}
            </div>
          </form>
          <div className="flex justify-center">
            <Image
              src="/Background.png"
              alt="logo"
              width={700}
              height={700}
              className="w-full h-screen"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;

const Qualities = [
  {
    heading: "Efficiency Unleashed.",
    content:
      "Optimize operations with streamlined logistics solutions tailored to your business needs.",
  },
  {
    heading: "24/7 Support & Assurance",
    content:
      "Round-the-clock assistance and peace of mind for smooth logistics, always at your service.",
  },
  {
    heading: "Global Reach, Local Touch",
    content:
      "Seamlessly connect to a world of logistics possibilities while experiencing personalized, local support.",
  },
];
