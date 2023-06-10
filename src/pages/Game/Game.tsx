import React from 'react'
import { useSelector } from 'react-redux'

import { GameBuy } from '../../components'
import './game.scss'

export const Game = () => {
  const game = useSelector((state: any) => state.games.currentGame);

  if(!game) return null;

  return (
    <div className="game-page">
      <h1 className="game-page__title">{ game.title }</h1>
      <div className="game-page__content">
        <div className="game-page__left">
        <iframe
          width="560" height="315" 
          src={game.video} 
          title={game.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
        </div>

        <div className="game-page__right">
          <div
            className="game-cover"
            style={{ backgroundImage: `url(${game.image})` }}
          />
          <p>{game.description}</p>
          <p className="secondary-text">Популярні мітки для продукта:</p>
          {
            game.genres.map((genre: any) => (
              <span className="game-genre" key={genre}>{genre}</span>
            ))
          }

          <div className="game-page__buy-game">
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  )
}
