import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Tvseries from "./pages/Tvseries";
import Bookmarks from "./pages/Bookmarks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Searchbar from "./components/Searchbar";
import { useState } from "react";
import Search from "./pages/Search";
function App() {
  const [bookmarkedData, setBookmarkedData] = useState([]);

  const addBookmarkedData = (media) => {
    const alreadyBookmarked = bookmarkedData.some(
      (item) => item.title === media.title
    );

    if (!alreadyBookmarked) {
      // Add media to the array only if it doesn't already exist
      const newData = [...bookmarkedData, media];
      setBookmarkedData(newData);
    }
  };
  const removeBookmarkedData = (media) => {
    const newData = bookmarkedData.filter((element) => {
      return element.title !== media.title;
    });
    setBookmarkedData(newData);
    console.log(newData);
  };
  return (
    <div
      className="bg-black overflow-y-scroll md:p-6 lg:p-9  lg:gap-x-10 lg:grid lg:grid-cols-[auto,auto,1fr] lg:grid-rows-[auto,1fr] no-scrollbar
      min-h-screen"
    >
      <Router>
        <Header></Header>
        <Searchbar></Searchbar>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home onClick={addBookmarkedData} />}
          />
          <Route
            path="/movies"
            element={<Movies onClick={addBookmarkedData} />}
          />
          <Route
            path="/tv-series"
            element={<Tvseries onClick={addBookmarkedData} />}
          />
          <Route
            path="/bookmarks"
            element={
              <Bookmarks data={bookmarkedData} onClick={removeBookmarkedData} />
            }
          />
          <Route
            path="/search"
            element={
              <Search data={bookmarkedData} onClick={removeBookmarkedData} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
