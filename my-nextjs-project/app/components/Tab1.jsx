import { VscArrowLeft } from "react-icons/vsc";
import { BsTable } from "react-icons/bs";

import { FaCircle } from "react-icons/fa";

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
          <BsTable style={{ fontSize: "30px", color: "#cbd5e1" }} />
        </div>
      </div>
      <div className="w-[full] h-[80%]  ">
        <div className="grid grid-cols-4 gap-5 w-full h-full">
          <div className="bg-[#2f3846] flex flex-col items-center  rounded-lg gap-3   h-50 w-45 justify-center">
            <div className="flex items-center justify-center w-[40%] h-[30%] rounded-full bg-white">
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

            <h1 className=" text-lg text-center text-[#cbd5e1]">
              Create Group
            </h1>
          </div>
          <div className="bg-[#0c0f1a] p-3 flex flex-col rounded-lg h-50 w-45">
            <div className="flex justify-end h-10 w-full">
              <FaCircle style={{ fontSize: "10px", color: "#e879f9" }} />
            </div>
            <div className="flex flex-col gap-3 justify-center items-center h-full">
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
                <p className="text-lg text-center text-white">Cuisine</p>
                <p className="text-lg text-center text-white">35 member</p>
              </div>
            </div>
          </div>
          <div className="bg-[#0c0f1a] p-3 flex flex-col rounded-lg h-50 w-45">
            <div className="flex justify-end h-10 w-full"></div>
            <div className="flex flex-col gap-3 justify-center items-center h-full">
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
                <p className="text-lg text-center text-white">Art</p>
                <p className="text-lg text-center text-white">9 member</p>
              </div>
            </div>
          </div>
          <div className="bg-[#0c0f1a] p-3 flex flex-col rounded-lg h-50 w-45">
            <div className="flex justify-end h-10 w-full">
              <FaCircle style={{ fontSize: "10px", color: "#e879f9" }} />
            </div>
            <div className="flex flex-col gap-3 justify-center items-center h-full">
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
                <p className="text-lg text-center text-white">Workout</p>
                <p className="text-lg text-center text-white">27 member</p>
              </div>
            </div>
          </div>
          <div className="bg-[#0c0f1a] p-3 flex flex-col rounded-lg h-50 w-45">
            <div className="flex justify-end h-10 w-full">
              <FaCircle style={{ fontSize: "10px", color: "#e879f9" }} />
            </div>
            <div className="flex flex-col justify-center gap-3 items-center h-full">
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
                <p className="text-lg text-center text-white">gaming</p>
                <p className="text-lg text-center text-white">105 member</p>
              </div>
            </div>
          </div>
          <div className="bg-[#0c0f1a] p-3 flex flex-col rounded-lg h-50 w-45">
            <div className="flex justify-end h-10 w-full">
              <FaCircle style={{ fontSize: "10px", color: "#0c0f1a" }} />
            </div>{" "}
            <div className="flex flex-col justify-center gap-3 items-center h-full">
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
                <p className="text-lg text-center text-white">Hiking</p>
                <p className="text-lg text-center text-white">97 member</p>
              </div>
            </div>
          </div>
          <div className="bg-[#0c0f1a] p-3 flex flex-col rounded-lg h-50 w-45 ">
            <div className="flex justify-end h-10 w-full">
              <FaCircle style={{ fontSize: "10px", color: "#0c0f1a" }} />
            </div>
            <div className="flex flex-col gap-3 justify-center  items-center h-full">
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
                <p className="text-lg text-center text-white">Yoga</p>
                <p className="text-lg text-white">65 member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tab1;
