import Header from "../../../components/Header";
import Progressbar from "../../../components/Progressbar";
import Sidebar from "../../../components/Sidebar";

const CreateVehicle = () => {
  return (
    <>
      <Header />
      <div className="flex bg-[#E9EFFF]">
        <div className="sticky top-0">
          <Sidebar />
        </div>
        <div className="h-screen w-full mt-4">
          <div className="bg-white mr-4 flex justify-between items-center">
            <h2 className=" w-full p-4 rounded-md font-bold">Create Vehicle</h2>
            <div className="h-8 w-8 flex justify-center cursor-pointer text-2xl items-center bg-[#CED7DB] rounded-full mr-4">
              <span className="mt-[-2px] ml-[2px] text-[#292D32] rotate-45">
                +
              </span>
            </div>
          </div>
          <div className="bg-white mr-4 px-4">
            <Progressbar />
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateVehicle;
