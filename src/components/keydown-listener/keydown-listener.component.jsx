import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	setPlayerPos,
	setScore,
	setHealth,
	shuffleGameGrid,
	setGameOver,
} from '../../redux/actions'

class KeydownListener extends Component {
	componentDidMount() {
		this.resetGame()
	}

	componentDidUpdate(prevProps) {
		const { gameOver } = this.props
		if (prevProps.gameOver === true && gameOver !== true) {
			this.resetGame()
		}
	}

	resetGame = () => {
		document.addEventListener('keydown', this.movePlayer)

		this.gameInterval = setInterval(() => {
			const { setHealth, health, setGameOver } = this.props
			setHealth(health - 1)
			if (health - 1 <= 0) {
				setGameOver()
				clearInterval(this.gameInterval)
			}
		}, 200)
	}

	movePlayer = e => {
		const { setPlayerPos, playerPos, length } = this.props

		const leftEdge = playerPos % length === 0
		const rightEdge = playerPos % length === length - 1
		const topEdge = playerPos < length
		const bottomEdge = playerPos >= length * (length - 1)

		if (e.keyCode === 37 && !leftEdge) {
			setPlayerPos(playerPos - 1)
		} else if (e.keyCode === 38 && !topEdge) {
			setPlayerPos(playerPos - length)
		} else if (e.keyCode === 39 && !rightEdge) {
			setPlayerPos(playerPos + 1)
		} else if (e.keyCode === 40 && !bottomEdge) {
			setPlayerPos(playerPos + length)
		}

		this.detectAndDrink()
	}

	detectAndDrink = () => {
		const {
			gameGrid,
			shuffleGameGrid,
			playerPos,
			setHealth,
			setScore,
			score,
			health,
			scoreStep,
			healthStep,
			setGameOver,
		} = this.props
		if (gameGrid[playerPos] === 'F') {
			shuffleGameGrid()
			setHealth(health - healthStep)
			if (health - healthStep <= 0) {
				setGameOver()
				clearInterval(this.gameInterval)
				document.removeEventListener('keydown', this.movePlayer)
			}
		} else if (gameGrid[playerPos] === 'M') {
			shuffleGameGrid()
			setScore(score + scoreStep)
			setHealth(health + healthStep)
		}
	}

	render() {
		return <></>
	}
}

const mapStateToProps = state => ({
	playerPos: state.playerPos,
	length: state.length,
	gameGrid: state.gameGrid,
	health: state.health,
	scoreStep: state.scoreStep,
	score: state.score,
	healthStep: state.healthStep,
	gameOver: state.gameOver,
})

const mapDispatchToProps = dispatch => ({
	setPlayerPos: playerPos => dispatch(setPlayerPos(playerPos)),
	shuffleGameGrid: () => dispatch(shuffleGameGrid()),
	setScore: score => dispatch(setScore(score)),
	setHealth: health => dispatch(setHealth(health)),
	setGameOver: () => dispatch(setGameOver()),
})

export default connect(mapStateToProps, mapDispatchToProps)(KeydownListener)
