import "../css/home.css";

export default function ColorItem({ hex, name, rgb, contrast }) {
  const style = { backgroundColor: `${hex}` };
  const textColor = { color: contrast };

  function showInfo() {}

  return (
    <div style={style} className="color-item">
      <div onMouseEnter={showInfo} className="color-info-container">
        <p className="color-info" style={textColor}>
          {name}
        </p>
        <p className="color-info" style={textColor}>
          {rgb}
        </p>
        <p className="color-info" style={textColor}>
          {hex}
        </p>
      </div>
    </div>
  );
}
