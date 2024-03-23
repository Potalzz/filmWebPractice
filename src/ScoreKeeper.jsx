import { useState } from "react";

export default function ScoreKeeper({ numPlayers = 3, target = 5 }) {
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));
  const incrementScore = (idx) => {
    setScores((prevScore) => {
      return prevScore.map((score, i) => {
        if (score >= target) return score;
        if (i === idx) return score + 1;
        return score;
      });
    });
  };

  const reset = () => {
    setScores(new Array(numPlayers).fill(0));
  };

  return (
    <div>
      <h1>ScoreKeeper</h1>
      <ul>
        {scores.map((score, idx) => {
          return (
            <li key={idx}>
              Player{idx + 1}: {score}{" "}
              <button onClick={() => incrementScore(idx)}>+1</button>
              <br />
              {score >= target && "WINNER"}
            </li>
          );
        })}
      </ul>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
