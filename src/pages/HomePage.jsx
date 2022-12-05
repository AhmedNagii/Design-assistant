import { useState, useRef, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import SelectModeBtn from "../components/SelectModeBtn";
import fetchSchema from "../api/fetchSchema";
import ColorItem from "../components/ColorItem";
import Snackbar from "../components/Snackbar";
import SavedPalettesContext from "../context/SavedPalettesContext";

let currentInput = {
  colorVal: "#ffffff",
  selectedMode: "",
};

export default function HomePage() {
  const { savePalette } = useContext(SavedPalettesContext);
  const [inputValues, setInputValues] = useState({
    colorVal: "#ffffff",
    selectedMode: "",
  });

  const snackbarRef = useRef(null);

  const results = useQuery(["", inputValues], fetchSchema, { retry: 1 });
  const colors = results.data?.colors ?? [];

  const saveScheam = (e) => {
    e.preventDefault();
    savePalette(colors);
    snackbarRef.current.show();
  };

  return (
    <main className="main-content">
      <form className="form">
        <span className="flex">
          <input
            className="color-input"
            type="color"
            onChange={(e) => (currentInput.colorVal = e.target.value)}
            value={inputValues.colorVal}
          />
          <button
            onClick={(e) => saveScheam(e)}
            className="save-btn"
            disabled={colors.length == 0}
          >
            Save 💘
          </button>
        </span>
        <SelectModeBtn
          onSelect={(value) => (currentInput.selectedMode = value)}
        />
        <button
          className="get-schema-btn"
          onClick={(e) => {
            e.preventDefault();
            setInputValues({
              selectedMode: currentInput.selectedMode,
              colorVal: currentInput.colorVal,
            });
          }}
        >
          Get Schema
        </button>
      </form>
      <div className="colors-container">
        {results.isFetching ? (
          <div className="loading-pane">
            <h2 className="loader">🌀</h2>
          </div>
        ) : colors.length == 0 ? (
          <h1 className="gradient-text">
            <span className="hint-text">
              Please check your internet connection
            </span>
            📡
          </h1>
        ) : (
          colors.map((color, index) => {
            return (
              <ColorItem
                key={index}
                hex={color.hex.value}
                name={color.name.value}
                rgb={color.rgb.value}
                contrast={color.contrast.value}
              />
            );
          })
        )}
      </div>
      <Snackbar ref={snackbarRef} message="Palette has been saved!" />
    </main>
  );
}
