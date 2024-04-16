import { VscArrowLeft } from "react-icons/vsc";
import { BsTable } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";

function Tab1() {
  return (
    <div className="w-full p-5 h-full flex flex-col">
      <div className="w-full h-[15%] flex justify-between items-center">
        <div className="flex items-center">
          <VscArrowLeft />
          <button className="ml-2">Groups</button>
        </div>
        <div>
          <BsTable />
        </div>
      </div>
      <div className="w-full h-full pt-10">
        <div className="grid grid-cols-4 gap-4 w-full h-full">
          <div className="bg-[#0f172a] flex flex-col items-center  rounded-xl gap-3   h-40 w-40 justify-center">
            <CiCirclePlus className="h-12 w-12" />
            <h1 className="text-[#64748b]">Create Group</h1>
          </div>
          <div className="bg-[#0f172a] flex items-center justify-center rounded-xl  h-40 w-40">
            01
          </div>
          <div className="bg-[#0f172a] flex items-center justify-center   rounded-xl h-40 w-40">
            01
          </div>
          <div className="bg-[#0f172a] flex items-center justify-center  rounded-xl   h-40 w-40">
            01
          </div>
          <div className="bg-[#0f172a] flex items-center justify-center  rounded-xl  h-40 w-40">
            01
          </div>
          <div className="bg-[#0f172a] flex items-center justify-center  rounded-xl  h-40 w-40">
            09
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tab1;
