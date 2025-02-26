import React from "react";
import {
  FaHome,
  FaSearch,
  FaRegCompass,
  FaRegHeart,
  FaPlusSquare,
  FaUser,
  FaBars,
  FaInstagram,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-transparent text-black h-full flex flex-col p-5 pt-[20px] space-y-4 fixed ">
      <FaInstagram className="text-3xl mb-4" />
      <div className="flex flex-col space-y-7" >
        <button className="flex items-center space-x-2">
          <FaHome />
          <span>Главная</span>
        </button>
        <button className="flex items-center space-x-2">
          <FaSearch />
          <span>Поисковый запрос</span>
        </button>
        <button className="flex items-center space-x-2">
          <FaRegCompass />
          <span>Интересное</span>
        </button>
        <button className="flex items-center space-x-2">
          <FaRegHeart />
          <span>Сообщения</span>
        </button>
        <button className="flex items-center space-x-2">
          <FaPlusSquare />
          <span>Создать</span>
        </button>
        <button className="flex items-center space-x-2">
          <FaUser />
          <span>Профиль</span>
        </button>
        <button className="flex items-center space-x-2">
          <FaBars />
          <span>Ещё</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
