import { StaticImageData } from "next/image";
import react, { useState } from "react";
import styles from "../../styles/Home.module.scss";

type Props = {
  slides: Array<String>
};

const ImageSlider = ({ slides} : Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: number) => {
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
    }as React.CSSProperties,
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
