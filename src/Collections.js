import { Accordion, Badge, Figure } from 'react-bootstrap';
import { ownedCharacters, unOwnedCharacters } from './Data';

function Collections() {
    console.log(ownedCharacters);
    const figureStyles = {
        paddingLeft: "20px",
        paddingRight: "20px"
    };


    return (<div>
        <center>
            <br></br>
            <br></br>
            <h1>Owned Collections</h1>
            <br></br>
            {ownedCharacters.map((character, i) => {
                return (
                    <>
                        {i % 5 === 0 ? <br></br> : null}
                        <Figure style={figureStyles} key={"character " + i}>
                            <Figure.Image
                                width={75}
                                height={75}
                                alt="171x180"
                                src={character}
                            />
                            <Figure.Caption>
                                {"character " + (i + 1)}{i < 2 ? <Badge pill bg="success">New</Badge> : null}
                            </Figure.Caption>
                        </Figure>
                    </>)
            })}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Accordion defaultActiveKey="0" style={{ width: "50%" }} >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Unowned</Accordion.Header>
                    <Accordion.Body>
                        {unOwnedCharacters.map((character, i) => {
                            return (
                                <>
                                    <Figure style={figureStyles} key={"character " + i}>
                                        <Figure.Image
                                            width={75}
                                            height={75}
                                            alt="171x180"
                                            src={character}
                                        />
                                        <Figure.Caption>
                                            {"character " + (i + 1)}
                                        </Figure.Caption>
                                    </Figure>
                                </>)
                        })}
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </center>
    </div>);
}

export default Collections;