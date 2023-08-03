import React, { Component } from 'react'
import Menu from './Menu'

class RestaurantCreate extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:null,
       ratings:null,
       address:null,
       email:null
    }
  }

  create(){
    console.warn(this.state)
    fetch("http://localhost:3000/restaurant",
    {
       method : "Post",
       headers: {'content-type': 'application/json'}
    ,
    body : JSON.stringify(this.state)

    }).then((response) => {
            response.json().then((result) => {
                console.warn(result)
                alert("Restaurant added")
            })
        })

  }
  render() {
    return (
      
      <div>
        <Menu></Menu>
        Restaurant Create
        <div>
         <input onChange={(e) => {this.setState({name:e.target.value})}} placeholder='Restaurant name'></input><br></br><br></br>
         <input onChange={(e) => {this.setState({address:e.target.value})}} placeholder='Restaurant address'></input><br></br><br></br>
         <input onChange={(e) => {this.setState({ratings:e.target.value})}} placeholder='Restaurant rating'></input><br></br><br></br>
         <input onChange={(e) => {this.setState({email:e.target.value})}} placeholder='Restaurant Email'></input><br></br><br></br>
         <button onClick={()=>{this.create()}} >Add Restaurant</button>
        </div>

      </div>

    )
  }
}


export default RestaurantCreate
