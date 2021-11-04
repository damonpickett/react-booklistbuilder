import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function RandomQuote() {

  // create a useState
  const [randomQuote, setRandomQuote] = useState('');


  // Call the api - makeAPICall - fetch within this function
  const makeAPICall = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        setRandomQuote(data[Math.floor(Math.random()*data.length)])
      })
  }

  // console.log(randomQuote)

  // create a useEffect
  useEffect(() => {
    makeAPICall();
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <Card.Body className='random-quote'>
              <p>{randomQuote.text}</p>
              <p><span className='author-bold'>{randomQuote.author}</span></p>
              <Button variant='warning' onClick={makeAPICall}>New Quote</Button>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
  }
  
  export default RandomQuote;

  // put api calls in makeAPICall and then fetch within that function. 
  // Set the state after the fetch. 
  // Call the makeAPIFunction within useEffect to stop the page from rerendering

  // <button onClick={makeAPICall}>New Quote</button>