import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setCurrentGame } from '../../redux/games/reducer';
import { Game } from '../../constants/interfaces'
import { GameBuy } from '../index';
import './gameItem.scss'

export const GameItem: React.FC<{ game: Game }> = ({ game }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/${game.title}`);
  };

  return (
    <div className="game-item" onClick={handleClick}>
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
