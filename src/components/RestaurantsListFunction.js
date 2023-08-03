import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Table } from 'react-bootstrap'
import Menu from './Menu'

const RestaurantsListFunction = () => {
    const [list, setList] = useState(null)

    useEffect(() => {
        getRestro()

    }, [])


    const getRestro = () => {
        fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {
                console.warn(result)
                setList(result)
            })
        })
    }

    const deleteRestro = (id) =>{
        fetch("http://localhost:3000/restaurant/" + id,
        {
           method : "DELETE",
           
        }).then((response) => {
                response.json().then((result) => {
                    console.warn(result)
                    alert("Restaurant has been deleted")
                    getRestro()
                })
            })
    }
   

    return (
        <div>
            <Menu></Menu>
            <h1>Restaurants List</h1>
            {
                list ?
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
                                    list.map((item, i) =>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.address}</td>
                                            <td>{item.ratings}</td>
                                            <td>{item.email}</td>
                                            <td><Link to={'/Update/'+ item.id}><FontAwesomeIcon icon={faEdit} color="orange" style={{ marginRight: '10px' }}/></Link>
                                                <span onClick={()=> deleteRestro(item.id)} ><FontAwesomeIcon icon={faTrash} color="red"/></span>
                                            </td>
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


export default RestaurantsListFunction
