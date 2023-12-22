import React from 'react'
import Checkbox from '@/components/Checkbox';
import {useLogin} from '../../network-request/mutation';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import InputField from '@/components/InputField';


const Login = () => {
  const {mutate}=useLogin();
  const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleLogin =(e:any)=>{
      e.preventDefault();
      console.log("e",{e});
      mutate(
        {email,password},
         {
          onSuccess: (data:any) => {
             if (data.success) {
              toast.success("Login Successfully");
              console.log("data",{data});
              setTimeout(() => {
                window.location.href = "/dashboard";
              }, 2000);
          } else {
         
            toast.error(data.message || "Login Failed");
          }
           
          },
          onError: (data:any) => {
            toast.error(data?.response?.data?.message || "Something Went Wrong");
          },
        });
  }
  return (
    <>
      <div className="p-[55px]">
        <div className="grid grid-cols-2">
          <form onSubmit={handleLogin} method="POST">
          <div className="max-w-[440px] ml-auto mr-auto text-center pt-10">
          <div className="flex justify-center pb-12">
          <img src="/logo.png" alt="logo" />
        </div>
            <h1 className="font-semibold text-2xl tracking-wide">
              Join Black Bull
            </h1>
            <p className="mt-2">
              Take the first step towards seamless logistics solutions.
            </p>
            <div className="flex flex-col mt-11">
              <InputField type="text" placeholder="Email address" className="bg-[#F7F8F9]"
                value={email}
                onChange={(e) => setEmail(e.target.value)} name={''} id={''}/>

              <InputField type="text" placeholder="Password" className="bg-[#F7F8F9] " value={password}
                onChange={(e) => setPassword(e.target.value)} name={''} id={''}/>
            </div>
            <div>
              <Checkbox
              />
            </div>
            
              <div className="mt-8 mb-4">
                <button type='submit' className="font-semibold "/>
              </div>
              <div>
                <span className="text-[#737373] text-sm mt-10 font-medium">Already joined? <b className="text-black font-medium">Login now</b></span>
              </div>
           
          </div>
          </form>
          <div className="flex justify-center">
            {/* <h2 className="text-3xl font-semibold">
              Unlock Your Logistics Success with BlackBull: Join Today and Soar
              Higher!
            </h2>
            <div className="my-8">
              <img src="/cutter.png" alt="lines" />
            </div>
            <div>
              {Qualities.map((value, index) => {
                return (
                  <div className="flex gap-2 my-4 text-[18px]">
                    <img src="/check.svg" alt="check" width={22} height={22} />
                    <div>
                      <b>{value.heading}</b> <span>{value.content}</span>
                    </div>
                  </div>
                );
              })}
            </div> */}
            <img src="/1.png" alt="" style={{width:"60%"}}/>
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

