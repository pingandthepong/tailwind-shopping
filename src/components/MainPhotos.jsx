import React from "react";
import Images01 from "../../public/shop_detail_01_960.webp";
import Images02 from "../../public/shop_detail_02_960.webp";
import Images03 from "../../public/shop_detail_03_960.webp";

const MainPhotos = () => {
  const imgWrapBase = "basis-1/3 aspect-square overflow-hidden";
  const pictureBase = "w-full h-full object cover";
  const imgBase =
    "w-full h-full object cover transition-scale duration-300 ease-in-out scale-100 hover:scale-110";

  return (
    <div className="flex gap-4 mt-2 mb-8 ">
      <div className={imgWrapBase}>
        <picture className={pictureBase}>
          <source srcset={Images01} type="image/webp" />
          <img src={Images01} alt="image 1" className={imgBase} />
        </picture>
      </div>
      <div className={imgWrapBase}>
        <picture className={pictureBase}>
          <source srcset={Images03} type="image/webp" />
          <img src={Images03} alt="image 2" className={imgBase} />
        </picture>
      </div>
      <div className={imgWrapBase}>
        <picture className={pictureBase}>
          <source srcset={Images02} type="image/webp" />
          <img src={Images02} alt="image 3" className={imgBase} />
        </picture>
      </div>
    </div>
  );
};

export default MainPhotos;
