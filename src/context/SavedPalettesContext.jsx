import { createContext } from "react";
import useLocalSroarge from "../hooks/useLocalStorage";

const SavedPalettesContext = createContext();

export function SavedPalettesProvider({ children }) {
  const [value, setValue] = useLocalSroarge([], "saved-palettes");

  const savePalette = (colors) => {
    const schema = {
      id: Date.now(),
      schemaDetails: colors,
    };

    setValue((prevValue) => [...prevValue, schema]);
  };

  const deletePalette = (e) => {
    e.preventDefault();

    setValue((prevValue) =>
      prevValue.filter((schema) => schema.id != e.target.id)
    );
  };

  const openPalette = (e) => {
    e.preventDefault();
    const pallete = value.filter((schema) => schema.id != e.target.id);
    console.log(pallete);
  };

  return (
    <SavedPalettesContext.Provider
      value={{ savedPalettes: value, savePalette, deletePalette, openPalette }}
    >
      {children}
    </SavedPalettesContext.Provider>
  );
}

export default SavedPalettesContext;
