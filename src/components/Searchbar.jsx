import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Searchbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setQuery(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <div className="flex items-center gap-3 col-start-2  p-6 md:p-0 md:m-6 lg:col-start-2 lg:col-end-4 lg:row-start-1">
      <label className="" htmlFor="searchInput">
        <svg
          className="w-[24px] h-auto md:w-[32px]"
          width="32"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="scale-[75%] md:scale-100"
            d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
            fill="#FFF"
          />
        </svg>
      </label>
      <input
        className="w-full outline-none bg-black font-light text-opacity-50 text-white text-sm2 md:text-xl focus:bg-black"
        id="searchInput"
        type="text"
        placeholder="Search for movies or TV series"
        value={query}
        onChange={handleSearch}
      ></input>
    </div>
  );
};

export default Searchbar;
