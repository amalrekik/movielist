import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useState} from "react";

export default function AddMovie(props) {
    


    return(
        <>
        <h4>Ajouter vos filmes </h4>
        <Form>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
              Titre
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              placeholder="Titre" 
              onChange={props.hTitre}
            />
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Rating
            </Form.Label>
           
              <Form.Control className="mb-2" id="inlineFormInputGroup" placeholder="rating" 
              onChange={props.hR}
              />
      
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              PosterUrl
            </Form.Label>
           
              <Form.Control className="mb-2" id="inlineFormInputGroup" placeholder="posterURL" 
              onChange={props.hURL}
              />
      
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Description
            </Form.Label>
           
              <Form.Control className="mb-2" id="inlineFormInputGroup" placeholder="DESCRIPTION" 
              onChange={props.hDesc}
              />
      
          </Col>
        </Row>
      </Form>
      </>
    )
}