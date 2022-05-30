//Import dependencies
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';

//Create routes for Home page/component and MovieDetails page/component
const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home  />}  /> 
      <Route path='/movie/:id' element={<MovieDetails />} />
    </Routes>
  );
}

export default App;
