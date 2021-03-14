import React from "react";
import { Router, Route, Link } from "react-router";
import { Footer, Header, Homepage } from "./components";
import { requests } from "./constants";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Homepage title="In Theaters" fetchUrl={requests.fetchTheater} />
      <Homepage title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Footer />
    </div>
  );
}

export default App;
