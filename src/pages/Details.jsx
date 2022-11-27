import "../css/details.css";
import { useParams } from "react-router-dom";
import ColorItem from "../components/ColorItem";
import { useContext } from "react";
import SavedPalettesContext from "../context/SavedPalettesContext";

export default function Details() {
  const { savedPalettes, _ } = useContext(SavedPalettesContext);
  const { id } = useParams();
  const opendItem = savedPalettes.filter((schema) => {
    console.log(schema.id, id);
    return schema.id == id;
  });

  return (
    <main className="main">
      <div className="details-page">
        {opendItem[0].schemaDetails.map((color, index) => {
          console.log();
          return (
            <ColorItem
              key={index}
              hex={color.hex.value}
              name={color.name.value}
              rgb={color.rgb.value}
              contrast={color.contrast.value}
            />
          );
        })}
      </div>
    </main>
  );
}
