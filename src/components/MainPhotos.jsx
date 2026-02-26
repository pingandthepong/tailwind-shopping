import React from "react";
import Images01 from "../../public/shop_detail_01.webp";
import Images02 from "../../public/shop_detail_02.jpg";
import Images03 from "../../public/shop_detail_03.jpg";

const MainPhotos = () => {
  return (
    <div className="flex gap-4 mt-2 mb-8 ">
      <div className="basis-1/3 overflow-hidden">
        <img
          src={Images01}
          alt="image 1"
          className="transition-all duration-300 ease-in-out scale-100 hover:scale-110"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="basis-1/3 overflow-hidden">
        <img
          src={Images03}
          alt="image 2"
          className="transition-all duration-300 ease-in-out scale-100 hover:scale-110"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="basis-1/3 overflow-hidden">
        <img
          src={Images02}
          alt="image 3"
          className="transition-all duration-300 ease-in-out scale-100 hover:scale-110"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default MainPhotos;
