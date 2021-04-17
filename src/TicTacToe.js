import logo from './logo.svg';
import './TicTacToe.css';
import { Board } from './components/Board';

export const TicTacToe = () => {
  return (
    <div className="App">
      <h1>TicTacToe</h1>
      <Board/>
    </div>
  );
}

