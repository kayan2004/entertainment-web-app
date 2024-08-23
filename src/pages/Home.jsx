/* eslint-disable react/prop-types */
import Section from "../components/Section";
import data from "/data.json";
const Home = ({ onClick }) => {
  let trendingData = [];
  data.forEach((element) => {
    if (element.isTrending) {
      trendingData.push(element);
    }
  });
  console.log(trendingData);
  return (
    <main
      className="col-start-2 row-start-2 text-xl text-white p-6  gap-9 
     grid grid-cols-1"
    >
      <Section
        containerStyles={`flex flex-nowrap overflow-x-scroll scroll-smooth no-scrollbar  gap-6`}
        heading={"Trending"}
        data={trendingData}
        onClick={onClick}
      ></Section>
      <Section
        containerStyles={`grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4`}
        heading={"Recommended For You"}
        onClick={onClick}
        data={data}
      ></Section>
    </main>
  );
};

export default Home;
