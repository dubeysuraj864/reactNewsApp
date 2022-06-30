import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card.js";
import Navbar from "./Navbar";

const baseURL =
  "https://newsapi.org/v2/everything?q=tesla&from=2022-05-30&sortBy=publishedAt&apiKey=cec617e73e68440084dcb96853f7b92f";

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  // console.log(post.articles[1].title)

  return (
    <div className="App">
      <div className="nav">
        <Navbar />
      </div>
      <div className="cards">
        {post.articles.map((news, i) => (
         
            <Card id="card" news={news} key={i} />
          
        ))}
      </div>
    </div>
  );
}

export default App;
