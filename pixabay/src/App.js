import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./component/SearchBar";
import ImageList from "./component/ImageList";

const App = () => {
  const [images, setImages] = useState([]);
  const onSearchSubmit = async (term) => {
    try {
      const params = {
        key: "",
        q: term,
      };
      const response = await axios.get("", { params });
      setImages(response.data.hits);
      if (response.data.total === 0) {
        window.alert("お探しの画像はありません");
      }
    } catch {
      window.alert("画像の取得に失敗しました");
    }
  };
  return (
    <div className="ui container" style={{ marginTop: "30px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
