import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Maininputfield from "./Maininputfield";
import DropdownIcon from "./svg/DropdownIcon";
import Mainselectfield from "./Mainselectfield";
import Maindatefield from "./Maindatefield";
import Maintable from "./Maintable";
import CloseIcon from "./svg/CloseIcon";
import Progressbar from "./Progressbar";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link: any) => {
    setActiveLink(link);
  };

  return (
    <>
      <aside className="text-black flex items-baseline">
        <nav className="bg-white text-black p-4 w-[300px]">
          <img src="/Frame.png" alt="" className="mainlogo" />
          <ul className="list-none p-6 mb-4 mt-8">
            <li
              className="flex items-center justify-between mb-6"
              onClick={() => handleLinkClick("home")}
            >
              <div className="flex gap-2 cursor-pointer">
                <span>
                  <img src="/category.png" alt="" />
                </span>
                <span>Dashboard</span>
              </div>
            </li>
            <li
              className="mb-6 flex items-center justify-between"
              onClick={() => handleLinkClick("about")}
            >
              <div className="flex gap-2 cursor-pointer">
                <span>
                  <img src="/calendar.png" alt="" />
                </span>
                <span>Bookings</span>
              </div>
              <span>
                <DropdownIcon />
              </span>
            </li>
            <li
              className="mb-6 flex items-center justify-between"
              onClick={() => handleLinkClick("account")}
            >
              <div className="flex gap-2 cursor-pointer">
                <span>
                  <img src="/bank.png" alt="" />
                </span>
                <span>Accounts</span>
              </div>
              <span>
                <DropdownIcon />
              </span>
            </li>
            <li
              className="mb-6 flex items-center justify-between"
              onClick={() => handleLinkClick("compliances")}
            >
              <div className="flex gap-2 cursor-pointer">
                <span>
                  <img src="/note.png" alt="" />
                </span>
                <span>Compliances</span>
              </div>
            </li>
            <li
              className="mb-6 flex items-center justify-between"
              onClick={() => handleLinkClick("usermanagement")}
            >
              <div className="flex gap-2 cursor-pointer">
                <span>
                  <img src="/profile.png" alt="" />
                </span>
                <span>User Management</span>
              </div>
              <span>
                <DropdownIcon />
              </span>
            </li>
            <li
              className="mb-6 flex items-center justify-between"
              onClick={() => handleLinkClick("personalcard")}
            >
              <div className="flex gap-2 cursor-pointer">
                <span>
                  <img src="/personalcard.png" alt="" />
                </span>
                <span>Onboarding</span>
              </div>
              <span>
                <DropdownIcon />
              </span>
            </li>
          </ul>
        </nav>
        <div className="content flex-grow ml-4 mt-12">
          {activeLink === "home" && (
            <div>
              <h2 className="text-xl font-bold mb-2 border-solid border-2 w-[1150px] p-4 rounded-xl bg-white">
                New User
              </h2>
              <div className="border-2 border-solid p-6 rounded-xl bg-white ">
                <Checkbox id="terms" bold="Mark as Admin" />
                <h3 className="text-[20px] pt-8 font-medium pb-4">
                  Personal Information
                </h3>
                <div className="grid grid-cols-3 w-[270px] gap-[330px]">
                  <Maininputfield
                    label="First Name"
                    placeholder="Placeholder"
                  />
                  <Maininputfield label="Last Name" placeholder="Placeholder" />
                  <Maininputfield label="Mobile" placeholder="Placeholder" />
                </div>
                <div className="grid gap-[330px] mt-6">
                  <Maininputfield label="Email" placeholder="Placeholder" />
                </div>
                <h3 className="text-[20px] pt-8 font-medium pb-4">
                  Address Information
                </h3>
                <div className="grid grid-cols-3 w-[270px] gap-[330px]">
                  <Maininputfield
                    label="State/Country"
                    placeholder="Placeholder"
                  />
                  <Maininputfield label="Street" placeholder="Placeholder" />
                  <Maininputfield
                    label="Suburb & Post Code"
                    placeholder="Placeholder"
                  />
                </div>
                <h3 className="text-[20px] pt-8 font-medium pb-4">
                  Employment Details
                </h3>
                <div className="grid grid-cols-3 w-[270px] gap-[330px]">
                  <Maininputfield
                    label="Designation"
                    placeholder="Placeholder"
                  />
                  <Maininputfield
                    label="Employee ID"
                    placeholder="Placeholder"
                  />
                  <Maininputfield label="Timezone" placeholder="Placeholder" />
                </div>
                <div className="grid grid-cols-3 w-[270px] gap-[330px] mt-[18px]">
                  <Maininputfield label="Language" placeholder="Placeholder" />
                  <Maininputfield label="Region" placeholder="Placeholder" />
                  <Maininputfield
                    label="Level of Access"
                    placeholder="Placeholder"
                  />
                </div>
                <h3 className="text-[20px] pt-8 font-medium pb-4">
                  User Permissions
                </h3>

                <div className="flex justify-end gap-14 items-baseline mt-8">
                  <button className="size-[16px] font-medium">Cancel</button>
                  <button className="bg-[#032272] rounded-md pt-[6px] pb-[32px] pl-[40px] pr-[85px] text-white size-[16px]">
                    Create
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeLink === "about" && (
            <div>
              <div className="border-solid border-2 w-[1150px] p-4 rounded-xl bg-white flex items-baseline justify-between mb-4">
                <h2 className="text-xl font-bold mb-2">Create Vehicle</h2>
                <span className="border-solid border-2 bg-[#CED7DB] p-2 rounded-3xl">
                  <CloseIcon />
                </span>
              </div>
              <div className="border-2 border-solid p-6 rounded-xl bg-white ">
                <Progressbar />
                <h3 className="text-[20px] pt-8 font-medium pb-4">
                  Vehicle Information
                </h3>
                <div className="grid grid-cols-3 w-[270px] gap-[330px]">
                  <Maininputfield
                    label="Registration Number"
                    placeholder="Placeholder"
                  />
                  <Maindatefield
                    label="Registration Expiry"
                    placeholder="Placeholder"
                  />
                  <Maininputfield label="VIN No." placeholder="Placeholder" />
                </div>
                <div className="grid grid-cols-3 w-[270px] gap-[330px] mt-6">
                  <Maininputfield
                    label="Vehicle Manufacturer"
                    placeholder="Placeholder"
                  />
                  <Maininputfield
                    label="Vehicle Model"
                    placeholder="Placeholder"
                  />
                  <Mainselectfield
                    label="Vehicle Type"
                    placeholder="Placeholder"
                  />
                </div>
                <div className="grid grid-cols-3 w-[270px] gap-[330px] mt-6">
                  <Mainselectfield
                    label="Type of Trailer"
                    placeholder="Placeholder"
                  />
                  <Mainselectfield
                    label="State of Registration"
                    placeholder="Placeholder"
                  />
                  <Maininputfield
                    label="Engine Number"
                    placeholder="Placeholder"
                  />
                </div>
                <div className="grid grid-cols-3 w-[270px] gap-[330px] mt-6">
                  <Mainselectfield
                    label="Compliance Plate"
                    placeholder="Placeholder"
                  />
                  <Mainselectfield
                    label="Registration Status"
                    placeholder="Placeholder"
                  />
                  <Maininputfield
                    label="Ownership Status"
                    placeholder="Placeholder"
                  />
                </div>
                <div className="grid grid-cols-3 w-[270px] gap-[330px] mt-6">
                  <Maininputfield
                    label="Rented Company"
                    placeholder="Placeholder"
                  />
                  <Maindatefield
                    label="Date of Hire"
                    placeholder="Placeholder"
                  />
                  <Maindatefield
                    label="Contract Valid Till"
                    placeholder="Placeholder"
                  />
                </div>
                <div className="grid grid-cols-3 w-[270px] gap-[330px] mt-6">
                  <Maininputfield label="Term" placeholder="Placeholder" />
                  <Maininputfield
                    label="Weekly Rent"
                    placeholder="Placeholder"
                  />
                  <Maininputfield label="Tax" placeholder="Placeholder" />
                </div>
                <div className="grid grid-cols-3 w-[270px] gap-[330px] mt-6">
                  <Mainselectfield
                    label="Payment Method"
                    placeholder="Placeholder"
                  />
                  <Maininputfield
                    label="Weekly Rent"
                    placeholder="Placeholder"
                  />
                  <Maininputfield label="Tax" placeholder="Placeholder" />
                </div>
                <h3 className="text-[20px] pt-8 font-medium pb-4">
                  Bank Details
                </h3>
                <div className="grid grid-cols-3 w-[270px] gap-[330px]">
                  <Maininputfield label="BSB" placeholder="Placeholder" />
                  <Maininputfield
                    label="Account Number"
                    placeholder="Placeholder"
                  />
                  <Maininputfield
                    label="Account Name"
                    placeholder="Placeholder"
                  />
                </div>
                <h3 className="text-[20px] pt-8 font-medium pb-4">
                  Vehicle Insurance
                </h3>
                <div className="grid grid-cols-3 w-[270px] gap-[330px]">
                  <Maininputfield
                    label="Insurance Company"
                    placeholder="Placeholder"
                  />
                  <Maininputfield
                    label="Policy Number"
                    placeholder="Placeholder"
                  />
                  <Maindatefield
                    label="Vehicle Insurance Start Date"
                    placeholder="Placeholder"
                  />
                </div>
                <div className="grid grid-cols-3 w-[270px] gap-[330px] mt-[18px]">
                  <Maindatefield
                    label="Renewal Date"
                    placeholder="Placeholder"
                  />
                  <Maindatefield
                    label="Date Valid Until"
                    placeholder="Placeholder"
                  />
                  <Maininputfield label="Days Left" placeholder="Placeholder" />
                </div>
                <div className="grid grid-cols-3 w-[270px] gap-[330px] mt-[18px]">
                  <Mainselectfield
                    label="Renewal Date"
                    placeholder="Placeholder"
                  />
                  <Mainselectfield
                    label="Date Valid Until"
                    placeholder="Placeholder"
                  />
                  <Mainselectfield
                    label="Days Left"
                    placeholder="Placeholder"
                  />
                </div>
                <h3 className="text-[20px] pt-8 font-medium pb-4">
                  Truck Odometer
                </h3>
                <div className="grid grid-cols-3 w-[270px] gap-[330px] mt-[18px]">
                  <Maininputfield
                    label="Truck Odometer"
                    placeholder="Placeholder"
                  />
                </div>

                <h3 className="text-[20px] pt-8 font-medium pb-4">
                  Vehicle Documents
                </h3>
                <div>
                  <Maintable />
                </div>
                <div className="flex justify-end gap-14 items-baseline mt-8">
                  <button className="size-[16px] font-medium">Save</button>
                  <button className="bg-[#032272] rounded-md pt-[6px] pb-[32px] pl-[40px] pr-[85px] text-white size-[16px]">
                    Create
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeLink === "account" && (
            <div>
              <div className="border-solid border-2 w-[1150px] p-4 rounded-xl bg-white flex items-baseline justify-between mb-4">
                <h2 className="text-xl font-bold mb-2">Create Vehicle</h2>
                <span className="border-solid border-2 bg-[#CED7DB] p-2 rounded-3xl">
                  <CloseIcon />
                </span>
              </div>
              <div className="border-2 border-solid p-6 rounded-xl bg-white ">
                <Progressbar />
                {/* <Checkbox
            id="terms"
            bold="Mark as Admin"
          /> */}
                <h3 className="text-[20px] pt-8 font-medium pb-4">
                  Vehicle Information
                </h3>
                <div className="grid grid-cols-3 w-[270px] gap-[330px]">
                  <Maininputfield
                    label="Registration Number"
                    placeholder="Placeholder"
                  />
                  <Maindatefield
                    label="Registration Expiry"
                    placeholder="Placeholder"
                  />
                  <Maininputfield label="VIN No." placeholder="Placeholder" />
                </div>
                <div className="grid grid-cols-3 w-[270px] gap-[330px] mt-6">
                  <Maininputfield
                    label="Vehicle Manufacturer"
                    placeholder="Placeholder"
                  />
                  <Maininputfield
                    label="Vehicle Model"
                    placeholder="Placeholder"
                  />
                  <Mainselectfield
                    label="Vehicle Type"
                    placeholder="Placeholder"
                  />
                </div>
                <div className="grid grid-cols-3 w-[270px] gap-[330px] mt-6">
                  <Mainselectfield
                    label="Type of Trailer"
                    placeholder="Placeholder"
                  />
                  <Mainselectfield
                    label="State of Registration"
                    placeholder="Placeholder"
                  />
                  <Maininputfield
                    label="Engine Number"
                    placeholder="Placeholder"
                  />
                </div>
                <div className="grid grid-cols-3 w-[270px] gap-[330px] mt-6">
                  <Mainselectfield
                    label="Compliance Plate"
                    placeholder="Placeholder"
                  />
                  <Maininputfield
                    label="Ownership Status"
                    placeholder="Placeholder"
                  />
                  <Mainselectfield
                    label="Registration Status"
                    placeholder="Placeholder"
                  />
                </div>
                <h3 className="text-[20px] pt-8 font-medium pb-4">
                  Vehicle Insurance
                </h3>
                <div className="grid grid-cols-3 w-[270px] gap-[330px]">
                  <Maininputfield
                    label="Insurance Company"
                    placeholder="Placeholder"
                  />
                  <Maininputfield
                    label="Policy Number"
                    placeholder="Placeholder"
                  />
                  <Maindatefield
                    label="Vehicle Insurance Start Date"
                    placeholder="Placeholder"
                  />
                </div>
                <div className="grid grid-cols-3 w-[270px] gap-[330px] mt-[18px]">
                  <Maindatefield
                    label="Renewal Date"
                    placeholder="Placeholder"
                  />
                  <Maindatefield
                    label="Date Valid Until"
                    placeholder="Placeholder"
                  />
                  <Maininputfield label="Days Left" placeholder="Placeholder" />
                </div>
                <div className="grid grid-cols-3 w-[270px] gap-[330px] mt-[18px]">
                  <Mainselectfield
                    label="Renewal Date"
                    placeholder="Placeholder"
                  />
                  <Mainselectfield
                    label="Date Valid Until"
                    placeholder="Placeholder"
                  />
                  <Mainselectfield
                    label="Days Left"
                    placeholder="Placeholder"
                  />
                </div>
                <h3 className="text-[20px] pt-8 font-medium pb-4">
                  Truck Odometer
                </h3>
                <div className="grid grid-cols-3 w-[270px] gap-[330px] mt-[18px]">
                  <Maininputfield
                    label="Truck Odometer"
                    placeholder="Placeholder"
                  />
                </div>

                <h3 className="text-[20px] pt-8 font-medium pb-4">
                  Vehicle Documents
                </h3>
                <div>
                  <Maintable />
                </div>
                <div className="flex justify-end gap-14 items-baseline mt-8">
                  <button className="size-[16px] font-medium">Save</button>
                  <button className="bg-[#032272] rounded-md pt-[6px] pb-[32px] pl-[40px] pr-[85px] text-white size-[16px]">
                    Create
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeLink === "compliances" && (
            <div>
              <h2 className="text-xl font-bold mb-2">Compliances Content</h2>
              <p>This is the content for the About link.</p>
            </div>
          )}
          {activeLink === "usermanagement" && (
            <div>
              <h2 className="text-xl font-bold mb-2">User Management</h2>
              <p>This is the content for the About link.</p>
            </div>
          )}
          {activeLink === "personalcard" && (
            <div>
              <h2 className="text-xl font-bold mb-2">User Management</h2>
              <p>This is the content for the About link.</p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
