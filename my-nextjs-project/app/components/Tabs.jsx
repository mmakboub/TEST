"use client";
import { GoPeople } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";

import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import React, { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-[55%] h-3/4 bg-[#151928] rounded-xl overflow-hidden">
      <div className="w-full h-full flex flex-row gap-5 px-8 py-7 rounded-xl overflow-x-auto overflow-y-auto">
        <div className="bg-[#0c0f1a] flex justify-center flex-col p-3 w-[10%] rounded-[20px]">
          <button
            className={`flex h-[10%] w-full items-center justify-center font-vietnam text-xl rounded-xl font-bold  ${
              activeTab === "tab1" ? "bg-[#151928]" : ""
            }`}
            onClick={() => handleTabClick("tab1")}
          >
            <GoPeople
              style={{ width: "30px", height: "50px", color: "#cbd5e1" }}
            />
          </button>
          <button
            className={`flex h-[10%] w-full items-center justify-center font-vietnam text-xl rounded-xl font-bold  ${
              activeTab === "tab2" ? "bg-[#151928]" : ""
            }`}
            onClick={() => handleTabClick("tab2")}
          >
            <IoSettingsOutline
              style={{ width: "30px", height: "50px", color: "#cbd5e1" }}
            />
          </button>
        </div>
        <div className="w-full h-full rounded-xl">
          {activeTab === "tab1" && <Tab1 />}
          {activeTab === "tab2" && <Tab2 />}
        </div>
      </div>
    </div>
  );
}
