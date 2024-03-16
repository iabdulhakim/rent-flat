const Product = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center pl-[15px] pr-[15px] pt-6">
      <h1 className="text-[#458BD1] text-center font-bold text-[24px]">
        Квартира на сутки в Минске
      </h1>
      <div className="flex gap-3 items-center pt-2 md:items-center">
        <p className="text-gray-400">24.10.2019 - 05.11.2019</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="23"
          viewBox="0 0 21 23"
          fill="none"
        >
          <path
            d="M17.875 3.37988H3.875C2.77043 3.37988 1.875 4.27531 1.875 5.37988V19.3799C1.875 20.4845 2.77043 21.3799 3.875 21.3799H17.875C18.9796 21.3799 19.875 20.4845 19.875 19.3799V5.37988C19.875 4.27531 18.9796 3.37988 17.875 3.37988Z"
            stroke="#458BD1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.875 1.37988V5.37988"
            stroke="#458BD1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.875 1.37988V5.37988"
            stroke="#458BD1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.875 9.37988H19.875"
            stroke="#458BD1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="text-gray-400 flex items-center pt-7">
        <p className="text-[14px] mr-1 md:mt-[-20px] cursor-pointer">Сначала новые</p>
        <svg 
        className="mr-[30px] md:mt-[-20px]"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
        >
          <path
            d="M0.875 1.37988L5.875 6.37988L10.875 1.37988"
            stroke="#458BD1"
            stroke-width="1.4"
          />
        </svg>
        <button className="bg-[#458BD1] pt-[7px] md:mt-[-20px] pb-[7px] pl-5 pr-4 text-white font-semibold rounded-l-[20px] border border-[#458BD1]">Список</button>
        <button className="bg-white pt-[7px] pb-[7px] md:mt-[-20px] pl-5 pr-7 text-[#458BD1] font-semibold rounded-r-[20px] border border-[#458BD1]">Карта</button>
      </div>
      <p className="text-end mt-5 text-gray-400 text-[10px] md:hidden">Найдено результатов: <span className="text-[#458BD1] font-semibold">285</span></p>
    </div>
  );
};

export default Product;
