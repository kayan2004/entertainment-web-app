/* eslint-disable react/prop-types */
const MovieDetails1 = ({ title, year, category, rating }) => {
  return (
    <>
      <div
        className="font-light text-[11px]  text-white  flex gap-1.5 leading-[14px]
                md:text-[13px]"
      >
        <span className="opacity-75">{year}</span>
        <span className="opacity-50">•</span>
        <div className="flex items-center gap-[4px]">
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              className="scale-[83%]"
              d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
              fill="#FFF"
              opacity=".75"
            />
          </svg>
          <span className="opacity-75">{category}</span>
        </div>
        <span className="opacity-50">•</span>
        <span className="opacity-75">{rating}</span>
      </div>
      <h3 className="font-medium text-[14px] leading-3 md:text-[18px]">
        {title}
      </h3>
    </>
  );
};

export default MovieDetails1;
