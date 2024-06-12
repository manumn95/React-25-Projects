import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";
const Star = ({ noOFStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <>
      <div
        className="star-rating"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        {[...Array(noOFStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              className={index <= (hover || rating) ? "active" : "inactive"}
              key={index}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            ></FaStar>
          );
        })}
      </div>
    </>
  );
};

export default Star;
