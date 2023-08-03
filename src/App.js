
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import RestaurantsList from './components/RestaurantsList';
import RestaurantCreate from './components/RestaurantCreate'
import RestaurantUpdate from './components/RestaurantUpdate';
import RestaurantDetials from './components/RestaurantDetials';
import RestaurantSearch from './components/RestaurantSearch';
import Home from './components/Home'
import RestaurantsListFunction from './components/RestaurantsListFunction'
import RestaurantUpdateWrapper from './components/RestaurantUpdateWrapper'
import Login from './components/Login';
import Menu from './components/Menu'
import Logout from './components/Logout';
import RouteProtected from './components/RouteProtected'

function App() {
  const item = localStorage.getItem('login')
  console.log('item---' + item)
  return (
    <div className="App">
      <Router>
        <Routes >
          {/* <Route exact path='/' element={<Home />} />  */}
          {/* <protectedRout exact path='/' element={<Home />} /> */}

          <Route path="/"
            element={
              <RouteProtected>
                < Home />
              </RouteProtected>

            } />

          <Route path='/List' element={<RestaurantsListFunction />} />
          <Route path='/Create' element={<RestaurantCreate />} />
          <Route path='/Update/:id' element={<RestaurantUpdateWrapper />} />
          <Route path='/Details' element={<RestaurantDetials />} />
          <Route path='/Search' element={<RestaurantSearch />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
