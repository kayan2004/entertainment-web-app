/* eslint-disable react/prop-types */
import MovieDetails1 from "./MovieDetails1";
import { useState } from "react";
const Thumbnail = ({ object, onClick }) => {
  const [className, setClassName] = useState("fill-none");

  const handleClassName = () => {
    className === "fill-none"
      ? setClassName("fill-white")
      : setClassName("fill-none");
  };

  console.log(className);
  return (
    <div className=" flex flex-col gap-2 group">
      <div className="relative">
        <img
          className="rounded-lg w-full h-auto"
          src={object.thumbnail.regular.small}
        ></img>
        <button
          className="hidden group-hover:flex rounded-full bg-[rgba(16,20,30,0.2)] absolute 
         top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]
        p-2 gap-6"
        >
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
              fill="#FFF"
            />
          </svg>
          <span className="font-medium text-white text-[18px]"> Play</span>
        </button>
        <button
          onClick={() => {
            onClick(object);
            handleClassName();
          }}
          className="rounded-full w-[32px] h-[32px] bg-[rgba(16,20,30,0.4)]  flex justify-center items-center
                        absolute z-10 top-[5%] right-[5%]  "
        >
          <svg
            className="opacity-100 "
            width="12"
            height="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={className}
              d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
              stroke="#FFF"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>
      <MovieDetails1
        title={object.title}
        year={object.year}
        category={object.category}
        rating={object.rating}
      ></MovieDetails1>
    </div>
  );
};

export default Thumbnail;
