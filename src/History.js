import React, { useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import './App.css';
import ProfileAvatar from "./ProfileAvatar";

const History = () => {
  const sliders = [];
  for (let i = 1; i <= 100; i++) {
    sliders.push({ id: i, keen: `keen-slider__slide number-slide1` });
  }

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      origin: "center",
      perView: 2,
      spacing: 15,
    },
    vertical: true,
  });

  const intervalRef = useRef(null);

  useEffect(() => {
    // Set up the interval to auto-slide
    intervalRef.current = setInterval(() => {
      if (slider.current) {
        slider.current.next();
      }
    }, 2000); // Change slide every 2 seconds

    // Clear the interval on component unmount
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [slider]);

  return (
    <div
      ref={sliderRef}
       className="keen-slider no-pointer-events"
      style={{ height: 300, overflow: "hidden" }}
     >  
      <h3 className="text-light">Winning Info</h3>
      {sliders.map((slide) => (
      
        <div key={slide.id} className={slide.keen}>
          <ProfileAvatar />
        </div>
      ))}
    </div>
  );
};

export default History;
