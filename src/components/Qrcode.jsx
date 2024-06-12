import QRCode from "qrcode.react";
const Qrcode = ({ url }) => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          border: "1px soild black",
          outline: "none",
        }}
      >
        <h2>Scan this QR Code to visit my portfolio</h2>
        <QRCode
          value={url}
          size={256} // size of the QR code
          bgColor="#ffffff" // background color
          fgColor="#000000" // foreground color
          level="H" // error correction level ('L', 'M', 'Q', 'H')
          includeMargin={false} // include margin
        />
      </div>
    </>
  );
};

export default Qrcode;
