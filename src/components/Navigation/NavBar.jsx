import {Navbar , Container} from 'react-bootstrap';

 function  NavBar(props){
    return (
      <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#">{props.title}</Navbar.Brand>
      </Container>
    </Navbar>
    )
}

NavBar.defaultProps={
    title :  "Naresh Namani"
}

export default NavBar;