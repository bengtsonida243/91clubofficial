import React, { useState, useEffect } from 'react';
import "./ProfileAvatar.css";
import Image1 from "./image/asset1.webp";
import Image2 from "./image/asset2.webp";
import Image3 from "./image/asset3.webp";
import Image4 from "./image/asset4.webp";
import Image5 from "./image/asset5.webp";
import Image6 from "./image/asset6.webp";
import Image7 from "./image/asset7.webp";
import Image8 from "./image/asset8.webp";
import Image9 from "./image/asset9.webp";



const ProfileAvatar = () => {

    const images = [
        { id: 1, random: Image1 },
        { id: 2, random: Image2 },
        { id: 3, random: Image3 },
        { id: 4, random: Image4 },
        { id: 5, random: Image5 },
        { id: 6, random: Image6 },
        { id: 7, random: Image7 },
        { id: 8, random: Image8 },
        { id: 9, random: Image9 }
    ];

    const [randomImage, setRandomImage] = useState("");

    useEffect(() => {
        const getRandomImage = () => {
            const randomIndex = Math.floor(Math.random() * images.length);
            return images[randomIndex].random;
        };
        setRandomImage(getRandomImage());
    }, []);
    const randomValue = Math.floor(Math.random() *1000);
    const generateRandomString = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
      };
      const randomString = generateRandomString(3);

  return (
    
      <div className="row">
        <div class="col">
              <img src={randomImage} alt="Random" />
        </div>
        <div className="col my-auto text-center">
            <p className="member"> Mem***{randomString} </p>
        </div>
        <div className='col my-auto'>
            <p className="received"> Received ₹{randomValue}.00  Winning Amount</p>
        </div>
      </div>
      
     
    
   
  );
};

export default ProfileAvatar;
