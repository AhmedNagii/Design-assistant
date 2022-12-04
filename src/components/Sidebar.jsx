import SavedPalettesContext from "../context/SavedPalettesContext";
import ImagesContext from "../context/ImagesContext";
import useToggle from "../hooks/useToggle";
import { useContext } from "react";
import { Link } from "react-router-dom";

import "../css/sidebar.css";

export default function Sidebar({ isOpen }) {
  const activeClass = isOpen ? "open" : null;
  const [toggleState, toggle] = useToggle(false);
  const { savedPalettes, deletePalette } = useContext(SavedPalettesContext);

  const { savedImages, deleteImage } = useContext(ImagesContext);

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
          Images
        </button>
      </div>

      {toggleState ? (
        <div className="saved-items-container">
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
                  className="delete-item__btn"
                  id={id}
                >
                  Delete
                </button>
                <Link
                  to={`/paletteDetails/${item.id}`}
                  target="_blank"
                  className="open-item__btn"
                >
                  Open
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="saved-items-container">
          {savedImages.map((img) => {
            const { id, links } = img;
            return (
              <div key={id} className="saved-image-item">
                <img className="saved-image" src={links.image} />

                <button
                  onClick={(e) => deleteImage(e)}
                  className="delete-item__btn"
                  id={id}
                >
                  Delete
                </button>
                <button
                  onClick={() =>
                    window.open(
                      img.links.download,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="open-item__btn"
                >
                  Open
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Color({ hex }) {
  const style = { backgroundColor: `${hex}` };
  return <div style={style} className="small-color-item"></div>;
}
