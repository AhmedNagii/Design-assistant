import "../css/home.css";

export default function () {
  return (
    <select className="mode-selector">
      <option value="none">Select Mode...</option>
      <option value="monochrome">Monochrome </option>
      <option value="monochrome-dark">Monochrome-dark</option>
      <option value="monochrome-light">Monochrome-light</option>
      <option value="analogic">Analogic </option>
      <option value="complement">Complement</option>
      <option value="analogic-complement">Analogic-complement</option>
      <option value="triad">Triad</option>
      <option value="quad">Quad</option>
    </select>
  );
}
