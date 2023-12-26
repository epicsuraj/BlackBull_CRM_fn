import Header from "../../../components/Header";
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
          <div className="mr-4">
            <h2 className="bg-white w-full p-4 rounded-md font-bold">
              Create Vehicle
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateVehicle;
