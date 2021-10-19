import './App.css';
import Navbar from './components/Navbar';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h1>Hello React Class Component</h1>
      </div>
    )
  }
}

