import { VscArrowLeft } from "react-icons/vsc";
import { BsTable } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import React from "react";

export default function tab2() {
  function gotoblue(id) {
    let element = document.getElementById(id);
    const blueCube = document.querySelector(".blue-cube");
    let blueCubeX = blueCube.getBoundingClientRect().x;
    let blueCubeY = blueCube.getBoundingClientRect().y;
    let elementX = element.getBoundingClientRect().x;
    let elementY = element.getBoundingClientRect().y;
    let x = blueCubeX - elementX - 75;
    let y = blueCubeY - elementY - 75;
    element.style.transform = `translate(${x}px, ${y}px) scale(0.25)`;
    element.style.transition = "transform 1s ease-in-out";
  }

  return (
    <div style={{ position: "relative" }}>
      <div className="w-full flex items-center py-8 justify-end">
        <div className="blue-cube w-[50px] h-[50px] bg-[#1c1a36] mr-[50px]"></div>
      </div>
      <div
        className="flex flex-row w-full items-center justify-around bg-[#292839] py-4"
        style={{ position: "absolute" }}
      >
        <div
          id="1"
          className="w-[200px] h-[200px] bg-[#151421]"
          onClick={() => gotoblue("1")}
        ></div>
        <div
          id="2"
          className="w-[200px] h-[200px] bg-[#151421]"
          onClick={() => gotoblue("2")}
        ></div>
        <div
          id="3"
          className="w-[200px] h-[200px] bg-[#151421]"
          onClick={() => gotoblue("3")}
        ></div>
      </div>
    </div>
  );
}
