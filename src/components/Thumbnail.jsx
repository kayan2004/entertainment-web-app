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
    <div className="relative flex flex-col gap-2">
      <div>
        <img
          className="rounded-lg w-full h-auto"
          src={object.thumbnail.regular.small}
        ></img>
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
