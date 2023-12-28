import "./App.css";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  var pageSize = 8;
  var apiKey = "1c9bf38ab347450e919dc7e608c87314";

  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <React.StrictMode>
          <Navbar />
          <LoadingBar color="#f11946" progress={progress} />
          <Routes>
            <Route
              index
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/Business"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="Business"
                  pageSize={pageSize}
                  country="in"
                  category="Business"
                />
              }
            />
            <Route
              exact
              path="/Entertainment"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="Entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="Entertainment"
                />
              }
            />
            <Route
              exact
              path="/General"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="General"
                  pageSize={pageSize}
                  country="in"
                  category="General"
                />
              }
            />
            <Route
              exact
              path="/Health"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="Health"
                  pageSize={pageSize}
                  country="in"
                  category="Health"
                />
              }
            />
            <Route
              exact
              path="/Science"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="Science"
                  pageSize={pageSize}
                  country="in"
                  category="Science"
                />
              }
            />
            <Route
              exact
              path="/Sports"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="Sports"
                  pageSize={pageSize}
                  country="in"
                  category="Sports"
                />
              }
            />
            <Route
              exact
              path="/Technology"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="Technology"
                  pageSize={pageSize}
                  country="in"
                  category="Technology"
                />
              }
            />
          </Routes>
        </React.StrictMode>
      </Router>
    </>
  );
};

export default App;
