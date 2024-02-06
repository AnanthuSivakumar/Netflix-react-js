import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Rowposter from "./Components/Rowposter/Rowposter";
import  {orginals,acttions,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries}  from "./url"



function App() {
  return(
    <div>
    <Navbar/>
    <Banner/>
    <Rowposter url={orginals} title ='Netflix Orginal'/>
    <Rowposter url={acttions} title ='Action' isSmall/>
    <Rowposter url={ComedyMovies} title ='Comedy' isSmall/>
    <Rowposter url={HorrorMovies} title ='Horror' isSmall/>
    <Rowposter url={RomanceMovies} title ='Romantic' isSmall/>
    <Rowposter url={Documentaries} title ='Documentaries' isSmall/>
    </div>
  );
}

export default App;
