/* eslint-disable react/prop-types */
import Section from "../components/Section";
import data from "/data.json";
const Tvseries = ({ onClick }) => {
  let tvseriesData = [];
  data.forEach((element) => {
    if (element.category === "TV Series") {
      tvseriesData.push(element);
    }
  });
  console.log(tvseriesData);
  return (
    <main
      className="col-start-2 col-end-4 row-start-2 text-xl text-white p-6  gap-9 
grid grid-cols-1"
    >
      <Section
        containerStyles={`grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4`}
        heading={"TV Series"}
        data={tvseriesData}
        onClick={onClick}
      ></Section>
    </main>
  );
};

export default Tvseries;
