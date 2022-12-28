import React, { useEffect, useState } from "react";
import MovieBox from "./component/MovieBox.jsx";
import { Button, Form, FormControl, Modal, NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../styles/App.css'


//create your first component
const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=c5083e57bd8e698a2a69427a666f125f&release_date=2022';

const App = () => {

const [movies, setMovies] = useState([])

useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data => {
        console.log(data)
        setMovies(data.results)
    })
}, [])

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

    <div className="container-fluid">
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
           
            <div>
                {movies.length > 0 ? ( 
                <div className="container">
                    <div className="grid">
                    {movies.map((movie)=> 
                    <MovieBox key={movie.id} {...movie}/>)}
                    </div>
                </div>
                ) : (
                    <h2>Sorry! No movies found</h2>
                )}
               
            </div>
	</div>

	);
};

export default App;
