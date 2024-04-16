import { VscArrowLeft } from "react-icons/vsc";
import { BsTable } from "react-icons/bs";

import { FaCircle } from "react-icons/fa";
import React, { useState } from "react";
import Image from "next/image";
function Tab1() {
  const [counter, setCounter] = useState(0); // Initialize counter state

  function gototab(id) {
    let element = document.getElementById(id);
    let clone = element.cloneNode(true);
    clone.removeAttribute("id");

    const tabCube = document.querySelector(".tab-cube");
    let tabCubeX = tabCube.getBoundingClientRect().x;
    let tabCubeY = tabCube.getBoundingClientRect().y;
    let elementX = element.getBoundingClientRect().x;
    let elementY = element.getBoundingClientRect().y;
    let x = tabCubeX - elementX - 75;
    let y = tabCubeY - elementY - 75;
    clone.style.position = "absolute";
    clone.style.left = `${elementX}px`;
    clone.style.top = `${elementY}px`;
    document.body.appendChild(clone);

    // Increment counter when a grid is moved to tabCube
    setCounter(counter + 1);

    // Déplacer la copie
    setTimeout(() => {
      clone.style.transform = `translate(${x}px, ${y}px) scale(0.25)`;
      clone.style.transition = "transform 1s ease-in-out";
      clone.style.pointerEvents = "none";
    }, 10);
    setTimeout(() => {
      clone.remove();
    }, 1000);
  }

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
          <BsTable
            className="tab-cube"
            style={{ fontSize: "30px", color: "#cbd5e1" }}
          />
          <span className="counter text-[#cbd5e1] ">{counter}</span>
        </div>
      </div>
      <div className="w-[full] h-[80%]  ">
        <div className="grid grid-cols-4 gap-5 w-full h-full">
          <div className="bg-[#2f3846] flex flex-col items-center  rounded-lg gap-3   h-50 w-45 justify-center">
            <div className="flex items-center justify-center w-[35%] h-[30%] rounded-full bg-[#151928]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#cbd5e1"
                className="w-10 h-10 m-auto"
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
          <div
            id="1"
            onClick={() => gototab("1")}
            className="bg-[#0c0f1a] p-3 flex flex-col rounded-lg h-50 w-45"
          >
            <div className="flex justify-end  w-full">
              <FaCircle style={{ fontSize: "10px", color: "#e879f9" }} />
            </div>
            <div className="flex flex-col gap-3 justify-center items-center h-full">
              <div className="rounded-full  h-20 w-20 flex items-center justify-center bg-gray-200 ">
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
          <div
            id="2"
            onClick={() => gototab("2")}
            className="bg-[#0c0f1a] p-3 flex flex-col rounded-lg h-50 w-45"
          >
            <div className="flex justify-end w-full"></div>
            <div className="flex flex-col gap-3 justify-center items-center h-full">
              <div className="rounded-full h-20 w-20 flex items-center justify-center bg-gray-200 ">
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
          <div
            id="3"
            onClick={() => gototab("3")}
            className="bg-[#0c0f1a] p-3 flex flex-col rounded-lg h-50 w-45"
          >
            <div className="flex justify-end  w-full">
              <FaCircle style={{ fontSize: "10px", color: "#e879f9" }} />
            </div>
            <div className="flex flex-col gap-3 justify-center items-center h-full">
              <div className="rounded-full h-20 w-20 flex items-center justify-center bg-gray-200 ">
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
          <div
            id="4"
            onClick={() => gototab("4")}
            className="bg-[#0c0f1a] p-3 flex flex-col rounded-lg h-50 w-45"
          >
            <div className="flex justify-end  w-full">
              <FaCircle style={{ fontSize: "10px", color: "#e879f9" }} />
            </div>
            <div className="flex flex-col justify-center gap-3 items-center h-full">
              <div className="rounded-full h-20 w-20 flex items-center justify-center bg-gray-200 ">
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
          <div
            id="5"
            onClick={() => gototab("5")}
            className="bg-[#0c0f1a] p-3 flex flex-col rounded-lg h-50 w-45"
          >
            <div className="flex justify-end  w-full">
              <FaCircle style={{ fontSize: "10px", color: "#0c0f1a" }} />
            </div>{" "}
            <div className="flex flex-col justify-center gap-3 items-center h-full">
              <div className="rounded-full h-20 w-20 flex items-center justify-center bg-gray-200 ">
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
          <div
            id="6"
            onClick={() => gototab("6")}
            className="bg-[#0c0f1a] p-3 flex flex-col rounded-lg h-50 w-45 "
          >
            <div className="flex justify-end  w-full">
              <FaCircle style={{ fontSize: "10px", color: "#0c0f1a" }} />
            </div>
            <div className="flex flex-col gap-3 justify-center  items-center h-full">
              <div className="rounded-full h-20 w-20 flex items-center justify-center bg-gray-200 ">
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
