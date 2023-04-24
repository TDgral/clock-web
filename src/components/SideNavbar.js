import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "../sass/index.sass"

function SideNavbar() {
return (
    <Navbar expand="mb-2 lg" variant="light" bg="transparent">
        <Container className="align-middle">
            <Nav className="flex-column fs-4">
                <Nav.Link href="/" className="active">Clock</Nav.Link>
                <Nav.Link href="/pomodoro">Pomodoro</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )
}

export default SideNavbar;