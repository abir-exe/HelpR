import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import AllPlayers from "./components/AlllPlayers/AllPlayers";
import Footer from "./components/Footer/Footer";
import NewsLetter from "./components/newsLetter/NewsLetter";

function App() {
  const [coins, setCoins] = useState(0);

  return (
    <div>
      <Header coins={coins} setCoins={setCoins} />
      <AllPlayers coins={coins} setCoins={setCoins} />

      {/* Newsletter section positioned halfway down the footer */}

      {/* <NewsLetter /> */}

      <Footer />
    </div>
  );
}

export default App;
{
  /* <div className="absolute left-0 right-0 top-[calc(390vh-200px)] flex justify-center"></div>  */
}
