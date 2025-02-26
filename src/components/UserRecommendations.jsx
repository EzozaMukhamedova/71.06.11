import React from "react";

const users = [
  { name: "E'zoza Muhammedova", followStatus: "Переключиться" },
  { name: "_obruyevam_", followStatus: "Подписаться" },
  { name: "dragon_knm", followStatus: "Подписаться" },
  { name: "adilbekallayarov27", followStatus: "Подписаться" },
  { name: "rakhmonov.ar", followStatus: "Подписаться" },
  { name: "komilriksiyev", followStatus: "Подписаться" },
];

const UserRecommendations = () => {
  return (
    <div className="w-80 bg-transparent text-black rounded-lgp-4 fixed right-0 top-0 pt-[30px] pr-[30px]">
      <div className="font-bold text-lg mb-4">Рекомендации для вас</div>
      {users.map((user, index) => (
        <div key={index} className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <div className="bg-gray-300 rounded-full w-10 h-10"></div>
            <div>
              <div className="font-semibold">{user.name}</div>
            </div>
          </div>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
            {user.followStatus}
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserRecommendations;
