const Game = () => {
  const getUserSelection = (handGestureArray) => {
    let userSelection = undefined;

    while (!handGestureArray.includes(userSelection)) {
      userSelection = prompt("What is your pick: ").toLowerCase();
    }
    return userSelection;
  };

  const getComputerChoice = (handGestureArray) => {
    const randomIndex = Math.floor(Math.random() * handGestureArray.length);
    const randomResult = handGestureArray[randomIndex];
    return randomResult;
  };

  const playRound = (playerSelection, computerSelection, handGestureArray) => {
    let result = undefined;

    playerSelection == computerSelection
      ? (result = "tied")
      : (playerSelection == handGestureArray[0] &&
          computerSelection == handGestureArray[1]) ||
        (playerSelection == handGestureArray[1] &&
          computerSelection == handGestureArray[2]) ||
        (playerSelection == handGestureArray[2] &&
          computerSelection == handGestureArray[0])
      ? (result = `${playerSelection} wins! ${computerSelection} lost`)
      : (result = `${computerSelection} wins! ${playerSelection} lost`);

    return result;
  };

  const handGestureArray = ["paper", "rock", "scissors"];
  const computerSelection = getComputerChoice(handGestureArray);
  const playerSelection = getUserSelection(handGestureArray);
  const gameResult = playRound(
    playerSelection,
    computerSelection,
    handGestureArray
  );

  return alert(gameResult);
};

