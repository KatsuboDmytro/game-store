import React from 'react'
import { GAMES } from '../../constants/games'
import { GameItem } from '../../components'
import './home.scss'

export const Home = () => {
  return (
    <div className="home-page">
        { GAMES.map(game => <GameItem key={game.id} game={game} />) }
    </div>
  )
}
