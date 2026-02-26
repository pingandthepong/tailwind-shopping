import React from "react";

const ProductDescription = ({ data }) => {
  return (
    <div className="basis-2/3">
      <h2 className="text-3xl font-bold mb-6">{data.title}</h2>

      <ul>
        {data.characteristic.map((item, id) => (
          <li key={id} className="text-lg before:content-['-'] before:mr-2">
            {item}
          </li>
        ))}
      </ul>

      <div className="my-12">
        <h3 className="text-xl font-bold mb-2">소재</h3>
        <ul>
          {data.subject.map((item, id) => (
            <li key={id} className="text-lg">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="my-12">
        <h3 className="text-xl font-bold mb-2">사이즈</h3>
        <ul>
          {data.size.map((item, id) => (
            <li key={id} className="text-lg">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 before:content-['*'] before:mr-1">{data.notice}</p>
      </div>

      <div className="my-12">
        <h3 className="text-xl font-bold mb-2">모델 착용 컬러</h3>
        <p className="text-lg">{data.modelColor}</p>
      </div>
    </div>
  );
};

export default ProductDescription;
