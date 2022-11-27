import SavedPalettesContext from "../context/SavedPalettesContext";
import useToggle from "../hooks/useToggle";
import { useContext } from "react";
import { Link } from "react-router-dom";

import "../css/home.css";

export default function Sidebar({ isOpen }) {
  const activeClass = isOpen ? "open" : null;
  const [toggleState, toggle] = useToggle(false);
  const { savedPalettes, deletePalette } = useContext(SavedPalettesContext);

  return (
    <div className={`${activeClass} sidebar-container`}>
      <div className="sidebar-btns-container">
        <button
          onClick={toggle}
          className={`sidebar_btn ${toggleState && "active"}`}
        >
          Palettes
        </button>
        <button
          onClick={toggle}
          className={`sidebar_btn ${!toggleState && "active"}`}
        >
          Icons
        </button>
      </div>

      {toggleState ? (
        <>
          {savedPalettes.map((item) => {
            const { id, schemaDetails } = item;
            return (
              <div key={id} className="saved-palettes">
                <div className="saved-palette__schema">
                  {schemaDetails.map((color, index) => (
                    <Color key={index} hex={color.hex.value} />
                  ))}
                </div>
                <button
                  onClick={(e) => deletePalette(e)}
                  className="delete-palette__btn"
                  id={id}
                >
                  Delete
                </button>
                <Link
                  to={`/details/${item.id}`}
                  target="_blank"
                  className="open-palette__btn"
                >
                  Open
                </Link>
              </div>
            );
          })}
        </>
      ) : (
        <div className="saved-icons">icons</div>
      )}
    </div>
  );
}

function Color({ hex }) {
  const style = { backgroundColor: `${hex}` };
  return <div style={style} className="small-color-item"></div>;
}
