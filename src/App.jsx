import playerData from './playerData.js'
import { useState } from 'react'



function BaseballCard(props) {
  const [showPicture, setShowPicture] = useState(true)

  const toggleCard = () => {
    if (showPicture) {
      setShowPicture(false)
    } else {
      setShowPicture(true)
    }
  }

  if (showPicture) {
    return (
      <div className="card" onClick={toggleCard}>
        <h2>{props.name}</h2>
        <img src={props.imgUrl} alt={props.name} />
      </div>
    );
  } else {
    let statsDisplay = []

    Object.entries(props.stats).map((stat) => (
      statsDisplay.push(<p key={stat[0]}>{stat[0]}: {stat[1]}</p>)
    ))
    
      return (
        <div className="card" onClick={toggleCard}>
          <h2>{props.name}</h2>
          <p>Team: {props.team}</p>
          <p>Position: {props.position}</p>
          {statsDisplay}
        </div>
      )
  }
}

function App() {
  const cards = playerData.map((player) => (
  <BaseballCard 
  name={player.name} 
  team={player.team} 
  position={player.position}
  stats={player.stats}
  imgUrl={player.imgUrl}
  cardId={player.cardId}
  key={player.cardId}
  />
))

  return <>{cards}</>
}

export default App;
