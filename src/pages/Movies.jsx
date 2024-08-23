/* eslint-disable react/prop-types */
import Section from "../components/Section";
import data from "/data.json";
const Movies = ({ onClick }) => {
  let moviesData = [];
  data.forEach((element) => {
    if (element.category === "Movie") {
      moviesData.push(element);
    }
  });
  console.log(moviesData);
  return (
    <main
      className="col-start-2 col-end-4 row-start-2 text-xl text-white p-6  gap-9 
 grid grid-cols-1"
    >
      <Section
        containerStyles={`grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4`}
        heading={"Movies"}
        onClick={onClick}
        data={moviesData}
      ></Section>
    </main>
  );
};

export default Movies;
