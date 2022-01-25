import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css'


const CarouselComponent = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src='https://m.media-amazon.com/images/I/61eDLBa-zCL._SX3000_.jpg' />
        </div>
        <div>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' />
        </div>
        <div>
          <img src='https://m.media-amazon.com/images/I/716uwHcOuPL._SX3000_.jpg' />
        </div>
      </Carousel>
    </div>
  )
};

export default CarouselComponent