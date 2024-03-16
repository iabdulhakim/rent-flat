import Down from "./components/Down";
import EachProduct from "./components/EachProduct";
import Footer from "./components/Footer";
import Header from "./components/Header";
import How from "./components/How";
import Next from "./components/Next";
import Products from "./components/Products";

export default function Home() {
  return (
    <div className="container bg-[#F2F2F2]">
      <Header />
      <Products />
      <div className="pr-[15px] pl-[15px]">
        <EachProduct />
        <EachProduct />
        <EachProduct />
        <EachProduct />
        <EachProduct />
      </div>
      <Next />
      <How />
      <Down />
      <Footer />
    </div>
  );
}
