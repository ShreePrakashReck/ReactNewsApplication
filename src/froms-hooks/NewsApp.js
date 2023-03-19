import React, { useState, useEffect, useRef } from "react";
import News from "./News.js";
import "./NewsApp.css";
function NewsApp() {
  const apikey = `3c0f75dc5a074497bc0dcb0fae641216`;
  const [newsList, setNewsList] = useState([]);
  const [query, setquery] = useState("tesla");
  //const apiUrl = `https://newsapi.org/v2/everything?q=${query}a&from=2022-11-20&sortBy=publishedAt&apiKey=${apikey}`;
  //const apiUrl = `https://newsapi.org/v2/everything?q=${query}a&from=2022-11-20&sortBy=publishedAt&apiKey=${apikey}`;
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-02-19&sortBy=publishedAt&apiKey=${apikey}`;
  //const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2023-02-19&sortBy=publishedAt&apiKey=1e269bf8bd3b4fb58c35b17a11dc5a57`;
  const queryInputRef = useRef(null);
  useEffect(() => {
    fetchData();
  }, [query]);
  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setNewsList(jsonData.articles);
    } catch (e) {
      console.log(e, "error has been occured");
    }
  }
  function handleChange(event) {
    event.preventDefault();
    const queryInputValue = queryInputRef.current.value;
    setquery(queryInputValue);
  }
  return (
    <div className="news-app">
      <h1
        style={{
          fontFamily: "monospace",
          fontSize: "3rem",
          textAlign: "left",
          marginBootom: "20px",
        }}
      >
        News Daily
      </h1>
      <form>
        <input className="query-input" type="text" ref={queryInputRef} />
        <input
          className="btn-submit"
          onClick={handleChange}
          type="submit"
          value="submit"
        />
      </form>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,30%)",
          justifyContent: "space-between",
          rowGap: "20px",
        }}
      >
        {newsList.map((news) => {
          return <News key={news.url} news={news} />;
        })}
      </div>
    </div>
  );
}

export default NewsApp;
