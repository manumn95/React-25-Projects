import { useEffect, useState } from "react";

const Random = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorUtility = (length) => {
    console.log(Math.floor(Math.random() * length));
    return Math.floor(Math.random() * length);
  };

  const handleRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  };
  const handleRandomHexColor = () => {
    let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") handleRandomRgbColor();
    else handleRandomHexColor();
  }, [typeOfColor]);

  return (
    <>
      <div
        className="container"
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: color,
          textAlign: "center",
        }}
      >
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={
            typeOfColor === "hex" ? handleRandomHexColor : handleRandomRgbColor
          }
        >
          Generate Random Color
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",

            alignItems: "center",
            fontSize: "60px",
            marginTop: "50px",
            color: "white",
          }}
        >
          <h3>{typeOfColor === "rgb" ? "RGB color" : "HEX color"}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    </>
  );
};

export default Random;
