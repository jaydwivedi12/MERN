import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ImgCard = (props) => {
  return (
    <div>
    <Card className='w-18'>
      <Card.Img className="wh" variant="top" src={props.imgsrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ImgCard
