import "../css/searchIcons.css";
import searchIcon from "../assets/search-icon1.png";

export default function IconsPage() {
  return (
    <div className="search-icons-page">
      <div className="serach-input-container">
        <img className="search-icon" src={searchIcon} alt="search icon" />
        <input
          className="search-input"
          placeholder="Search for Icons..."
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
