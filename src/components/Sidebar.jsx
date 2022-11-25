import useToggle from "../hooks/useToggle";

import "../css/home.css";

export default function Sidebar({ isOpen, savedScheams }) {
  const activeClass = isOpen ? "open" : null;
  const [toggleState, toggle] = useToggle(false);

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
          {savedScheams.map((item) => {
            const { id, schemaDetails } = item;
            return (
              <div className="saved-palettes">
                <div key={id} className="saved-palette__schema">
                  {schemaDetails.map((color, index) => (
                    <Color key={color.hex.value} hex={color.hex.value} />
                  ))}
                </div>
                <button className="saved-palettes__btn">Delete</button>
                <button className="saved-palettes__btn">Open</button>
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
