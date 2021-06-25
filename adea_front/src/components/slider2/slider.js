import "./slider.css";
import ImageGallery from "react-image-gallery";
import ban from "../../assets/img/ban.png";
import ban1 from "../../assets/img/ban3.png";
import ban3 from "../../assets/img/ban2.png";
import ban4 from "../../assets/img/ban1.png";
import ban5 from "../../assets/img/ban5.png";
const images = [
  {
    original: ban1,
    originalClass: "img-max",
  },
  {
    original: ban,
    originalClass: "img-max",
  },
  {
    original: ban3,
    originalClass: "img-max",
  },
  {
    original: ban4,
    originalClass: "img-max",
  },
  {
    original: ban5,
    originalClass: "img-max",
  },
];
const Slider = () => {
  return (
    <>
      <div className={"container-slider"}>
        <div className={"sub-container-slider"}>
          <ImageGallery
            showBullets={false}
            showIndex={false}
            autoPlay={true}
            showThumbnails={false}
            slideDuration={3000}
            slideInterval={8000}
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
            items={images}
          />
        </div>
      </div>
    </>
  );
};
export default Slider;
