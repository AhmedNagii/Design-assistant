import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ImagesContext = createContext();

export function ImagesContextProvider({ children }) {
  const [value, setValue] = useLocalStorage([], "saved-images");

  const addToFav = (id, downloadLink, smallImg, toggleFav) => {
    if (!toggleFav) {
      const image = {
        id: id,
        links: {
          download: downloadLink,
          image: smallImg,
        },
      };

      setValue((prevValue) => [...prevValue, image]);
    } else {
      setValue((prevValue) => prevValue.filter((image) => image.id != id));
    }
  };

  const openImage = (url) => window.open(url, "_blank", "noopener,noreferrer");

  const deleteImage = (e) => {
    e.preventDefault();
    setValue((prevValue) => prevValue.filter((img) => img.id != e.target.id));
  };

  return (
    <ImagesContext.Provider
      value={{
        savedImages: value,
        addToFav,
        openImage,
        deleteImage,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
}

export default ImagesContext;
