import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return lines[i];
        }
    }
    return null;
}

function Square(props) {
    return (
        <button
            className={ props.squareClass }
            onClick={ props.onClick }
        >
            { props.value }
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={ this.props.squares[i] }
                squareClass={ this.props.winners[i] ? "square square-winner" : "square" }
                onClick={ () => this.props.onClick(i) }
            />
        );
    }

    render() {
        const rows = [];

        for (let i = 0; i < 3; ++i) {
            const rowCells = [];
            for (let j = 0; j < 3; ++j) {
                const cell = 3 * i + j;
                rowCells.push(<span key={cell}> { this.renderSquare(cell) } </span>);
            }
            rows.push(<div className="board-row" key={i}> { rowCells } </div>);
        }

        return <div> { rows } </div>;
    }
}

function HistoryButton(props) {
    const desc = props.move ? `Go to move #${props.move} (${props.step.coord.x}, ${props.step.coord.y})` : 'Go to game start';
    const thick = props.move === props.stepNumber ? "thick" : "";

    return (
        <li key={ props.move }>
            <button onClick={ () => props.onClick(props.move) }>
                <p className={ thick }>{ desc }</p>
            </button>
        </li>
    );
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                coord: { x : null, y: null },
                winners: Array(9).fill(false),
            }],
            stepNumber: 0,
            xIsNext: true,
            reversed: false,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        let current = history[history.length - 1];
        const squares = current.squares.slice();
        const last = { x : parseInt(i / 3) + 1, y: parseInt(i % 3) + 1 };
        let winnerSquares = calculateWinner(current.squares);

        if (winnerSquares || squares[i]) return;

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        winnerSquares = calculateWinner(squares);
        const winners = current.winners.slice();

        if (winnerSquares) {
            for (let winnerSquare of winnerSquares)
                winners[winnerSquare] = true;
        }

        this.setState({
            history: [...history, { squares: squares, coord: last, winners: winners.slice() }],
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: !(step & 1),
        });
    }

    renderHistoryButton(move) {
        return (
            <HistoryButton
                move={ move }
                step={ this.state.history[move] }
                stepNumber={ this.state.stepNumber }
                onClick={ (step) => this.jumpTo(step) }
            />
        );
    }

    toggleOrder() {
        this.setState({
            reversed: !this.state.reversed,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winnerSquares = calculateWinner(current.squares);
        const winner = winnerSquares ? current.squares[winnerSquares[0]] : null;

        const moves = history.map((step, move) => {
            return this.renderHistoryButton(move);
        });

        let status;
        if (winner) status = 'Winner: ' + winner;
        else if (!winner && current.squares.every(value => value)) status = "Draw";
        else status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

        const buttonOrderText = this.state.reversed ? "Descending" : "Ascending";

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={ current.squares }
                        winners={ current.winners }
                        onClick={ (i) => this.handleClick(i) }
                    />
                </div>

                <div className="game-info">
                    <div>{ status }</div>
                    <ol>{ this.state.reversed ? moves.reverse() : moves }</ol>
                </div>

                <div className="game-info">
                    <button onClick={ () => this.toggleOrder() }>
                        { buttonOrderText }
                    </button>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
