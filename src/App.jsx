import Qrcode from "./components/Qrcode";
import "./App.css";
const App = () => {
  const portfolioUrl = "https://portfolio-7ufr.vercel.app/";

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My Portfolio</h1>
          <Qrcode url={portfolioUrl} />
        </header>
      </div>
    </>
  );
};

export default App;
