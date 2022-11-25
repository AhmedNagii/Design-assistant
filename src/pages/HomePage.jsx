import { useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import useToggle from "../hooks/useToggle";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SelectModeBtn from "../components/SelectModeBtn";
import fetchSchema from "../api/fetchSchema";
import ColorItem from "../components/ColorItem";
import useLocalSroarge from "../hooks/useLocalStorage";
import Snackbar from "../components/Snackbar";

let savedScheamsArr = [];

export default function HomePage() {
  const [value, setValue] = useLocalSroarge([], "saved-schemas");
  let savedScheamsArr = value;
  const [toggleState, toggle] = useToggle(false);
  const [inputValues, setInputValues] = useState({
    colorVal: "#ffffff",
    selectedMode: "",
  });
  const snackbarRef = useRef(null);

  const { isFetching, data, refetch } = useQuery(
    ["", inputValues.colorVal.slice(1), inputValues.selectedMode],
    fetchSchema,
    { enabled: false }
  );
  const saveScheam = (e) => {
    e.preventDefault();
    const schema = {
      id: Date.now(),
      schemaDetails: colors,
    };
    savedScheamsArr.push(schema);
    console.log(savedScheamsArr);
    setValue(savedScheamsArr);
    snackbarRef.current.show();
  };
  const colors = data?.colors ?? [];

  return (
    <div>
      <Navbar handelClick={toggle} isOpen={toggleState} />
      <Sidebar isOpen={toggleState} savedScheams={value} />
      <main className="main-content">
        <form className="form">
          <span className="flex">
            <input
              className="color-input"
              type="color"
              onChange={(e) => {
                setInputValues((prevState) => {
                  return { ...prevState, colorVal: e.target.value };
                });
              }}
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
            onSelect={(value) => {
              value &&
                setInputValues((prevState) => {
                  return { ...prevState, selectedMode: value };
                });
            }}
          />
          <button
            className="get-schema-btn"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              refetch();
            }}
          >
            Get Schema
          </button>
        </form>

        <div className="colors-container">
          {isFetching ? (
            <div className="loading-pane">
              <h2 className="loader">🌀</h2>
            </div>
          ) : colors.length == 0 ? (
            <h1 className="gradient-text">
              <span className="hint-text">
                Select color and mode to get your color schema
              </span>
              🌈
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
      </main>
      <Snackbar ref={snackbarRef} message="Palette has been saved!" type="" />
    </div>
  );
}
