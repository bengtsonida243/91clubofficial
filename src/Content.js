import React from "react";
import Icon from "./image/cropped-91-Club-Official-Favicon.webp";
import Image1 from "./image/91_Club_5D_Lotre_Number_Prediction_Game.webp";
import Image2 from "./image/91_Club_K3_Lotre_Number_Prediction_Game.webp";
import Image3 from "./image/91_Club_TRX_Hash_Colour_Prediction_Game.webp";
import Image4 from "./image/91_Club_Wingo_Colour_Prediction_Game.webp";
import "./Content.css";

const Content = () => {
  const images = [
    { id: 1, src: Image1, alt: "image1" },
    { id: 2, src: Image2, alt: "image2" },
    { id: 3, src: Image3, alt: "image3" },
    { id: 4, src: Image4, alt: "image4" },
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
        <img src={Icon} alt="icon" className="img-fluid icon-style d-flex mx-auto" />
        <h1 className="text-center">91 Club Official</h1>
      </div>
      <div className="row">
            {images.map((image) => (
            
                <div className="col-lg-6 mb-4">
                    <img key={image.id} src={image.src} className="img-fluid img-game" alt={image.alt} />
                </div>
            
            ))}
     </div>
      
       <div className="row d-flex justify-content-center">
            {buttons.map((btn) => (
                 <button className="my-2 button-color" key={btn.id}src={btn.link}>{btn.text}</button>
            
            ))}
        </div>
      
    </div>
  );
}

export default Content;
