import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container  } from 'react-bootstrap'
import Menu from './Menu'
const Login = () => {

  const naviage = useNavigate()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [userError, setUserError] = useState(false)

  const loginHandle = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/login?q=" + name).then((response) => {
      response.json().then((result) => {
        if (result.length) {
          
          console.log("call localstore-----")
          localStorage.setItem('login', JSON.stringify(result))
          naviage('/List')
        }
        else {
          alert("Invlaid user name or password")
        }
      })
    })
  }

  const userHandle = (e) => {
     setName(e.target.value) 
     if(e.target.value.length <3 ) {
        setUserError(true)
     }else{
        setUserError(false)
     } 
  }


  return (
    <Container>

      <Menu></Menu>
      <h2>sign In</h2>
      <form onSubmit={loginHandle}>
      <input 
        type="text"
        onChange={userHandle}
        placeholder='Enail or username'
        name="user"
      />{userError? <span>Invlaid username</span>:''}
      <br></br><br></br>
      
     <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
        name="passward"
      />
      <br></br><br></br>
      <button  type='submit'>Login</button>

      </form>

    </Container >
  )
}

export default Login
