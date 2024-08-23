import Section from "../components/Section";
const Search = () => {
  return (
    <main
      className="col-start-2 col-end-4 row-start-2 text-xl text-white p-6  gap-9 
grid grid-cols-1"
    >
      <Section
        containerStyles={`grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4`}
        heading={"Found 2 results for 'Earth'"}
      ></Section>
    </main>
  );
};

export default Search;
