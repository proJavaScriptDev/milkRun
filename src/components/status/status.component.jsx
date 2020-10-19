import React, { Component } from 'react'
import { connect } from 'react-redux'
import { resetGame, setToFalse } from '../../redux/actions'
import './status.styles.scss'

class Status extends Component {
	componentDidMount() {
		this.runEverytime = setInterval(() => {
			const { milkDrank, gameOver, setToFalse } = this.props
			if (milkDrank === true) {
				setTimeout(() => setToFalse(), 400)
			}
			if (gameOver) {
				clearInterval(this.runEveryTime)
			}
		}, 100)
	}

	render() {
		const { health, score, gameOver, resetGame, milkDrank } = this.props
		const halfHealth = 33

		return (
			<div className='status-container'>
				<h2>Status</h2>
				<div className='health-container'>
					<div className='health-bar' style={{ width: `${health}%` }}>
						<div
							className='health-bar-inner'
							style={{ color: health < halfHealth && 'black' }}>
							<span>{health}</span>
						</div>
					</div>
				</div>
				<div className='score-container'>
					<p
						className={`points ${
							milkDrank === true ? `comeBack` : ''
						}`}>
						+50 Points
					</p>
					Score: {score}
				</div>
				{gameOver && (
					<div className='game-over'>
						<h3>Game Over</h3>
						<button
							onClick={() => resetGame()}
							className='play-again'>
							Play Again
						</button>
					</div>
				)}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	health: state.health,
	score: state.score,
	gameOver: state.gameOver,
	milkDrank: state.milkDrank,
	gameGrid: state.gameGrid,
	playerPos: state.playerPos,
})

const mapDispatchToProps = dispatch => ({
	resetGame: () => dispatch(resetGame()),
	setToFalse: () => dispatch(setToFalse()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Status)
