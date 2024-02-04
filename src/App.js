import data from "./data"
import './App.css';
import { useState } from "react";


import React, { useEffect } from 'react';

function App() {
  const [trans, setTrans] = useState(0);
  const [currentImg, setCurrentImg] = useState(0);
  let timeout;

  const changeImageHandler = (currentImage) => {
    const newTranslate = currentImage * 100;
    setTrans(newTranslate);
  };

  useEffect(() => {
    timeout = setTimeout(() => {
      if (currentImg + 1 < data.length) {
        setCurrentImg((prev) => prev + 1);
      } else {
        setCurrentImg(0);
      }
      changeImageHandler(currentImg);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [currentImg]);

  return (
    <div className="App">
      <section className="App-header">
        {data.map((dat, index) => (
          <div key={index}>
      
            <img
              src={dat.img}
              alt="data not found"
              className="image"
              style={{ transform: `translate(-${trans}vw)` }}
            />
            
          </div>
          
        ))}
      </section>
     
    </div>
  );
}

export default App;

