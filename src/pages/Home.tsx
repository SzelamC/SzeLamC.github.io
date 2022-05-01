import React from "react";
import VoxelGameboy from "@components/VoxelGameboy";

export const Home: React.FC = () => {
  return (
    <main className="min-h-full w-full flex flex-col items-center justify-center">
      <VoxelGameboy className="animate-[fadein_600ms_linear_1]" />
      <div className="max-w-fit text-white animate-[fadein_600ms_linear_50ms_1]">
        <h1 className="bg-orange-400 text-gray-800 tracking-widest my-8 mx-8 px-10 lg:px-24 py-6 font-semibold text-xl rounded-lg">
          Hi, I am keen to learn new tech or skills :P
        </h1>
      </div>
      <div className="text-white animate-[fadein_600ms_linear_100ms_1] flex flex-col items-start md:items-center lg:flex-row lg:justify-center m-10 gap-5">
        <div>
          <h1 className="text-5xl font-medium tracking-wide">Chan Sze Lam</h1>
          <h2 className="text-xl font-normal">
            Fresh Graduate (Work hard to become a full stack developer)
          </h2>
        </div>
        <div>
          <img
            src="/profilepic.png"
            className="w-[180px] h-[180px] lg:ml-10 rounded-full ring-[3px] ring-white"
            alt="profile picture"
          />
        </div>
      </div>
      <div></div>
    </main>
  );
};
