import React, { useState } from 'react'
import { Button, Form, FormControl, Modal, NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
const [query, setQuery] = useState('')

const searchMovie = async (event) => {
    event.preventDefault()
    console.log('searching')
    try {
    const url=`https://api.themoviedb.org/3/search/movie?api_key=c5083e57bd8e698a2a69427a666f125f&query=${query}`
    const result = await fetch(url)
    const data = await result.json()
    console.log(data)
    setMovies(data.results)
        
    } catch (error) {
        console.log(error)
    }
}

const changehandler = (event) =>{
    setQuery(event.target.value)
}

  return (
    <>
    <Navbar className='header' expand='lg'>
        <Container fluid>
          <Navbar.Brand href="#home">Films4Geeks</Navbar.Brand>
            <Nav>
                <Nav.Link href="#login">Login</Nav.Link>
                <Nav.Link href="#login">Starring</Nav.Link>
                <Navbar.Toggle aria-controls='navbarScroll'></Navbar.Toggle>
                <Navbar.Collapse id='navbarScroll'>
                    <Form className='d-flex' onSubmit={searchMovie}>
                        <FormControl type='search' placeholder='search' name='query'value={query} onChange={changehandler}></FormControl>
                        <Button type='submit' variant='secondary'>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Nav>
        </Container>
    </Navbar>

    </>
  );
}

export default Header