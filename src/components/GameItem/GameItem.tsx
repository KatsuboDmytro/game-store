import React from 'react';
import { GameBuy } from '../GameBuy/GameBuy';
import './gameItem.scss'

interface Game {
  id: number;
  title: string;
  price: number;
  image: string;
  genres: string[];
}

export const GameItem: React.FC<{ game: Game }> = ({ game }) => {
  return (
    <div className="game-item">
      <img className="game-cover" src={game.image} alt={game.title} />
      <div className="game-item__details">
        <span className="game-item__title">{game.title}</span>
        <div className="game-item__genre">
          {game.genres.map((genre) => (
            <span key={genre} className="game-genre">{genre}</span>
          ))}
        </div>
        <div className="game-item__buy">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};
