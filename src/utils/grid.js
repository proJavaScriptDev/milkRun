function generateGameGrid(length, ...items) {
	const grid = []
	items.forEach(item => {
		grid.push(item)
	})
	while (grid.length < length * length) {
		grid.push(0)
	}
	return grid
}

function randomizeGrid(grid, playerPos) {
	let newGrid = [...grid.sort(() => 0.5 - Math.random())]
	while (newGrid[playerPos] !== 0) {
		newGrid = [...grid.sort(() => 0.5 - Math.random())]
	}
	return newGrid
}

export { generateGameGrid, randomizeGrid }
