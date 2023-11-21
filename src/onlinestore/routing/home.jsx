import React from "react";
import { Card } from "react-bootstrap";
import bg from '../img/bg.jpg';

const HomeComponent = () => {
    const styles = {
        content: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            height: '100%',
            width: '100%',
            backgroundPosition: 'center'
        }
    };

    return(
        <>
            <Card className="bg-dark text-white">
            <Card.Img src={bg} alt="Card image" style={styles.content} />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </>
    )
}

export default HomeComponent;