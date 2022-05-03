import React from "react";
import PostTag from "@components/PostTag";

export const AboutMe: React.FC = () => {
  return (
    <main className="h-full pt-20 flex justify-center">
      <div className="h-full w-full max-w-4xl flex flex-col items-center">
        <section className="w-full basis-56 mt-20">
          <h1 className="text-5xl text-orange-300 underline decoration-orange-300 underline-offset-8">
            Bio
          </h1>
          <div className="w-full text-white text-2xl pt-5 tracking-wide leading-10">
            <div>
              <span className="pr-4">2017</span>
              Graduate in Secondary Schools
            </div>
            <div>
              <span className="pr-4">2022</span>
              Completed Bachelor's degree in The Chinese University of Hong Kong
            </div>
          </div>
        </section>
        <section className="w-full">
          <h1 className="text-5xl text-orange-300 underline decoration-orange-300 underline-offset-8">
            What's my interest
          </h1>
          <div className="pt-5 leading-10">
            <div className="">
              <PostTag tagColor="bg-orange-400">Computer Graphics</PostTag>
              <PostTag tagColor="bg-orange-400">Web Development</PostTag>
              <PostTag tagColor="bg-orange-400">Gaming</PostTag>
              <PostTag tagColor="bg-orange-400">Coding</PostTag>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
