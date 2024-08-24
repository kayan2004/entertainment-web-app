import Section from "../components/Section";
import { useLocation } from "react-router-dom";
import data from "/data.json";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Search = () => {
  const query = useQuery().get("q");
  const newData = data.filter((element) => {
    return element.title.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <main
      className="col-start-2 col-end-4 row-start-2 text-xl text-white p-6  gap-9 
grid grid-cols-1"
    >
      <Section
        containerStyles={`grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4`}
        heading={`Found ${newData.length} results for '${query}'`}
        data={newData}
        onClick={() => {}}
      ></Section>
    </main>
  );
};

export default Search;
