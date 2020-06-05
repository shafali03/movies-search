import React from 'react';
import './App.css';
import SearchMovies from './components/SearchMovie'


function App() {


  return (
    <div data-test="component-app" className="container">
      <h1 className="title">Movie Search App</h1>
      <SearchMovies />
    </div>
  )
}

export default App
