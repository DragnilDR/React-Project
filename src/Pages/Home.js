import React, {Component} from 'react';
import {Button, Card, CardImg, Container} from "react-bootstrap";

import CarouselBoxHk from "../Components/CarouselBoxHk";

class Home extends Component {
    render() {
        return (
        <Container className="mt-5">
            <CarouselBoxHk/>

            <h2 className="text-center m-4">Our team</h2>
            <div className="row">
                <div className="col">
                    <Card className="m-4 text-center" bg="light" border="primary">
                        <Card.Img variant="top" src="https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg" />
                        <Card.Body>
                           <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Команда 1
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col">
                    <Card className="m-4 text-center" bg="light">
                    <Card.Img variant="top" src="https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg" />
                        <Card.Body>
                            <Card.Title>Природознавці</Card.Title>
                            <Card.Text>
                                Команда 2
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col">
                    <Card className="m-4 text-center" bg="light">
                        <Card.Img variant="top" src="https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg" />
                        <Card.Body>
                            <Card.Title>Маркетилоги</Card.Title>
                            <Card.Text>
                                Команда 3
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
        );
    }
}

export default Home;