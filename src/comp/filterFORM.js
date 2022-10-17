import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import MouvieCard from "./movieCard";
import {movieList} from "./movieList";
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {useState} from "react";
import './filter';
export default function FilterForm(props) {
    //const [filmList, setFilm]= useState(movieList)
    const [serchrating , setserchRating]= useState("")
    const [serchFilm, setsecrch]=useState("")
 
  const handleSerchFilm=(e)=>{
    let value=e.target.value;
    value.length<2?(setsecrch("")):setsecrch(value)
};

const handleSerchRating=(e)=>{
    let value=e.target.value;
    setserchRating(value);
};
    console.log("value :",serchFilm)

    return (
        <>
        <h4>Pour cibler votre choix</h4>
        <Form>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                titre
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder={props.recherch}
                onChange={handleSerchFilm}
              />
            </Col>
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                rating
              </Form.Label>
             
                <Form.Control className="mb-2" id="inlineFormInputGroup" placeholder={props.riting} 
                onChange={handleSerchRating}
                
                />
        
            </Col>
          </Row>
        </Form>

        <div className="flex-container">
  {props.filmLists.filter((y)=>{
    return y.titre.toLowerCase().includes(serchFilm.toLowerCase())

}).filter((X)=>{
    return X.rating>=serchrating

}).map(x=>{
    return (

      <MouvieCard key={x.id} titre={x.titre} description={x.description} posterURL={x.posterURL} rating={x.rating} />
      
    )
  })}
  </div>
        </>
      );
}
