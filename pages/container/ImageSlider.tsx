import { StaticImageData } from "next/image";
import react, { useState } from "react";
import styles from "../../styles/Home.module.scss";

type Props = {
  arraySlides: Array<String>
};

const ImageSlider = ({ arraySlides } : Props) => {
  const slides = arraySlides || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  function goToPrevious() {
    const isFirstSlide: boolean = currentIndex === 0;
    const newIndex: number = (isFirstSlide ? slides.length - 1 : currentIndex - 1);
    
    setCurrentIndex(newIndex);
  };
  function goToNext() {
    const isLastSlide: boolean = currentIndex === slides.length - 1;
    const newIndex: number = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  function goToSlide(slideIndex: number) {
    setCurrentIndex(slideIndex);
  };

const slideStylesWidthBackground = {
    container: {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${slides[currentIndex]})`
    } as React.CSSProperties,
}

  return (
    <div className={styles.sliderStyles}>
      <div>
        <div onClick={goToPrevious} className={styles.leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} className={styles.rightArrowStyles}>
          ❱
        </div>
      </div>
    <div style={slideStylesWidthBackground.container}>
            
    </div>
      <div className={styles.dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            className={styles.dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
