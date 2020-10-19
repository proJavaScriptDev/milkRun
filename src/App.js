import React from 'react'
import './App.css'
import GridContainer from './components/grid-container/grid-container.component'
import KeydownListener from './components/keydown-listener/keydown-listener.component'
import Status from './components/status/status.component'
import { connect } from 'react-redux'

class App extends React.Component {
	constructor() {
		super()
		this.state = { play: false }
	}
	render() {
		const { health } = this.props
		return (
			<div>
				{this.state.play === false && (
					<div>
						<button
							className='play'
							onClick={() => {
								this.setState(() => ({ play: true }))
							}}>
							Play
						</button>

						<p style={{ textAlign: 'center' }}>
							Move Drink Milk And Be Healthy So Watch Out From
							Losing Calcium And Also Dont Drink Fake Milk.
						</p>
					</div>
				)}
				{this.state.play === true && (
					<div>
						<div
							className='cover'
							style={{
								backgroundColor: health <= 0 ? 'black' : 'none',
								opacity: health <= 0 ? 0.4 : 0,
							}}></div>
						<h1 className='heading'>Milk Run</h1>
						<KeydownListener />
						<div className='game-container'>
							<Status />
							<div className='el'>
								<GridContainer />
							</div>
						</div>
					</div>
				)}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	health: state.health,
})

export default connect(mapStateToProps)(App)
