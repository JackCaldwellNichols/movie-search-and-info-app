import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap'


const API_IMAGE = 'https://image.tmdb.org/t/p/w500/'

const MovieBox = ({title, poster_path, overview})=>{

const [show, setShow] = useState(false)
const handleShow = () => setShow(true)
const handleClose = () => setShow(false)

  return (
    <div className='card text-center bg-secondary mb-3'>
       <div className='card-body'>
         <img className = 'card-img-top'src={API_IMAGE+poster_path} />
       </div>
       <div className='card-body'>
          <p>{title}</p>
          <button className='btn btn-dark' type='button' onClick={handleShow}>Find out more</button>
          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
              <Modal.Title><h3>{title}</h3></Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <img className = 'card-img-top'src={API_IMAGE+poster_path} />
              <h3>Overview</h3>
              <p>{overview}</p>
              </Modal.Body>
              <Modal.Footer>
                  <Button onClick={handleClose} variant='secondary'>Close</Button>
              </Modal.Footer>
          </Modal>
       </div>
    </div>
  )
}

export default MovieBox