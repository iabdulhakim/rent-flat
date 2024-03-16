import Socials from "../Socials";

const Header = () => {
  return (
    <div>
      <header className="bg-black flex flex-col pb-8 ">
        <div className="flex justify-between items-center pr-4 pl-4 pt-3">
          <img src="./logo.svg" alt="" className="" />
          <nav className="hidden md:flex gap-5">
            <a
              href="#"
              className="text-[#cccaca] hover:text-[#FFDF42] font-extralight"
            >
              Квартиры
            </a>
            <a
              href="#"
              className="text-[#cccaca] hover:text-[#FFDF42] font-extralight"
            >
              Коттеджи
            </a>
            <a
              href="#"
              className="text-[#cccaca] hover:text-[#FFDF42] font-extralight"
            >
              Аренда авто
            </a>
            <a
              href="#"
              className="text-[#cccaca] hover:text-[#FFDF42] font-extralight"
            >
              Блог
            </a>
            <a
              href="#"
              className="text-[#cccaca] hover:text-[#FFDF42] font-extralight"
            >
              Контакты
            </a>
          </nav>
          <button className="text-white cursor-pointer  hover:bg-white hover:text-black font-extralight pt-2 pb-2 pr-5 pl-5 border-white border rounded-[50px] text-[14px]">
            Заявка на подбор
          </button>
          <div className="hidden md:flex flex-col gap-1">
            <p className="text-[14px] text-[#FFDF42] underline font-light">+375 (29) 899-98-89</p>
            <div className="flex gap-[10px] cursor-pointer">
              <img src="./viber.svg" alt="" className="h-[20px] w-[20px]" />
              <img src="./whatsapp.svg" alt="" className="h-[20px] w-[20px]" />
              <img src="./telegram.svg" alt="" className="h-[20px] w-[20px]" />
              <img src="./mail.svg" alt="" className="h-[20px] w-[20px]" />
            </div>
          </div>
          <button className="hidden md:flex max-w-[170px] items-center gap-5 border border-yellow-400 rounded-[50px] p-2 pr-[34px]">
            <img
              src="./add.svg"
              alt=""
              className="bg-yellow-400 p-[7px] rounded-[60px]"
            />
            <span className="text-yellow-400 font-extralight text-[14px]">
              Добавить объявление
            </span>
          </button>
          <img src="./menu.svg" alt="" className="cursor-pointer md:hidden" />
        </div>
        {/* Md style */}

        <div className="pt-8 flex flex-col md:hidden items-center gap-4">
          <a
            href=""
            className="text-[#F0F0F0] font-extralight text-[20px] border w-full border-t-black border-r-black border-l-black text-center border-b-black hover:border-t-yellow-400 pb-[14px] pt-[14px] hover:border-b-yellow-400 hover:text-yellow-400 "
          >
            Квартиры
          </a>
          <a
            href=""
            className="text-[#F0F0F0] font-extralight text-[20px] border w-full border-t-black border-r-black border-l-black text-center border-b-black hover:border-t-yellow-400 pb-[14px] pt-[14px] hover:border-b-yellow-400 hover:text-yellow-400  "
          >
            Коттеджи
          </a>
          <a
            href=""
            className="text-[#F0F0F0] font-extralight text-[20px] border w-full border-t-black border-r-black border-l-black text-center border-b-black hover:border-t-yellow-400 pb-[14px] pt-[14px] hover:border-b-yellow-400 hover:text-yellow-400  "
          >
            Аренда авто
          </a>
          <a
            href=""
            className="text-[#F0F0F0] font-extralight text-[20px] border w-full border-t-black border-r-black border-l-black text-center border-b-black hover:border-t-yellow-400 pb-[14px] pt-[14px] hover:border-b-yellow-400 hover:text-yellow-400  "
          >
            Блог
          </a>
          <a
            href=""
            className="text-[#F0F0F0] font-extralight text-[20px] border w-full border-t-black border-r-black border-l-black text-center border-b-black hover:border-t-yellow-400 pb-[14px] pt-[14px] hover:border-b-yellow-400 hover:text-yellow-400  "
          >
            Контакты
          </a>
          <button className="flex items-center gap-5 border border-yellow-400 rounded-[50px] p-2 pr-[34px]">
            <img
              src="./add.svg"
              alt=""
              className="bg-yellow-400 p-[7px] rounded-[60px]"
            />
            <span className="text-yellow-400 font-extralight text-[16px]">
              Добавить объявление
            </span>
          </button>
        </div>
        <div className="md:hidden mr-auto ml-auto mt-9">
          <Socials />
        </div>
        <div className="flex gap-4 md:hidden pl-6 pt-[60px]">
          {/* Second logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="69"
            height="39"
            viewBox="0 0 69 39"
            fill="none"
          >
            <path
              d="M14.7715 38.268V0.379883L16.1056 0.379883C19.2362 0.379883 21.9933 0.877942 24.3769 1.87406C26.7605 2.87018 28.7527 4.22205 30.3536 5.92969C31.9545 7.63732 33.1641 9.64734 33.9823 11.9598C34.8006 14.2366 35.2097 16.6735 35.2097 19.2706C35.2097 22.1522 34.7472 24.767 33.8223 27.115C32.9329 29.4274 31.6521 31.4197 29.9801 33.0917C28.308 34.7282 26.298 36.0089 23.95 36.9339C21.602 37.8233 18.9872 38.268 16.1056 38.268H14.7715ZM22.9539 17.3669C22.9539 15.9083 22.9539 14.9986 22.9539 13.8093C22.9539 13.0248 22.9539 12.6158 22.9539 11.9598C22.2424 11.1059 22.9539 11.4422 22.9539 11.1412C22.9539 10.2518 22.9539 9.80709 22.9539 9.45168V29.1962V28.0396C22.9539 28.3707 22.9539 27.3571 22.9539 27.115C22.9539 26.3614 22.9539 26.2608 22.9539 25.8161C22.9539 24.1564 22.9539 27.115 22.9539 20.0351C22.9539 18.701 22.9539 18.7899 22.9539 17.3669Z"
              fill="#FFDF42"
            />
            <path
              d="M8.10156 32.0416V7.13867H18.9803C20.1371 7.13867 21.205 7.39589 22.1838 7.91031C23.1627 8.40136 23.997 9.05608 24.6866 9.87449C25.3985 10.6695 25.9547 11.5931 26.3551 12.6454C26.7556 13.6742 26.9558 14.7148 26.9558 15.767C26.9558 17.2168 26.6555 18.573 26.0548 19.8357C25.4541 21.075 24.6199 22.0921 23.552 22.8872L28.5576 32.0416H21.2161L17.0448 24.3954H14.6088V32.0416H8.10156ZM14.6088 18.4327H18.7133C19.1138 18.4327 19.4808 18.1989 19.8145 17.7312C20.1705 17.2635 20.3485 16.6088 20.3485 15.767C20.3485 14.9018 20.1482 14.2471 19.7478 13.8028C19.3474 13.3352 18.9469 13.1014 18.5465 13.1014H14.6088V18.4327Z"
              fill="#211A1D"
            />
            <path
              d="M10.7689 27.3276V10.252H9.43483L1.875 19.6793V21.458H19.6628"
              stroke="url(#paint0_linear_1_16230)"
              stroke-width="3"
            />
            <path
              d="M40.7583 9.16699H43.1383C44.0846 9.16699 44.7997 9.3342 45.2835 9.66861C45.7674 10.003 46.0093 10.5971 46.0093 11.451C46.0093 12.0273 45.9346 12.4862 45.7852 12.8277C45.6357 13.1693 45.3582 13.4361 44.9527 13.6282L46.1374 17.8119H44.1629L43.213 13.9377H42.6687V17.8119H40.7583V9.16699ZM43.2024 12.8384C43.5866 12.8384 43.8534 12.7388 44.0028 12.5396C44.1593 12.3332 44.2376 12.0273 44.2376 11.6217C44.2376 11.2304 44.1665 10.9387 44.0242 10.7466C43.8819 10.5473 43.6364 10.4477 43.2877 10.4477H42.6687V12.8384H43.2024Z"
              fill="#A9D4FF"
            />
            <path
              d="M49.2923 9.16699H53.1772V10.4691H51.2027V12.6143H52.7076V13.9377H51.2027V16.5205H53.1985V17.8119H49.2923V9.16699Z"
              fill="#A9D4FF"
            />
            <path
              d="M56.2004 9.16699H57.5451L59.3168 13.3293V9.16699H60.8964V17.8119H59.605L57.8333 13.3293V17.8119H56.2004V9.16699Z"
              fill="#A9D4FF"
            />
            <path
              d="M65.0966 10.5865H63.7945V9.16699H68.3091V10.5865H67.0177V17.8119H65.0966V10.5865Z"
              fill="#A9D4FF"
            />
            <path
              d="M43.0423 26.5421H40.3848V25.2294L42.6367 19.8397H44.7072V25.2187H45.5077V26.5421H44.7072V28.4846H43.0423V26.5421ZM43.0423 25.2187V21.622L41.7402 25.2187H43.0423Z"
              fill="#A9D4FF"
            />
            <path
              d="M48.4898 19.8397H50.6777C51.4248 19.8397 52.0082 19.9322 52.428 20.1172C52.8478 20.3022 53.1431 20.5939 53.3138 20.9923C53.4917 21.3837 53.5806 21.9102 53.5806 22.5719V25.7097C53.5806 26.3785 53.4917 26.9121 53.3138 27.3106C53.1431 27.709 52.8478 28.0043 52.428 28.1964C52.0153 28.3885 51.439 28.4846 50.699 28.4846H48.4898V19.8397ZM50.699 27.1612C50.9765 27.1612 51.1793 27.122 51.3074 27.0438C51.4425 26.9584 51.5279 26.841 51.5635 26.6916C51.5991 26.535 51.6169 26.3073 51.6169 26.0085V22.241C51.6169 21.9636 51.5955 21.7537 51.5528 21.6114C51.5173 21.4619 51.4319 21.3517 51.2967 21.2805C51.1686 21.2094 50.9658 21.1738 50.6883 21.1738H50.4002V27.1612H50.699Z"
              fill="#A9D4FF"
            />
            <path
              d="M57.9695 19.8397H60.1467L61.7583 28.4846H59.9973L59.7091 26.6595H58.4391L58.1402 28.4846H56.3365L57.9695 19.8397ZM59.5277 25.5176L59.0687 22.145L58.6098 25.5176H59.5277Z"
              fill="#A9D4FF"
            />
            <path
              d="M65.4269 24.9519L63.7833 19.8397H65.587L66.4088 22.5719L67.1452 19.8397H68.8742L67.2626 24.9519V28.4846H65.4269V24.9519Z"
              fill="#A9D4FF"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_16230"
                x1="12.103"
                y1="20.9247"
                x2="20.9969"
                y2="20.9247"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="#211A1D" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <p className="text-white text-[12px] font-thin">
            Сервис поиска квартир, домов <br /> и аренды авто по привлекательным
            ценам
          </p>
        </div>
      </header>
    </div>
  );
};

export default Header;
