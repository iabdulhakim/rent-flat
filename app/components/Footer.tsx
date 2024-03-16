const Footer = () => {
  return <div className="pl-[15px] pr-[15px] pb-4">
    <div className="flex flex-col gap-5 items-center pt-6">
        <a href="" className="text-[12px] text-gray-600 underline">Политика конфиденциальности</a>
        <a href="" className="text-[12px] text-gray-600 underline">Обработка персональных данных</a>
    </div>
    <div className="mt-10 flex justify-between">
        <p className="text-[10px] text-gray-400">2019 © Все права защищены</p>
        <p className="text-[10px] ">Разработка сайта «Студия ЯР»</p>
    </div>
  </div>;
};

export default Footer;
