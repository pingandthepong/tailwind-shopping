import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import RadioSelect from "./RadioSelect.jsx";

const Order = ({ data }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="pl-8">
      <p className="text-4xl">{Intl.NumberFormat().format(data.price)}원</p>
      <div className="flex items-center gap-2 mt-4 mb-16">
        <div className="flex gap-0.5">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          {/* <FaStar color="lightGray" /> */}
        </div>
        <div className="text-indigo-700 underline cursor-pointer">
          65개 리뷰 보기
        </div>
      </div>

      <form
        action=""
        className="flex flex-col gap-16"
        onSubmit={(e) => handleSubmit(e)}>
        <RadioSelect data={data} title="color" subject={data.colorOptions} />
        <RadioSelect data={data} title="size" subject={data.sizeOptions} />

        <button
          type="submit"
          className="h-16 bg-indigo-600 rounded-sm text-white text-xl cursor-pointer hover:bg-indigo-700 transition-all duration-300">
          Add to bag
        </button>
      </form>
    </div>
  );
};

export default Order;
