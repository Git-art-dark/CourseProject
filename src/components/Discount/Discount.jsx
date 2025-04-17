import { useState, useEffect } from "react";
import { carousel1, carousel2, carousel3 } from "../../imports";

export default function Discount({ classNameFlag_1, className }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselImage, setCarouselImage] = useState(carousel1);

  const images = [carousel1, carousel2, carousel3];
  console.log(classNameFlag_1)
  const classNameFlag = classNameFlag_1 ? " display-none-flag" : "";
  const classNameWidth = className ? " width" : "";

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        setCarouselImage(images[nextIndex]);
        return nextIndex;
      });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  function ButtonCarousel({ index }) {
    const handleClick = () => {
      setActiveIndex(index);
      setCarouselImage(images[index]);
    };

    const rectClass = activeIndex === index ? "active" : "";

    return (
      <button className="carousel-button" onClick={handleClick}>
        <svg
          width="130"
          height="9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="128"
            height="7"
            rx="3.5"
            fill="#fff"
            stroke="#000"
            strokeWidth="2"
            className={rectClass}
          />
        </svg>
      </button>
    );
  }

  return (
    <>
      <div className={"discount-flags" + classNameFlag}></div>
      <div className={"discount-main-screen" + classNameWidth}>
        <h1 className="main-h1 arsenal-sc-bold">Акции</h1>

        <div className="carousel-images">
          {/* <ButtonDiscount className='discount-button left'></ButtonDiscount> */}
          <a href="https://23.rosguard.gov.ru/page/index/voennaya-sluzhba-po-kontraktu-v-podrazdeleniyax-yuzhnogo-okruga-vojsk-nacionalnoj-gvardii-rossijskoj-federacii">
            <img src={carouselImage} alt="carousel" />
          </a>
          {/* <ButtonDiscount className='discount-button right'></ButtonDiscount> */}
        </div>

        <div className="carousel-button-discount">
          <ButtonCarousel index={0} />
          <ButtonCarousel index={1} />
          <ButtonCarousel index={2} />
        </div>
      </div>
      <div className={"discount-flags bottom" + classNameFlag}></div>
    </>
  );
}
