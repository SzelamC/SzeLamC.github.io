import React from "react";
import VoxelGameboy from "@components/VoxelGameboy";
import GlitchText from "@components/GlitchText";

const proficientSkills = [
    "Typescript",
    "React",
    "Java",
    "Springboot",
    "Postgresql",
    "Linux",
];

const currentlyLearningAndInterest = [
    "Go",
    "Rust",
    "Haskell",
    "Solidity",
    "Blockchain",
];

export const Home: React.FC = () => {
    return (
        <main className="min-h-full w-full flex flex-col items-center justify-center pt-20">
            <VoxelGameboy className="animate-[fadein_600ms_linear_1]" />
            <div className="w-full max-w-4xl text-white animate-[fadein_600ms_linear_50ms_1]">
                <h1 className="bg-orange-400 text-center text-gray-800 tracking-widest my-8 mx-8 px-10 lg:px-24 py-6 font-semibold text-xl rounded-lg">
                    Hi, I am keen to learn new{" "}
                    <GlitchText>tech&nbsp;</GlitchText>or
                    <GlitchText>skills&nbsp;</GlitchText>
                    :P
                </h1>
            </div>
            <div className="w-full max-w-4xl text-orange-300 animate-[fadein_600ms_linear_100ms_1] flex flex-col items-center lg:flex-row lg:justify-between lg:items-center gap-5 p-6">
                <div className="">
                    <h1 className="text-5xl font-medium tracking-wide text-center lg:text-left">
                        Chan Sze Lam
                    </h1>
                    <h2 className="text-xl font-normal tracking-wide text-center lg:text-left">
                        Software Engineer
                    </h2>
                    <h3 className="text-xl font-normal tracking-wide text-center lg:text-left">
                        Bachelor of Science in Statistic, Minor in Computer
                        Science
                    </h3>
                </div>
                <div>
                    <img
                        src="/profilepic.png"
                        className="w-[180px] h-[180px] lg:ml-10 rounded-full ring-[3px] ring-orange-300"
                        alt="profile picture"
                    />
                </div>
            </div>
            <div className="w-full max-w-4xl text-orange-300 animate-[fadein_600ms_linear_150ms_1] flex flex-col items-center lg:items-start gap-5 p-6">
                <h1 className="text-3xl underline">Technical Skills</h1>
                <div className="flex flex-wrap">
                    {proficientSkills.map((s, i) =>
                        i === proficientSkills.length - 1 ? (
                            <span key={i}>{s}</span>
                        ) : (
                            <span key={i}>{s} • &nbsp;</span>
                        ),
                    )}
                </div>
            </div>
            <div className="w-full max-w-4xl text-orange-300 animate-[fadein_600ms_linear_150ms_1] flex flex-col items-center lg:items-start gap-5 p-6">
                <h1 className="text-3xl underline">Currently learning</h1>
                <div className="flex flex-wrap">
                    {currentlyLearningAndInterest.map((language, i) =>
                        i === currentlyLearningAndInterest.length - 1 ? (
                            <span key={i}>{language}</span>
                        ) : (
                            <span key={i}>{language} • &nbsp;</span>
                        ),
                    )}
                </div>
            </div>
        </main>
    );
};
