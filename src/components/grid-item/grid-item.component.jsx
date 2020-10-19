import React, { Component } from 'react'
import { connect } from 'react-redux'
import './grid-item.styles.scss'

class GridItem extends Component {
	render() {
		const { index, item, playerPos } = this.props
		return (
			<div className='grid-item'>
				{item === 'F' && (
					<img
						className='image opposite'
						src='/images/fake milk.png'
						alt='fake milk'
					/>
				)}
				{item === 'M' && (
					<img
						className='image opposite'
						src='/images/milk.png'
						alt='milk'
					/>
				)}
				{playerPos === index && (
					<img
						className='image'
						src='/images/player.png'
						alt='milk'
					/>
				)}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	playerPos: state.playerPos,
})

export default connect(mapStateToProps)(GridItem)
