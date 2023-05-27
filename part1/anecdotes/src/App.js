import { useState } from 'react';

const AnecdoteButton = (props) => {
  return <button onClick={props.handleClick}>NEXT ANECDOTE</button>;
};

const VoteButton = (props) => {
  return <button onClick={props.handleClick}>VOTE</button>;
};

const AnecdoteDiv = (props) => {
  return <div> {props.text} </div>;
};

const VoteDiv = (props) => {
  return <div>Has {props.votes} votes</div>;
};

const MostVotes = (props) => {
  const mostVotes = Math.max(...props.pointsCopy);
  const mostVotedIndex = props.pointsCopy.findIndex(
    (point) => point === mostVotes
  );
  console.log(mostVotedIndex);
  return (
    <>
      <div>{props.anecdote[mostVotedIndex]}</div>
      <div>Has {mostVotes} votes</div>
    </>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const pointsCopy = [...points];

  // pointsCopy[0] += 1;

  //chooses random number limited by anecdote array length, then sets state to that number
  const handleAnecdoteClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVoteClick = () => {
    pointsCopy[selected] += 1;
    setPoints(pointsCopy);
  };

  return (
    <>
      <h1>Anecdote of the day!</h1>
      <AnecdoteDiv text={anecdotes[selected]} />
      <VoteDiv votes={pointsCopy[selected]} />
      <AnecdoteButton handleClick={handleAnecdoteClick} />
      <VoteButton handleClick={handleVoteClick} />
      <h1>Anecdote with most votes</h1>

      <MostVotes anecdote={anecdotes} pointsCopy={pointsCopy} />
    </>
  );
};

export default App;
