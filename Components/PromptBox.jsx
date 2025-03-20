"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const PromptBox = ({ setIsLoading, isLoading }) => {
  const [prompt, setPrompt] = useState("");

  return (
    <form
      className={`w-full max-w-2xl bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}
    >
      <textarea
        className="outline-none w-full resize-none overflow-hidden break-words bg-transparent placeholder-gray-400 text-sm"
        rows={2}
        placeholder="Message DeepSeek"
        required
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
      />
      <div className="flex items-center justify-between text-sm mt-2">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 text-xs border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition">
            <Image
              className="h-5"
              src={assets.deepthink_icon}
              alt="deepthink icon"
            />
            DeepThink (R1)
          </button>
          <button className="flex items-center gap-2 text-xs border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition">
            <Image className="h-5" src={assets.search_icon} alt="search icon" />
            Search
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-gray-500/20 transition">
            <Image className="w-4" src={assets.pin_icon} alt="pin icon" />
          </button>
          <button
            className={`${
              prompt ? "bg-primary" : "bg-gray-500"
            } rounded-full p-2 cursor-pointer transition`}
            disabled={!prompt}
          >
            <Image
              className="w-3.5 aspect-square"
              src={prompt ? assets.arrow_icon : assets.arrow_icon_dull}
              alt="arrow icon"
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default PromptBox;
