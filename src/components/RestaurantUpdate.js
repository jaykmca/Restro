import React, { Component } from 'react'
import Menu from './Menu'

export class RestaurantUpdate extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name:null,
      ratings:null,
      address:null,
      email:null
   }
  }

  componentDidMount(){
    fetch("http://localhost:3000/restaurant/"+ this.props.id).then((response) => {
      response.json().then((result) => {
        console.warn(result)
        this.setState({ 
          name:result.name,
          ratings:result.ratings,
          address:result.address,
          email:result.email })
      })
    })
  }

  update() {
    fetch("http://localhost:3000/restaurant/" + this.props.id,
    {
       method : "PUT",
       headers: {'content-type': 'application/json'}
    ,
    body : JSON.stringify(this.state)

    }).then((response) => {
            response.json().then((result) => {
                console.warn(result)
                alert("Restaurant Updated")
            })
        })
  }

  render() {

    //const { id } = this.props;
    //console.log('id------------', this.props)

    return (
      <div>
        <Menu></Menu>
         <h1>Restaurant Update</h1>
        <div>
          <input onChange={(e) => { this.setState({ name: e.target.value }) }} placeholder='Restaurant name' value={this.state.name}></input><br></br><br></br>
          <input onChange={(e) => { this.setState({ address: e.target.value }) }} placeholder='Restaurant address' value={this.state.address}></input><br></br><br></br>
          <input onChange={(e) => { this.setState({ ratings: e.target.value }) }} placeholder='Restaurant rating' value={this.state.ratings}></input><br></br><br></br>
          <input onChange={(e) => { this.setState({ email: e.target.value }) }} placeholder='Restaurant Email' value={this.state.email}></input><br></br><br></br>
          <button onClick={() => { this.update()}} >Update Restaurant</button>
        </div>

      </div>

    )
  }
}

export default RestaurantUpdate