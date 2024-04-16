import { VscArrowLeft } from "react-icons/vsc";
import { BsTable } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import Image from "next/image";
function Tab1() {
  return (
    <div className="w-full p-5 h-full flex flex-col">
      <div className="w-full h-[15%] flex justify-between items-center">
        <div className="flex items-center">
          <VscArrowLeft style={{ fontSize: "30px", color: "#cbd5e1" }} />
          <button className="ml-2 text-[#cbd5e1] text-3xl font-semibold">
            Groups
          </button>
        </div>
        <div>
          <BsTable />
        </div>
      </div>
      <div className="w-full h-full pt-10">
        <div className="grid grid-cols-4 gap-4 w-full h-full">
          <div className="bg-[#2f3846] flex flex-col items-center  rounded-xl gap-3   h-40 w-40 justify-center">
            <div className="flex items-center justify-center w-[40%] h-[40%] rounded-full bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#cbd5e1"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>

            <h1 className="text-[#64748b]">Create Group</h1>
          </div>
          <div className="bg-[#0f172a] flex items-center flex-col justify-center pl-3 rounded-xl  h-40 w-40">
            <div className="rounded-full h-20 w-20 flex items-center justify-center bg-gray-200 mr-4">
              <Image
                src="/tree-736885_640.jpg"
                alt="Image"
                width={100}
                height={100}
                className="h-full rounded-full"
              />
            </div>
            <div>
              <p className="text-lg text-white">Cuisine</p>
              <p className="text-lg text-white">35 member</p>
            </div>
          </div>
          <div className="bg-[#0f172a] flex items-center flex-col justify-center pl-3 rounded-xl  h-40 w-40">
            <div className="rounded-full h-20 w-20 flex items-center justify-center bg-gray-200 mr-4">
              <Image
                src="/tree-736885_640.jpg"
                alt="Image"
                width={100}
                height={100}
                className="h-full rounded-full"
              />
            </div>
            <div>
              <p className="text-lg text-white">Art</p>
              <p className="text-lg text-white">9 member</p>
            </div>
          </div>
          <div className="bg-[#0f172a] flex items-center pl-3 justify-center flex-col  rounded-xl h-40 w-40">
            <div className="rounded-full h-20 w-20 flex items-center justify-center bg-gray-200 mr-4">
              <Image
                src="/tree-736885_640.jpg"
                alt="Image"
                width={100}
                height={100}
                className="h-full rounded-full"
              />
            </div>
            <div>
              <p className="text-lg text-white">Workout</p>
              <p className="text-lg text-white">27 member</p>
            </div>
          </div>
          <div className="bg-[#0f172a] flex items-center justify-center pl-3 flex-col rounded-xl   h-40 w-40">
            <div className="rounded-full h-20 w-20 flex items-center justify-center bg-gray-200 mr-4">
              <Image
                src="/tree-736885_640.jpg"
                alt="Image"
                width={100}
                height={100}
                className="h-full rounded-full"
              />
            </div>
            <div>
              <p className="text-lg text-white">gaming</p>
              <p className="text-lg text-white">105 member</p>
            </div>
          </div>
          <div className="bg-[#0f172a] flex items-center justify-center flex-col pl-3 rounded-xl  h-40 w-40">
            <div className="rounded-full h-20 w-20 flex items-center justify-center bg-gray-200 mr-4">
              <Image
                src="/tree-736885_640.jpg"
                alt="Image"
                width={100}
                height={100}
                className="h-full rounded-full"
              />
            </div>
            <div>
              <p className="text-lg text-white">Hiking</p>
              <p className="text-lg text-white">97 member</p>
            </div>
          </div>
          <div className="bg-[#0f172a] flex items-center justify-center flex-col pl-3 rounded-xl  h-40 w-40">
            <div className="rounded-full h-20 w-20 flex items-center justify-center bg-gray-200 mr-4">
              <Image
                src="/tree-736885_640.jpg"
                alt="Image"
                width={100}
                height={100}
                className="h-full rounded-full"
              />
            </div>
            <div>
              <p className="text-lg text-white">Yoga</p>
              <p className="text-lg text-white">65 member</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tab1;
