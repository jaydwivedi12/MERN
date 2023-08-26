import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ImgCard = (props) => {

  const [Count, setCount] = useState(0);
  const btnClicked = () => {
    setCount(Count+1);
  };

  return (
    <div>
      <Card style={{ width: "13rem" }}>
        <Card.Img className="wh" variant="top" src={props.imgsrc} />
        <Card.Body>
          <Card.Title>{props.title.slice(0,10)}</Card.Title>
          <Card.Text>
            {props.desc.slice(0,50)}
          </Card.Text>
          <Button onClick={btnClicked} variant="primary">Go somewhere</Button>
          {Count}
        </Card.Body>
      </Card>
    </div>
  )
}

export default ImgCard
