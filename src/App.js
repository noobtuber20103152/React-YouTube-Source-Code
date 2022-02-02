
import './App.css';
import Navbar from './components/Navbar';
import Video from './components/Video';
// import { render } from "react-dom";
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [bgColor, SetbgColor] = useState('light')
  const [TextColor, SetTextColor] = useState({
    color: "black"
  })
  const [DarkText, SetDarkText] = useState('dark');
  const ChangeMode = function () {
    if (bgColor == "light") {
      SetbgColor('dark');
      SetTextColor({
        color: "white"
      });
      SetDarkText('light')
      document.body.style.backgroundColor = "rgb(32, 37, 41)";
    }
    else {
      SetbgColor('light');
      SetTextColor({
        color: "black"
      });
      SetDarkText('dark')
      document.body.style.backgroundColor = "#edf1f3";
    
    }
  }
  return (
    <>
      <Navbar darkMode="light" DarkText={DarkText} TextColor={TextColor} bgColor={bgColor} ChangeMode={ChangeMode} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Video key='cricket' bgColor={bgColor} TextColor={TextColor} category="" />} />
          <Route path="/gaming" element={<Video key='gaming'  bgColor={bgColor} TextColor={TextColor} category="latest hindi gaming" />} />
          <Route path="/cricket" element={<Video key='cricket' bgColor={bgColor}  TextColor={TextColor} category="latest hindi cricket" />} />
          <Route path="/football" element={<Video key='football' bgColor={bgColor}  TextColor={TextColor} category="football" />} />
          <Route path="/bgmi" element={<Video key='pubg' bgColor={bgColor}  TextColor={TextColor} category="latest hindi BGMI" />} />
          <Route path="/callofduty" element={<Video key='callofduty' bgColor={bgColor} TextColor={TextColor} category="latest hindi callofduty" />} />
          <Route path="/coding" element={<Video key='coding' bgColor={bgColor} TextColor={TextColor} category="latest hindi coding" />} />
          <Route path="/music" element={<Video key='music' bgColor={bgColor} TextColor={TextColor} category="latest hindi song" />} />
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
