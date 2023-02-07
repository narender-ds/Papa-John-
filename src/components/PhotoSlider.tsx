import * as React from "react";
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const PhotoSlider = (props: any) => {
  const { photos, height, width } = props;
  const photo =
    photos &&
    photos.map((element: any) => (
      <SplideSlide>
        <img className="Photogalleryimg" height="" width="" src={element.url} />
      </SplideSlide>
    ));

  return (
    <>
      {photos ? (
        <>
          <h3 className="heading text-center sec_heading">PHOTO GALLERY</h3>
          <div className="Photogallery">{photo}</div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default PhotoSlider;
