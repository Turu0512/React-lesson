import React from "react";

import SearchBar from "./component/SearchBar";

const App = () => {
  const onSearchSubmit = (term) => {
    console.log(term);
  };
  return (
    <div className="ui container" style={{ marginTop: "30px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
    </div>
  );
};

export default App;
