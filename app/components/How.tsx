const How = () => {
  return (
    <div className="bg-white pl-[15px] pr-[15px]">
      <h1 className="text-[24px] pl-4 pt-[50px] bg-white font-semibold mt-8">
        Как снять квартиру на сутки <br /> в Минске?
      </h1>
      <div className="md:flex ">
        <div className="loc1 pt-[36px] md:pt-[80px]">
          <h1 className="text-[#458BD1] font-bold md:pl-0 pl-[40px] text-[54px] ">
            1<span className="text-[20px] ml-2">Позвонить</span>
          </h1>
          <p className="text-[14px] md:pl-9 pl-[75px]">
            На нашем сайте размещены прямые телефоны, актуальная информация{" "}
            <br /> и реальная цена аренды.
          </p>
        </div>
        <div className="loc1 pt-[36px]">
          <h1 className="text-[#458BD1] font-bold pl-[73px] text-[29px] ">
            2<span className="text-[20px] ml-2">Договориться</span>
          </h1>
          <p className="text-[14px] pl-[100px] md:w-[360px]">
            Договориться Согласуйте время заезда и выезда, уточните стоимость
            оплаты и условия заселения, возможность выдачи отчетных документов.
          </p>
        </div>
        <div className="loc1 pt-[20px] md:pl-[35px] md:pt-[55px]">
          <h1 className="text-[#458BD1] font-bold pl-[35px] text-[45px] ">
            3<span className="text-[20px] ml-2">Заселиться</span>
          </h1>
          <p className="text-[14px] pl-[73px]">
            Заселиться Договорившись с владельцем <br /> о предоплате или залоге (в
            случае необходимости) и забронировав квартиру, не забудьте взять с
            собой паспорт.
          </p>
        </div>
      </div>
    </div>
  );
};

export default How;
