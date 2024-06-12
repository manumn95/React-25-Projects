import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

const ImageSlider = ({ url, limit = 5 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchImages = async (getUrl) => {
    try {
      const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    if (url) {
      setLoading(true);
      fetchImages(url);
    }
  }, [url]);

  useEffect(() => {
    console.log("Fetched images:", images);
  }, [images]);

  if (loading) {
    return (
      <div className="loading-container">
        <h1>Loading....</h1>
      </div>
    );
  }

  const handlePrevious = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="slider-container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={image.id}
            alt={`Slide ${index}`}
            src={image.download_url}
            className={
              currentSlide === index ? "current-image" : "hide-current-image"
            }
          />
        ))}
      </div>
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <div className="circle-indicator">
        {images.map((_, index) => (
          <button
            key={index}
            className={
              currentSlide === index
                ? "indicator active-indicator"
                : "indicator"
            }
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
