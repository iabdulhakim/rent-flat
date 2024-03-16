const EachProduct = () => {
  return (
    <div className="">
      <div className="product-wrapper mt-2 h-[280px]">
        <div className="flex justify-between items-center">
          <div className="bg-white w-[95px] pt-2 pb-4">
            <h2 className="text-[#458BD1] text-[20px] text-center font-bold">
              9899<span className="text-gray-500 text-[10px]">BYN</span>
            </h2>
            <p className="text-gray-400 text-[10px] text-center">за сутки</p>
          </div>
          <div className="bg-[#211a1dbf] pl-[10px] pr-[13px] mr-3">
            <p className="text-[#F0F0F0] text-[12px]">
              <span className="text-yellow-400 text-[18px] font-bold">1</span>-комнатная
            </p>
          </div>
        </div>
        
      </div>
      <div className="">
            <h2 className="text-[#458BD1] pl-3 pt-1 text-[18px]">Ул. Петра Мстиславца, 24</h2>
            <div className="flex">
                <span className="">
                    <p className="">Спальных мест: <span className="2"></span></p>
                </span>
                <span className=""></span>
            </div>
        </div>
    </div>
  );
};

export default EachProduct;
