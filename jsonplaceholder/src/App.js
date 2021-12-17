import React, { useState } from "react";

import jsonplaceholder from "./apis/jsonplaceholder";
import Button from "./components/Button";
import Resources from "./components/Resources";

const App = () => {
  const [resources, setResource] = useState([]);

  const getPosts = async () => {
    try {
      const posts = await jsonplaceholder.get("/posts");
      setResource(posts.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAlbums = async () => {
    try {
      const albums = await jsonplaceholder.get("/albums");
      setResource(albums.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="ui container" style={{ marginTop: "30px" }}>
      <Button onClick={getPosts} color="primary" text="posts" />
      <Button onClick={getAlbums} color="red" text="albums" />
      <Resources resources={resources} />
    </div>
  );
};

export default App;
