import React from 'react'
import GridItem from '../grid-item/grid-item.component'
import { connect } from 'react-redux'
import './grid-container.styles.scss'

class GridContainer extends React.Component {
	render() {
		const { gameGrid } = this.props
		return (
			<div className='grid-container'>
				{gameGrid.map((item, index) => (
					<GridItem key={index} item={item} index={index} />
				))}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	gameGrid: state.gameGrid,
})

export default connect(mapStateToProps)(GridContainer)
