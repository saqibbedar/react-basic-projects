"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

const NextApp = () => {
  const [Images, setImages] = useState([]);
  const [loadingStates, setLoadingStates] = useState([]);

  // Fetch images from localStorage on component mount
  useEffect(() => {
    const savedImages = localStorage.getItem("images");
    if (savedImages) {
      setImages(JSON.parse(savedImages)); // Set images from localStorage
      setLoadingStates(Array(JSON.parse(savedImages).length).fill(false)); // Set loading states to false (since they are already loaded)
    }
  }, []);

  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setImages(data);
      localStorage.setItem("images", JSON.stringify(data)); // Store images in localStorage
      setLoadingStates(Array(data.length).fill(true)); // Initially set loading states to true
    } catch (error) {
      console.error("Error Fetching Images");
    }
  };

  const handleImageLoad = (index) => {
    setLoadingStates((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <>
      <div className="grid grid-cols-1  media-md:grid-cols-5 gap-8 py-8 px-8">
        {Images.map((img, i) => {
          return (
            <img
              onLoad={() => handleImageLoad(i)}
              key={i}
              src={img.download_url}
              className={`rounded-md ${loadingStates[i] ? "skeleton" : ""}`}
            />
          );
        })}
      </div>

      <div
        className={`${
          Images.length > 0 ? "hidden" : "flex mb-5 justify-center"
        }`}
      >
        <button
          className=" bg-green-600 text-white p-4 rounded m-2"
          onClick={getImages}
        >
          Load Images
        </button>
      </div>

      <div className={`bg-red-200 h-full ${Images.length > 0 ? "hidden" : "block"}`}></div>
    </>
  );
};

export default NextApp;
