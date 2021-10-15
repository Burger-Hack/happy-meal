import { Button, Card } from 'react-bootstrap';
import { rooms } from './Data';


function Home() {

    const cardStyles = {
        width: "33%",
        float: "left",
        paddingLeft: "40px",
        paddingRight: "40px"
    };

    return (
        <>
            <br></br>
            <div>
                <center>
                    <Button variant="warning">Add Room</Button>
                    <br></br>
                    <br></br>
                    {rooms.map((room, i) => {
                        return (
                            <Card key={"card " + i} style={cardStyles}>
                                <br></br>
                                <Card.Img variant="top" src={room.imageURL} />
                                <Card.Body>
                                    <Card.Title>{room.title}</Card.Title>
                                    <Card.Text>
                                        {room.description}
                                    </Card.Text>
                                    <Button variant="danger">Delete Room</Button>
                                    {' '}
                                    <Button variant="warning">Enter Room</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </center>
            </div>
            <br></br>

        </>);
}

export default Home;