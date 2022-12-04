import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchImages from "../api/fetchImages";
import searchIcon from "../assets/search-icon1.png";
import ImageItem from "../components/ImageItem";
import getClass from "../getClass";

import "../css/searchImages.css";

export default function IconsPage() {
  const [term, setTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, data } = useQuery(
    ["search", term, currentPage],
    fetchImages
  );
  let searchQuery = "";
  const images = data?.results ?? [];
  const totalPages = data?.total_pages ?? 0;

  return (
    <div className="search-images-page">
      <div className="serach-input-container">
        <img className="search-icon" src={searchIcon} alt="search icon" />
        <input
          className="search-input"
          placeholder="Search for Icons..."
          onChange={(e) => (searchQuery = e.target.value)}
        />
        <button
          className="search-btn"
          onClick={(e) => {
            e.preventDefault();
            setTerm(searchQuery);
            setCurrentPage(1);
          }}
        >
          Search
        </button>
      </div>

      <section className="search-results">
        {console.log(data)}
        {isLoading ? (
          <div className="loading-pane">
            <h2 className="loader">🌀</h2>
          </div>
        ) : images.length == 0 ? (
          <h1 className="gradient-text hint-text">
            <span className="">
              Please check your spelling or the internet connection
            </span>
          </h1>
        ) : (
          images.map((img, index) => {
            return (
              <ImageItem
                key={img.id}
                id={img.id}
                downloadLink={img.links.download}
                smallImg={img.urls.small}
                alt={img.alt_description}
                className={getClass(index)}
              />
            );
          })
        )}
      </section>

      {totalPages > 1 && (
        <div className="pages-control">
          <button
            disabled={currentPage == 1}
            className="button prev"
            onClick={() => setCurrentPage((pages) => pages - 1)}
          >
            <span>prev</span>
          </button>
          <div className="page-counter">{currentPage}</div>
          <button
            className="button next"
            disabled={currentPage == totalPages}
            onClick={() => setCurrentPage((pages) => pages + 1)}
          >
            <span>Next</span>
          </button>
        </div>
      )}
    </div>
  );
}
