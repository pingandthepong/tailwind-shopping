import "./App.css";
import Menu from "./components/Menu.jsx";
import MainPhotos from "./components/MainPhotos.jsx";
import ProductDescription from "./components/ProductDescription.jsx";
import Order from "./components/Order.jsx";

const data = {
  title: "[2 PACK] Base Crop Tee_10colors",
  characteristic: [
    "과하지 않은 세미 크롭 기장으로 팬츠 위로 자연스럽게 떨어지는 실루엣",
    "단품으로도, 가디건･니트･맨투맨 안에 레이어링하기에도 좋은 베이직 아이템",
    "몸에 달라붙지 않고 자연스럽게 흐르는 핏으로 다양한 코디의 베이스가 되는 실루엣",
  ],
  subject: ["Cotton 100%", "Made in Korea"],
  size: [
    "FREE(cm)",
    "가슴 46",
    "밑단 43.5",
    "어깨 39.5",
    "암홀 20.5",
    "소매길이 18",
    "소매입구 15.8",
    "앞 총장(옆목 기준) 51",
  ],
  notice:
    "상세사이즈는 단면(cm) 기준이며, 측정 방법에 따라 오차가 있을 수 있습니다.",
  modelColor: "white",
  colorOptions: [
    { "Baby Pink": "#D1C1CC" },
    { "Apple Green": "#78BC8F" },
    { Charcoal: "#2B2B2E" },
    { "Light Melange": "#CDCCD5" },
    { White: "#E7E6EE" },
    { Cream: "#D3D1CC" },
    { Black: "#1C1B1F" },
    { "Vintage Violet": "#5E5374" },
    { "Sky Blue": "#B2BED0" },
    { "Brick Brown": "#623737" },
  ],
  price: 48450,
  sizeOptions: [
    { XXS: 0 },
    { XS: 3 },
    { S: 3 },
    { M: 3 },
    { L: 3 },
    { XL: 3 },
    { XXL: 3 },
    { XXXL: 3 },
  ],
};

function App() {
  return (
    <>
      <div className="px-16 py-8">
        <Menu />
        <MainPhotos />

        <div className="flex pt-6">
          <ProductDescription data={data} />
          <Order data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
