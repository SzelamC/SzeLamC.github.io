import React from "react";
import VoxelGameboy from "@components/VoxelGameboy";

export const Home: React.FC = () => {
  return (
    <main className="min-h-full w-full flex flex-col items-center justify-center">
      <div className="max-w-fit text-white">
        <h1 className="bg-orange-400 text-gray-800 tracking-widest my-[5em] mx-[4em] px-24 py-6 font-semibold text-xl rounded-lg">
          Hi, I am Keen to learn new tech or skills :P
        </h1>
      </div>
      <div className="text-white flex justify-center">
        <div>
          <h1 className="text-5xl font-medium tracking-wide">Chan Sze Lam</h1>
          <h2 className="text-xl font-normal">Fresh Graduate (Work hard to become a full stack developer)</h2>
        </div>
          <div>
           <img src="/public/profilepic.png" className="w-[180px] h-[180px] ml-10 rounded-full ring-[3px] ring-white" alt="profile picture"/> 
        </div>
      </div>
      <VoxelGameboy/>
    </main>
  );
};
