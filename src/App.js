import React, { Suspense } from "react";

import { Footer, Header } from "./components";

import { requests } from "./constants";

import "./App.css";

const Homepage = React.lazy(() => import("./components/Homepage"));

function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Homepage title="What's Popular" fetchUrl={requests.fetctList} />
        <Homepage title="Free To Watch" fetchUrl={requests.fetctListPage2} />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
