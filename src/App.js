import React from "react";
import MainPage from "./pages/MainPage";
import GlobalStyle from "./components/Globalstye";
import { BrowserRouter } from "react-router-dom";
//Router

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle />

        <MainPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
