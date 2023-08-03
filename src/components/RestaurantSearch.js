import React, { Component } from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Table, Container, Form, Row, Col } from 'react-bootstrap'
import Menu from './Menu'
import { Link } from 'react-router-dom'

class RestaurantSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchData: null,
      noData: false,
      lastSearch: null
    }
  }

  search(key) {
    console.warn(key)
    this.setState({ lastSearch: key })
    fetch("http://localhost:3000/restaurant?q=" + key).then((response) => {
      response.json().then((result) => {
        console.warn(result)
        if (result.length) {
          this.setState({ searchData: result, noData: false })
        }
        else {
          this.setState({ noData: true, searchData: null })
        }
      })
    })
  }

  deleteRestro = (id) => {
    fetch("http://localhost:3000/restaurant/" + id,
      {
        method: "DELETE",

      }).then((response) => {
        response.json().then((result) => {
          console.warn(result)
          alert("Restaurant has been deleted")
          this.search(this.state.lastSearch)
        })
      })
  }

  render() {
    return (
      <div>
        <Menu></Menu>
        <h2>Restaurant Search</h2>

           <Row style={{justifyContent:'center' }}>
            <Col sm={3} >
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => this.search(e.target.value)}
                />
              </Form>
            </Col>
          </Row>
        

        {/* <input type='search' style={{ marginBottom: 20 }} onChange={(e) => this.search(e.target.value)} placeholder='search'></input> */}
        <Container>
          {
            this.state.searchData ?
              <div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Ratings</th>
                      <th>Email</th>
                      <th>Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.searchData.map((item) =>
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.address}</td>
                          <td>{item.ratings}</td>
                          <td>{item.email}</td>
                          <td><Link to={'/Update/' + item.id}><FontAwesomeIcon icon={faEdit} color="orange" style={{ marginRight: '10px' }} /></Link>
                            <span onClick={() => this.deleteRestro(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /></span>
                          </td>
                        </tr>
                      )
                    }
                  </tbody>
                </Table>
              </div>
              : ""

          }
          {
            this.state.noData ? <h1>No data found</h1> : null
          }

        </Container>


      </div>
    )
  }
}

export default RestaurantSearch