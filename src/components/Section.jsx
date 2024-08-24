/* eslint-disable react/prop-types */
import Thumbnail from "./Thumbnail";
import Biggerthumbnail from "./Biggerthumbnail";
const Section = ({ containerStyles, heading, data, onClick }) => {
  console.log(data);
  return (
    <section className="flex flex-col gap-6">
      <h2
        className="font-light text-md2 tracking-[-0.31px] 
                 md:text-[32px] md:tracking-[-0.5px] "
      >
        {heading}
      </h2>
      {data.length !== 0 && (
        <div className={containerStyles}>
          {data.map((object) => {
            return heading !== "Trending" ? (
              <Thumbnail key={object.title} object={object} onClick={onClick} />
            ) : (
              <Biggerthumbnail
                key={object.title}
                object={object}
                onClick={onClick}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Section;
