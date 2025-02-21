import React, { useEffect, useState } from "react";

const findWinningPossibilities = (n) => {
  const winningPossibilities = [];
  // for rows
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(i * n + j);
    }
    winningPossibilities.push(row);
  }

  // for col
  for (let i = 0; i < n; i++) {
    const col = [];
    for (let j = 0; j < n; j++) {
      col.push(j * n + i);
    }
    winningPossibilities.push(col);
  }

  // for main diagonel
  const dia = [];
  for (let i = 0; i < n; i++) {
    dia.push(i * n + i);
  }
  winningPossibilities.push(dia);

  //for anti dia
  const antidia = [];
  for (let i = 0; i < n; i++) {
    antidia.push(i * (n - 1) + (n - 1));
  }
  winningPossibilities.push(antidia);
  return winningPossibilities;
};

const initialBoard = (n) => {
  return Array(n * n).fill(null);
};
const useTicTac = () => {
  const [size, setSize] = useState(3);
  const [board, setBoard] = useState(initialBoard(size));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winIndex, setWinIndex] = useState();

  const handleSizeChange = (e) => {
    setSize(e.target.value);
    setBoard(initialBoard(e.target.value));
    setWinIndex([]);
  };
  findWinningPossibilities(size);
  useEffect(() => {
    findWinningPossibilities(size);
  }, [size]);

  useEffect(() => {
    const { winner, index } = isWinner(board);

    if (winner) {
      setWinIndex(index);
    }
  }, [board]);

  const isWinner = (board) => {
    const winningPossibilities = findWinningPossibilities(size);

    for (let i = 0; i < winningPossibilities.length; i++) {
      const indices = winningPossibilities[i];
      if (
        indices.every(
          (index) => board[index] && board[index] === board[indices[0]]
        )
      ) {
        return { winner: board[indices[0]], index: indices };
      }
    }

    return { winner: null, index: null };
  };

  const getStatus = () => {
    const { winner } = isWinner(board);
    if (winner) {
      return `Player ${winner} is the winner`;
    }

    if (!board.includes(null)) {
      return "it's a draw";
    }

    if (!winner && board.includes(null)) {
      return isXTurn ? "Player X turn" : "Player O turn";
    }
  };
  const handleClick = (i) => {
    const { winner } = isWinner(board);

    if (winner || board[i]) return;

    const newboard = [...board];

    newboard[i] = isXTurn ? "X" : "O";
    setBoard(newboard);
    setIsXTurn((PREV) => !PREV);
  };

  const getGridColsClass = (size) => {
    return (
      {
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
      }[size] || "grid-cols-3"
    );
  };

  const resetGame = () => {
    setSize(3)
    setBoard(initialBoard(3));
    setIsXTurn(true);
    setWinIndex([]);
  };
  return {
    board,
    handleClick,
    getStatus,
    winIndex,
    handleSizeChange,
    size,
    getGridColsClass,
    resetGame,
  };
};

export default useTicTac;
