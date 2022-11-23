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
        <div className="saved-palettes">
          {savedScheams.map((item) => {
            console.log(savedScheams);
            return <h1>{item[0].hex.value}</h1>;
          })}
          palettes
        </div>
      ) : (
        <div className="saved-icons">icons</div>
      )}
    </div>
  );
}
