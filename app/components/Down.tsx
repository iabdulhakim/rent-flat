const Down = () => {
  return (
    <div className="pl-[15px] pr-[15px] bg-white pb-6 pt-[56px]">
      <nav className="flex flex-wrap md:gap-[60px] gap-7">
        <a href="#" className="font-light hover:underline text-[14px]">
          Квартиры на сутки
        </a>
        <a href="#" className="font-light hover:underline text-[14px]">
          Аренда авто
        </a>
        <a href="#" className="font-light hover:underline text-[14px]">
          Коттеджи
        </a>
        <a href="#" className="font-light hover:underline text-[14px]">
          Почасовые
        </a>
        <a href="#" className="font-light hover:underline text-[14px]">
          Блог
        </a>
        <a href="#" className="font-light hover:underline text-[14px]">
          Добавить объявление
        </a>
      </nav>
      <div className="mt-10">
        <div className="flex items-center md:justify-start justify-between">
          <img src="./logo-metro-big.svg" alt="" className="md:mr-10" />
          <p className="text-gray-400 md:block hidden w-[400px] text-[10px] mt-7">
        ООО «Название», РБ, г. Минск, пр-т Победителей, д.85, 8 эт., офис 845
        Зарегистрировано Мингорисполкомом 26.02.14 за номером 192223896
      </p>
          <button className="bg-[#FFDF42] md:hidden px-6 py-[10px] text-[14px] hover:bg-black hover:text-[#FFDF42] rounded-[35px]">
            Связаь с администрацией
          </button>
        </div>
      </div>
      <p className="text-gray-400 md:hidden text-[10px] mt-7">
        ООО «Название», РБ, г. Минск, пр-т Победителей, д.85, 8 эт., офис 845
        Зарегистрировано Мингорисполкомом 26.02.14 за номером 192223896
      </p>
    </div>
  );
};

export default Down;
