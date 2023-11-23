import MyTag from "./Tags";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const MyCard = ({img_url, dog_name, dog_description, dog_breed, breed_color}) =>{
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img_url} />
                <Card.Body>
                    <Card.Title>{dog_name}</Card.Title>
                    <Card.Text>{dog_description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><MyTag breed={dog_breed} color={breed_color}/></ListGroup.Item>
                </ListGroup>
            </Card>
            
        </>
    )
}

export default MyCard