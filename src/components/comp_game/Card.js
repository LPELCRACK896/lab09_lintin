import React, { Component } from 'react'
import "./styles/game_style.css"
import ReactCardFlip from 'react-card-flip';
import CaptainFalconImage from '../card_visuals/cFalcon.png'
import FoxImage from '../card_visuals/fox.png'
import DevilImage from '../card_visuals/devil.png'
import CupheadYMugmanImage from '../card_visuals/cupheadMugman.png'
import EndermanImage from '../card_visuals/enderman.png'
import SteveImage from '../card_visuals/steve.png'
import FreddyImage from '../card_visuals/freddy.png'
import ChicaImage from '../card_visuals/chica.png'
import JettImage from '../card_visuals/jett.png'
import KillJoyImage from '../card_visuals/kj.png'
import NuezImage from '../card_visuals/nuez.png'
import PatapumImage from '../card_visuals/patapum.png'
import SansImage from '../card_visuals/sans.png'
import PapyrusImage from '../card_visuals/papyrus.png'
import QuanChiImage from '../card_visuals/quanChi.png'
import ScorpionImage from '../card_visuals/scorpion.png'
import BackImage from '../card_visuals/0_backSide_Card.png'

export default class Card extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        isFlipped: false
      };
    this.renderFrontImageCard = this.renderFrontImageCard.bind(this);

  }

      

  renderFrontImageCard(){
    switch(this.props.cardid) {
      case 1:
        return <img src={CaptainFalconImage} alt="Chica Image" className="front"/>
      case 2:
        return <img src={FoxImage} alt="Fox image" className="front"/>
      case 3:
        return <img src={DevilImage} alt="Devil"className="front"/>
      case 4:
        return <img src={CupheadYMugmanImage} alt="Cup Head"className="front"/>
      case 5:
        return <img src={EndermanImage} alt="Enderman" className="front"/> 
      case 6:
        return <img src={SteveImage} alt="Steve" className="front"/>
      case 7:
        return <img src={FreddyImage} alt="Freddy" className="front"/>
      case 8:
        return <img src={ChicaImage} alt="Chica" className="front"/>
      case 9:
        return <img src={JettImage} alt="Jett" className="front"/>
      case 10:
          return <img src={KillJoyImage} alt="Killjoy" className="front"/>
      case 11:
        return <img src={NuezImage} alt="Nuez" className="front"/>
      case 12:
        return <img src={PatapumImage} alt="Patapum" className="front"/>
      case 13:
        return <img src={SansImage} alt="Sans" className="front"/>
      case 14:
        return <img src={PapyrusImage} alt="Papyrus" className="front"/>
      case 15:
        return <img src={QuanChiImage} alt="Quan Chi" className="front"/>
      case 16:
        return <img src={ScorpionImage} alt="Scorpion" className="front"/>
      default:
        return   <img src={BackImage} alt="BacksideCardImage" className="front"/>
  }
  }
  
  render() {
    this.state.isFlipped = this.props.flip   
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} className='card'  flipDirection='horizontal'>
        <div className='card' onClick={this.clickHandler} >
          <img src={BackImage} alt="BacksideCardImage"  className={this.props.cardid}/>
        </div>
        <div className='card' >
        {this.renderFrontImageCard()}
        </div>
      </ReactCardFlip >
      
    )
  }
}
