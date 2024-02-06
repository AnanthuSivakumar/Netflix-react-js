import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from '../../Axios';
import {image_url,API_Key}from "../../Constants/Constants"
import "./Rowposter.css"

function Rowposter(props) {
    const [action,setAction]=useState([])
    const [urlId,setUrlId]=useState("")
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setAction(response.data.results)
      console.log(response.data.results[1])
    })
  },)
  const opts = {
    height: '260',
    width: '100%',
      autoplay: 1,}
 
  const handleMovie=(id)=>{
    console.log(id)
axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_Key}&language=en-US`).then((response)=>{
if(response.data.results.lngth!==0){
  setUrlId(response.data.results[0])
}
})

  }
  const handleCloseVideo = ()=>{
   setUrlId("")
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posterss">
          {
            action.map((obj)=>
              <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? "smallPoster" : 'poster'} src={`${image_url+obj.backdrop_path}`}alt="" />
            )
          }
           
          
        </div>
        {  urlId && <button style={{float:'right',marginTopTop:"230px"}} onClick={handleCloseVideo}>Close Video</button>}
       { urlId && <YouTube videoId={urlId.key} opts={opts}  />}
      
       

     
    </div>
  )
}

export default Rowposter;