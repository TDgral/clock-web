import Container from 'react-bootstrap/Container'
import "../sass/clock.sass"
import React, {useState, useEffect} from "react";

const Clock = () => {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, [])

    return (        
        <Container className="align-middle">
            <div className="content">
                <span>Now Its</span>
                <div className="clock">
                    <h1>{clockState}</h1>   
                </div>
            </div>
        </Container>
    )
};
export default Clock;