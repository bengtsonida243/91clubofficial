import React, { useEffect, useRef } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './App.css';

function History() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      origin: "center",
      perView: 2,
      spacing: 15,
    },
    vertical: true,
  })

  const intervalRef = useRef(null)

  useEffect(() => {
    // Set up the interval to auto-slide
    intervalRef.current = setInterval(() => {
      if (slider.current) {
        slider.current.next()
      }
    }, 2000) // Change slide every 2 seconds

    // Clear the interval on component unmount
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [slider])

  return (
    <div ref={sliderRef} className="keen-slider" style={{ height: 300 }}>
      <div className="keen-slider__slide number-slide1">1</div>
      <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div>
    </div>
  );
}

export default History;