import Types from './types'

const setGameOver = () => ({
	type: Types.SET_GAME_OVER,
})

const setPlayerPos = pos => ({
	type: Types.SET_PLAYER_POS,
	payload: pos,
})

const setToFalse = () => ({
	type: Types.SET_TO_FALSE,
})

const setScore = score => ({
	type: Types.SET_SCORE,
	payload: score,
})

const setHealth = health => ({
	type: Types.SET_HEALTH,
	payload: health,
})

const shuffleGameGrid = () => ({
	type: Types.SHUFFLE_GAME_GRID,
})

const resetGame = () => ({
	type: Types.RESET_GAME,
})

export {
	shuffleGameGrid,
	setScore,
	setGameOver,
	resetGame,
	setPlayerPos,
	setHealth,
	setToFalse,
}
