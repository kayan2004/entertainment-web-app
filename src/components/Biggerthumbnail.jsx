/* eslint-disable react/prop-types */
import MovieDetails2 from "./MovieDetails2";
import { useState } from "react";
const Biggerthumbnail = ({ object, onClick }) => {
  const [className, setClassName] = useState("fill-none");

  const handleClassName = () => {
    className === "fill-none"
      ? setClassName("fill-white")
      : setClassName("fill-none");
  };
  return (
    <div className="relative flex flex-col gap-2 min-w-max">
      <img
        className="block w-auto h-[140px] xs:h-[190px] sm:h-[240px] lg:h-[320px] rounded-lg "
        src={object.thumbnail.regular.small}
      ></img>
      <button
        onClick={() => {
          onClick(object);
          handleClassName();
        }}
        className="rounded-full w-[32px] h-[32px] bg-[rgba(16,20,30,0.4)]  flex justify-center items-center
                        absolute z-10 top-[5%] right-[5%] "
      >
        <svg
          className="opacity-100"
          width="12"
          height="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={className}
            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
            stroke="#FFF"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </button>
      <MovieDetails2
        title={object.title}
        year={object.year}
        category={object.category}
        rating={object.rating}
      ></MovieDetails2>
    </div>
  );
};

export default Biggerthumbnail;
