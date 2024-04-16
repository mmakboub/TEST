"use client";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";

import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import React, { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main className="flex justify-center bg-[#0a111f] items-center h-screen">
      <div className="w-1/2 h-3/4 bg-[#202c3a] rounded-xl overflow-hidden">
        <div className="w-full h-full flex flex-row gap-5 p-6 rounded-xl overflow-x-auto overflow-y-auto">
          {/* styling & handling Vertical tabs */}
          <div className="bg-[#0f172a] flex justify-center flex-col p-3 w-[10%] rounded-[20px]">
            <button
              className={`flex h-1/2 w-full items-center font-vietnam text-xl  font-bold text-white ${
                activeTab === "tab1" ? "bg-[#64748b]" : ""
              }`}
              onClick={() => handleTabClick("tab1")}
            >
              <BsFillPeopleFill />
            </button>
            <button
              className={`flex h-1/2 w-full items-center font-vietnam text-xl pl-7 font-bold text-white ${
                activeTab === "tab2" ? "bg-[#64748b]" : ""
              }`}
              onClick={() => handleTabClick("tab2")}
            >
              <IoSettings />
            </button>
          </div>
          {/* Rendering Content */}
          <div className="w-full h-full rounded-xl">
            {activeTab === "tab1" && <Tab1 />}
            {activeTab === "tab2" && <Tab2 />}
          </div>
        </div>
      </div>
    </main>
  );
}
