"use client";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import React, { useState } from "react"; // Don't forget to import React for using hooks
export default function Home() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main className="flex justify-center bg-[#0f172a] items-center h-screen">
      <div className="w-1/2 h-3/4  bg-[#334155] rounded-lg">
        <div className="w-full h-full flex flex-row gap-5  p-6 rounded-xl">
          {/* styling & handling Vertical tabs */}
          <div className=" bg-[#0f172a] flex justify-center flex-col w-[10%] rounded-xl  ">
            <button
              className={`flex h-1/2 w-full items-center  font-vietnam  text-xl pl-5 font-bold text-white  ${
                activeTab === "tab1" ? "bg-[#64748b]" : ""
              }`}
              onClick={() => handleTabClick("tab1")}
            >
              tab1
            </button>
            <button
              className={`flex h-1/2  w-full items-center   font-vietnam  text-xl pl-5 font-bold text-white  ${
                activeTab === "tab2" ? "bg-[#64748b]" : ""
              }`}
              onClick={() => handleTabClick("tab2")}
            >
              tab2
            </button>
          </div>
          {/* Rendering Content */}
          <div className=" w-full bg-[#0f172a] h-[full] rounded-xl">
            {activeTab === "tab1" && <Tab1 />}
            {activeTab === "tab2" && <Tab2 />}
          </div>
        </div>
      </div>
    </main>
  );
}
