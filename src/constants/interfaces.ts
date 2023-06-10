import { MouseEvent, ReactNode } from 'react';

export interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  type: 'primary' | 'secondary';
  children: ReactNode;
  size?: 's' | 'm';
  btnColor: string;
}

export interface CartItemProps {
  id: number;
  title: string;
  price: number;
}

export interface game {
  price: number;
  id: number;
}

export interface Game {
  id: number;
  title: string;
  price: number;
  image: string;
  genres: string[];
}
