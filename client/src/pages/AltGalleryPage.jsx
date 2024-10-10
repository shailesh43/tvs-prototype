import React, { useState, useEffect } from "react";
import "./Gallery.css";
function AltGalleryPage() {
  const [query, setQuery] = useState("Capybara");
  const [loading, setLoading] = useState();
  const [data, setData] = useState([]);

  const apiKey = import.meta.env.VITE_PEXELS_KEY;
  const getPictures = async () => {
    setLoading(true);
    await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((res) => {
        setLoading(false);
        setData(res.photos);
      });
  };

  useEffect(() => {
    getPictures();
  }, []);

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      getPictures();
    }
  };

  return (
    <>
      {/* <div>API key: {apiKey}</div> */}
      <div>
        <div className="header">
          <div className="block text-4xl font-light">
          Explore a World of 
            <span className="gradient font-extrabold">  Wildlife and Flora</span> in
            through Stunning Images
          </div>
          <input
            className="inputSearch min-w-60 text-sm min-h-10 p-2 m-2 mt-7 rounded-md text-gray-700"
            onKeyDown={onKeyDownHandler}
            placeholder="Search for Anything..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          ></input>
        </div>

        {loading && <h1 className="text-slate-700 p-4">Fetching...</h1>}

        <div className="container">
          {data?.map((item, index) => {
            return (
              <div className="box">
                <img src={item.src.medium} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AltGalleryPage;
