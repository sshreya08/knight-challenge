// console.log('hello');

// A, B, C - 10

// A->B->C->A

const knights = [
	{ name: 'A', power: 10 },
	{ name: 'B', power: 10 },
	{ name: 'C', power: 10 },
];

function hitPower() {
	return Math.random() * 10;
}

const declareWinner = (knights) => {
	let newKnights = [...knights]; // 3
	if (!newKnights.length) return;

	if (newKnights.length === 1) {
		console.log(`${newKnights[0].name} is the winner`);
		return;
	}

	while (newKnights.length > 1) {
		newKnights.forEach((knight, i) => {
			if (newKnights.length === 1) {
				console.log(`${newKnights[0].name} is the winner`);
				return;
			}
			if (!newKnights.length) return;
			console.log(`====${i}`);
			console.log(`New knights in the game ${JSON.stringify(newKnights)}`);
			let nextKnight;

			if (i >= newKnights.length - 1) {
				console.log('newKnights', newKnights);
				nextKnight = newKnights[0];
			} else {
				console.log('newKnights111ß', newKnights, i);
				nextKnight = newKnights[i + 1]; //1
			}

			const power = hitPower();
			console.log('+++++++++', JSON.stringify(nextKnight));
			const remainingPoints = reducePower(power, nextKnight.power);
			console.log(`${knight.name} is hitting ${nextKnight.name} with ${power}`);
			if (remainingPoints <= 0) {
				newKnights = newKnights.filter(
					(knight) => knight.name != nextKnight.name
				);
				console.log(`${nextKnight.name} is out of the game`);

				if (newKnights.length === 1) {
					console.log(`${newKnights[0].name} is the winner`);
					return;
				}
			} else {
				nextKnight.power = remainingPoints;
				// newKnights = [
				// 	...newKnights,
				// 	{ name: nextKnight.name, power: remainingPoints },
				// ];
			}
		});
		// console.log(`${newKnights[0].name} is the winner`);
	}
};

const reducePower = (randomNumber, existingPower) => {
	return existingPower - randomNumber;
};

declareWinner(knights);
