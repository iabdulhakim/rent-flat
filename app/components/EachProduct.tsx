const EachProduct = () => {
  return (
    <div className="">
      <div className="product-wrapper mt-7 h-[280px]">
        <div className="flex justify-between items-center">
          <div className="bg-white w-[95px] pt-2 pb-4">
            <h2 className="text-[#458BD1] text-[20px] text-center font-bold">
              9899<span className="text-gray-500 text-[10px]">BYN</span>
            </h2>
            <p className="text-gray-400 text-[10px] text-center">за сутки</p>
          </div>
          <div className="bg-[#211a1dbf] pl-[10px] pr-[13px] mr-3">
            <p className="text-[#F0F0F0] text-[12px]">
              <span className="text-yellow-400 text-[18px] font-bold">1</span>
              -комнатная
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white pl-3 pr-3">
        <h2 className="text-[#458BD1] pl-3 pt-1 text-[18px]">
          Ул. Петра Мстиславца, 24
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="">
              <p className="text-[14px] mt-2">
                Спальных мест: <span className="text-[#458BD1]">2</span>
              </p>
            </span>
            <span className="">
              <p className="text-[14px]">
                Комнат: <span className="text-[#458BD1]">1</span>
              </p>
            </span>
          </div>
          <div className="flex flex-col">
            <a
              href="#"
              className="text-gray-500 flex items-center self-end text-[14px] underline"
            >
              <span className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                >
                  <path
                    d="M6.375 0.379883C3.34228 0.379883 0.875 2.90287 0.875 6.00402C0.875 9.85265 5.79696 15.5027 6.00652 15.7413C6.20335 15.9655 6.54701 15.9651 6.74348 15.7413C6.95304 15.5027 11.875 9.85265 11.875 6.00402C11.8749 2.90287 9.40769 0.379883 6.375 0.379883ZM6.375 8.83369C4.84916 8.83369 3.60784 7.56431 3.60784 6.00402C3.60784 4.44374 4.84919 3.17439 6.375 3.17439C7.90081 3.17439 9.14213 4.44377 9.14213 6.00405C9.14213 7.56434 7.90081 8.83369 6.375 8.83369Z"
                    fill="#458BD1"
                  />
                </svg>
              </span>
              Маяк Минска
            </a>
            <a
              href="#"
              className="text-gray-500 flex items-center text-[14px] underline"
            >
              <span className="mr-1">
                <img src="./logo-metro.svg" alt="" className="" />
              </span>
              Восток (0,24km)
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center pb-6">
          <button className="border border-[#458BD1] text-[#458BD1] hover:bg-[#458BD1] hover:text-white mt-4 text-[14px] pt-2 pb-2 pr-[44px] pl-[44px]">
            Связаться
          </button>
          <div className="flex gap-3 items-center">
            <img src="./viber.svg" alt="" />
            <img src="./whatsapp.svg" alt="" />
            <img src="./telegram.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
