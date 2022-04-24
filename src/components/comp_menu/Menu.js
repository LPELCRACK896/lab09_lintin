import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import title from './assets/memory_game_pixel.png'
import startButtomImg from './assets/start_pixel.png'
import './menu_style.css'

class Menu extends Component {
  
  render() {
    return (
      <div id='menu-grid-container'>
            <img src={title} alt="Juego de memoria" width='600px' className="menu-img"/>
            <div id="div-spacebetween">
            </div>
          <Link to="game">
            <div id="start-container">
                <img src={startButtomImg} alt="Juego de memoria" width='300px' id="menu-img"/>  
            </div>
          </Link>
          <p>
            Recarga esta pagina para obtener un nuevo orden para las cartas
          </p>
      </div>
    )
  }
}

export default Menu