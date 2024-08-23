/* eslint-disable react/prop-types */
import Section from "../components/Section";
const Bookmarks = ({ data, onClick }) => {
  console.log(data);

  let moviesData = [];
  data.forEach((element) => {
    if (element.category === "Movie") {
      moviesData.push(element);
    }
  });

  let tvseriesData = [];
  data.forEach((element) => {
    if (element.category === "TV Series") {
      tvseriesData.push(element);
    }
  });

  return (
    <main
      className="col-start-2 col-end-4 row-start-2 text-xl text-white p-6  gap-9 
grid grid-cols-1"
    >
      {data.length === 0 ? (
        <h2
          className="font-light text-md2 tracking-[-0.31px] 
                 md:text-[32px] md:tracking-[-0.5px]"
        >
          You have not bookmarked any movies or Tv series yet !
        </h2>
      ) : (
        <>
          <Section
            containerStyles={`grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4`}
            heading={"Bookmarked Movies"}
            onClick={onClick}
            data={moviesData}
          ></Section>
          <Section
            containerStyles={`grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4`}
            onClick={onClick}
            heading={"Bookmarked TV Series"}
            data={tvseriesData}
          ></Section>
        </>
      )}
    </main>
  );
};

export default Bookmarks;
