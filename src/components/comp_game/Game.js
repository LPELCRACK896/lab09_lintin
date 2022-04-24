import React, { Component } from 'react'
import "./styles/game_style.css"
import Card from './Card'
import logo from './assets/memory_game_pixel.png'
import { Link } from 'react-router-dom'
import random_memory_setup from './random_game_setup'
import YouWin from './assets/YouWin.png'
import BackToMenu from './assets/BackToMenu.png'
const cards_info = require ('./cards_info')

class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      moves: 0,
      record: 0,
      setup: [],
      oldPoints: 0,
      points: 0,
      win: false, 
      first_card_flipped: null,
      solved: [],
      flipped: new Map(),
      coincidio: null
    }
    this.state.setup = random_memory_setup()
    this.clickRegisterCardSelected = this.clickRegisterCardSelected.bind(this);
    this.resetFlip = this.resetFlip.bind(this)
    this.state.setup.map(id => this.state.flipped.set(id, false))

  }
  resetFlip(firstId, secondId){
    this.state.flipped.set(firstId, !this.state.flipped.get(firstId))
    this.state.flipped.set(secondId, !this.state.flipped.get(secondId))

  }
  clickRegisterCardSelected($event) {
    $event.preventDefault();
    if($event.target.className!="front"&&$event.target.className!=null){//SI tiene un ID valido pues
      if(!this.state.solved.includes(cards_info.find(card => card.id==$event.target.className))){
        if (this.state.first_card_flipped==null){
          //No se ha volteado ninguna carta
          this.state.flipped.set(cards_info.find(card => card.id==$event.target.className).id, true)
          this.state.first_card_flipped= cards_info.find(card => card.id==$event.target.className)
          this.state.count_cards_flipped +=1
          
        }else{
          //Se esta volteando la segunda carta
          this.state.flipped.set(cards_info.find(card => card.id==$event.target.className).id, true)
          if (this.state.first_card_flipped.pair_id
            ==cards_info.find(card => card.id==$event.target.className).id)
          {
            this.state.coincidio = true
            this.state.points +=1
            this.state.solved.push(cards_info.find(card => card.id==$event.target.className).id)
            this.state.solved.push((this.state.first_card_flipped.id))
          }else{
              //No coincide la segunda carta
              this.state.coincidio = false
              //Esto tengo que hacer que lo haga después de un tiempo, para que se vea la segunda carta
              this.resetFlip(cards_info.find(card => card.id==$event.target.className).id,this.state.first_card_flipped.id )    
          }
          this.state.first_card_flipped= null
          
        }
        this.setState({moves: this.state.moves + 1})
      }
    } else{
    }
    if(this.state.points>=6){
      this.state.win = true
    }
  }
  render() {
    
    return (
      <>
      <header>
        <Link to="/">
          <img src= {logo} id="logo"></img>
        </Link>

          <div className='div-text' id="moves-div">
            <div>Movimientos: {this.state.moves}
            </div>
          </div>
          <div className='div-text' id="record-div">
            <div>
              Puntos: {this.state.points}/6 
            </div>
          </div>          
      </header>
      <div style={{ postion: "relative" }}>
        <div id="game-grid">
          {this.state.setup.map((id, index) =>{
            return <div key={id} className="card-container"
            onClick={($event)=>{
              
              this.clickRegisterCardSelected($event)
            }
          }><Card cardid={id}  flip={this.state.flipped.get(id)}/></div>
          
          })}
          <div style={{
            display:this.state.win? "auto": "none",
            position: this.state.win?"absolute":"auto", 
            width: this.state.win?"100%":"auto", 
            height: this.state.win?"100%":"auto",
            background: this.state.win?"rgba(128, 128, 128, 0.4)":"auto",
            display: this.state.win?"flex":"auto",
            justifyContent: this.state.win?"center":"auto"
            }} >
            <div id="win-dialogue">
              <img src= {YouWin} id="you-win-image"/>
              <Link to="/">
                <img src= {BackToMenu} id="main-menu-image"/>
              </Link>
            </div>
          </div>
        </div>
   
      </div>
      </>
    )
  }
}

export default Game