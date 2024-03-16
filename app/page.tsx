import Down from "./components/Down";
import EachProduct from "./components/EachProduct";
import EachProductThree from "./components/EachProductThree";
import EachProductTwo from "./components/EachProductTwo";
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
      <div className="md:hidden pr-[15px] pl-[15px]">
        <EachProduct />
        <EachProduct />
        <EachProduct />
        <EachProduct />
      </div>
      <div className="hidden md:flex gap-[30px]">
        <div className="pl-[15px]">
        <EachProduct />
        <EachProduct />
        <EachProduct />
        <EachProduct />
        </div>
        <div className="">
        <EachProductTwo />
        <EachProductTwo />
        <EachProductTwo />
        <EachProductTwo />
        </div>
        <div className="">
        <EachProductThree />
        <EachProductThree />
        <EachProductThree />
        <EachProductThree />
        </div>
      </div>
      <Next />
      <How />
      <Down />
      <Footer />
    </div>
  );
}
