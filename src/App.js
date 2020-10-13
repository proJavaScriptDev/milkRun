import React from 'react'
import './App.css'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			'currentFilter': 'brightness',
			'imgUrl': '',
			'filterName': 'Brightness',
			'brightness': 100,
			'contrast': 100,
			'grayscale': 0,
			'hue-rotate': 0,
			'saturate': 100,
			'sepia': 0,
			'blur': 0,
			'invert': 0,
			'opacity': 100,
		}
		this.fileInputRef = React.createRef()
	}
	selectImg = () => {
		this.fileInputRef.current.click()
	}
	readImage = e => {
		const file = e.target.files[0]
		const fileReader = new FileReader()
		fileReader.readAsDataURL(file)
		fileReader.onload = () => {
			this.setState({
				imgUrl: fileReader.result,
			})
		}
	}

	changeValue = e => {
		const value = e.target.value
		this.setState(state => ({
			[state.currentFilter]: value,
		}))
	}

	render() {
		const { imgUrl, filterName, currentFilter } = this.state
		return (
			<div>
				<input
					ref={this.fileInputRef}
					type='file'
					style={{ display: 'none' }}
					onChange={this.readImage}
				/>
				<h2>Image Filter</h2>
				<div className='flex-container'>
					<div className='image-container'>
						{imgUrl === '' && (
							<button
								className='fileReader'
								onClick={this.selectImg}>
								browse image
							</button>
						)}
						<img
							src={imgUrl}
							style={{
								maxWidth: '80%',
								height: 'auto',
								filter: `
									brightness(${this.state.brightness}%)
									contrast(${this.state.contrast}%)
									grayscale(${this.state['grayscale']}%)
									hue-rotate(${this.state['hue-rotate']}deg)
									saturate(${this.state.saturate}%)
									sepia(${this.state.sepia}%)
									blur(${this.state.blur}px)
									invert(${this.state.invert}%)
									opacity(${this.state.opacity}%)`,
							}}
						/>
						{imgUrl !== '' && (
							<div>
								<span>{filterName}: </span>
								<input
									type='range'
									min={0}
									max={200}
									onChange={this.changeValue}
									value={this.state[currentFilter]}
								/>
							</div>
						)}
					</div>
					<div className='container'>
						<button
							onClick={() =>
								this.setState({
									currentFilter: 'brightness',
									filterName: 'Brightness',
								})
							}>
							Brightness
						</button>
						<button
							onClick={() =>
								this.setState({
									currentFilter: 'contrast',
									filterName: 'Contrast',
								})
							}>
							Contrast
						</button>
						<button
							onClick={() =>
								this.setState({
									currentFilter: 'grayscale',
									filterName: 'Grayscale',
								})
							}>
							Gray Scale
						</button>
						<button
							onClick={() =>
								this.setState({
									currentFilter: 'hue-rotate',
									filterName: 'Hue',
								})
							}>
							Hue
						</button>
						<button
							onClick={() =>
								this.setState({
									currentFilter: 'saturate',
									filterName: 'Saturation',
								})
							}>
							Saturation
						</button>
						<button
							onClick={() =>
								this.setState({
									currentFilter: 'sepia',
									filterName: 'Sepia',
								})
							}>
							Sepia
						</button>
						<button
							onClick={() =>
								this.setState({
									currentFilter: 'blur',
									filterName: 'Blur',
								})
							}>
							Blur
						</button>
						<button
							onClick={() =>
								this.setState({
									currentFilter: 'invert',
									filterName: 'Invert',
								})
							}>
							Invert
						</button>
						<button
							onClick={() =>
								this.setState({
									currentFilter: 'opacity',
									filterName: 'Opacity',
								})
							}>
							Opacity
						</button>
					</div>
				</div>
			</div>
		)
	}
}

export default App
