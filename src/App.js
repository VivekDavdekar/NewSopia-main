import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import SearchResults from "./Components/SearchResults";
import React, { useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <LoadingBar
        color="#fbfbfbff"
        height={3}
        progress={progress}
      />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <News setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="us"
              category="general"
            />
          }
        />
        <Route
          path="/business"
          element={
            <News setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              pageSize={pageSize}
              country="us"
              category="business"
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              pageSize={pageSize}
              country="us"
              category="entertainment"
            />
          }
        />
        <Route
          path="/general"
          element={
            <News setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="us"
              category="general"
            />
          }
        />
        <Route
          path="/health"
          element={
            <News setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              pageSize={pageSize}
              country="us"
              category="health"
            />
          }
        />
        <Route
          path="/science"
          element={
            <News setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              pageSize={pageSize}
              country="us"
              category="science"
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              pageSize={pageSize}
              country="us"
              category="sports"
            />
          }
        />
        <Route
          path="/technology"
          element={
            <News setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              pageSize={pageSize}
              country="us"
              category="technology"
            />
          }
        />
        <Route
          path="/about"
          element={
            <About/>
          }
        />
        <Route 
          path="/search" 
          element={
            <SearchResults 
              setProgress={setProgress}
              apiKey={apiKey} />
            }
        />

      </Routes>
    </Router>
  );
}
export default App;
