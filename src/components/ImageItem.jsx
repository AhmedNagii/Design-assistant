import "../css/searchImages.css";
import { useState } from "react";
import { useContext } from "react";
import ImagesContext from "../context/ImagesContext";

export default function ImageItem({
  smallImg,
  alt,
  className,
  id,
  downloadLink,
}) {
  const [isHoverd, setIsHoverd] = useState(false);
  const { addToFav, openImage } = useContext(ImagesContext);
  const [toggleFav, setToggleFav] = useState(false);

  const favClass = toggleFav ? "ri-heart-fill" : "ri-heart-line";

  return (
    <div
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
      onTouchStartCapture={() => setIsHoverd(true)}
      className={`${className} image-container`}
    >
      <img className="image" src={smallImg} alt={alt} />
      {isHoverd && (
        <i
          role="presentation"
          className={`${favClass} favorite`}
          onClick={() => {
            addToFav(id, downloadLink, smallImg, toggleFav);
            setToggleFav(!toggleFav);
          }}
        ></i>
      )}

      {isHoverd && (
        <i
          role="presentation"
          className="ri-download-2-line download"
          onClick={() => openImage(downloadLink)}
        ></i>
      )}
    </div>
  );
}
