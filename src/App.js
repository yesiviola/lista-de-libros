import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'


class App extends Component {
  render() {
    const arrayList = (cantidad) => {
      const arr=[]
      for (let index = 0; index < cantidad; index++) {
        arr.push(
          <li type='none' >
            <span className='fa fa-check pr-2'></span>
            {'Título del libro: '+' '+this.props.libros[index]}
          </li>)
      }
      return arr;
    };

    return (
      <div>
      <div className="App mt-2">
        <h2>Lista de libros</h2>
      </div>
        <ul className='text-primary'>
          {arrayList(this.props.cantidad)}
        </ul>
      </div>
    );
  }
}

export default App;
