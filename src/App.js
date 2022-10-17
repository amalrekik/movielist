import logo from './logo.svg';
import './App.css';
import {movieList} from "./comp/movieList";
//import MouvieCard from "./comp/movieCard";
import {useState} from "react";
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import FilterForm from "./comp/filterFORM";
import AddMovie from "./comp/addmouvie";
function App() {
  const [titre , setTitre]= useState("")
  const [description , setDesc]= useState("")
  const [posterURL , setURL]= useState("")
  const [rating , setRating]= useState("")
  const [filmList, setFilm]= useState(movieList)
  const handleTitre = event => setTitre(event.target.value);
  const handleDesc =event=>setDesc(event.target.value);
  const handleURL =(event)=>setURL(event.target.value);
  const handleR =(event)=>setRating(event.target.value);
  const nmouvie={ id:filmList.length+1, titre: titre , description: description , posterURL: posterURL , rating :rating}
  const handleFilm = ()=>{
  setFilm(previous=>[...previous, nmouvie])
  }
  
  return (
    <div className="App">
      
   <Container>
      <Navbar style={{textAlign:"left", backgroundColor:"#bcbcbc" }}>
        <Container>
          <Navbar.Brand className="nav" >Titiflix</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
    <h1 style={{fontSize:"40px"}}>Notre Liste</h1>
   
  <FilterForm filmLists={filmList}/>
  <AddMovie hTitre={handleTitre} hURL={handleURL} hDesc={handleDesc} hR={handleR}/>
  <button onClick={handleFilm}>Ajouter</button>
  </div>
  );
}

export default App;

//<div className="flex-container">
//{filmList.map(x=>{
//return (
 // <MouvieCard key={x.id} titre={x.titre} description={x.description} posterURL={x.posterURL} rating={x.rating} />
  
//)
//})}
//</div>