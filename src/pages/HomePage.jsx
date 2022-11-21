import { useState } from "react";
import useToggle from "../hooks/useToggle";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SelectModeBtn from "../components/SelectModeBtn";

export default function HomePage() {
  const [toggleState, toggle] = useToggle(false);

  return (
    <div>
      <Navbar handelClick={toggle} isOpen={toggleState} />
      <Sidebar isOpen={toggleState} />
      <main className="main-content">
        <div className="btns-container">
          <input className="color-input" type="color" />
          <SelectModeBtn />
          <button className="get-schema-btn">Get Schema</button>
          <button className="save-btn">Save 💘</button>
        </div>
      </main>
    </div>
  );
}
