import EachProduct from "./components/EachProduct";
import Header from "./components/Header";
import Products from "./components/Products";

export default function Home() {
  return (
    <div className="container bg-[#F2F2F2]">
      <Header />
      <Products />
      <div className="pr-[15px] pl-[15px]">
        <EachProduct />
      </div>
    </div>
  );
}
