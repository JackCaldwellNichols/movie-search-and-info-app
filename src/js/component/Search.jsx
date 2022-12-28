import React, { useState } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'

const API_URL = 'https://api.themoviedb.org/3/search/movie/popular?api_key=c5083e57bd8e698a2a69427a666f125f'
const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=c5083e57bd8e698a2a69427a666f125f&query'

const Search = () => {
const [movies, setMovies] = useState([])
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
           <Form className='d-flex' onSubmit={searchMovie}>
                <FormControl type='search' placeholder='search' name='query'value={query} onChange={changehandler}></FormControl>
                <Button type='submit' variant='secondary'>Search</Button>
            </Form>
  )
}

export default Search