import React from "react";
import Icon from "./image/cropped-91-Club-Official-Favicon.webp";
import Image1 from "./image/91_Club_5D_Lotre_Number_Prediction_Game.webp";
import Image2 from "./image/91_Club_K3_Lotre_Number_Prediction_Game.webp";
import Image3 from "./image/91_Club_TRX_Hash_Colour_Prediction_Game.webp";
import Image4 from "./image/91_Club_Wingo_Colour_Prediction_Game.webp";
import Image5 from "./image/91_Club_Question.webp";
import Image6 from "./image/game-9-svgrepo-com.svg";
import Image7 from "./image/91Club-Official-Banner.webp";
import "./Content.css";

import History from "./History";


const Content = () => {
  const images = [
    { id: 1, src: Image1, alt: "91 Club | 5D Lotre Number Prediction Game", link:"https://91clubofficial.fun/5d-lotre-number-prediction-game/" },
    { id: 2, src: Image2, alt: "91 Club | K3 Lotre Number Prediction Game", link:"https://91clubofficial.fun/k3-lotre-number-prediction-game/" },
    { id: 3, src: Image3, alt: "91 Club | TRX Hash Colour Prediction Game", link:"https://91clubofficial.fun/trx-hash-colour-prediction-game/" },
    { id: 4, src: Image4, alt: "91 Club | Wingo Colour Prediction Game", link:"https://91clubofficial.fun/wingo-colour-prediction-game/" },
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
        <h1 className="text-center">Welcome to 91 Club Official</h1>
      </div>
      <div className="row d-flex my-5">
        <div className="col my-auto">
          <h2 className="red">What is 91 Club?</h2>
          <p>Welcome to <a href="https://91clubofficial.fun/" target="_blank">91 Club Official</a>, where gaming is more than just a pastime—it's a lifestyle. 91 Club Official is an exciting online platform dedicated to the dynamic world of color prediction games, which have quickly become a popular activity among gaming enthusiasts in India. Our platform acts as a digital bridge between tradition and the future, providing a distinct blend of historic gaming pleasure and the seamless convenience of modern technology.</p>
        </div>
        <div className="col">
          <img  src={Image5} className="img-fluid" alt="91 Club | Questions" />
        </div>
      </div>
      <div className="row d-flex my-5">
      <img  src={Image6} className="img-fluid img-icon" alt="91 Club | Game" />
        <h2 className="white text-center">91 CLUB TOP GAMES</h2>
        <div className="col my-auto">
          <h3 className="white">Colour Prediction Game</h3>
          <p>In this simple but entertaining game, try your luck by predicting the color sequence. The <a href="https://91clubofficial.fun/top-games/" target="_blank">Colour Prediction Game</a> boasts vivid and appealing designs, as well as multiple ways to win, making it a popular choice for gamers looking for both pleasure and quick success.</p>
        </div>
        <div className="col">
          <img  src={Image7} className="img-fluid img-banner" alt="91 Club | Banner" />
        </div>
      </div>
      <div className="row">
            {images.map((image) => (
                <div className="col-lg-6 mb-4">
                  <a href={image.link} target="_blank" rel="noopener noreferrer">
                    <img key={image.id} src={image.src} className="img-fluid img-game" alt={image.alt} />
                    </a>
                </div>
            
            ))}
     </div>
       <div className="row d-flex">
            <div className="col my-auto">
                  <h2>Betting Info:</h2>
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
