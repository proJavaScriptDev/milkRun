import Types from './types'
import { generateGameGrid, randomizeGrid } from '../utils/grid'

const LENGTH = 5
const PLAYER_POS = LENGTH * 3
const MAX_HEALTH = 60

const initialState = {
	health: 60,
	gameOver: false,
	gameGrid: randomizeGrid(
		generateGameGrid(LENGTH, 'F', 'F', 'F', 'M', 'F'),
		PLAYER_POS
	),
	score: 0,
	playerPos: PLAYER_POS,
	length: LENGTH,
	scoreStep: 50,
	healthStep: 10,
	milkDrank: false,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case Types.SET_GAME_OVER:
			return {
				...state,
				gameOver: true,
			}
		case Types.SET_PLAYER_POS:
			return {
				...state,
				playerPos: action.payload,
			}
		case Types.SET_TO_FALSE:
			return {
				...state,
				milkDrank: false,
			}
		case Types.SET_SCORE: {
			if (action.payload < 0) {
				return {
					...state,
					score: 0,
				}
			}
			return {
				...state,
				score: action.payload,
				milkDrank: true,
			}
		}
		case Types.SHUFFLE_GAME_GRID:
			return {
				...state,
				gameGrid: randomizeGrid([...state.gameGrid], state.playerPos),
			}
		case Types.SET_HEALTH:
			if (action.payload < 0) {
				return {
					...state,
					health: 0,
				}
			} else if (action.payload > MAX_HEALTH) {
				return {
					...state,
					health: MAX_HEALTH,
				}
			}
			return {
				...state,
				health: action.payload,
			}
		case Types.RESET_GAME:
			return initialState
		default:
			return state
	}
}

export default reducer
