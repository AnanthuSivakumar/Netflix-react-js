import { useEffect, useState } from "react";
import axios from "../../Axios";
import { API_Key,image_url } from "../../Constants/Constants";

import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState();
  

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_Key}&language=en-US`)
      .then((response) => {
       
        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        setMovie(response.data.results[randomIndex]);
        console.log(response.data.results[2])
      });
  }, []);
  return (
    <div style={{backgroundImage:`url(${movie ? image_url+movie.backdrop_path : ""})`}}
     className="banner" >
      <div className="content">
      <h1 className="title">{movie ? movie.title : ""}</h1>
      
        <div className="banner_buttons">
          <button className="buttons">play</button>
          <button className="buttons">My List</button>
        </div>
        <h1 className="discrption">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_buttom"></div>
    </div>
  );
}

export default Banner;
