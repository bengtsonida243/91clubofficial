import React from "react";
import Icon from "./image/cropped-91-Club-Official-Favicon.webp";
import Image1 from "./image/91_Club_5D_Lotre_Number_Prediction_Game.webp";
import Image2 from "./image/91_Club_K3_Lotre_Number_Prediction_Game.webp";
import Image3 from "./image/91_Club_TRX_Hash_Colour_Prediction_Game.webp";
import Image4 from "./image/91_Club_Wingo_Colour_Prediction_Game.webp";
import "./Content.css";

import History from "./History";


const Content = () => {
  const images = [
    { id: 1, src: Image1, alt: "91 Club | 5D Lotre Number Prediction Game" },
    { id: 2, src: Image2, alt: "91 Club | K3 Lotre Number Prediction Game" },
    { id: 3, src: Image3, alt: "91 Club | TRX Hash Colour Prediction Game" },
    { id: 4, src: Image4, alt: "91 Club | Wingo Colour Prediction Game" },
  ];

  const buttons = [
    { id: 1, text: "Log In", link: "image1" },
    { id: 2, text: "Register", link: "image2" },
    { id: 3, text: "Deposit Now", link: "image3" },
    { id: 4, text: "Official Site", link: "image4" },
    { id: 5, text: "Contact Us", link: "image4" },
  ];


  return (
    <div className="container">
      <div className="row">
        <img src={Icon} alt="icon" className="img-fluid icon-style d-flex mx-auto mt-3" />
        <h1 className="text-center">91 Club Official</h1>
      </div>
      <div className="row">
            {images.map((image) => (
            
                <div className="col-lg-6 mb-4">
                    <img key={image.id} src={image.src} className="img-fluid img-game" alt={image.alt} />
                </div>
            
            ))}
     </div>
       <div className="row d-flex">
            <div className="col my-auto">
                 <History/>
            </div>
            <div className="col">
               <div className="row justify-content-center">
                    {buttons.map((btn) => (
                        <button className="my-2 button-color" key={btn.id}src={btn.link}>{btn.text}</button>
                    
                    ))}
               </div>
            </div>
      </div>
      <footer className="d-flex justify-content-center mt-5">
        <p className="text-light">91 Club Official | All Rights Reserved.</p>
      </footer>
      
    </div>
  );
}

export default Content;
