import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

function BasicExample() {
  const navigate = useNavigate()
  const handleLogout = async () => {
    // Your logout logic here

    const response = await fetch("https://student-report-backend.vercel.app/api/logout", {
      method: "POST",credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //console.log("Logging out...");
    const resultData = await response.json();
    if(resultData.message == "Logout successful"){
      toast.success(resultData.message)
      navigate("/login")
    }
  };

  return (
    <Navbar expand="lg" className="bs-primary-border-subtle" style={{ top: "0", position: "fixed", width: "100%", borderBottom: "1px solid black", backgroundColor: "#474F7A", zIndex: "10"  }}>
      <Container>
        <Navbar.Brand> <img src="https://www.nitjsr.ac.in/static/media/logo_new1.85cf87db.png" style={{ height: "50px", width: "50px" }} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fs-6">
            <LinkContainer to="/dashboard">
              <Nav.Link style={{ fontWeight: "bolder" , color : "black" }}>Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/newstudent">
              <Nav.Link style={{ fontWeight: "bolder" }}>Register New Student</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/newsub">
              <Nav.Link style={{ fontWeight: "bolder" }}>Add New Subject</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/search">
              <Nav.Link style={{ fontWeight: "bolder" }}>Search Student</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/resultmatrix">
              <Nav.Link style={{ fontWeight: "bolder" }}>Enter Marks</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/assignments">
              <Nav.Link style={{ fontWeight: "bolder" }}>Add Assignments</Nav.Link>
            </LinkContainer>
          </Nav>
          <Button variant="outline-light" onClick={handleLogout} style={{ marginLeft: 'auto' }}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
