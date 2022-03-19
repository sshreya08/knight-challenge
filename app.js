// process.stdout.write('Please enter your name\n');

// process.stdin.on('data', (data) => {
// 	console.log(`Your name is ${data}`);
// 	process.exit();
// });

const knights = [
	{ name: 'A', power: 10 },
	{ name: 'B', power: 10 },
	{ name: 'C', power: 10 },
];

const getNextPlayer = (currentPlayer, playersList) => {
	const indexOfCurrentPlayer = playersList.indexOf(currentPlayer);
	let nextPlayer;
	if (indexOfCurrentPlayer === playersList.length - 1) {
		nextPlayer = playersList[0];
	} else {
		nextPlayer = playersList[indexOfCurrentPlayer + 1];
	}
	return nextPlayer;
};

const getPunchPower = () => {
	return Math.random() * 10;
};

const getWinner = (playersList) => {
	return playersList.length === 1 ? playersList[0].name : null;
};

const playerScore = (player, punch) => {
	return {
		name: player.name,
		power: player.power - punch,
	};
};

const game = (knights) => {
	let playersList = [...knights];
	let currentPlayer = playersList[0];
	while (playersList.length > 1) {
		console.log(`\nGame started again`);
		console.log(`Players in the game ${JSON.stringify(playersList)}`);
		const nextPlayer = getNextPlayer(currentPlayer, playersList);
		const punchPower = getPunchPower().toFixed(2);
		console.log(
			`${currentPlayer.name} is hitting ${nextPlayer.name} with ${punchPower}`
		);
		const nextPlayerUpdated = playerScore(nextPlayer, punchPower);
		if (nextPlayerUpdated.power <= 0) {
			playersList = playersList.filter(
				(player) => player.name !== nextPlayerUpdated.name
			);
		} else {
			// playersList.splice(
			// 	playersList.findIndex((p) => p.name === nextPlayerUpdated.name),
			// 	1
			// );
			// playersList.push(nextPlayerUpdated);
			playersList = playersList.map((player) => {
				return player.name === nextPlayerUpdated.name
					? { ...player, power: nextPlayerUpdated.power }
					: player;
			});
		}
		currentPlayer = getNextPlayer(currentPlayer, playersList);
	}

	if (getWinner(playersList)) {
		console.log(`\n${playersList[0].name} is the winner`);
	}
};

game(knights);
