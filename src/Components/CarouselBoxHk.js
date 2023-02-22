import React, {Component} from 'react';
import Img1 from '../assets/image_1.jpg';
import Img2 from '../assets/image_2.jpg';
import Img3 from '../assets/image_3.jpg';

import {Carousel} from "react-bootstrap";

class CarouselBoxHk extends Component {
    render() {
        return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={Img1} alt="Img1"/>
                <Carousel.Caption>
                    <h3>Img1</h3>
                    <p>Its Img1</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={Img2} alt="Img2"/>
                    <Carousel.Caption>
                    <h3>Img2</h3>
                        <p>Its Img2</p>
                    </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={Img3} alt="Img3"/>
                    <Carousel.Caption>
                        <h3>Img3</h3>
                        <p>Its Img3</p>
                    </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        );
    }
}
export default CarouselBoxHk;