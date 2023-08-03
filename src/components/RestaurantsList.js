import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Menu from './Menu'

class RestaurantsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: null
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/restaurant").then((response) => {
      response.json().then((result) => {
        console.warn(result)
        this.setState({ list: result })
      })
    })
  }

  render() {

    return (
      <div>
        <Menu></Menu>
        <h1>Restaurants List</h1>
        {
          this.state.list ?
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
                    this.state.list.map((item, i) =>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.ratings}</td>
                        <td>{item.email}</td>
                        <td><Link to={'/Update/'+ item.id}>Edit</Link></td>
                      </tr>
                    )
                  }
                </tbody>
              </Table>
            </div>
            :
            <div><p>Please wait...</p></div>

        }

      </div>


    )
  }
}

export default RestaurantsList
